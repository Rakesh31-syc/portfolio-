"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Quote } from "lucide-react"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  content: string
  avatar: string
}

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0)

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Alex Johnson",
      role: "Project Manager",
      company: "TechCorp",
      content:
        "Rakesh is an exceptional developer who consistently delivers high-quality work. His attention to detail and problem-solving skills are impressive.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      name: "Sarah Williams",
      role: "Lead Developer",
      company: "InnovateSoft",
      content:
        "Working with Rakesh was a great experience. He's proactive, communicates effectively, and has a strong grasp of modern web technologies.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 3,
      name: "Michael Chen",
      role: "CTO",
      company: "StartupHub",
      content:
        "Rakesh's technical skills and ability to learn quickly made him an invaluable asset to our team. I highly recommend him for any development role.",
      avatar: "/placeholder.svg?height=40&width=40",
    },
  ]

  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-muted/30 to-transparent z-10"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4 font-heading">What People Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Feedback from colleagues and clients I've worked with
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <Card className="testimonial-card h-full">
                <CardContent className="p-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-primary/30 mb-4" />

                  <p className="text-foreground/90 mb-6 flex-grow">"{testimonial.content}"</p>

                  <div className="flex items-center mt-auto">
                    <Avatar className="h-10 w-10 mr-4">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-medium text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

