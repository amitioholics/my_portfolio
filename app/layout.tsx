import type React from "react"
import type { Metadata } from "next"
import { Inter, Geist_Mono, Epilogue } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Chatbot } from "@/components/chatbot"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" })
const geistMono = Geist_Mono({ subsets: ["latin"], variable: "--font-geist-mono" })

export const metadata: Metadata = {
  title: "Amit Kumar - Product Manager",
  description: "Product Manager specializing in AI-powered products, user research, and data-driven decision making",
  generator: "v0.app",
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${epilogue.variable} ${geistMono.variable} font-sans antialiased bg-[#150629] text-[#efdfff]`}>
        {children}
        <Analytics />
        <Chatbot />
      </body>
    </html>
  )
}
