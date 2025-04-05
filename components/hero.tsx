"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, ArrowDown } from "lucide-react"
import { motion } from "framer-motion"
import Typed from "typed.js"
import EnhancedParticleBackground from "@/components/enhanced-particle-background"

export default function Hero() {
  const typedRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!typedRef.current) return

    const typed = new Typed(typedRef.current, {
      strings: ["Computer Science Graduate", "Frontend Developer", "Problem Solver"],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
    })

    return () => {
      typed.destroy()
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <EnhancedParticleBackground />

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8 max-w-3xl mx-auto">
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tighter gradient-text font-heading">
              A. Rakesh
            </h1>
            <div className="h-8 md:h-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground">
                <span ref={typedRef}></span>
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <Button asChild size="lg" className="group relative overflow-hidden">
              <Link href="https://drive.google.com/file/d/1MYNMjdmAX4uYP28D6qKQRLxexO9QQPZf/view?usp=sharing" target="_blank">
                <span className="relative z-10 flex items-center">
                  My Resume
                  <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
                </span>
                <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => {
                const aboutSection = document.getElementById("about")
                if (aboutSection) {
                  aboutSection.scrollIntoView({ behavior: "smooth" })
                }
              }}
              className="group"
            >
              Explore My Work
              <ArrowDown className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-1" />
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="flex flex-col items-center">
              <span className="text-sm text-muted-foreground mb-2"></span>
              <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center p-1">
                <motion.div
                  className="w-1 h-1 bg-primary rounded-full"
                  animate={{
                    y: [0, 12, 0],
                  }}
                  transition={{
                    repeat: Number.POSITIVE_INFINITY,
                    duration: 1.5,
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

