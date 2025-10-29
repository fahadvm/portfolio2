"use client"

import { useEffect, useRef, useState } from "react"

export default function About() {
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div
            ref={ref}
            className={`space-y-6 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div className="space-y-2">
              <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">About Me</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Passionate about building the web</h2>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a full-stack developer with 1+ years of experience crafting digital solutions. My journey started with
              a curiosity about how things work, which evolved into a passion for creating elegant, user-centric
              applications.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              I specialize in modern web technologies and love the intersection of design and development. When I'm not
              coding, you'll find me exploring new technologies, contributing to open source, or sharing knowledge with
              the community.
            </p>

            <div className="pt-4 space-y-3">
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Currently:</span> MERN Full Stack Developer
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Location:</span> Brototype Calicut, kerala
              </p>
              <p className="text-sm text-muted-foreground">
                <span className="font-semibold text-foreground">Interests:</span> Web Dev, DSA, Open Source
              </p>
            </div>
          </div>

          {/* Right - Stats */}
          <div
            className={`grid grid-cols-2 gap-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            {[
              { number: "10+", label: "Projects Completed" },
              { number: "2+", label: "Students" },
              { number: "1", label: "Year Experience" },
              { number: "100%", label: "Satisfaction Rate" },
            ].map((stat, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10"
              >
                <p className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {stat.number}
                </p>
                <p className="text-sm text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
