"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"
import Magnetic from "@/components/ui/magnetic"

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
      {/* Astral Background Effects - Refined */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(105,218,255,0.08),transparent_70%)]" />
        <div className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-primary/5 rounded-full blur-[160px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[45rem] h-[45rem] bg-secondary/5 rounded-full blur-[180px] animate-pulse animation-delay-700" />
      </div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 animate-fade-in order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-black border border-primary/20 neon-glow backdrop-blur-md"
            >
              <Sparkles className="h-3 w-3 animate-pulse" />
              <span className="tracking-[0.2em] uppercase">Product Management Intern @ PaisaWapas</span>
            </motion.div>

            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-6xl md:text-7xl lg:text-9xl font-black tracking-tighter leading-[0.85] text-foreground">
                  Product <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Visionary</span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground/80 font-bold tracking-tight max-w-lg">
                  Bridging the gap between ambitious ideas and technical execution.
                </p>
              </div>
            </div>

            <p className="text-base md:text-lg text-muted-foreground/50 leading-relaxed max-w-xl font-medium">
              Data-driven Product Manager focusing on AI and Fintech. I build products that are not just functional, but essential.
            </p>

            <div className="flex flex-wrap gap-6 items-center pt-4">
              <Magnetic>
                <Button
                  onClick={scrollToProjects}
                  size="lg"
                  className="gap-2 px-10 h-16 rounded-full bg-primary text-primary-foreground font-black hover:neon-glow-strong transition-all tracking-widest uppercase text-[10px]"
                >
                  Explore Work <ArrowRight className="h-4 w-4" />
                </Button>
              </Magnetic>

              <Magnetic>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-16 px-10 rounded-full border-primary/20 hover:bg-primary/5 transition-all bg-transparent font-black tracking-widest uppercase text-[10px] text-primary/80"
                >
                  <a href="/Amit_kumar_Product.pdf" download>
                    Get Resume
                  </a>
                </Button>
              </Magnetic>
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
