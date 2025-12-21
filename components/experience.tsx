import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, GraduationCap, Users } from "lucide-react"

const experiences = [
  {
    title: "Vice President",
    organization: "IEEE Club",
    location: "Chandigarh Group of Colleges",
    description: "Led ideation, planning, and execution of technical workshops",
    achievements: [
      "Organized workshops attended by 150+ students, improving engagement through user feedback",
      "Collaborated with cross-functional teams (faculty, design, logistics) for smooth execution",
      "Implemented post-event feedback loops and data-driven improvements",
      "Increased participation and session satisfaction through iterative improvements",
    ],
  },
]

const education = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science Engineering",
    institution: "Chandigarh Group of Colleges, Landran",
    location: "Mohali, Punjab",
    period: "2022 – 2026",
    score: "7.04 CGPA",
  },
  {
    degree: "Intermediate (CBSE)",
    institution: "Eklavya Educational Complex",
    location: "Patna",
    period: "2020 – 2021",
    score: "76.4%",
  },
  {
    degree: "High School (CBSE)",
    institution: "Keshav Saraswati Vidya Mandir",
    location: "Patna",
    period: "2018 – 2019",
    score: "72.4%",
  },
]

const certifications = [
  "OCI Generative AI Certificate (2025)",
  "NPTEL — Database Management Systems (2024)",
  "Cisco — Programming Essentials in C++ (2024)",
]

export function Experience() {
  return (
    <section className="px-4 py-24 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto space-y-16">
        {/* Leadership Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-lg bg-primary/10 p-2">
              <Users className="h-5 w-5 text-primary" />
            </div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Leadership Experience</h2>
          </div>

          <div className="space-y-6">
            {experiences.map((exp) => (
              <Card key={exp.title} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{exp.title}</CardTitle>
                  <CardDescription className="text-base">
                    {exp.organization} • {exp.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground leading-relaxed">{exp.description}</p>

                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex gap-2 leading-relaxed">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-lg bg-accent/10 p-2">
              <GraduationCap className="h-5 w-5 text-accent" />
            </div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Education</h2>
          </div>

          <div className="space-y-6">
            {education.map((edu) => (
              <Card key={edu.degree + edu.institution} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  {edu.field && <CardDescription className="text-base">{edu.field}</CardDescription>}
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between items-start flex-wrap gap-2">
                    <div>
                      <p className="font-medium">{edu.institution}</p>
                      <p className="text-sm text-muted-foreground">{edu.location}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">{edu.period}</p>
                      <p className="text-sm font-medium text-primary">{edu.score}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="rounded-lg bg-chart-3/20 p-2">
              <Award className="h-5 w-5 text-chart-3" />
            </div>
            <h2 className="text-sm uppercase tracking-wider text-muted-foreground">Certifications</h2>
          </div>

          <Card className="hover:shadow-lg transition-shadow">
            <CardContent className="pt-6">
              <ul className="space-y-3">
                {certifications.map((cert) => (
                  <li key={cert} className="flex gap-2 items-start">
                    <span className="text-primary mt-1">•</span>
                    <span className="text-muted-foreground leading-relaxed">{cert}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
