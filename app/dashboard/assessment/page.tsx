"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { useToast } from "@/hooks/use-toast"

// PHQ-9 Depression Assessment Questions
const questions = [
  {
    id: 1,
    text: "Little interest or pleasure in doing things",
  },
  {
    id: 2,
    text: "Feeling down, depressed, or hopeless",
  },
  {
    id: 3,
    text: "Trouble falling or staying asleep, or sleeping too much",
  },
  {
    id: 4,
    text: "Feeling tired or having little energy",
  },
  {
    id: 5,
    text: "Poor appetite or overeating",
  },
  {
    id: 6,
    text: "Feeling bad about yourself - or that you are a failure or have let yourself or your family down",
  },
  {
    id: 7,
    text: "Trouble concentrating on things, such as reading the newspaper or watching television",
  },
  {
    id: 8,
    text: "Moving or speaking so slowly that other people could have noticed. Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual",
  },
  {
    id: 9,
    text: "Thoughts that you would be better off dead, or of hurting yourself in some way",
  },
]

const options = [
  { value: "0", label: "Not at all" },
  { value: "1", label: "Several days" },
  { value: "2", label: "More than half the days" },
  { value: "3", label: "Nearly every day" },
]

const getResultCategory = (score: number) => {
  if (score <= 4) return { category: "Minimal depression", color: "text-green-600" }
  if (score <= 9) return { category: "Mild depression", color: "text-yellow-600" }
  if (score <= 14) return { category: "Moderate depression", color: "text-orange-600" }
  if (score <= 19) return { category: "Moderately severe depression", color: "text-red-600" }
  return { category: "Severe depression", color: "text-red-700" }
}

const getRecommendations = (score: number) => {
  if (score <= 4) {
    return [
      "Continue with your regular self-care practices",
      "Maintain healthy sleep patterns and physical activity",
      "Practice mindfulness and relaxation techniques",
    ]
  }
  if (score <= 9) {
    return [
      "Consider using the meditation exercises in our app",
      "Maintain social connections and talk about your feelings",
      "Establish a regular sleep schedule and physical activity routine",
    ]
  }
  if (score <= 14) {
    return [
      "Consider scheduling a consultation with a mental health professional",
      "Use our guided meditation exercises regularly",
      "Maintain a journal to track your mood and identify triggers",
      "Reach out to supportive friends or family members",
    ]
  }
  return [
    "We strongly recommend scheduling a consultation with a mental health professional",
    "Consider reaching out to a crisis helpline if you're having severe symptoms",
    "Use our guided meditation exercises for temporary relief",
    "Maintain contact with supportive people in your life",
  ]
}

export default function AssessmentPage() {
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [answeredQuestions, setAnsweredQuestions] = useState(0)
  const { toast } = useToast()

  const handleAnswerChange = (questionId: number, value: number) => {
    setAnswers((prev) => {
      const newAnswers = { ...prev, [questionId]: value }
      const answeredCount = Object.keys(newAnswers).length
      setAnsweredQuestions(answeredCount)
      return newAnswers
    })
  }

  const handleSubmit = () => {
    if (answeredQuestions < questions.length) {
      toast({
        title: "Please answer all questions",
        description: "You need to answer all questions before submitting.",
        variant: "destructive",
      })
      return
    }

    // Calculate score
    const score = Object.values(answers).reduce((sum, value) => sum + value, 0)
    
    // Determine result
    let result = {
      category: "Minimal Depression",
      color: "text-green-600",
      recommendations: [
        "Continue monitoring your mood",
        "Practice self-care activities",
        "Maintain a healthy lifestyle",
      ],
    }

    if (score >= 5) {
      result = {
        category: "Mild Depression",
        color: "text-yellow-600",
        recommendations: [
          "Consider talking to a counselor",
          "Practice stress management techniques",
          "Maintain a regular sleep schedule",
        ],
      }
    }

    if (score >= 10) {
      result = {
        category: "Moderate Depression",
        color: "text-orange-600",
        recommendations: [
          "Schedule a consultation with a mental health professional",
          "Consider joining a support group",
          "Practice daily self-care and stress management",
        ],
      }
    }

    if (score >= 15) {
      result = {
        category: "Moderately Severe Depression",
        color: "text-red-600",
        recommendations: [
          "Seek immediate professional help",
          "Contact a crisis helpline if needed",
          "Inform trusted friends or family members",
        ],
      }
    }

    if (score >= 20) {
      result = {
        category: "Severe Depression",
        color: "text-red-700",
        recommendations: [
          "Seek immediate professional help",
          "Contact emergency services if having thoughts of self-harm",
          "Inform trusted friends or family members",
        ],
      }
    }

    toast({
      title: "Assessment Complete",
      description: `Your score: ${score}/27 - ${result.category}`,
    })
  }

  return (
    <div className="container py-6 md:py-10 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">Self-Assessment</h1>
        <p className="text-muted-foreground text-center mb-8">
          This assessment is based on the PHQ-9 (Patient Health Questionnaire-9) and helps evaluate symptoms of depression.
        </p>

        <Card>
          <CardHeader>
            <CardTitle>Depression Assessment</CardTitle>
            <CardDescription>Please answer each question honestly about how you've been feeling over the past two weeks.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-8">
              {questions.map((question) => (
                <div key={question.id} className="space-y-4">
                  <p className="font-medium">{question.text}</p>
                  <RadioGroup
                    value={answers[question.id]?.toString()}
                    onValueChange={(value) => handleAnswerChange(question.id, parseInt(value))}
                    className="grid grid-cols-4 gap-4"
                  >
                    {options.map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <RadioGroupItem value={option.value} id={`q${question.id}-${option.value}`} />
                        <Label htmlFor={`q${question.id}-${option.value}`} className="text-sm">
                          {option.label}
                        </Label>
                      </div>
                    ))}
                  </RadioGroup>
                </div>
              ))}
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4">
            <div className="w-full">
              <Progress value={(answeredQuestions / questions.length) * 100} className="h-2" />
              <p className="text-sm text-muted-foreground mt-2">
                {answeredQuestions} of {questions.length} questions answered
              </p>
            </div>
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={answeredQuestions < questions.length}
            >
              Submit Assessment
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}

