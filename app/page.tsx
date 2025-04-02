import type { Metadata } from "next"
import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Contact from "@/components/contact"
import CursorFollower from "@/components/cursor-follower"
import BackToTop from "@/components/back-to-top"

export const metadata: Metadata = {
  title: "A. Rakesh | Computer Science Graduate",
  description: "Portfolio website of A. Rakesh, Computer Science Graduate",
}

export default function Home() {
  return (
    <main className="relative">
      <CursorFollower />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <BackToTop />
    </main>
  )
}

