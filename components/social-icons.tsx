"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Twitter, Instagram } from "lucide-react"
import { FaReddit } from "react-icons/fa"

export default function SocialIcons() {
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
  ]

  return (
    <div className="flex space-x-4">
      {socialLinks.map((social, index) => {
        const Icon = social.icon

        return (
          <motion.a
            key={social.label}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-card hover:bg-primary/10 p-3 rounded-full transition-colors duration-300 group"
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
            <span className="sr-only">{social.label}</span>
          </motion.a>
        )
      })}
    </div>
  )
}

