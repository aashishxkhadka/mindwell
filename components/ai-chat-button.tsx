"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send } from "lucide-react"
import Link from "next/link"
import { getGroqResponse } from "@/lib/groq"
import { ScrollArea } from "@/components/ui/scroll-area"
import ReactMarkdown from "react-markdown"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

export function AIChatButton() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm MindWell's AI assistant. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isTyping, setIsTyping] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when messages or typing state changes
  useEffect(() => {
    const scrollToBottom = () => {
      if (scrollAreaRef.current) {
        const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]')
        if (scrollContainer) {
          scrollContainer.scrollTop = scrollContainer.scrollHeight
        }
      }
    }
    
    // Immediate scroll
    scrollToBottom()
    
    // Add a small delay to ensure content is rendered
    const timeoutId = setTimeout(scrollToBottom, 100)
    
    return () => clearTimeout(timeoutId)
  }, [messages, isTyping])

  const handleSendMessage = async () => {
    if (!input.trim()) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsTyping(true)

    try {
      const response = await getGroqResponse(input)
      
      const botMessage: Message = {
        id: `bot-${Date.now()}`,
        content: response,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error getting AI response:", error)
      const errorMessage: Message = {
        id: `bot-${Date.now()}`,
        content: "I apologize, but I encountered an error. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsTyping(false)
    }
  }

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          size="icon"
          className="fixed bottom-6 right-6 h-12 w-12 rounded-full shadow-lg hover:shadow-xl transition-shadow"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open AI Chat</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle>Quick Chat with AI</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col h-[calc(100vh-8rem)]">
          <Card className="flex-1 flex flex-col">
            <CardHeader>
              <CardTitle className="text-center">MindWell Assistant</CardTitle>
            </CardHeader>
            <CardContent className="flex-1 p-0">
              <ScrollArea ref={scrollAreaRef} className="h-[calc(100vh-16rem)] p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                      <div className={`flex gap-3 max-w-[80%] ${message.sender === "user" ? "flex-row-reverse" : ""}`}>
                        <Avatar className="h-8 w-8">
                          {message.sender === "bot" ? (
                            <>
                              <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                              <AvatarFallback>AI</AvatarFallback>
                            </>
                          ) : (
                            <AvatarFallback>U</AvatarFallback>
                          )}
                        </Avatar>
                        <div
                          className={`rounded-lg px-4 py-2 ${
                            message.sender === "user" ? "bg-primary text-primary-foreground" : "bg-muted"
                          }`}
                        >
                          <div className="prose prose-sm dark:prose-invert max-w-none">
                            <ReactMarkdown>{message.content}</ReactMarkdown>
                          </div>
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
                        <Avatar className="h-8 w-8">
                          <AvatarImage src="/placeholder.svg?height=32&width=32" alt="AI" />
                          <AvatarFallback>AI</AvatarFallback>
                        </Avatar>
                        <div className="rounded-lg px-4 py-2 bg-muted">
                          <div className="flex space-x-1">
                            <div className="h-2 w-2 rounded-full bg-current animate-bounce" />
                            <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.2s]" />
                            <div className="h-2 w-2 rounded-full bg-current animate-bounce [animation-delay:0.4s]" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </ScrollArea>
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
          <div className="mt-4 text-center">
            <Link href="/dashboard/chat" className="text-sm text-muted-foreground hover:text-primary">
              Open full chat interface →
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
} 