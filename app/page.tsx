"use client"
import { motion, useScroll } from "framer-motion"
import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Portfolio from "@/components/portfolio"
import About from "@/components/about"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import ParticlesBackground from "@/components/particles-background"

export default function HomePage() {
  const { scrollYProgress } = useScroll()

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      <ParticlesBackground />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 z-50"
        style={{ scaleX: scrollYProgress, transformOrigin: "0%" }}
      />

      <Header />

      <main className="relative z-10">
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}
