"use client"

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Brain, Calendar, TrendingUp, Dumbbell, DollarSign, ExternalLink } from "lucide-react"

import { LucideIcon } from "lucide-react"

interface Project {
  title: string
  role: string
  duration: string
  description: string
  achievements: string[]
  skills: string[]
  icon: LucideIcon
  gradient: string
  borderColor: string
  github: string
}

const projects: Project[] = [
  {
    title: "CAMPUZ",
    role: "Product Manager & Full-Stack Developer",
    duration: "45 Days",
    description:
      "Automated scheduling platform that reduces manual conflict resolution and improves workflow efficiency.",
    achievements: [
      "Identified scheduling issues through user interviews with students and faculty",
      "Defined requirements and roadmap for automated timetables and conflict detection",
      "Built role-based dashboards with React, Node.js, and MongoDB",
      "Optimized workflows to reduce manual conflict resolution time",
    ],
    skills: ["User Research", "PRDs", "React", "Node.js", "MongoDB", "Analytics"],
    icon: Calendar,
    gradient: "from-blue-500/10 to-cyan-500/10",
    borderColor: "hover:border-blue-500/50",
    github: "https://github.com/amitioholics/Campuz",
  },
  {
    title: "NoteGenius",
    role: "Product Manager & AI Integration Developer",
    duration: "50 Days",
    description: "AI-powered note enhancement platform with GPT-4 integration for summaries and quiz generation.",
    achievements: [
      "Defined product vision based on user study of note-taking challenges",
      "Built full-stack platform with Next.js integrating OpenAI GPT-4",
      "Implemented fallback mechanisms for reliability and improved prompt workflows",
      "Tracked engagement metrics (quiz usage, summary quality) to guide iteration",
    ],
    skills: ["Product Vision", "AI/ML", "Next.js", "OpenAI GPT-4", "Metrics", "User Testing"],
    icon: Brain,
    gradient: "from-purple-500/10 to-pink-500/10",
    borderColor: "hover:border-purple-500/50",
    github: "https://github.com/amitioholics/NoteGenius",
  },
  {
    title: "FitHub",
    role: "Product Manager",
    duration: "10 Days (MVP Sprint)",
    description:
      "Empathetic AI fitness trainer that dynamically adjusts workouts based on user energy levels and real-time feedback, solving the 'one-size-fits-none' problem of static fitness apps.",
    achievements: [
      "Identified pain point: 25-40 year old professionals need adaptive workouts, not rigid programs",
      "Designed MVP with daily check-ins (sleep quality, energy 1-10) and real-time set adjustments",
      "Defined AI safety constraints to prevent dangerous suggestions (hard-coded ceiling limits)",
      "Monetization strategy: ₹199 freemium with payment prompt after 3rd workout",
    ],
    skills: ["User Research", "AI Product Design", "Freemium Strategy", "Safety Constraints", "Rapid Prototyping"],
    icon: Dumbbell,
    gradient: "from-green-500/10 to-emerald-500/10",
    borderColor: "hover:border-green-500/50",
    github: "https://github.com/amitioholics/FitHub",
  },
  {
    title: "Commute Pass",
    role: "Product Manager",
    duration: "PRD Development",
    description:
      "Recurring ride subscription feature that eliminates morning commute anxiety by guaranteeing fixed pricing and reliable pickup times for daily office commuters.",
    achievements: [
      "Solved core pain: 15% user churn from surge pricing and driver cancellations during peak hours",
      "Designed price-lock mechanism: 10% premium over average fare to eliminate peak surge volatility",
      "Created phased rollout: Alpha (50 employees), Beta (500 passes, 1 geo), GA (5% WAU target)",
      "Built compliance-first approach: 99.5% fulfillment SLA with priority driver dispatch system",
    ],
    skills: ["Market Research", "Pricing Strategy", "B2C Product", "Go-to-Market", "Metrics & KPIs"],
    icon: TrendingUp,
    gradient: "from-orange-500/10 to-amber-500/10",
    borderColor: "hover:border-orange-500/50",
    github: "https://github.com/amitioholics/Comutee_Pass",
  },
  {
    title: "TaxSense",
    role: "Product Manager",
    duration: "Premium Feature Proposal",
    description:
      "Automated tax optimization tool that helps mass-affluent investors (₹25L-1Cr portfolios) save ₹15K-75K annually by strategically harvesting losses to offset capital gains.",
    achievements: [
      "Identified ₹25K-50K annual savings opportunity for 30% tax bracket investors",
      "Designed SEBI-compliant, rules-based recommendation engine (no advisory license needed)",
      "Positioned at ₹2,999/year (1/5th cost of tax consultant) with guaranteed 5-15x ROI",
      "GTM plan: Acquire 50 users in 90 days via existing customer base and content marketing",
    ],
    skills: ["FinTech Product", "Compliance & Risk", "Revenue Strategy", "B2C SaaS", "Financial Analysis"],
    icon: DollarSign,
    gradient: "from-indigo-500/10 to-blue-500/10",
    borderColor: "hover:border-indigo-500/50",
    github: "https://github.com/amitioholics/Taxsense",
  },
]

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const Icon = project.icon
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative h-full"
    >
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full group outline-none"
      >
        <Card
          className="glass group-hover:border-primary/80 group-hover:neon-glow-strong transition-all duration-500 overflow-hidden relative h-full font-epilogue"
          style={{ transform: "translateZ(50px)" }}
        >
          <div
            className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
          />

          <CardHeader className="relative space-y-4">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4 flex-1">
                <div className="rounded-xl bg-primary/10 p-3 mt-1 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 neon-glow">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2 flex-1">
                  <CardTitle className="text-2xl group-hover:text-primary group-hover:text-glow transition-all leading-tight text-balance font-bold">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-sm leading-relaxed text-muted-foreground/80">{project.role}</CardDescription>
                  <p className="text-xs text-primary/60 font-medium tracking-widest uppercase">{project.duration}</p>
                </div>
              </div>
              <ArrowUpRight className="h-5 w-5 text-primary/40 group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
            </div>
          </CardHeader>

          <CardContent className="space-y-6 relative">
            <p className="text-sm text-muted-foreground/90 leading-relaxed text-pretty">{project.description}</p>

            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-primary/70">Key Impact</h4>
              <ul className="space-y-2.5 text-sm text-muted-foreground/80">
                {project.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 leading-relaxed">
                    <span className="text-primary mt-0.5 flex-shrink-0 font-bold">›</span>
                    <span className="text-pretty">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 pt-2">
              {project.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-primary/5 text-primary border-primary/20 text-xs font-medium hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {project.github && (
              <div className="pt-4 border-t border-primary/10">
                <span className="inline-flex items-center gap-2 text-sm font-bold text-primary group-hover:gap-3 transition-all tracking-wider uppercase">
                  <ExternalLink className="h-4 w-4" />
                  View Discovery
                </span>
              </div>
            )}
          </CardContent>
        </Card>
      </a>
    </motion.div>
  )
}

export function Projects() {
  return (
    <section id="projects" className="px-4 py-32 relative overflow-hidden">
      {/* Background blobs for astral effect */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-secondary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-20 text-center space-y-4">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary font-bold">Product Portfolio</h2>
          <p className="text-5xl md:text-7xl font-bold tracking-tight font-epilogue">Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Insights</span></p>
          <p className="text-xl text-muted-foreground/70 max-w-2xl mx-auto text-pretty font-medium">
            Immersive product management experiences across AI, fintech, and enterprise landscapes.
          </p>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
