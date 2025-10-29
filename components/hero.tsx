"use client"

import { useEffect, useState } from "react"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background via-background to-muted/20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Animated Badge */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          Full-Stack Developer & Creative Technologist
        </div>

        {/* Main Heading */}
        <div
          className={`space-y-4 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              Software Developer
            </span>
            <br />
            <span className="text-foreground">Experiences</span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I build beautiful, performant web applications that solve real problems. Specializing in React, Next.js, and
            modern web technologies.
          </p>
        </div>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
          >
            View My Work
            <ArrowRight size={20} />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg border border-border bg-muted/50 hover:bg-muted text-foreground font-semibold transition-all duration-300 hover:scale-105"
          >
            Get In Touch
          </a>
        </div>

        {/* Social Links */}
        <div
          className={`flex justify-center gap-6 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <a
            href="https://github.com/fahadvm"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/fahad-vm-20844b2ab/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="mailto:fahadfad444@gmail.com"
            className="p-3 rounded-lg bg-muted hover:bg-accent text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Email"
          >
            <Mail size={24} />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`flex justify-center pt-8 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="animate-bounce">
            <svg className="w-6 h-6 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
