"use client"

import { useCallback, useEffect, useId, useRef, useState } from "react"
import { Headset, MessageCircle, Sparkles } from "lucide-react"
import { ChatPanel, type ChatMessage } from "./ChatPanel"

const initialMessages: ChatMessage[] = [
  { id: "1", role: "bot", text: "Hi 👋 How can I help you today?" },
  { id: "2", role: "user", text: "I need help with NRI banking" },
  {
    id: "3",
    role: "bot",
    text: "I can walk you through repatriation, account opening, and FEMA—tell me what you need next, or I can show our banking partners.",
  },
]

const botReplies = [
  "Thanks! We offer guided onboarding for NRI and OCI account opening, tax coordination, and compliance checklists. Would you like a quick next step for banking or remittances?",
  "A specialist can review your case for cross-border remittances and FEMA. You can also explore our “Banking & Accounts” and “Global Remittances” guides in the app.",
  "I’ve noted you’re looking at NRI banking. I can help with NRE/NRO, documentation, and timelines. What is your home country and preferred currency for transfers?",
]

function nextId() {
  return `m-${Date.now()}-${Math.random().toString(16).slice(2)}`
}

export default function HelpWidget() {
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages)
  const [input, setInput] = useState("")
  const replyIndex = useRef(0)
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const cardId = useId()

  const openChat = useCallback(() => {
    setIsChatOpen(true)
  }, [])

  const closeChat = useCallback(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
      timeoutRef.current = null
    }
    setIsChatOpen(false)
  }, [])

  const send = useCallback(() => {
    const text = input.trim()
    if (!text) return
    setInput("")

    const userMsg: ChatMessage = { id: nextId(), role: "user", text }
    setMessages((prev) => [...prev, userMsg])

    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => {
      const r =
        botReplies[replyIndex.current % botReplies.length] ?? botReplies[0]!
      replyIndex.current += 1
      setMessages((prev) => [
        ...prev,
        { id: nextId(), role: "bot", text: r },
      ])
    }, 900)
  }, [input])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  return (
    <>
      <ChatPanel
        isOpen={isChatOpen}
        onClose={closeChat}
        messages={messages}
        input={input}
        onInput={setInput}
        onSend={send}
      />

      {!isChatOpen && (
        <div
          className="fixed bottom-3 right-3 z-[998] w-[min(15rem,calc(100vw-0.9rem))] cursor-pointer sm:bottom-6 sm:right-6 sm:w-80"
          role="region"
          aria-label="Support and help"
        >
          <button
            type="button"
            onClick={openChat}
            className="group w-full text-left"
            id={cardId}
          >
            <div className="relative overflow-hidden rounded-2xl border border-amber-900/10 bg-gradient-to-br from-white to-nri-cream/90 shadow-[0_4px_24px_rgba(15,23,42,0.1),0_0_0_1px_rgba(197,160,89,0.12)] transition-all duration-300 group-hover:shadow-[0_8px_32px_rgba(15,23,42,0.12)] group-hover:-translate-y-0.5">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-amber-400/5 to-transparent" />
              <div className="hover:from-nri-gold/5 absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-amber-200/30 to-transparent blur-2xl transition group-hover:opacity-90" />

              <div
                className="relative flex animate-help-float items-start gap-2.5 p-3 sm:gap-3 sm:p-4 motion-reduce:animate-none"
                style={{ animationDelay: "0.2s" }}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-100/90 to-amber-50/80 text-nri-gold ring-1 ring-amber-900/10 shadow-sm sm:h-11 sm:w-11">
                  <Headset className="h-4 w-4 sm:h-5 sm:w-5" strokeWidth={1.8} />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1 text-[0.62rem] font-medium uppercase tracking-[0.1em] text-nri-gold/80 sm:gap-1.5 sm:text-[0.7rem] sm:tracking-[0.12em]">
                    <MessageCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    <span>Live support</span>
                  </div>
                  <h2 className="mt-0.5 text-[0.83rem] font-semibold leading-snug text-slate-900 sm:text-sm">
                    We’re Here to Help
                  </h2>
                  <p className="mt-0.5 text-[0.7rem] leading-relaxed text-slate-500 sm:text-xs">
                    One platform. All your needs. Zero hassle.
                  </p>
                  <span
                    className="mt-2.5 inline-flex w-full items-center justify-center gap-1 rounded-full bg-gradient-to-r from-nri-gold to-[#9a7a32] py-1.5 text-[0.7rem] font-semibold text-white shadow-md transition duration-200 group-hover:scale-[1.02] group-hover:shadow-lg group-active:scale-[0.99] sm:mt-3 sm:gap-1.5 sm:py-2 sm:text-xs"
                    tabIndex={-1}
                  >
                    <Sparkles className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
                    Get Started Today
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      )}
    </>
  )
}
