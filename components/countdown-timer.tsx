"use client"

import { useState, useEffect, useRef } from "react"

interface CountdownTimerProps {
  initialTime: number // in seconds
  isActive: boolean
  onComplete: () => void
}

export function CountdownTimer({ initialTime, isActive, onComplete }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(initialTime)
  const [progress, setProgress] = useState(100)
  const audioRef = useRef<HTMLAudioElement | null>(null)

  useEffect(() => {
    // Reset timer when initialTime changes
    setTimeLeft(initialTime)
    setProgress(100)
  }, [initialTime])

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null

    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prevTime) => {
          const newTime = prevTime - 1
          setProgress((newTime / initialTime) * 100)

          // Play beep sound when 5 seconds or less remain
          if (newTime <= 5 && newTime > 0 && audioRef.current) {
            audioRef.current.play().catch((err) => console.error("Error playing beep:", err))
          }

          if (newTime <= 0) {
            if (interval) clearInterval(interval)
            onComplete()
          }

          return newTime
        })
      }, 1000)
    } else if (!isActive && interval) {
      clearInterval(interval)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isActive, timeLeft, initialTime, onComplete])

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="relative h-48 w-48 rounded-full bg-primary/10 flex items-center justify-center mb-4">
        <svg className="absolute top-0 left-0 h-full w-full" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-muted-foreground/20"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            className="text-primary"
            strokeDasharray="283"
            strokeDashoffset={283 - (283 * progress) / 100}
            transform="rotate(-90 50 50)"
          />
        </svg>
        <div className="text-center z-10">
          <p className="text-4xl font-bold tabular-nums">{formatTime(timeLeft)}</p>
          <p className="text-sm text-muted-foreground">remaining</p>
        </div>
      </div>

      {/* Hidden audio element for beep sound */}
      <audio ref={audioRef} className="hidden">
        <source src="/beep.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}

