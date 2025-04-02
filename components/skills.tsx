"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import SkillCard from "@/components/skill-card"

export default function Skills() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  const skills = [
    {
      name: "JavaScript",
      level: 90,
      description: "Modern ES6+, async/await, DOM manipulation, and event handling.",
    },
    {
      name: "React",
      level: 85,
      description: "Component architecture, hooks, context API, and state management.",
    },
    {
      name: "Node.js",
      level: 80,
      description: "RESTful APIs, Express.js, middleware, and authentication.",
    },
    {
      name: "HTML/CSS",
      level: 95,
      description: "Semantic HTML5, CSS3, Flexbox, Grid, and responsive design.",
    },
    {
      name: "TypeScript",
      level: 75,
      description: "Type definitions, interfaces, generics, and type guards.",
    },
    {
      name: "Python",
      level: 70,
      description: "Data analysis, automation, and backend development.",
    },
    {
      name: "C",
      level: 65,
      description: "Memory management, pointers, and system programming.",
    },
    {
      name: "Java",
      level: 75,
      description: "Object-oriented programming, multithreading, and enterprise applications.",
    },
    {
      name: "Machine Learning",
      level: 60,
      description: "Neural networks, supervised learning, and model deployment.",
    },
    {
      name: "Google Cloud",
      level: 55,
      description: "Cloud functions, app engine, and cloud storage solutions.",
    },
    {
      name: "MongoDB",
      level: 75,
      description: "Schema design, CRUD operations, and aggregation framework.",
    },
    {
      name: "SQL",
      level: 80,
      description: "Query optimization, database design, and normalization.",
    },
    {
      name: "Git",
      level: 85,
      description: "Version control, branching strategies, and collaborative workflows.",
    },
    {
      name: "Docker",
      level: 65,
      description: "Containerization, Docker Compose, and deployment strategies.",
    },
    {
      name: "UI/UX Design",
      level: 70,
      description: "User-centered design, wireframing, and prototyping.",
    },
  ]

  return (
    <section id="skills" className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-muted/30 to-transparent z-10"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">My Skills</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">Technologies and tools I work with</p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, margin: "-100px" }}
              onMouseEnter={() => setHoveredSkill(skill.name)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <SkillCard
                name={skill.name}
                level={skill.level}
                description={skill.description}
                isActive={hoveredSkill === skill.name}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

