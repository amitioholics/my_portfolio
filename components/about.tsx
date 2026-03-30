"use client"

import { motion } from "framer-motion"
import { Target, Users, Lightbulb } from "lucide-react"

export function About() {
  const cards = [
    {
      title: "Product-First Mindset",
      icon: Target,
      color: "text-primary",
      desc: "User needs analysis combined with data-driven insights to define clear PRDs and prioritize features using frameworks like RICE."
    },
    {
      title: "Cross-Functional Leadership",
      icon: Users,
      color: "text-secondary",
      desc: "Led technical workshops for 150+ students as VP of IEEE Club and collaborated with engineering teams to execute product roadmaps."
    },
    {
      title: "AI & Innovation Focus",
      icon: Lightbulb,
      color: "text-accent",
      desc: "Built AI-powered products including NoteGenius (GPT-4), FitHub (adaptive fitness), and tax optimization tools for fintech."
    }
  ];

  return (
    <section id="about" className="px-4 py-32 relative font-epilogue">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-16">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary/60 mb-2 font-bold">Philosophy</h2>
          <p className="text-4xl md:text-6xl font-bold">Building Products That <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Matter</span></p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 mb-20">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="glass p-8 rounded-[2rem] border-primary/10 hover:border-primary/40 transition-all group"
            >
              <div className={`rounded-2xl bg-primary/10 w-14 h-14 flex items-center justify-center mb-6 group-hover:neon-glow transition-all`}>
                <card.icon className={`h-7 w-7 ${card.color}`} />
              </div>
              <h3 className="font-bold text-xl mb-4 tracking-tight">{card.title}</h3>
              <p className="text-sm text-muted-foreground/80 leading-relaxed font-medium">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-8 text-xl md:text-2xl font-bold leading-tight max-w-4xl">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-balance"
          >
            I'm a <span className="text-primary">Product Management Intern at PaisaWapas</span>, where I bridge the gap between technical complexity and user-centric solutions.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-balance text-muted-foreground/60"
          >
            With a Computer Science background, I focus on building scalable products in AI and Fintech. My journey is driven by a passion for solving real-world challenges through data-driven insight and execution rigor.
          </motion.p>
        </div>
      </div>
    </section>
  )
}
