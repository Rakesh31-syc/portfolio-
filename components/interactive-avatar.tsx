"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function InteractiveAvatar() {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Your profile photo should be placed at /public/profile-photo.jpg */}
      <Image
        src="/profile-photo.jpg" // This should be your actual photo file
        alt="A. Rakesh"
        width={600}
        height={600}
        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
      />

      {/* Greeting popup on hover */}
      <motion.div
        className="absolute top-5 right-5 bg-card/90 dark:bg-card/90 px-4 py-2 rounded-lg shadow-md border border-border/50"
        initial={{ opacity: 0, scale: 0.8, y: -10 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1 : 0.8,
          y: isHovered ? 0 : -10,
        }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-sm font-medium">Hi there! 👋</p>
        <div className="absolute -bottom-2 right-5 w-4 h-4 bg-card/90 dark:bg-card/90 transform rotate-45 border-b border-r border-border/50"></div>
      </motion.div>

      {/* Click indicator that appears on hover */}
      {isHovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 transition-opacity duration-300">
          <p className="text-white font-medium px-4 py-2 rounded-lg bg-black/50 backdrop-blur-sm">Click to view more</p>
        </div>
      )}
    </div>
  )
}

