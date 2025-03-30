"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useAuth } from "@/components/auth-provider"
import { Button } from "@/components/ui/button"
import {
  BarChart3,
  Brain,
  Calendar,
  FileQuestion,
  Home,
  LogOut,
  Menu,
  MessageCircle,
  Moon,
  Settings,
  Sun,
  Users,
  X,
} from "lucide-react"
import { useTheme } from "next-themes"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Logo } from "@/components/logo"
import { AIChatButton } from "@/components/ai-chat-button"

interface DashboardLayoutProps {
  children: React.ReactNode
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const { user, logout } = useAuth()
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: Home },
    { name: "Mood Tracker", href: "/dashboard/mood", icon: BarChart3 },
    { name: "Self-Assessment", href: "/dashboard/assessment", icon: FileQuestion },
    { name: "AI Chat", href: "/dashboard/chat", icon: MessageCircle },
    { name: "Meditation", href: "/dashboard/meditation", icon: Brain },
    { name: "Book Consultation", href: "/dashboard/book", icon: Calendar },
    { name: "Community", href: "/dashboard/community", icon: Users },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
  ]

  const initials = user?.name
    ? user.name
        .split(" ")
        .map((n) => n[0])
        .join("")
    : "U"

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center px-6">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-64 sm:max-w-xs">
                <div className="flex h-full flex-col">
                  <div className="flex items-center justify-between border-b px-4 py-2">
                    <Logo className="h-8 w-8" />
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <X className="h-5 w-5" />
                        <span className="sr-only">Close menu</span>
                      </Button>
                    </SheetTrigger>
                  </div>
                  <nav className="flex-1 overflow-auto py-2">
                    <div className="grid gap-1 px-2">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                            pathname === item.href
                              ? "bg-accent text-accent-foreground"
                              : "hover:bg-accent hover:text-accent-foreground"
                          }`}
                        >
                          <item.icon className="h-4 w-4" />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
            <Logo className="h-8 w-8" />
          </div>
          <div className="ml-auto flex items-center gap-6">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
              {isMounted && theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
            <Avatar className="h-8 w-8">
              <AvatarFallback>{initials}</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>
      <div className="flex flex-1">
        <aside className="hidden w-64 border-r bg-background md:block">
          <div className="flex h-full flex-col">
            <nav className="flex-1 overflow-auto py-4">
              <div className="grid gap-1 px-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`flex items-center gap-3 rounded-md px-3 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? "bg-accent text-accent-foreground"
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Link>
                ))}
              </div>
            </nav>
            <div className="border-t p-4">
              <Button variant="outline" className="w-full justify-start gap-2" onClick={() => logout()}>
                <LogOut className="h-4 w-4" />
                Logout
              </Button>
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-auto">
          <div className="container py-6 md:py-10 px-6">
            {children}
          </div>
        </main>
      </div>
      <AIChatButton />
    </div>
  )
}

