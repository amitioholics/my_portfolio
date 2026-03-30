"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-32 relative font-epilogue overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="mb-20">
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary/60 mb-2 font-bold">Connect</h2>
          <p className="text-4xl md:text-6xl font-bold">Let's Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Together</span></p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold tracking-tight">Interested in collaborating?</h3>
              <p className="text-lg text-muted-foreground/80 font-medium leading-relaxed">
                I'm always looking for new product opportunities, especially in AI, Fintech, and SaaS.
              </p>
              <p className="text-muted-foreground/60 font-medium leading-relaxed">
                Whether you need a product manager who bridges tech and users, or just want to talk strategy, let's connect.
              </p>
            </div>

            <Button
              size="lg"
              className="h-16 px-10 rounded-full bg-primary text-primary-foreground font-bold uppercase tracking-widest text-xs hover:neon-glow-strong transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:amitsinghrajput263@gmail.com">
                <Mail className="h-5 w-5 mr-3" />
                Get in Touch
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Card className="glass border-primary/20 overflow-hidden rounded-[2.5rem] p-2">
              <CardContent className="p-6 space-y-4">
                {[
                  { icon: Mail, label: "Email", value: "amitsinghrajput263@gmail.com", href: "mailto:amitsinghrajput263@gmail.com", color: "text-primary" },
                  { icon: Phone, label: "Phone", value: "+91 9525739361", href: "tel:+919525739361", color: "text-secondary" },
                  { icon: MapPin, label: "Location", value: "Patna, Bihar, India", color: "text-accent" },
                ].map((item, i) => (
                  <a
                    key={i}
                    href={item.href}
                    className="flex items-center gap-5 p-5 rounded-3xl hover:bg-white/5 transition-all group border border-transparent hover:border-white/10"
                  >
                    <div className={`rounded-2xl bg-white/5 p-4 group-hover:neon-glow transition-all`}>
                      <item.icon className={`h-6 w-6 ${item.color}`} />
                    </div>
                    <div className="flex-1">
                      <p className="text-[10px] uppercase tracking-widest font-bold text-muted-foreground/40 mb-1">{item.label}</p>
                      <p className="font-bold tracking-tight text-muted-foreground/80 group-hover:text-white transition-colors">{item.value}</p>
                    </div>
                    {item.href && <Send className="h-4 w-4 text-muted-foreground/20 group-hover:text-primary transition-all group-hover:translate-x-1" />}
                  </a>
                ))}

                <div className="pt-6 flex gap-4 justify-center">
                  {[
                    { icon: Linkedin, href: "https://linkedin.com/in/amit-kumar-0a6617258" },
                    { icon: Github, href: "https://github.com/amitioholics" },
                  ].map((social, i) => (
                    <Button
                      key={i}
                      variant="outline"
                      size="icon"
                      asChild
                      className="w-12 h-12 rounded-full border-white/10 hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent text-muted-foreground hover:text-primary"
                    >
                      <a href={social.href} target="_blank" rel="noopener noreferrer">
                        <social.icon className="h-5 w-5" />
                      </a>
                    </Button>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
