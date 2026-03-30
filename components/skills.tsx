"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, Wrench } from "lucide-react"

import { LucideIcon } from "lucide-react"

interface SkillCategory {
  category: string
  icon: LucideIcon
  color: string
  skills: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: "Product Management",
    icon: Briefcase,
    color: "text-primary",
    skills: [
      "User Research",
      "PRDs",
      "Roadmapping",
      "RICE Prioritization",
      "Journey Mapping",
      "Data Analysis",
      "Metrics & OKRs",
      "Competitive Analysis",
      "Prototyping",
      "A/B Testing",
      "Go-to-Market",
    ],
  },
  {
    category: "Technical Skills",
    icon: Code,
    color: "text-accent",
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Python",
      "C++",
      "REST APIs",
      "MongoDB",
      "MySQL",
      "AI/ML Integration",
    ],
  },
  {
    category: "Tools & Platforms",
    icon: Wrench,
    color: "text-chart-3",
    skills: [
      "Git",
      "Postman",
      "GitHub Actions",
      "Figma",
      "Google Cloud",
      "OpenAI APIs",
      "Jira",
      "Trello",
      "Miro",
      "Notion",
      "Google Analytics",
      "Mixpanel",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="px-4 py-32 relative">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary/60 mb-2 font-bold">Expertise</h2>
          <p className="text-4xl md:text-6xl font-bold font-epilogue">Technical & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Product</span> Skills</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="h-full"
              >
                <Card className="glass h-full hover:border-primary/50 hover:neon-glow transition-all duration-300 font-epilogue">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`rounded-xl bg-primary/10 p-3 neon-glow`}>
                        <Icon className={`h-6 w-6 text-primary`} />
                      </div>
                      <CardTitle className="text-xl font-bold tracking-tight">{category.category}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <Badge
                          key={skill}
                          variant="outline"
                          className="bg-primary/5 border-primary/10 text-primary/80 hover:bg-primary/20 hover:text-primary transition-all cursor-default"
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
