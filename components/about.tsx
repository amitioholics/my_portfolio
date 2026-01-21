import { Target, Users, Lightbulb } from "lucide-react"

export function About() {
  return (
    <section id="about" className="px-4 py-24 border-t border-border bg-muted/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-2">About</h2>
          <p className="text-3xl font-semibold text-balance">Building Products That Matter</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3 mb-12">
          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="rounded-lg bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
              <Target className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-semibold mb-2">Product-First Mindset</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              User needs analysis combined with data-driven insights to define clear PRDs and prioritize features using
              frameworks like RICE.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="rounded-lg bg-accent/10 w-12 h-12 flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-accent" />
            </div>
            <h3 className="font-semibold mb-2">Cross-Functional Leadership</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Led technical workshops for 150+ students as VP of IEEE Club and collaborated with engineering teams to
              execute product roadmaps.
            </p>
          </div>

          <div className="p-6 rounded-lg bg-card border border-border">
            <div className="rounded-lg bg-chart-3/20 w-12 h-12 flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6 text-chart-3" />
            </div>
            <h3 className="font-semibold mb-2">AI & Innovation Focus</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Built AI-powered products including NoteGenius (GPT-4), FitHub (adaptive fitness), and tax optimization
              tools for fintech.
            </p>
          </div>
        </div>

        <div className="space-y-6 text-lg leading-relaxed">
          <p className="text-pretty">
            I'm a product-oriented Computer Science undergraduate passionate about creating intuitive, scalable products
            focused on learning, productivity, and exceptional user experience.
          </p>

          <p className="text-pretty text-muted-foreground">
            Currently pursuing B.Tech in Computer Science at Chandigarh Group of Colleges, I've built full-stack
            products that solve real scheduling, learning, and financial challenges. My work spans AI integration,
            fintech innovation, and enterprise SaaS solutions.
          </p>
        </div>
      </div>
    </section>
  )
}
