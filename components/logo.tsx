import Link from "next/link"
import { Brain } from "lucide-react"

interface LogoProps {
  className?: string
}

export function Logo({ className }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-2 ${className}`}>
      <Brain className="h-6 w-6 text-primary" />
      <span className="text-xl font-bold">MindWell</span>
    </Link>
  )
}

