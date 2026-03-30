"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState, useRef, useEffect } from "react"
import { MessageCircle, X, Send, User, Bot, Loader2 } from "lucide-react"
import { useChat } from "ai/react"

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false)

    const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
        initialMessages: [
            {
                id: "welcome",
                role: "assistant",
                content: "Hi there! I'm Amit's AI assistant. How can I help you today?",
            },
        ]
    })

    const messagesEndRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])

    return (
        <div className="font-epilogue">
            {/* Floating Action Button */}
            <div className="fixed bottom-8 right-8 z-50">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.button
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            onClick={() => setIsOpen(true)}
                            className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-all hover:scale-110 active:scale-95 neon-glow-strong"
                            aria-label="Open chat"
                        >
                            <MessageCircle className="h-7 w-7" />
                        </motion.button>
                    )}
                </AnimatePresence>
            </div>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ y: 20, opacity: 0, scale: 0.95 }}
                        animate={{ y: 0, opacity: 1, scale: 1 }}
                        exit={{ y: 20, opacity: 0, scale: 0.95 }}
                        className="fixed bottom-28 right-8 z-50 flex h-[500px] w-[380px] flex-col overflow-hidden rounded-[2.5rem] border border-primary/20 glass shadow-2xl sm:bottom-8"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between bg-primary/10 p-5 backdrop-blur-xl border-b border-primary/10">
                            <div className="flex items-center gap-3">
                                <div className="rounded-xl bg-primary/20 p-2 neon-glow">
                                    <Bot className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-sm tracking-tight text-white">Amit's AI</h3>
                                    <div className="flex items-center gap-1.5">
                                        <div className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">Online</span>
                                    </div>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="rounded-full p-2 text-muted-foreground/40 hover:text-primary transition-all hover:bg-primary/10"
                                aria-label="Close chat"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Messages Area */}
                        <div className="flex-1 overflow-y-auto p-5 flex flex-col gap-5 scrollbar-hide">
                            {messages.map((message) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    key={message.id}
                                    className={`flex w-full items-start gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                                >
                                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 ${message.role === "user" ? "text-secondary" : "text-primary"}`}>
                                        {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                                    </div>
                                    <div
                                        className={`rounded-2xl px-4 py-3 max-w-[80%] text-sm font-medium leading-relaxed ${message.role === "user"
                                            ? "bg-primary text-primary-foreground rounded-tr-none shadow-lg shadow-primary/20"
                                            : "bg-white/5 border border-white/5 rounded-tl-none text-muted-foreground/90"
                                            }`}
                                    >
                                        {message.content}
                                    </div>
                                </motion.div>
                            ))}
                            {isLoading && (
                                <div className="flex w-full items-start gap-3">
                                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white/5 border border-white/10 text-primary">
                                        <Bot className="h-4 w-4" />
                                    </div>
                                    <div className="rounded-2xl px-5 py-4 bg-white/5 border border-white/5 rounded-tl-none">
                                        <Loader2 className="h-4 w-4 animate-spin text-primary/40" />
                                    </div>
                                </div>
                            )}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <form
                            onSubmit={handleSubmit}
                            className="p-5 bg-white/5 border-t border-white/10 backdrop-blur-xl"
                        >
                            <div className="relative flex items-center gap-2">
                                <input
                                    type="text"
                                    value={input}
                                    onChange={handleInputChange}
                                    disabled={isLoading}
                                    placeholder="Type a message..."
                                    className="flex-1 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 disabled:opacity-50 transition-all"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground disabled:opacity-50 transition-all hover:scale-105 active:scale-95 neon-glow shadow-primary/20"
                                    aria-label="Send message"
                                >
                                    <Send className="h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
