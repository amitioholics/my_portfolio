"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Link from "next/link"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  // 3D Tilt for Profile Image
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const xPct = (e.clientX - rect.left) / rect.width - 0.5
    const yPct = (e.clientY - rect.top) / rect.height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden font-epilogue">
      {/* Astral Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(105,218,255,0.15),transparent_50%)]" />
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[30rem] h-[30rem] bg-secondary/10 rounded-full blur-[150px] animate-pulse animation-delay-700" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20 neon-glow backdrop-blur-md"
            >
              <Sparkles className="h-4 w-4 animate-pulse" />
              <span className="tracking-wider uppercase text-[10px]">Available for Product Manager roles</span>
            </motion.div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] text-foreground">
                  Product-focused <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">builder</span>
                </h1>
                <p className="text-2xl md:text-3xl text-muted-foreground/80 font-bold tracking-tight">
                  Turning complex ideas into <br />scalable digital products.
                </p>
              </div>
            </div>

            <p className="text-lg md:text-xl text-muted-foreground/60 leading-relaxed max-w-2xl font-medium">
              I approach product with a data-driven mindset, combining user-centric design thinking with execution rigor. From AI tools to fintech solutions, I ship products that matter.
            </p>

            <div className="flex flex-wrap gap-4 items-center pt-4">
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="gap-2 px-8 h-14 rounded-full bg-primary text-primary-foreground font-bold hover:neon-glow-strong transition-all hover:scale-105 tracking-wide uppercase text-xs"
              >
                View Projects <ArrowRight className="h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="h-14 px-8 rounded-full border-primary/30 hover:bg-primary/5 transition-all bg-transparent font-bold tracking-wide uppercase text-xs"
              >
                <a href="/resume.pdf" download>
                  Download Resume
                </a>
              </Button>
              <div className="flex gap-4 ml-2">
                {[
                  { icon: Linkedin, href: "https://linkedin.com/in/amit-kumar-0a6617258" },
                  { icon: Github, href: "https://github.com/amitioholics" },
                  { icon: Mail, href: "mailto:amitsinghrajput263@gmail.com" },
                ].map((item, i) => (
                  <Button
                    key={i}
                    variant="outline"
                    size="icon"
                    asChild
                    className="w-12 h-12 rounded-full border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent text-primary/60 hover:text-primary"
                  >
                    <a href={item.href} target="_blank" rel="noopener noreferrer">
                      <item.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Product Cases", value: "5+", color: "text-primary" },
                { label: "Live Products", value: "3", color: "text-secondary" },
                { label: "Impacted", value: "150+", color: "text-accent" },
                { label: "GPA", value: "7.04", color: "text-primary" },
              ].map((stat, i) => (
                <div key={i} className="space-y-1">
                  <div className={`text-4xl font-black ${stat.color} tracking-tighter`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center order-1 lg:order-2 px-4">
            <motion.div
              style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => { x.set(0); y.set(0); }}
              className="relative w-full max-w-sm lg:max-w-md aspect-square"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-[3rem] blur-[100px] opacity-30 -z-10" />

              <div
                className="relative h-full rounded-[3rem] overflow-hidden border border-primary/30 glass p-4 shadow-2xl transition-all duration-500"
                style={{ transform: "translateZ(50px)" }}
              >
                <div className="h-full rounded-[2rem] overflow-hidden relative">
                  <img
                    src="/profile.jpg"
                    alt="Amit Kumar - Product Manager"
                    className="w-full h-full object-cover grayscale-[20%] contrast-[110%] group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#150629]/80 via-transparent to-transparent" />
                </div>
              </div>

              {/* Floating Element 1 */}
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-10 -right-10 glass p-4 rounded-2xl border-primary/40 neon-glow hidden md:block"
                style={{ transform: "translateZ(80px)" }}
              >
                <div className="text-primary font-bold text-xl uppercase tracking-wider">PM</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
