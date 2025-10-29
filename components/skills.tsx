"use client"

import { useEffect, useRef, useState } from "react"

const skillCategories = [
  {
    category: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Redux"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", ],
  },
  {
    category: "Tools & DevOps",
    skills: ["Git", "Docker", "AWS", "Vercel", "CI/CD"],
  },
  {
    category: "Design",
    skills: ["Figma", "UI/UX", "Responsive Design", "Accessibility", "Web Performance", "SEO"],
  },
]

export default function Skills() {
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
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="space-y-2">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Skills & Expertise</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Technologies I Work With</h2>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className={`p-8 rounded-xl bg-card border border-border hover:border-cyan-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10 transform hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                }}
              >
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-1 h-6 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full" />
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-4 py-2 rounded-lg bg-muted text-muted-foreground text-sm font-medium hover:bg-cyan-500/20 hover:text-cyan-400 transition-all duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
