"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import type { Project } from "@/components/projects"

interface ProjectCardProps {
  project: Project
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const getLanguageColor = (lang: string) => {
    if (lang.includes("JavaScript")) return "bg-yellow-500/20 text-yellow-700 dark:text-yellow-300"
    if (lang.includes("TypeScript")) return "bg-blue-500/20 text-blue-700 dark:text-blue-300"
    if (lang.includes("Python")) return "bg-blue-600/20 text-blue-800 dark:text-blue-200"
    return "bg-gray-500/20 text-gray-700 dark:text-gray-300"
  }

  return (
    <motion.div layout>
      <Card
        className={cn(
          "overflow-hidden transition-all duration-500 h-full cursor-pointer",
          isHovered && "shadow-lg transform -translate-y-2 dark:shadow-primary/20",
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={onClick}
        style={{
          transformStyle: "preserve-3d",
          transform: isHovered ? "rotateY(5deg)" : "rotateY(0deg)",
        }}
      >
        <CardContent className="p-0">
          <div className="p-6 space-y-4">
            <div className="flex justify-between items-start">
              <h3 className="font-semibold text-lg">{project.title}</h3>
              <Badge variant="outline" className={cn("text-xs", getLanguageColor(project.language))}>
                {project.language}
              </Badge>
            </div>

            <p className="text-muted-foreground text-sm line-clamp-3">{project.description}</p>

            <div className="pt-2 flex flex-wrap gap-1">
              {project.techStack.slice(0, 3).map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech}
                </Badge>
              ))}
              {project.techStack.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{project.techStack.length - 3}
                </Badge>
              )}
            </div>
          </div>

          <div
            className={cn(
              "h-1 bg-gradient-to-r from-primary to-primary/50 transition-all duration-300",
              isHovered ? "w-full" : "w-0",
            )}
          />
        </CardContent>
      </Card>
    </motion.div>
  )
}

