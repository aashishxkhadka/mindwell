"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
}

type AuthContextType = {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  register: (name: string, email: string, password: string) => Promise<void>
  logout: () => void
  isLoading: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
    setIsLoading(false)
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating authentication for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const userData = {
        id: "user-1",
        name: "Demo User",
        email,
      }

      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))

      // Show success message
      const successMessage = document.createElement("div")
      successMessage.className =
        "fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg z-50 animate-fade-in-right"
      successMessage.innerHTML = `
      <div class="flex items-center">
        <div class="py-1">
          <svg class="h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p class="font-bold">Login Successful!</p>
          <p class="text-sm">Redirecting to dashboard...</p>
        </div>
      </div>
    `
      document.body.appendChild(successMessage)

      // Add animation styles
      const style = document.createElement("style")
      style.innerHTML = `
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes glow {
        0% {
          box-shadow: 0 0 5px rgba(34, 197, 94, 0.2);
        }
        50% {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
        }
        100% {
          box-shadow: 0 0 5px rgba(34, 197, 94, 0.2);
        }
      }
      .animate-fade-in-right {
        animation: fadeInRight 0.5s ease-out forwards, glow 2s infinite;
      }
    `
      document.head.appendChild(style)

      // Remove after 3 seconds
      setTimeout(() => {
        document.body.removeChild(successMessage)
        router.push("/dashboard")
      }, 3000)
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const register = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, this would be an API call
      // Simulating registration for demo purposes
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock user data
      const userData = {
        id: "user-" + Math.random().toString(36).substr(2, 9),
        name,
        email,
      }

      setUser(userData)
      localStorage.setItem("user", JSON.stringify(userData))

      // Show success message
      const successMessage = document.createElement("div")
      successMessage.className =
        "fixed top-4 right-4 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg z-50 animate-fade-in-right"
      successMessage.innerHTML = `
      <div class="flex items-center">
        <div class="py-1">
          <svg class="h-6 w-6 text-green-500 mr-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <div>
          <p class="font-bold">Registration Successful!</p>
          <p class="text-sm">Welcome to MindWell, ${name}!</p>
        </div>
      </div>
    `
      document.body.appendChild(successMessage)

      // Add animation styles
      const style = document.createElement("style")
      style.innerHTML = `
      @keyframes fadeInRight {
        from {
          opacity: 0;
          transform: translateX(100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }
      @keyframes glow {
        0% {
          box-shadow: 0 0 5px rgba(34, 197, 94, 0.2);
        }
        50% {
          box-shadow: 0 0 20px rgba(34, 197, 94, 0.6);
        }
        100% {
          box-shadow: 0 0 5px rgba(34, 197, 94, 0.2);
        }
      }
      .animate-fade-in-right {
        animation: fadeInRight 0.5s ease-out forwards, glow 2s infinite;
      }
    `
      document.head.appendChild(style)

      // Remove after 3 seconds
      setTimeout(() => {
        document.body.removeChild(successMessage)
        router.push("/dashboard")
      }, 3000)
    } catch (error) {
      console.error("Registration failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
    router.push("/")
  }

  return <AuthContext.Provider value={{ user, login, register, logout, isLoading }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

