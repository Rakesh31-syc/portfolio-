"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { SiJavascript, SiPython, SiTypescript, SiReact, SiNodedotjs, SiMongodb } from "react-icons/si"
import InteractiveAvatar from "./interactive-avatar"

export default function About() {
  const [isFlipped, setIsFlipped] = useState(false)

  const techStack = [
    { icon: SiJavascript, name: "JavaScript", color: "text-yellow-500" },
    { icon: SiPython, name: "Python", color: "text-blue-500" },
    { icon: SiTypescript, name: "TypeScript", color: "text-blue-600" },
    { icon: SiReact, name: "React", color: "text-cyan-400" },
    { icon: SiNodedotjs, name: "Node.js", color: "text-green-500" },
    { icon: SiMongodb, name: "MongoDB", color: "text-green-600" },
  ]

  return (
    <section id="about" className="py-20 md:py-32 bg-background relative overflow-hidden bg-pattern">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative group perspective"
          >
            <div
              className={`relative preserve-3d duration-700 ${isFlipped ? "rotate-y-180" : ""}`}
              onClick={() => setIsFlipped(!isFlipped)}
            >
              {/* Front of card */}
              <div className="backface-hidden">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/50 rounded-lg blur opacity-15 group-hover:opacity-50 transition duration-500"></div>
                  <div className="relative overflow-hidden rounded-lg">
                    {/* Interactive Avatar */}
                    <InteractiveAvatar />
                  </div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-background/80 dark:bg-background/90 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-sm font-medium">Click to see more</p>
                  </div>
                </div>
              </div>

              {/* Back of card */}
              <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card rounded-lg shadow-lg p-6 flex flex-col justify-center">
                <h3 className="text-xl font-semibold mb-4">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">B.E in Computer Science</p>
                    <p className="text-sm text-muted-foreground">R.M.K Engineering College, 2021-2025</p>
                  </div>
                  <div>
                    <p className="font-medium">Certifications</p>
                    <p className="text-sm text-muted-foreground">Pyhton,Java,Testing,web Devlopment And Cyber Defence </p>
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="text-xl font-semibold mb-4">Interests</h3>
                  <div className="flex flex-wrap gap-2">
                    <Badge>FullStack</Badge>
                    <Badge>Machine Learning</Badge>
                    <Badge>Data Analysis</Badge>
                    <Badge>UI/UX Design</Badge>
                  </div>
                </div>
                <p className="text-sm text-center mt-6 text-muted-foreground">Click to flip back</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Hello, I'm Rakesh</h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a Computer Science Graduate passionate about building innovative digital solutions. With a strong
                foundation in both frontend and backend technologies, I enjoy creating seamless user experiences that
                solve real-world problems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My journey in computer science has equipped me with a diverse skill set, allowing me to approach
                challenges from multiple perspectives. I'm constantly learning and exploring new technologies to stay at
                the forefront of this ever-evolving field.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Tech Stack</h3>
              <div className="flex flex-wrap gap-4">
                {techStack.map((tech, index) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex flex-col items-center space-y-2 transition-transform duration-300 group-hover:-translate-y-2">
                      <tech.icon className={`text-4xl ${tech.color}`} />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              <Badge variant="secondary">Problem Solver</Badge>
              <Badge variant="secondary">Team Player</Badge>
              <Badge variant="secondary">Quick Learner</Badge>
              <Badge variant="secondary">Detail-Oriented</Badge>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

