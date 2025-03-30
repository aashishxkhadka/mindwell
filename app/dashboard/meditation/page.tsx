"use client"

import { useState, useRef } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Slider } from "@/components/ui/slider"
import { Play, Pause, SkipBack, Volume2 } from "lucide-react"
import { CountdownTimer } from "@/components/countdown-timer"

// Mock meditation data
const meditations = [
  {
    id: "breathing",
    title: "Deep Breathing",
    description: "A simple breathing exercise to help reduce stress and anxiety",
    duration: "5 minutes",
    category: "Stress Relief",
    audioSrc: "/meditation-audio.mp3", // This would be a real audio file in a production app
  },
  {
    id: "body-scan",
    title: "Body Scan",
    description: "A guided meditation to help you become aware of sensations throughout your body",
    duration: "10 minutes",
    category: "Relaxation",
    audioSrc: "/meditation-audio.mp3",
  },
  {
    id: "loving-kindness",
    title: "Loving Kindness",
    description: "Develop compassion for yourself and others",
    duration: "15 minutes",
    category: "Compassion",
    audioSrc: "/meditation-audio.mp3",
  },
  {
    id: "mindfulness",
    title: "Mindfulness Meditation",
    description: "Learn to be present and aware in the moment",
    duration: "8 minutes",
    category: "Mindfulness",
    audioSrc: "/meditation-audio.mp3",
  },
  {
    id: "sleep",
    title: "Sleep Meditation",
    description: "Calm your mind and prepare for restful sleep",
    duration: "20 minutes",
    category: "Sleep",
    audioSrc: "/meditation-audio.mp3",
  },
  {
    id: "anxiety",
    title: "Anxiety Relief",
    description: "Techniques to help manage anxiety symptoms",
    duration: "12 minutes",
    category: "Anxiety",
    audioSrc: "/meditation-audio.mp3",
  },
]

export default function MeditationPage() {
  const [selectedMeditation, setSelectedMeditation] = useState<(typeof meditations)[0] | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(80)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  const handlePlayPause = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
    } else {
      audioRef.current.play()
    }

    setIsPlaying(!isPlaying)
  }

  const handleRestart = () => {
    if (!audioRef.current) return

    audioRef.current.currentTime = 0
    setCurrentTime(0)

    if (!isPlaying) {
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)

    if (audioRef.current) {
      audioRef.current.volume = newVolume / 100
    }
  }

  const handleSelectMeditation = (meditation: (typeof meditations)[0]) => {
    setSelectedMeditation(meditation)
    setIsPlaying(false)
    setCurrentTime(0)

    // In a real app, we would load the actual audio file
    // For this demo, we'll just reset the audio element
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const getSecondsFromDuration = (duration: string): number => {
    const minutes = Number.parseInt(duration.split(" ")[0], 10)
    return minutes * 60
  }

  return (
    <div className="container py-6 md:py-10">
      <h1 className="mb-6 text-3xl font-bold">Guided Meditation</h1>

      <Tabs defaultValue="all">
        <TabsList className="mb-4">
          <TabsTrigger value="all">All</TabsTrigger>
          <TabsTrigger value="stress">Stress Relief</TabsTrigger>
          <TabsTrigger value="sleep">Sleep</TabsTrigger>
          <TabsTrigger value="anxiety">Anxiety</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meditations.map((meditation) => (
              <Card key={meditation.id} className="overflow-hidden">
                <CardHeader className="pb-2">
                  <CardTitle>{meditation.title}</CardTitle>
                  <CardDescription>
                    {meditation.category} • {meditation.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm">{meditation.description}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => handleSelectMeditation(meditation)} className="w-full">
                    Start Meditation
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="stress" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meditations
              .filter((m) => m.category === "Stress Relief")
              .map((meditation) => (
                <Card key={meditation.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle>{meditation.title}</CardTitle>
                    <CardDescription>
                      {meditation.category} • {meditation.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{meditation.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleSelectMeditation(meditation)} className="w-full">
                      Start Meditation
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="sleep" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meditations
              .filter((m) => m.category === "Sleep")
              .map((meditation) => (
                <Card key={meditation.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle>{meditation.title}</CardTitle>
                    <CardDescription>
                      {meditation.category} • {meditation.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{meditation.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleSelectMeditation(meditation)} className="w-full">
                      Start Meditation
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="anxiety" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {meditations
              .filter((m) => m.category === "Anxiety")
              .map((meditation) => (
                <Card key={meditation.id} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <CardTitle>{meditation.title}</CardTitle>
                    <CardDescription>
                      {meditation.category} • {meditation.duration}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm">{meditation.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button onClick={() => handleSelectMeditation(meditation)} className="w-full">
                      Start Meditation
                    </Button>
                  </CardFooter>
                </Card>
              ))}
          </div>
        </TabsContent>
      </Tabs>

      {selectedMeditation && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>{selectedMeditation.title}</CardTitle>
            <CardDescription>{selectedMeditation.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <CountdownTimer
                initialTime={getSecondsFromDuration(selectedMeditation.duration)}
                isActive={isPlaying}
                onComplete={() => {
                  setIsPlaying(false)
                  setCurrentTime(0)
                }}
              />

              <div className="flex items-center justify-center space-x-4">
                <Button variant="outline" size="icon" onClick={handleRestart}>
                  <SkipBack className="h-4 w-4" />
                  <span className="sr-only">Restart</span>
                </Button>
                <Button size="icon" className="h-12 w-12 rounded-full" onClick={handlePlayPause}>
                  {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6" />}
                  <span className="sr-only">{isPlaying ? "Pause" : "Play"}</span>
                </Button>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <Volume2 className="h-4 w-4" />
              <Slider
                value={[volume]}
                min={0}
                max={100}
                step={1}
                onValueChange={handleVolumeChange}
                className="w-full"
              />
            </div>

            <div className="bg-muted p-4 rounded-md">
              <p className="text-sm">
                <strong>Instructions:</strong> Find a comfortable position, either sitting or lying down. Close your
                eyes and follow the guided meditation. If your mind wanders, gently bring your attention back to the
                meditation.
              </p>
            </div>

            {/* This would be a real audio file in a production app */}
            <audio
              ref={audioRef}
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              onEnded={handleEnded}
              className="hidden"
            >
              <source src={selectedMeditation.audioSrc} type="audio/mpeg" />
              Your browser does not support the audio element.
            </audio>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

