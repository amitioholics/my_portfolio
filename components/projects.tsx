import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowUpRight, Brain, Calendar, TrendingUp, Dumbbell, DollarSign } from "lucide-react"

const projects = [
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
  },
  {
    title: "FitHub (AI Fitness Trainer)",
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
  },
  {
    title: "Commute Pass (Ride-Hailing Feature)",
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
  },
  {
    title: "TaxSense: Tax Loss Harvesting Assistant",
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
  },
]

export function Projects() {
  return (
    <section id="projects" className="px-4 py-24 border-t border-border/50 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">Product Portfolio</h2>
          <p className="text-4xl md:text-5xl font-bold text-balance mb-4">Projects & Case Studies</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real-world product management experience across AI, fintech, and enterprise solutions
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon
            return (
              <Card
                key={project.title}
                className={`group hover:shadow-2xl ${project.borderColor} transition-all duration-300 overflow-hidden relative backdrop-blur-sm`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardHeader className="relative space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4 flex-1">
                      <div className="rounded-xl bg-primary/10 p-3 mt-1 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="space-y-2 flex-1">
                        <CardTitle className="text-2xl group-hover:text-primary transition-colors leading-tight text-balance">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">{project.role}</CardDescription>
                        <p className="text-xs text-muted-foreground font-medium">{project.duration}</p>
                      </div>
                    </div>
                    <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all flex-shrink-0" />
                  </div>
                </CardHeader>

                <CardContent className="space-y-6 relative">
                  <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{project.description}</p>

                  <div className="space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wide text-foreground/80">Key Impact</h4>
                    <ul className="space-y-2.5 text-sm text-muted-foreground">
                      {project.achievements.map((achievement, i) => (
                        <li key={i} className="flex gap-3 leading-relaxed">
                          <span className="text-primary mt-0.5 flex-shrink-0 font-bold">•</span>
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
                        className="text-xs font-medium hover:bg-primary/20 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
