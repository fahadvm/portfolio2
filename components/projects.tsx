"use client"

import { useEffect, useRef, useState } from "react"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "E-Learning Platform - DevNext",
    description:
      "A full-stack e-learning platform enabling students, teachers, and companies to collaborate through courses, mentorship, and corporate learning.",
    image: "/e-learn.png",
    tags: ["Next.js", "Express", "TypeScript", "MongoDB", "Tailwind", "JWT"],
    github: "https://github.com/fahadvm/E-Learning",
    live: "https://example.com",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
    image: "/e-com.png",
    tags: ["EJS", "Express", "Razorpay", "MongoDB"],
    github: "https://github.com/fahadvm/ecommerce",
    live: "https://example.com",
  },
  {
    id: 3,
    title: "Video Call Room - LetsMeet",
    description:
      "A lightweight, responsive video conferencing app that supports up to 4 participants using WebRTC (mesh topology) and Socket.io for signaling.",
    image: "/videocall.webp",
    tags: ["React", "WebRTC", "Socket.io", "Node.js", "Tailwind", "STUN/TURN"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 4,
    title: "AI Chat Application",
    description: "Real-time chat application powered by AI with natural language processing and intelligent responses.",
    image: "/chat.jpg",
    tags: ["React", "Node.js", "WebSocket", "OpenAI"],
    github: "https://github.com",
    live: "https://example.com",
  },

  {
    id: 5,
    title: "React Weather App",
    description:
      "A responsive weather forecasting web app built with React that provides real-time temperature, humidity, and weather conditions using the OpenWeatherMap API. Features include city search, location-based detection, and dynamic weather icons.",
    image: "/weather.png",
    tags: ["React", "OpenWeatherMap API", "Tailwind", "Axios"],
    github: "https://github.com",
    live: "https://example.com",
  },
  {
    id: 6,
    title: "snacks soon - humblo",
    description: "Comprehensive design system and component library for consistent UI/UX across multiple products.",
    image: "/snacksoon.png",
    tags: ["React", "Storybook", "TypeScript", "Figma"],
    github: "https://github.com/fahadvm/humblo-snacks",
    live: "https://example.com",
  },
]

export default function Projects() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          {/* Header */}
          <div className="space-y-2">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Featured Work</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Projects & Creations</h2>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group rounded-xl overflow-hidden bg-card border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-105 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
                style={{
                  transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
                }}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden bg-muted">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-cyan-500/20 text-muted-foreground hover:text-cyan-400 transition-all duration-300 text-sm font-medium"
                      aria-label="GitHub"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/20 to-blue-500/20 hover:from-cyan-500/40 hover:to-blue-500/40 text-cyan-400 transition-all duration-300 text-sm font-medium"
                      aria-label="Live Demo"
                    >
                      <ExternalLink size={16} />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
