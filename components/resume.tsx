"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react"

export function Resume() {
  return (
    <section id="resume" className="px-4 py-32 relative font-epilogue overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary/60 mb-2 font-bold">Credentials</h2>
          <p className="text-4xl md:text-6xl font-bold">Get My Full <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Resume</span></p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="glass overflow-hidden border-primary/20 rounded-[3rem] relative p-1">
            <CardContent className="py-16 relative flex flex-col items-center text-center">
              <div className="relative mb-12">
                <div className="absolute inset-0 bg-primary/30 blur-3xl rounded-full" />
                <div className="relative rounded-[2rem] bg-white/5 p-8 backdrop-blur-md border border-white/10 neon-glow">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </div>

              <div className="space-y-6 max-w-2xl mb-12">
                <h3 className="text-3xl font-black tracking-tight uppercase tracking-[0.1em]">Amit Kumar</h3>
                <p className="text-xl text-muted-foreground/60 font-medium leading-relaxed">
                  A comprehensive overview of my technical experience, leadership, and product strategy cases.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mb-16">
                {[
                  { icon: Briefcase, title: "5 Cases", desc: "Real PM Projects", color: "text-primary" },
                  { icon: Award, title: "Expert", desc: "Certified PM", color: "text-secondary" },
                  { icon: GraduationCap, title: "7.04 GPA", desc: "B.Tech CSE", color: "text-accent" },
                ].map((item, i) => (
                  <div key={i} className="flex flex-col items-center gap-3 p-8 rounded-[2rem] bg-white/5 border border-white/5 hover:border-white/10 transition-all group">
                    <item.icon className={`h-10 w-10 ${item.color} group-hover:scale-110 transition-transform`} />
                    <div>
                      <p className="text-lg font-bold tracking-tight">{item.title}</p>
                      <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              <Button
                asChild
                size="lg"
                className="h-16 px-12 rounded-full bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-xs hover:neon-glow-strong transition-all hover:scale-105 shadow-2xl"
              >
                <a href="/Amit_kumar_Product.pdf" download="Amit_Kumar_Product_Manager_Resume.pdf">
                  <Download className="h-5 w-5 mr-3" />
                  Download Resume
                </a>
              </Button>

              <p className="mt-8 text-[10px] uppercase tracking-[0.3em] font-bold text-muted-foreground/30">PDF format • Updated 2026</p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
