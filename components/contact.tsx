"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Send } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          ref={ref}
          className={`space-y-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header */}
          <div className="text-center space-y-2">
            <p className="text-cyan-400 font-semibold text-sm uppercase tracking-wider">Get In Touch</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground">Let's Work Together</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Let's create something amazing together.
            </p>
          </div>

          {/* Contact Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div
              className={`space-y-8 transition-all duration-700 delay-100 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
              }`}
            >
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "fahadfad444@gmail.com",
                  href: "mailto:fahadfad444@gmail.com",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+91 974 587 5259",
                  href: "tel:+919745875259",
                },
                {
                  icon: MapPin,
                  label: "Location",
                  value: "Remote / Available Worldwide",
                  href: "#",
                },
              ].map((item, index) => {
                const Icon = item.icon
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="flex gap-4 p-4 rounded-lg hover:bg-muted transition-colors duration-300 group"
                  >
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors duration-300">
                      <Icon size={24} />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="text-lg font-semibold text-foreground group-hover:text-cyan-400 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                )
              })}
            </div>

            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className={`space-y-6 transition-all duration-700 delay-200 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
            >
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-cyan-500 focus:outline-none transition-colors duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-cyan-500 focus:outline-none transition-colors duration-300 text-foreground placeholder-muted-foreground"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg bg-muted border border-border focus:border-cyan-500 focus:outline-none transition-colors duration-300 text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Tell me ..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={submitted}
              >
                {submitted ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={20} />
                  </>
                )}
              </button>

              {submitted && (
                <div className="p-4 rounded-lg bg-green-500/10 border border-green-500/30 text-green-400 text-sm font-medium animate-in fade-in">
                  ✓ Message sent successfully! I'll get back to you soon.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
