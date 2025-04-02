"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Phone, Twitter, Instagram } from "lucide-react"
import { FaReddit } from "react-icons/fa"
import { motion } from "framer-motion"

export default function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Rakesh31-syc", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/rs____jhon_31/", label: "Instagram" },
    {
      icon: FaReddit,
      href: "https://www.reddit.com/user/TotallyNotMe-__-/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button",
      label: "Reddit",
    },
    { icon: Mail, href: "mailto:rakesh310803@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:8248857718", label: "Phone" },
  ]

  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container px-4 md:px-6 py-8">
        <div className="flex flex-col items-center justify-center space-y-6">
          <div className="flex flex-col items-center space-y-2">
            <h3 className="text-xl font-medium">A. Rakesh</h3>
            <p className="text-sm text-muted-foreground text-center max-w-md">
              Computer Science Graduate passionate about building innovative digital solutions.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link, index) => {
              const Icon = link.icon

              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full bg-muted/50 hover:bg-primary/10 transition-colors duration-300 group"
                  whileHover={{ y: -5, transition: { duration: 0.3 } }}
                >
                  <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                  <span className="sr-only">{link.label}</span>
                </motion.a>
              )
            })}
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
            <Link href="#projects" className="text-muted-foreground hover:text-foreground transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-muted-foreground hover:text-foreground transition-colors">
              Skills
            </Link>
            <Link href="#contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t text-center">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} A. Rakesh. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

