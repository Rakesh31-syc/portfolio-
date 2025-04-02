"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"
import { motion } from "framer-motion"

export default function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))

    // Play success sound
    const audio = new Audio("/success.mp3")
    audio.volume = 0.2
    audio.play().catch(() => {
      // Handle browsers that block autoplay
      console.log("Audio playback was prevented")
    })

    toast({
      title: "Message sent!",
      description: "Thanks for reaching out. I'll get back to you soon.",
    })

    setFormData({ name: "", email: "", message: "" })
    setIsSubmitting(false)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <div className="relative">
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
            className="pr-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary"
          />
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: formData.name ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <div className="relative">
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
            className="pr-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary"
          />
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: formData.email ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <div className="relative">
          <Textarea
            id="message"
            name="message"
            placeholder="Your message"
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
            className="pr-10 transition-all duration-300 border-muted-foreground/20 focus:border-primary resize-none"
          />
          <motion.span
            className="absolute bottom-0 left-0 h-0.5 bg-primary"
            initial={{ width: 0 }}
            animate={{ width: formData.message ? "100%" : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </div>

      <Button type="submit" className="w-full relative overflow-hidden group" disabled={isSubmitting}>
        <span className="relative z-10">{isSubmitting ? "Sending..." : "Send Message"}</span>
        <span className="absolute inset-0 bg-primary/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
      </Button>
    </form>
  )
}

