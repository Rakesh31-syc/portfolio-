"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function EnhancedParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let particles: Particle[] = []

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initParticles()
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      shape: string

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 4 + 1
        this.speedX = (Math.random() - 0.5) * 0.4
        this.speedY = (Math.random() - 0.5) * 0.4

        // Higher opacity for light mode to make particles more visible
        const isDark = resolvedTheme === "dark"
        this.opacity = isDark ? Math.random() * 0.4 + 0.1 : Math.random() * 0.6 + 0.2

        // More vibrant colors for light mode to increase visibility
        if (isDark) {
          const colors = [
            "rgba(130, 180, 255, opacity)", // Bright blue
            "rgba(180, 130, 255, opacity)", // Purple
            "rgba(255, 130, 180, opacity)", // Pink
            "rgba(130, 255, 200, opacity)", // Teal
          ]
          this.color = colors[Math.floor(Math.random() * colors.length)].replace("opacity", this.opacity.toString())
        } else {
          const colors = [
            "rgba(70, 120, 255, opacity)", // More vibrant blue
            "rgba(130, 70, 255, opacity)", // More vibrant purple
            "rgba(255, 70, 130, opacity)", // More vibrant pink
            "rgba(70, 200, 150, opacity)", // More vibrant teal
          ]
          this.color = colors[Math.floor(Math.random() * colors.length)].replace("opacity", this.opacity.toString())
        }

        // Random shapes: circle or square
        this.shape = Math.random() > 0.7 ? "circle" : "square"
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width) this.x = 0
        else if (this.x < 0) this.x = canvas.width

        if (this.y > canvas.height) this.y = 0
        else if (this.y < 0) this.y = canvas.height
      }

      draw() {
        if (!ctx) return
        ctx.fillStyle = this.color

        if (this.shape === "circle") {
          ctx.beginPath()
          ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.fillRect(this.x, this.y, this.size * 1.5, this.size * 1.5)
        }
      }
    }

    function initParticles() {
      particles = []
      // Increase particle count for better visibility
      const particleCount = Math.min(Math.floor(window.innerWidth * 0.1), 120)

      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle())
      }
    }

    function connectParticles() {
      if (!ctx) return
      const maxDistance = 150

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x
          const dy = particles[a].y - particles[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < maxDistance) {
            const opacity = 1 - distance / maxDistance
            const isDark = resolvedTheme === "dark"

            // More visible connections in light mode
            ctx.strokeStyle = isDark
              ? `rgba(150, 180, 255, ${opacity * 0.3})`
              : `rgba(100, 150, 255, ${opacity * 0.25})`

            ctx.lineWidth = isDark ? 1 : 1.5
            ctx.beginPath()
            ctx.moveTo(particles[a].x, particles[a].y)
            ctx.lineTo(particles[b].x, particles[b].y)
            ctx.stroke()
          }
        }
      }
    }

    function animate() {
      if (!ctx) return
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle) => {
        particle.update()
        particle.draw()
      })

      connectParticles()
      animationFrameId = requestAnimationFrame(animate)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    animate()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" />
}

