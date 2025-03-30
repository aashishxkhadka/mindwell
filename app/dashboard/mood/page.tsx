"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar } from "@/components/ui/calendar"
import { useToast } from "@/hooks/use-toast"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

// Mock data - in a real app, this would come from a database
const mockMoodData = [
  { date: "2025-03-24", mood: 3, note: "Feeling okay today." },
  { date: "2025-03-25", mood: 4, note: "Had a good day at work." },
  { date: "2025-03-26", mood: 2, note: "Feeling a bit down." },
  { date: "2025-03-27", mood: 5, note: "Great day! Spent time with friends." },
  { date: "2025-03-28", mood: 3, note: "Average day." },
  { date: "2025-03-29", mood: 4, note: "Feeling positive." },
  { date: "2025-03-30", mood: 3, note: "Relaxing weekend." },
]

const moodLabels = ["Very Bad", "Bad", "Neutral", "Good", "Very Good"]

export default function MoodTrackerPage() {
  const [date, setDate] = useState<Date>(new Date())
  const [mood, setMood] = useState<number | null>(null)
  const [note, setNote] = useState("")
  const [moodEntries, setMoodEntries] = useState(mockMoodData)
  const { toast } = useToast()

  // Format data for chart
  const chartData = moodEntries.map((entry) => ({
    date: new Date(entry.date).toLocaleDateString("en-US", { month: "short", day: "numeric" }),
    mood: entry.mood,
  }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (mood === null) {
      toast({
        title: "Please select a mood",
        variant: "destructive",
      })
      return
    }

    const newEntry = {
      date: date.toISOString().split("T")[0],
      mood,
      note,
    }

    // Check if entry for this date already exists
    const existingEntryIndex = moodEntries.findIndex((entry) => entry.date === newEntry.date)

    if (existingEntryIndex >= 0) {
      // Update existing entry
      const updatedEntries = [...moodEntries]
      updatedEntries[existingEntryIndex] = newEntry
      setMoodEntries(updatedEntries)
    } else {
      // Add new entry
      setMoodEntries([...moodEntries, newEntry])
    }

    toast({
      title: "Mood logged successfully",
      description: `You logged your mood for ${date.toLocaleDateString()}`,
    })

    // Reset form
    setMood(null)
    setNote("")
  }

  // Find entry for selected date
  useEffect(() => {
    const selectedDateStr = date.toISOString().split("T")[0]
    const entry = moodEntries.find((entry) => entry.date === selectedDateStr)

    if (entry) {
      setMood(entry.mood)
      setNote(entry.note)
    } else {
      setMood(null)
      setNote("")
    }
  }, [date, moodEntries])

  return (
    <div className="container py-6 md:py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">Mood Tracker</h1>

        <Tabs defaultValue="log">
          <TabsList className="mb-4 w-full justify-center">
            <TabsTrigger value="log">Log Mood</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
            <TabsTrigger value="trends">Trends</TabsTrigger>
          </TabsList>

          <TabsContent value="log">
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="text-center">Select Date</CardTitle>
                  <CardDescription className="text-center">Choose the date for your mood entry</CardDescription>
                </CardHeader>
                <CardContent className="flex justify-center">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={(date) => date && setDate(date)}
                    className="rounded-md border"
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-center">How are you feeling today?</CardTitle>
                  <CardDescription className="text-center">Select your mood and add optional notes</CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between gap-2">
                        {moodLabels.map((label, index) => (
                          <Button
                            key={label}
                            type="button"
                            variant={mood === index + 1 ? "default" : "outline"}
                            className="flex-1"
                            onClick={() => setMood(index + 1)}
                          >
                            {label}
                          </Button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="note" className="text-sm font-medium">
                        Notes (optional)
                      </label>
                      <textarea
                        id="note"
                        className="w-full min-h-[150px] rounded-md border border-input bg-background px-3 py-2 text-sm"
                        placeholder="Add any notes about your day..."
                        value={note}
                        onChange={(e) => setNote(e.target.value)}
                      />
                    </div>

                    <Button type="submit" className="w-full">
                      Save Mood Entry
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Mood History</CardTitle>
                <CardDescription>View your past mood entries</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {moodEntries.length > 0 ? (
                    moodEntries
                      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
                      .map((entry) => (
                        <div key={entry.date} className="flex items-center justify-between border-b pb-4">
                          <div>
                            <p className="font-medium">
                              {new Date(entry.date).toLocaleDateString("en-US", {
                                weekday: "long",
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              })}
                            </p>
                            <p className="text-sm text-muted-foreground">{entry.note}</p>
                          </div>
                          <div className="text-right">
                            <span className="font-bold">{moodLabels[entry.mood - 1]}</span>
                          </div>
                        </div>
                      ))
                  ) : (
                    <p>No mood entries yet. Start tracking your mood!</p>
                  )}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="trends">
            <Card>
              <CardHeader>
                <CardTitle>Mood Trends</CardTitle>
                <CardDescription>Visualize your mood patterns over time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[300px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="date" />
                      <YAxis domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} />
                      <Tooltip formatter={(value) => [`${moodLabels[Number(value) - 1]}`, "Mood"]} />
                      <Line
                        type="monotone"
                        dataKey="mood"
                        stroke="#8884d8"
                        strokeWidth={2}
                        dot={{ r: 6 }}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-4">
                  <h3 className="font-medium">Insights</h3>
                  <p className="text-sm text-muted-foreground">
                    Your mood has been relatively stable over the past week with some fluctuations. Try to identify
                    patterns and triggers that affect your mood.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

