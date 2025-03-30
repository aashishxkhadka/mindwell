"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useToast } from "@/hooks/use-toast"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

// Mock therapist data
const therapists = [
  {
    id: "t1",
    name: "Dr. Aashish Khadka",
    specialty: "Depression & Anxiety",
    experience: "10 years",
    bio: "Dr. Aashish Khadka specializes in treating depression, anxiety, and mood disorders. With a compassionate approach, he creates personalized treatment plans that combine medication management with therapeutic techniques to help patients achieve optimal mental health.",
    image: "/placeholder.svg?height=100&width=100",
    availability: ["Monday", "Wednesday", "Friday"],
  },
  {
    id: "t2",
    name: "Dr. Sumana Shrestha",
    specialty: "Trauma & PTSD",
    experience: "8 years",
    bio: "Dr. Sumana Shrestha is an expert in trauma-focused therapy and PTSD treatment. She employs evidence-based approaches including EMDR and cognitive processing therapy to help patients process traumatic experiences and develop resilience.",
    image: "/placeholder.svg?height=100&width=100",
    availability: ["Tuesday", "Thursday", "Saturday"],
  },
  {
    id: "t3",
    name: "Dr. Saran Shrestha",
    specialty: "Mood Disorders",
    experience: "9 years",
    bio: "Dr. Saran Shrestha specializes in treating mood disorders including depression and bipolar disorder. He takes a holistic approach to mental health, combining medication management with lifestyle interventions and psychotherapy to help patients achieve emotional balance.",
    image: "/placeholder.svg?height=100&width=100",
    availability: ["Monday", "Tuesday", "Thursday"],
  },
  {
    id: "t4",
    name: "Dr. Sabita Upadhya",
    specialty: "Anxiety & Stress Management",
    experience: "7 years",
    bio: "Dr. Sabita Upadhya focuses on anxiety disorders and stress management. She helps patients develop effective coping strategies through a combination of cognitive-behavioral therapy, mindfulness practices, and when appropriate, medication management.",
    image: "/placeholder.svg?height=100&width=100",
    availability: ["Wednesday", "Friday", "Saturday"],
  },
]

// Mock time slots
const timeSlots = ["9:00 AM", "10:00 AM", "11:00 AM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM"]

export default function BookingPage() {
  const [selectedTherapist, setSelectedTherapist] = useState<string | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [consultationType, setConsultationType] = useState<string>("video")
  const [bookingConfirmed, setBookingConfirmed] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleBookAppointment = () => {
    if (!selectedTherapist || !selectedDate || !selectedTime) {
      toast({
        title: "Missing information",
        description: "Please select a therapist, date, and time.",
        variant: "destructive",
      })
      return
    }

    // In a real app, this would make an API call to book the appointment
    setBookingConfirmed(true)

    const therapist = therapists.find((t) => t.id === selectedTherapist)

    if (therapist) {
      // Save the appointment details to localStorage
      const appointmentDetails = {
        doctor: therapist.name,
        date: selectedDate.toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
        }),
        time: selectedTime,
        type: `${consultationType} Call`,
      }

      localStorage.setItem("bookedAppointment", JSON.stringify(appointmentDetails))
    }

    toast({
      title: "Appointment booked",
      description: "Your appointment has been scheduled successfully.",
    })
  }

  const therapist = therapists.find((t) => t.id === selectedTherapist)

  return (
    <div className="container py-6 md:py-10">
      <h1 className="mb-6 text-3xl font-bold">Book a Consultation</h1>

      {!bookingConfirmed ? (
        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Select a Therapist</CardTitle>
              <CardDescription>Choose a mental health professional for your consultation</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {therapists.map((therapist) => (
                <div
                  key={therapist.id}
                  className={`flex gap-4 p-4 rounded-lg cursor-pointer transition-colors ${
                    selectedTherapist === therapist.id
                      ? "bg-primary/10 border border-primary"
                      : "border hover:bg-accent"
                  }`}
                  onClick={() => setSelectedTherapist(therapist.id)}
                >
                  <Avatar className="h-16 w-16">
                    <AvatarImage src={therapist.image} alt={therapist.name} />
                    <AvatarFallback>
                      {therapist.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h3 className="font-medium">{therapist.name}</h3>
                      <Badge variant="outline">{therapist.experience}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{therapist.specialty}</p>
                    <p className="text-sm mt-2">{therapist.bio}</p>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Select Date & Time</CardTitle>
                <CardDescription>Choose your preferred consultation date and time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate}
                    className="rounded-md border w-fit"
                    disabled={(date) => {
                      // Disable past dates
                      const today = new Date()
                      today.setHours(0, 0, 0, 0)

                      // Disable weekends
                      const day = date.getDay()

                      return date < today || day === 0 || day === 6
                    }}
                  />
                </div>

                {selectedDate && (
                  <div className="mt-6">
                    <h3 className="text-sm font-medium mb-2">Available Time Slots</h3>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <Button
                          key={time}
                          variant={selectedTime === time ? "default" : "outline"}
                          className="text-sm"
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Consultation Type</CardTitle>
                <CardDescription>Choose how you'd like to connect with your therapist</CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="video" onValueChange={setConsultationType}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="video">Video Call</TabsTrigger>
                    <TabsTrigger value="phone">Phone Call</TabsTrigger>
                  </TabsList>
                  <TabsContent value="video" className="mt-4">
                    <p className="text-sm">
                      Connect face-to-face with your therapist through a secure video platform. You'll receive a link to
                      join the call before your appointment.
                    </p>
                  </TabsContent>
                  <TabsContent value="phone" className="mt-4">
                    <p className="text-sm">
                      Speak with your therapist over the phone. They will call you at the number provided in your
                      profile at the scheduled time.
                    </p>
                  </TabsContent>
                </Tabs>
              </CardContent>
              <CardFooter>
                <Button
                  onClick={handleBookAppointment}
                  className="w-full"
                  disabled={!selectedTherapist || !selectedDate || !selectedTime}
                >
                  Book Appointment
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      ) : (
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-green-100 p-3 dark:bg-green-900">
              <svg
                className="h-10 w-10 text-green-600 dark:text-green-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <CardTitle className="text-2xl">Appointment Confirmed</CardTitle>
            <CardDescription>Your consultation has been scheduled successfully</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="rounded-lg border p-4">
              <div className="grid gap-1">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Therapist</p>
                  <p className="text-sm">{therapist?.name}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Date</p>
                  <p className="text-sm">
                    {selectedDate?.toLocaleDateString("en-US", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Time</p>
                  <p className="text-sm">{selectedTime}</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium">Type</p>
                  <p className="text-sm capitalize">{consultationType} Call</p>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-blue-50 p-4 dark:bg-blue-900">
              <p className="text-sm">
                <strong>What's next?</strong> You'll receive a confirmation email with details about your appointment.
                {consultationType === "video" ? (
                  <>
                    {" "}Join your video call using this link:{" "}
                    <a
                      href="https://meet.google.com/wcx-tejq-jhb"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline dark:text-blue-400"
                    >
                      Join Google Meet
                    </a>
                  </>
                ) : (
                  " Your therapist will call you at the scheduled time."
                )}
              </p>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col space-y-2">
            <Button onClick={() => setBookingConfirmed(false)} variant="outline" className="w-full">
              Book Another Appointment
            </Button>
            <Button onClick={() => router.push("/dashboard")} className="w-full">
              Return to Dashboard
            </Button>
          </CardFooter>
        </Card>
      )}
    </div>
  )
}

