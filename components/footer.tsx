"use client"

import { Github, Linkedin, Mail, Instagram } from "lucide-react"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Fahad VM
            </h3>
            <p className="text-sm text-muted-foreground">
              Full-stack developer crafting beautiful digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["About", "Skills", "Projects", "Contact"].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Follow Me</h4>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/fahadvm", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/fahad-vm-20844b2ab/", label: "LinkedIn" },
                { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
                { icon: Mail, href: "mailto:fahadfad444@gmail.com", label: "Email" },
              ].map((social, index) => {
                const Icon = social.icon
                return (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-cyan-500/20 text-muted-foreground hover:text-cyan-400 transition-all duration-300 hover:scale-110"
                    aria-label={social.label}
                  >
                    <Icon size={20} />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>© {currentYear} Fahad Fad. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-cyan-400 transition-colors duration-300">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
