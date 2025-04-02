"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProjectCard from "@/components/project-card"
import ProjectModal from "@/components/project-modal"

export interface Project {
  id: number
  title: string
  language: string
  description: string
  longDescription: string
  githubUrl: string
  category: string
  techStack: string[]
  image?: string
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  const projects: Project[] = [
    {
      id: 1,
      title: "Portfolio",
      language: "JavaScript",
      description: "A responsive portfolio website built with modern web technologies.",
      longDescription:
        "A personal portfolio website built with Next.js and Tailwind CSS. Features responsive design, dark mode, and smooth animations.",
      githubUrl: "https://github.com/Rakesh31-syc/portfolio",
      category: "frontend",
      techStack: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    },
    {
      id: 2,
      title: "Sales Data Analysis",
      language: "Python, Jupyter Notebook",
      description: "Analysis of sales data to identify trends and patterns.",
      longDescription:
        "Comprehensive analysis of sales data using pandas, numpy, and matplotlib. Includes data cleaning, visualization, and predictive modeling.",
      githubUrl: "https://github.com/Rakesh31-syc/sales-data-analysis",
      category: "data",
      techStack: ["Python", "Pandas", "NumPy", "Matplotlib", "Jupyter"],
    },
    {
      id: 3,
      title: "ToDo-App",
      language: "TypeScript",
      description: "A task management application with CRUD operations.",
      longDescription:
        "A full-featured task management application built with React and TypeScript. Includes user authentication, task categorization, and local storage.",
      githubUrl: "https://github.com/Rakesh31-syc/todo-app",
      category: "fullstack",
      techStack: ["React", "TypeScript", "Firebase", "CSS"],
    },
    {
      id: 4,
      title: "Agri-Chatbot",
      language: "JavaScript",
      description: "A chatbot for agricultural queries and assistance.",
      longDescription:
        "An AI-powered chatbot designed to assist farmers with agricultural queries. Built with Node.js and integrated with natural language processing APIs.",
      githubUrl: "https://github.com/Rakesh31-syc/agri-chatbot",
      category: "ai",
      techStack: ["Node.js", "Express", "NLP", "MongoDB"],
    },
    {
      id: 5,
      title: "GreenLeaf-Diagnoser",
      language: "Python",
      description: "Plant disease detection using image processing.",
      longDescription:
        "A machine learning model that identifies plant diseases from leaf images. Built with Python, TensorFlow, and OpenCV for image processing.",
      githubUrl: "https://github.com/Rakesh31-syc/greenleaf-diagnoser",
      category: "ai",
      techStack: ["Python", "TensorFlow", "OpenCV", "Scikit-learn"],
    },
    {
      id: 6,
      title: "OTP-Verification",
      language: "JavaScript",
      description: "A secure OTP verification system for web applications.",
      longDescription:
        "A secure one-time password (OTP) verification system for web applications. Includes email/SMS delivery and time-based expiration.",
      githubUrl: "https://github.com/Rakesh31-syc/otp-verification",
      category: "fullstack",
      techStack: ["Node.js", "Express", "Twilio API", "Nodemailer"],
    },
    {
      id: 7,
      title: "Time Capsule",
      language: "JavaScript",
      description: "A digital time capsule for storing memories.",
      longDescription:
        "A digital time capsule application that allows users to store text, images, and videos to be opened at a future date. Built with React and Firebase.",
      githubUrl: "https://github.com/Rakesh31-syc/time-capsule",
      category: "frontend",
      techStack: ["React", "Firebase", "Cloud Storage", "JavaScript"],
    },
    {
      id: 8,
      title: "E-Commerce Website",
      language: "JavaScript",
      description: "A full-stack online store with product management and checkout.",
      longDescription:
        "A comprehensive e-commerce platform with product listings, shopping cart, user authentication, and payment processing. Built with the MERN stack. Features include product search, filtering, user reviews, admin dashboard, and secure checkout with Stripe integration.",
      githubUrl: "https://github.com/Rakesh31-syc/ecommerce",
      category: "fullstack",
      techStack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    },
    {
      id: 9,
      title: "Weather App",
      language: "JavaScript",
      description: "Real-time weather updates based on location.",
      longDescription:
        "A weather application that provides current conditions and forecasts based on user location or search. Integrates with weather APIs for real-time data. Features include 5-day forecast, hourly predictions, weather maps, and location-based alerts for severe weather conditions.",
      githubUrl: "https://github.com/Rakesh31-syc/weather-app",
      category: "frontend",
      techStack: ["JavaScript", "HTML", "CSS", "Weather API"],
    },
    {
      id: 10,
      title: "Hospital Management System",
      language: "JavaScript",
      description: "A system for managing hospital records efficiently.",
      longDescription:
        "A comprehensive hospital management system that handles patient records, appointments, billing, and staff management. Built with React and Node.js. Key features include patient registration, appointment scheduling, electronic medical records, inventory management, and billing integration with insurance providers.",
      githubUrl: "https://github.com/Rakesh31-syc/hospital-management",
      category: "fullstack",
      techStack: ["React", "Node.js", "MongoDB", "Express", "JWT"],
    },
    {
      id: 11,
      title: "Chat App",
      language: "JavaScript",
      description: "A real-time messaging platform with private and group chats.",
      longDescription:
        "A real-time chat application with features like private messaging, group chats, read receipts, and file sharing. Built with React, Node.js, and Socket.io. Includes user authentication, message encryption, typing indicators, emoji support, and message search functionality.",
      githubUrl: "https://github.com/Rakesh31-syc/chat-app",
      category: "fullstack",
      techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Express"],
    },
    {
      id: 12,
      title: "Movie Ticket Booking",
      language: "JavaScript",
      description: "Online ticket booking system for movies.",
      longDescription:
        "A movie ticket booking platform that allows users to browse movies, select seats, and complete bookings. Includes admin panel for theater management. Features include movie listings, seat selection visualization, payment processing, e-ticket generation, and user reviews for movies and theaters.",
      githubUrl: "https://github.com/Rakesh31-syc/movie-booking",
      category: "fullstack",
      techStack: ["React", "Node.js", "PostgreSQL", "Express", "Redux"],
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">My Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Explore my recent work across various domains and technologies
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true, margin: "-100px" }}
          className="w-full max-w-3xl mx-auto mb-12"
        >
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid grid-cols-5 w-full">
              <TabsTrigger
                value="all"
                onClick={() => setActiveFilter("all")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                All
              </TabsTrigger>
              <TabsTrigger
                value="frontend"
                onClick={() => setActiveFilter("frontend")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Frontend
              </TabsTrigger>
              <TabsTrigger
                value="fullstack"
                onClick={() => setActiveFilter("fullstack")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Fullstack
              </TabsTrigger>
              <TabsTrigger
                value="data"
                onClick={() => setActiveFilter("data")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                Data
              </TabsTrigger>
              <TabsTrigger
                value="ai"
                onClick={() => setActiveFilter("ai")}
                className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                AI
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal project={selectedProject} isOpen={!!selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  )
}

