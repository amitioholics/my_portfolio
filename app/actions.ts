"use server"

import { z } from "zod"

const contactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    email: z.string().email("Please enter a valid email address"),
    message: z.string().min(10, "Message must be at least 10 characters"),
})

export type ContactState = {
    success: boolean
    message: string
    errors?: {
        name?: string[]
        email?: string[]
        message?: string[]
    }
}

export async function sendContactEmail(prevState: ContactState, formData: FormData): Promise<ContactState> {
    const validatedFields = contactSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email"),
        message: formData.get("message"),
    })

    if (!validatedFields.success) {
        return {
            success: false,
            message: "Please fix the errors below.",
            errors: validatedFields.error.flatten().fieldErrors,
        }
    }

    const { name, email, message } = validatedFields.data

    // Simulate email sending delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate sending email (Log to server console)
    console.log("------------------------------------------")
    console.log("📧 NEW CONTACT FORM SUBMISSION")
    console.log("------------------------------------------")
    console.log(`Name: ${name}`)
    console.log(`Email: ${email}`)
    console.log(`Message: ${message}`)
    console.log("------------------------------------------")

    // TODO: Integrate with a real email service provider here.
    // Example using Resend:
    // await resend.emails.send({
    //   from: 'Portfolio <onboarding@resend.dev>',
    //   to: 'amitsinghrajput263@gmail.com',
    //   subject: `New message from ${name}`,
    //   text: message,
    //   reply_to: email,
    // })

    return {
        success: true,
        message: "Message sent! I'll get back to you soon.",
    }
}
