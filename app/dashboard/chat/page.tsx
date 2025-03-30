"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"

// Mock AI responses for demo purposes
const mockResponses = [
  "I understand that you're feeling this way. It's important to acknowledge these emotions and know that they're valid.",
  "Have you tried any relaxation techniques when you feel anxious? Deep breathing or mindfulness can sometimes help in the moment.",
  "It sounds like you're going through a challenging time. Remember that it's okay to reach out for support when you need it.",
  "Many people experience similar feelings. You're not alone in this journey.",
  "Consider setting small, achievable goals for yourself. Celebrating small victories can help build confidence.",
  "Have you spoken with a mental health professional about these feelings? They can provide personalized guidance.",
  "Self-care is important. Make sure you're taking time for activities that bring you joy and relaxation.",
  "Remember that healing isn't linear. There will be good days and difficult days, and that's a normal part of the process.",
  "I'm here to listen whenever you need to talk. Sometimes just expressing your thoughts can provide some relief.",
]

// In a production environment, this would use a real AI API like:
// - OpenAI API with the AI SDK (@ai-sdk/openai)
// - Google's Gemini AI
// - Anthropic's Claude
// - Cohere's Generate API
// The following is a simplified example of how the AI integration might work

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm MindWell's AI assistant. How are you feeling today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    // In a real implementation, this would be replaced with an actual AI API call
    // Example with AI SDK:
    /*
  async function getAIResponse() {
    try {
      const { text } = await generateText({
        model: openai("gpt-4o"),
        prompt: `You are a supportive mental health assistant. The user says: ${input}. 
                Provide a helpful, empathetic response focused on their well-being.`,
        maxTokens: 300
      });
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: text,
        sender: "bot",
        timestamp: new Date(),
      };
  
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    } catch (error) {
      console.error("Error getting AI response:", error);
      // Handle error
    }
  }
  
  getAIResponse();
  */

    // Simulate AI response after a delay with mock data
    setTimeout(() => {
      const randomResponse = mockResponses[Math.floor(Math.random() * mockResponses.length)]

      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  return (
    <div className="container py-6 md:py-10 px-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="mb-6 text-3xl font-bold text-center">AI Support Chat</h1>
        <p className="text-muted-foreground text-center mb-8">
          Chat with our AI assistant for support and coping strategies
        </p>

        <Card className="min-h-[600px] flex flex-col">
          <CardHeader>
            <CardTitle className="text-center">MindWell Assistant</CardTitle>
            <CardDescription className="text-center">Get immediate support and guidance</CardDescription>
          </CardHeader>
          <CardContent className="flex-1">
            <div className="h-[500px] overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`flex gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                    <Avatar className="h-10 w-10">
                      {message.sender === "bot" ? (
                        <>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI" />
                          <AvatarFallback>AI</AvatarFallback>
                        </>
                      ) : (
                        <AvatarFallback>U</AvatarFallback>
                      )}
                    </Avatar>
                    <div
                      className={`rounded-lg px-4 py-3 ${
                        message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                      }`}
                    >
                      <p className="text-base">{message.content}</p>
                      <p className="text-xs opacity-50 mt-1">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="flex gap-3 max-w-[80%]">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src="/placeholder.svg?height=40&width=40" alt="AI" />
                      <AvatarFallback>AI</AvatarFallback>
                    </Avatar>
                    <div className="rounded-lg px-4 py-3 bg-muted">
                      <div className="flex space-x-1">
                        <div className="h-2 w-2 rounded-full bg-current animate-bounce" />
                        <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                        <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>
          </CardContent>
          <CardFooter>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSendMessage()
              }}
              className="flex w-full items-center space-x-2"
            >
              <Input
                placeholder="Type your message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1"
              />
              <Button type="submit" size="icon" disabled={!input.trim() || isTyping}>
                <Send className="h-4 w-4" />
                <span className="sr-only">Send</span>
              </Button>
            </form>
          </CardFooter>
        </Card>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-4 text-center">Helpful Resources</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-center">Crisis Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-center">
                  If you're in crisis or having thoughts of self-harm, please contact a crisis helpline immediately:
                </p>
                <p className="font-bold mt-2 text-center">988 Suicide & Crisis Lifeline</p>
                <p className="text-sm text-center">Call or text 988</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-center">Coping Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-sm list-disc pl-4 space-y-1">
                  <li>Practice deep breathing exercises</li>
                  <li>Try progressive muscle relaxation</li>
                  <li>Engage in physical activity</li>
                  <li>Connect with supportive people</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}

