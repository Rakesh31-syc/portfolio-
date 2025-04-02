"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { motion, useAnimation } from "framer-motion"

interface SkillCardProps {
  name: string
  level: number
  description: string
  isActive: boolean
}

export default function SkillCard({ name, level, description, isActive }: SkillCardProps) {
  const [progress, setProgress] = useState(0)
  const [isFlipped, setIsFlipped] = useState(false)
  const controls = useAnimation()
  const circleRef = useRef<SVGCircleElement>(null)

  useEffect(() => {
    if (isActive) {
      setProgress(level)
      controls.start({
        scale: 1.05,
        transition: { duration: 0.3 },
      })
    } else {
      controls.start({
        scale: 1,
        transition: { duration: 0.3 },
      })
    }
  }, [isActive, level, controls])

  useEffect(() => {
    if (circleRef.current) {
      const radius = circleRef.current.r.baseVal.value
      const circumference = radius * 2 * Math.PI

      circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`
      circleRef.current.style.strokeDashoffset = `${circumference}`

      const offset = circumference - (progress / 100) * circumference
      circleRef.current.style.strokeDashoffset = offset.toString()
    }
  }, [progress])

  const handleClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <motion.div animate={controls} className="perspective cursor-pointer" onClick={handleClick}>
      <div className={`relative preserve-3d duration-700 ${isFlipped ? "rotate-y-180" : ""}`}>
        {/* Front of card */}
        <Card
          className={cn(
            "overflow-hidden transition-all duration-300 h-full backface-hidden skill-card",
            isActive && "shadow-md dark:shadow-primary/20",
            isFlipped && "invisible",
          )}
        >
          <CardContent className="p-5 flex flex-col items-center">
            <h3 className="font-medium text-center mb-4">{name}</h3>

            <div className="w-full">
              <div className="relative w-24 h-24 mx-auto mb-2">
                <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-muted stroke-current"
                    strokeWidth="8"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                  />
                  <circle
                    className="text-primary stroke-current transition-all duration-1000 ease-out"
                    strokeWidth="8"
                    strokeLinecap="round"
                    cx="50"
                    cy="50"
                    r="40"
                    fill="transparent"
                    ref={circleRef}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold">{progress}%</span>
                </div>
              </div>
            </div>

            <motion.div
              className="mt-2 text-xs text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Click for details
            </motion.div>
          </CardContent>
        </Card>

        {/* Back of card */}
        <Card
          className={cn(
            "absolute inset-0 overflow-hidden transition-all duration-300 h-full backface-hidden rotate-y-180 skill-card",
            isActive && "shadow-md dark:shadow-primary/20",
          )}
        >
          <CardContent className="p-5 flex flex-col items-center justify-center h-full">
            <h3 className="font-medium text-center mb-4">{name}</h3>
            <p className="text-sm text-center text-muted-foreground mb-4">{description}</p>

            <div className="w-full bg-muted rounded-full h-2.5 mb-2">
              <motion.div
                className="bg-primary h-2.5 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            </div>

            <div className="flex justify-between w-full text-xs text-muted-foreground">
              <span>Beginner</span>
              <span>Expert</span>
            </div>

            <motion.div
              className="mt-4 text-xs text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              Click to flip back
            </motion.div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}

