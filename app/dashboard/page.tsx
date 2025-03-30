"use client"

import { useAuth } from "@/components/auth-provider"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { BarChart3, Brain, Calendar, FileQuestion, MessageCircle, Users, ArrowRight, TrendingUp } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"

export default function DashboardPage() {
  const { user } = useAuth()
  const [upcomingAppointment, setUpcomingAppointment] = useState({
    doctor: "Dr. Aashish Khadka",
    date: "May 15, 2025",
    time: "10:00 AM",
    type: "Video Call",
  })
  const [streak, setStreak] = useState(7)

  // In a real app, this would fetch from an API
  useEffect(() => {
    // Check if there's a booked appointment in localStorage
    const bookedAppointment = localStorage.getItem("bookedAppointment")
    if (bookedAppointment) {
      setUpcomingAppointment(JSON.parse(bookedAppointment))
    }

    // In a real app, this would check the user's mood tracking history
    // For demo, we'll keep it at 7 days
    setStreak(7)
  }, [])

  const features = [
    {
      title: "Mood Tracker",
      description: "Log and track your daily mood patterns",
      icon: <BarChart3 className="h-6 w-6" />,
      href: "/dashboard/mood",
      color: "bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300",
      gradient: "from-blue-500 to-indigo-600",
    },
    {
      title: "Self-Assessment",
      description: "Evaluate your mental health state",
      icon: <FileQuestion className="h-6 w-6" />,
      href: "/dashboard/assessment",
      color: "bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300",
      gradient: "from-green-500 to-emerald-600",
    },
    {
      title: "AI Chat",
      description: "Get guidance and coping strategies",
      icon: <MessageCircle className="h-6 w-6" />,
      href: "/dashboard/chat",
      color: "bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300",
      gradient: "from-purple-500 to-violet-600",
    },
    {
      title: "Meditation",
      description: "Access guided meditation exercises",
      icon: <Brain className="h-6 w-6" />,
      href: "/dashboard/meditation",
      color: "bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300",
      gradient: "from-orange-500 to-amber-600",
    },
    {
      title: "Book Consultation",
      description: "Schedule a session with a professional",
      icon: <Calendar className="h-6 w-6" />,
      href: "/dashboard/book",
      color: "bg-pink-100 dark:bg-pink-900 text-pink-700 dark:text-pink-300",
      gradient: "from-pink-500 to-rose-600",
    },
    {
      title: "Community",
      description: "Connect with a supportive community",
      icon: <Users className="h-6 w-6" />,
      href: "/dashboard/community",
      color: "bg-yellow-100 dark:bg-yellow-900 text-yellow-700 dark:text-yellow-300",
      gradient: "from-yellow-500 to-amber-600",
    },
  ]

  // Mock data for the dashboard
  const moodData = [
    { day: "Mon", mood: 3 },
    { day: "Tue", mood: 4 },
    { day: "Wed", mood: 2 },
    { day: "Thu", mood: 5 },
    { day: "Fri", mood: 3 },
    { day: "Sat", mood: 4 },
    { day: "Sun", mood: 3 },
  ]

  return (
    <div className="container py-6 md:py-10 px-6">
      <div className="mb-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold">Welcome back, {user?.name}</h1>
            <p className="text-muted-foreground">Track your progress and access mental health resources</p>
          </div>
          <div className="flex items-center gap-2 p-4 bg-primary/10 rounded-lg">
            <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center">
              <TrendingUp className="h-6 w-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-medium">Wellness Streak</p>
              <p className="text-2xl font-bold">{streak} Days</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card className="col-span-full lg:col-span-2 overflow-hidden">
          <CardHeader className="bg-gradient-to-r from-primary to-purple-600 text-white">
            <CardTitle>Your Wellness Journey</CardTitle>
            <CardDescription className="text-white/80">
              Track your progress and continue your mental health journey
            </CardDescription>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-lg font-medium mb-2">Weekly Mood Overview</h3>
                <div className="h-[150px] flex items-end justify-between gap-2">
                  {moodData.map((day, i) => (
                    <div key={i} className="flex flex-col items-center gap-1">
                      <div
                        className={`w-8 bg-gradient-to-t from-primary/50 to-primary rounded-t-md transition-all duration-300 hover:from-primary/70 hover:to-primary/90`}
                        style={{ height: `${day.mood * 20}px` }}
                      ></div>
                      <span className="text-xs font-medium">{day.day}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex justify-center">
                  <Link href="/dashboard/mood">
                    <Button variant="outline" size="sm" className="flex items-center gap-1">
                      View Full Mood History
                      <ArrowRight className="h-3 w-3 ml-1" />
                    </Button>
                  </Link>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Upcoming Appointment</h3>
                {upcomingAppointment ? (
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center">
                        <Calendar className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">{upcomingAppointment.doctor}</p>
                        <p className="text-sm text-muted-foreground">{upcomingAppointment.type}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-sm text-muted-foreground">Date & Time</p>
                        <p>
                          {upcomingAppointment.date}, {upcomingAppointment.time}
                        </p>
                      </div>
                      <Button 
                        size="sm" 
                        onClick={() => window.open("https://meet.google.com/wcx-tejq-jhb", "_blank")}
                      >
                        Join Call
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="border rounded-lg p-4 flex flex-col items-center justify-center h-[150px]">
                    <p className="text-muted-foreground mb-2">No upcoming appointments</p>
                    <Link href="/dashboard/book">
                      <Button size="sm">Schedule Consultation</Button>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Daily Tip</CardTitle>
            <CardDescription>Improve your mental well-being</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="bg-primary/10 p-4 rounded-lg mb-4">
              <p className="italic">
                "Small steps every day lead to big changes over time. Be patient with yourself and celebrate your
                progress."
              </p>
            </div>
            <p className="text-sm text-muted-foreground">
              Try practicing mindfulness for just 5 minutes today. Focus on your breath and observe your thoughts
              without judgment.
            </p>
            <div className="mt-4">
              <Link href="/dashboard/meditation">
                <Button variant="outline" className="w-full">
                  Try a Meditation
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>

      <h2 className="text-2xl font-bold mt-10 mb-6">Explore Features</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <Card key={feature.title} className="overflow-hidden group hover:shadow-md transition-all duration-300">
            <CardHeader className={`flex flex-row items-center gap-4 ${feature.color}`}>
              <div className="rounded-md bg-white p-2 dark:bg-gray-800">{feature.icon}</div>
              <div>
                <CardTitle>{feature.title}</CardTitle>
                <CardDescription className="text-gray-700 dark:text-gray-300">{feature.description}</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <Link href={feature.href}>
                <Button className={`w-full bg-gradient-to-r ${feature.gradient} hover:opacity-90 transition-opacity`}>
                  Access {feature.title}
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

