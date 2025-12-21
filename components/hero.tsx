"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail, Sparkles } from "lucide-react"

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(66,133,244,0.15),rgba(255,255,255,0))]" />
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]" />
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-pulse animation-delay-700" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-gradient-to-r from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl w-full">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20 shadow-lg backdrop-blur-sm">
            <Sparkles className="h-4 w-4 animate-pulse" />
            <span>Available for Product Manager roles</span>
          </div>

          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance leading-[1.1] bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text text-transparent">
              Amit Kumar
            </h1>
            <p className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-light text-balance">
              Product Manager & Builder
            </p>
          </div>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl text-pretty">
            I build products that solve real problems. Skilled in user research, defining PRDs, and working with
            engineering teams to ship AI-powered features that users love.
          </p>

          <div className="flex flex-wrap gap-4 items-center">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105"
            >
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
            <div className="flex gap-3">
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent"
              >
                <a href="https://linkedin.com/in/amit-kumar-0a6617258" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent"
              >
                <a href="https://github.com/amitioholics" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button
                variant="outline"
                size="icon"
                asChild
                className="hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent"
              >
                <a href="mailto:amitsinghrajput263@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          <div className="pt-8 border-t border-border/50">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/70 bg-clip-text text-transparent">
                  5
                </div>
                <div className="text-sm text-muted-foreground mt-1">Product Cases</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-br from-accent to-accent/70 bg-clip-text text-transparent">
                  3
                </div>
                <div className="text-sm text-muted-foreground mt-1">Live Products</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-br from-chart-3 to-chart-3/70 bg-clip-text text-transparent">
                  150+
                </div>
                <div className="text-sm text-muted-foreground mt-1">Students Impacted</div>
              </div>
              <div className="group hover:scale-105 transition-transform">
                <div className="text-4xl font-bold bg-gradient-to-br from-chart-4 to-chart-4/70 bg-clip-text text-transparent">
                  7.04
                </div>
                <div className="text-sm text-muted-foreground mt-1">CGPA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
