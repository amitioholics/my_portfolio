"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Download, Menu, X } from "lucide-react"
import { useState } from "react"
import { cn } from "@/lib/utils"
import Magnetic from "@/components/ui/magnetic"

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all font-epilogue">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="glass rounded-full px-6 py-2 flex justify-between items-center h-14 neon-glow">
          <a href="#" className="text-xl font-black tracking-tighter hover:text-primary transition-all text-glow">
            AMIT<span className="text-primary">.</span>K
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/70 hover:text-primary transition-colors cursor-pointer"
              >
                {item.name}
              </button>
            ))}
            <Magnetic>
              <Button
                asChild
                size="sm"
                className="rounded-full bg-primary text-primary-foreground font-bold text-[10px] uppercase tracking-widest px-6 hover:neon-glow-strong transition-all"
              >
                <a href="/Amit_kumar_Product.pdf" download="Amit_Kumar_Product_Manager_Resume.pdf">
                  Resume
                </a>
              </Button>
            </Magnetic>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-primary hover:text-primary/80 transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={isOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
          className="md:hidden glass rounded-3xl mt-2 overflow-hidden px-6"
        >
          <div className="flex flex-col gap-4 py-6">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavClick(item.href)}
                className="text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground hover:text-primary transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
            <Button asChild size="sm" className="rounded-full w-full mt-2 font-bold uppercase text-[10px] tracking-widest">
              <a href="/resume.pdf" download="Amit_Kumar_Product_Manager_Resume.pdf">
                Download Resume
              </a>
            </Button>
          </div>
        </motion.div>
      </nav>
    </header>
  )
}
