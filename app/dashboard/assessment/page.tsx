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
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<Record<number, string>>({})
  const [showResults, setShowResults] = useState(false)
  const { toast } = useToast()

  const handleAnswer = (value: string) => {
    setAnswers({ ...answers, [questions[currentQuestion].id]: value })

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    } else {
      setShowResults(true)
    }
  }

  const calculateScore = () => {
    return Object.values(answers).reduce((sum, value) => sum + Number.parseInt(value), 0)
  }

  const handleRestart = () => {
    setAnswers({})
    setCurrentQuestion(0)
    setShowResults(false)
  }

  const handleSaveResults = () => {
    // In a real app, this would save to a database
    toast({
      title: "Assessment results saved",
      description: "Your results have been saved to your profile.",
    })
  }

  const score = calculateScore()
  const result = getResultCategory(score)
  const recommendations = getRecommendations(score)
  const progress = ((currentQuestion + 1) / questions.length) * 100

  return (
    <div className="container py-6 md:py-10">
      <h1 className="mb-6 text-3xl font-bold">Self-Assessment</h1>

      <Card className="max-w-3xl mx-auto">
        {!showResults ? (
          <>
            <CardHeader>
              <CardTitle>Depression Screening (PHQ-9)</CardTitle>
              <CardDescription>
                Over the last 2 weeks, how often have you been bothered by the following problems?
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <div className="flex justify-between text-sm mb-1">
                  <span>
                    Question {currentQuestion + 1} of {questions.length}
                  </span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <Progress value={progress} className="h-2" />
              </div>

              <div className="space-y-4">
                <h3 className="text-lg font-medium">{questions[currentQuestion].text}</h3>
                <RadioGroup onValueChange={handleAnswer} className="space-y-3">
                  {options.map((option) => (
                    <div key={option.value} className="flex items-center space-x-2">
                      <RadioGroupItem value={option.value} id={`option-${option.value}`} />
                      <Label htmlFor={`option-${option.value}`}>{option.label}</Label>
                    </div>
                  ))}
                </RadioGroup>
              </div>
            </CardContent>
            <CardFooter>
              <Button
                variant="outline"
                onClick={() => currentQuestion > 0 && setCurrentQuestion(currentQuestion - 1)}
                disabled={currentQuestion === 0}
                className="mr-2"
              >
                Previous
              </Button>
              <Button
                onClick={() => currentQuestion < questions.length - 1 && setCurrentQuestion(currentQuestion + 1)}
                disabled={!answers[questions[currentQuestion].id] || currentQuestion === questions.length - 1}
              >
                Next
              </Button>
            </CardFooter>
          </>
        ) : (
          <>
            <CardHeader>
              <CardTitle>Assessment Results</CardTitle>
              <CardDescription>Based on your responses to the PHQ-9 questionnaire</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="text-center">
                <p className="text-lg mb-2">Your score:</p>
                <p className="text-4xl font-bold mb-2">{score} / 27</p>
                <p className={`text-xl font-medium ${result.color}`}>{result.category}</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-2">Recommendations:</h3>
                <ul className="list-disc pl-5 space-y-2">
                  {recommendations.map((rec, index) => (
                    <li key={index}>{rec}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 dark:bg-blue-900 p-4 rounded-md">
                <p className="text-sm">
                  <strong>Note:</strong> This assessment is not a substitute for professional medical advice, diagnosis,
                  or treatment. Always seek the advice of your physician or other qualified health provider with any
                  questions you may have regarding a medical condition.
                </p>
              </div>
            </CardContent>
            <CardFooter className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
              <Button onClick={handleRestart} variant="outline" className="w-full sm:w-auto">
                Take Assessment Again
              </Button>
              <Button onClick={handleSaveResults} className="w-full sm:w-auto">
                Save Results
              </Button>
            </CardFooter>
          </>
        )}
      </Card>
    </div>
  )
}

