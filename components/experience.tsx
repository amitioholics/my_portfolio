"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Briefcase, GraduationCap, Users } from "lucide-react"
import Image from "next/image"

const workExperiences = [
  {
    title: "Product Management Intern",
    organization: "PaisaWapas (Nxtify Technologies)",
    location: "Bangalore",
    date: "Feb 2026 – Present",
    logoUrl: "/images/paisawapas.png",
    description: "Driving product initiatives and feature development for a leading cashback and affiliate platform.",
    achievements: [
      "Assisted in defining product roadmaps and feature prioritization based on comprehensive user and market data analysis.",
      "Collaborated with cross-functional teams including engineering and design to execute successful product deployments.",
      "Conducted market research and competitor analysis to identify new growth opportunities."
    ],
  },
]

const leadershipExperiences = [
  {
    title: "Vice President",
    organization: "IEEE Club",
    location: "CGC Landran",
    date: "2023 - 2025",
    description: "Led ideation, planning, and execution of technical workshops for 150+ students.",
    achievements: [
      "Organized workshops improving engagement through user feedback",
      "Collaborated with faculty and design teams for smooth execution",
      "Implemented post-event feedback loops and data-driven improvements",
    ],
  },
]

const education = [
  {
    degree: "B.Tech Computer Science",
    institution: "CGC Landran",
    location: "Mohali, Punjab",
    period: "2022 – 2026",
    score: "7.04 CGPA",
  },
]

export function Experience() {
  return (
    <section id="experience" className="px-4 py-32 relative font-epilogue">
      <div className="max-w-5xl mx-auto space-y-24 relative z-10">

        {/* Work & Leadership */}
        <div className="grid gap-16 md:grid-cols-2">
          {/* Work */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3 neon-glow">
                <Briefcase className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight uppercase text-xs tracking-[0.3em] text-primary/60">Experience</h2>
            </div>
            {workExperiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-primary/10 hover:border-primary/40 transition-all p-6 rounded-[2rem]">
                  <div className="mb-4">
                    <p className="text-primary font-bold text-xs uppercase tracking-widest mb-1">{exp.date}</p>
                    <h3 className="text-xl font-bold tracking-tight">{exp.title}</h3>
                    <p className="text-muted-foreground/60 font-medium text-sm">{exp.organization}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground/80 font-medium">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-primary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Leadership */}
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-secondary/10 p-3 neon-glow">
                <Users className="h-6 w-6 text-secondary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight uppercase text-xs tracking-[0.3em] text-secondary/60">Leadership</h2>
            </div>
            {leadershipExperiences.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Card className="glass border-secondary/10 hover:border-secondary/40 transition-all p-6 rounded-[2rem]">
                  <div className="mb-4">
                    <p className="text-secondary font-bold text-xs uppercase tracking-widest mb-1">{exp.date}</p>
                    <h3 className="text-xl font-bold tracking-tight">{exp.title}</h3>
                    <p className="text-muted-foreground/60 font-medium text-sm">{exp.organization}</p>
                  </div>
                  <ul className="space-y-3 text-sm text-muted-foreground/80 font-medium">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-3">
                        <span className="text-secondary">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education & Certs */}
        <div className="grid gap-16 md:grid-cols-2 pt-16 border-t border-primary/5">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-accent/10 p-3 neon-glow">
                <GraduationCap className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight uppercase text-xs tracking-[0.3em] text-accent/60">Education</h2>
            </div>
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass p-8 rounded-[2rem] border-accent/10 hover:border-accent/40 transition-all"
              >
                <h3 className="text-xl font-bold tracking-tight mb-1">{edu.degree}</h3>
                <p className="text-muted-foreground/80 font-bold mb-4">{edu.institution}</p>
                <div className="flex justify-between items-center text-sm font-bold uppercase tracking-widest text-accent">
                  <span>{edu.period}</span>
                  <span>{edu.score}</span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-primary/10 p-3 neon-glow">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight uppercase text-xs tracking-[0.3em] text-primary/60">Certifications</h2>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border-primary/10 hover:border-primary/40 transition-all"
            >
              <ul className="space-y-4">
                {[
                  "Becoming a Product Manager (2026)",
                  "OCI Generative AI (2025)",
                  "NPTEL — DBMS (2024)",
                ].map((cert, i) => (
                  <li key={i} className="flex gap-4 items-center group cursor-default">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary/40 group-hover:bg-primary transition-all" />
                    <span className="text-sm font-bold text-muted-foreground/80 group-hover:text-primary transition-all tracking-tight">{cert}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
