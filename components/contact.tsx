import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Github, Linkedin, Mail, MapPin, Phone, Send, MessageSquare } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="px-4 py-24 border-t border-border/50 bg-muted/20">
      <div className="max-w-5xl mx-auto">
        <div className="mb-16 text-center">
          <h2 className="text-sm uppercase tracking-wider text-primary font-semibold mb-3">Contact</h2>
          <p className="text-4xl md:text-5xl font-bold text-balance mb-4">Let's Build Together</p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Open to product management opportunities and collaborations
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="rounded-lg bg-primary/10 p-2 mt-1">
                  <MessageSquare className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Interested in working together?</h3>
                  <p className="text-muted-foreground leading-relaxed text-pretty">
                    I'm always interested in hearing about new product opportunities, especially those focused on AI,
                    education, fintech, and productivity tools.
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-pretty pl-14">
                Whether you're looking for a product manager who can bridge technical execution with user needs, or want
                to discuss product strategy, I'd love to connect.
              </p>
            </div>

            <Button
              size="lg"
              className="gap-2 w-full sm:w-auto shadow-lg hover:shadow-xl transition-all hover:scale-105"
              asChild
            >
              <a href="mailto:amitsinghrajput263@gmail.com">
                <Mail className="h-5 w-5" />
                Send me an Email
              </a>
            </Button>
          </div>

          <Card className="shadow-2xl border-primary/20 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
            <CardContent className="pt-8 pb-8 relative">
              <div className="space-y-3">
                <a
                  href="mailto:amitsinghrajput263@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-primary/5 transition-all group border border-transparent hover:border-primary/20"
                >
                  <div className="rounded-xl bg-primary/10 p-3 group-hover:bg-primary/20 transition-all group-hover:scale-110">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Email</p>
                    <p className="text-sm font-medium truncate group-hover:text-primary transition-colors">
                      amitsinghrajput263@gmail.com
                    </p>
                  </div>
                  <Send className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
                </a>

                <a
                  href="tel:+919525739361"
                  className="flex items-center gap-4 p-4 rounded-xl hover:bg-accent/5 transition-all group border border-transparent hover:border-accent/20"
                >
                  <div className="rounded-xl bg-accent/10 p-3 group-hover:bg-accent/20 transition-all group-hover:scale-110">
                    <Phone className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Phone</p>
                    <p className="text-sm font-medium group-hover:text-accent transition-colors">+91 9525739361</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-xl bg-muted/30">
                  <div className="rounded-xl bg-chart-3/20 p-3">
                    <MapPin className="h-6 w-6 text-chart-3" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Location</p>
                    <p className="text-sm font-medium">Patna, Bihar, India</p>
                  </div>
                </div>

                <div className="pt-6 border-t border-border flex gap-3 justify-center">
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent"
                  >
                    <a href="https://linkedin.com/in/amit-kumar-0a6617258" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent"
                  >
                    <a href="https://github.com/amitioholics" target="_blank" rel="noopener noreferrer">
                      <Github className="h-5 w-5" />
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    asChild
                    className="hover:border-primary/50 hover:bg-primary/5 transition-all hover:scale-110 bg-transparent"
                  >
                    <a href="mailto:amitsinghrajput263@gmail.com">
                      <Mail className="h-5 w-5" />
                    </a>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
