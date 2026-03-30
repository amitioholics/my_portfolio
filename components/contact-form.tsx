"use client"

import { useActionState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { sendContactEmail } from "@/app/actions"
import { Loader2, Send } from "lucide-react"
import { toast } from "sonner"

interface ActionState {
    success: boolean;
    message: string;
    errors?: {
        name?: string[];
        email?: string[];
        message?: string[];
    };
}

const initialState: ActionState = {
    success: false,
    message: "",
}

export function ContactForm() {
    const [state, action, isPending] = useActionState(sendContactEmail, initialState)
    const formRef = useRef<HTMLFormElement>(null)

    useEffect(() => {
        if (state.message) {
            if (state.success) {
                toast.success(state.message)
                formRef.current?.reset()
            } else {
                toast.error(state.message)
            }
        }
    }, [state])

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full font-epilogue"
        >
            <Card className="glass border-primary/20 rounded-[2.5rem] overflow-hidden p-1">
                <CardContent className="p-8 md:p-10">
                    <form ref={formRef} action={action} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-3">
                                <Label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50 ml-1">Full Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    placeholder="Amit Kumar"
                                    required
                                    minLength={2}
                                    className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all font-medium placeholder:text-muted-foreground/20"
                                />
                                {state.errors?.name && (
                                    <p className="text-[10px] text-destructive font-bold uppercase tracking-wider mt-1 ml-1">{state.errors.name[0]}</p>
                                )}
                            </div>

                            <div className="space-y-3">
                                <Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50 ml-1">Email Address</Label>
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="amit@example.com"
                                    required
                                    className="h-14 rounded-2xl bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all font-medium placeholder:text-muted-foreground/20"
                                />
                                {state.errors?.email && (
                                    <p className="text-[10px] text-destructive font-bold uppercase tracking-wider mt-1 ml-1">{state.errors.email[0]}</p>
                                )}
                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] font-bold text-muted-foreground/50 ml-1">Your Message</Label>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Let's build something world-class..."
                                className="min-h-[160px] rounded-3xl bg-white/5 border-white/10 focus:border-primary/50 focus:ring-primary/20 transition-all font-medium placeholder:text-muted-foreground/20 resize-none p-5"
                                required
                                minLength={10}
                            />
                            {state.errors?.message && (
                                <p className="text-[10px] text-destructive font-bold uppercase tracking-wider mt-1 ml-1">{state.errors.message[0]}</p>
                            )}
                        </div>

                        <Button
                            type="submit"
                            className="w-full h-16 rounded-2xl bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-xs hover:neon-glow-strong transition-all hover:scale-[1.02] active:scale-[0.98] shadow-2xl shadow-primary/20 mt-4"
                            disabled={isPending}
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="h-5 w-5 animate-spin mr-3" />
                                    Sending Vessel...
                                </>
                            ) : (
                                <>
                                    <Send className="h-5 w-5 mr-3" />
                                    Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </motion.div>
    )
}
