"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Mail, Phone } from "lucide-react"
import ContactForm from "@/components/contact-form"
import SocialIcons from "@/components/social-icons"

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-background to-transparent z-10"></div>

      <div className="container px-4 md:px-6 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Get In Touch</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            Have a project in mind or want to discuss opportunities? Reach out to me!
          </p>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Card className="overflow-hidden border-0 shadow-lg bg-card/50 backdrop-blur-sm">
              <CardContent className="p-6">
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="mailto:rakesh310803@gmail.com"
                    className="hover:text-primary transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center"
                  >
                    rakesh310803@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="tel:8248857718"
                    className="hover:text-primary transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center"
                  >
                    8248857718
                  </a>
                </div>
                <div className="flex items-center gap-4 group">
                  <div className="bg-primary/10 p-3 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <Github className="h-5 w-5 text-primary" />
                  </div>
                  <a
                    href="https://github.com/Rakesh31-syc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors group-hover:translate-x-1 duration-300 inline-flex items-center"
                  >
                    github.com/Rakesh31-syc
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Let's Connect</h3>
              <p className="text-muted-foreground mb-4">
                I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
              </p>
              <SocialIcons />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

