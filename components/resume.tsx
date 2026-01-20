"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Download, FileText, Award, Briefcase, GraduationCap } from "lucide-react"

export function Resume() {


  return (
    <section id="resume" className="px-4 py-24 border-t border-border/50">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">Resume</h2>
          <p className="text-4xl md:text-5xl font-bold text-balance mb-4">Get My Full Resume</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Download my complete resume with detailed work experience, skills, and achievements
          </p>
        </div>

        <Card className="overflow-hidden shadow-xl border-primary/20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
          <CardContent className="pt-12 pb-12 relative">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full" />
                <div className="relative rounded-2xl bg-primary/10 p-6 backdrop-blur-sm border border-primary/20">
                  <FileText className="h-16 w-16 text-primary" />
                </div>
              </div>

              <div className="space-y-4 max-w-2xl">
                <h3 className="text-2xl font-bold">Amit Kumar - Product Manager</h3>
                <p className="text-muted-foreground leading-relaxed text-pretty">
                  Comprehensive overview of my product management experience, technical skills, leadership roles, and
                  academic achievements. Includes detailed case studies of CAMPUZ, NoteGenius, FitHub, Commute Pass, and
                  Vinca Wealth projects.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl pt-4">
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                  <Briefcase className="h-8 w-8 text-primary" />
                  <p className="text-sm font-semibold">5 Product Cases</p>
                  <p className="text-xs text-muted-foreground">Real PM Experience</p>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                  <Award className="h-8 w-8 text-accent" />
                  <p className="text-sm font-semibold">Certifications</p>
                  <p className="text-xs text-muted-foreground">PM & Technical Skills</p>
                </div>
                <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-muted/50">
                  <GraduationCap className="h-8 w-8 text-chart-3" />
                  <p className="text-sm font-semibold">7.04 CGPA</p>
                  <p className="text-xs text-muted-foreground">B.Tech CSE</p>
                </div>
              </div>

              <Button
                asChild
                size="lg"
                className="gap-3 shadow-xl hover:shadow-2xl transition-all hover:scale-105 px-8 py-6 text-base"
              >
                <a href="/Amit_kumar_Product.pdf" download="Amit_Kumar_Product_Manager_Resume.pdf">
                  <Download className="h-5 w-5" />
                  Download Resume
                </a>
              </Button>

              <p className="text-xs text-muted-foreground">PDF format • Updated January 2025</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
