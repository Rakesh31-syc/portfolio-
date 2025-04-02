"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { motion } from "framer-motion"

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const toggleTheme = () => {
    // Play switch sound
    const audio = new Audio("/switch.mp3")
    audio.volume = 0.2
    audio.play().catch(() => {
      // Handle browsers that block autoplay
      console.log("Audio playback was prevented")
    })

    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="rounded-full w-10 h-10 bg-background/50 backdrop-blur-sm border border-border/50 hover:bg-background/80 transition-all duration-300 relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative z-10">
        {resolvedTheme === "dark" ? (
          <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-300" />
        ) : (
          <Moon className="h-[1.2rem] w-[1.2rem] text-slate-700" />
        )}
      </div>

      {/* Animated background */}
      <motion.div
        className="absolute inset-0 z-0"
        initial={false}
        animate={{
          backgroundColor: resolvedTheme === "dark" ? "rgba(78, 158, 255, 0.2)" : "rgba(255, 255, 255, 0.2)",
        }}
        transition={{ duration: 0.5 }}
      />

      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

