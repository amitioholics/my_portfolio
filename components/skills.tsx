import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Code, Wrench } from "lucide-react"

const skillCategories = [
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
    <section className="px-4 py-24 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">Skills</h2>
          <p className="text-3xl font-semibold text-balance">Technical & Product Expertise</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {skillCategories.map((category) => {
            const Icon = category.icon
            return (
              <Card key={category.category} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`rounded-lg bg-${category.color}/10 p-2`}>
                      <Icon className={`h-5 w-5 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="hover:bg-muted transition-colors">
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
