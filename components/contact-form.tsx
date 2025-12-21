"use client"

import { useActionState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { sendContactEmail } from "@/app/actions"
import { Loader2, Send } from "lucide-react"
import { useEffect, useRef } from "react"
import { toast } from "sonner"

const initialState = {
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
        <Card className="shadow-lg border-primary/10">
            <CardContent className="p-6">
                <form ref={formRef} action={action} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            name="name"
                            placeholder="John Doe"
                            required
                            minLength={2}
                            aria-describedby="name-error"
                        />
                        {state.errors?.name && (
                            <p id="name-error" className="text-sm text-destructive font-medium">
                                {state.errors.name[0]}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            aria-describedby="email-error"
                        />
                        {state.errors?.email && (
                            <p id="email-error" className="text-sm text-destructive font-medium">
                                {state.errors.email[0]}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            id="message"
                            name="message"
                            placeholder="Hello, I'd like to discuss a project..."
                            className="min-h-[120px] resize-none"
                            required
                            minLength={10}
                            aria-describedby="message-error"
                        />
                        {state.errors?.message && (
                            <p id="message-error" className="text-sm text-destructive font-medium">
                                {state.errors.message[0]}
                            </p>
                        )}
                    </div>

                    <Button type="submit" className="w-full gap-2" disabled={isPending}>
                        {isPending ? (
                            <>
                                <Loader2 className="h-4 w-4 animate-spin" />
                                Sending...
                            </>
                        ) : (
                            <>
                                <Send className="h-4 w-4" />
                                Send Message
                            </>
                        )}
                    </Button>
                </form>
            </CardContent>
        </Card>
    )
}
