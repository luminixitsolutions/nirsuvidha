"use client"

import { useCallback, useEffect, useRef } from "react"
import { X, Send, Mic } from "lucide-react"

export type ChatMessage = {
  id: string
  role: "user" | "bot"
  text: string
}

type ChatPanelProps = {
  isOpen: boolean
  onClose: () => void
  messages: ChatMessage[]
  input: string
  onInput: (v: string) => void
  onSend: () => void
}

export function ChatPanel({
  isOpen,
  onClose,
  messages,
  input,
  onInput,
  onSend,
}: ChatPanelProps) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const scrollToBottom = useCallback(() => {
    const el = scrollRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: "smooth" })
  }, [messages.length])

  useEffect(() => {
    scrollToBottom()
  }, [scrollToBottom, messages])

  useEffect(() => {
    if (isOpen) {
      const t = window.setTimeout(() => inputRef.current?.focus(), 320)
      return () => window.clearTimeout(t)
    }
  }, [isOpen])

  useEffect(() => {
    if (isOpen) {
      const prev = document.body.style.overflow
      document.body.style.overflow = "hidden"
      return () => {
        document.body.style.overflow = prev
      }
    }
  }, [isOpen])

  const onKey = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      onSend()
    }
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[999] bg-slate-900/30 backdrop-blur-[2px] transition-all duration-300 ease-out"
        style={{
          opacity: isOpen ? 1 : 0,
          pointerEvents: isOpen ? "auto" : "none",
        }}
        aria-hidden={!isOpen}
        onClick={onClose}
      />
      <aside
        className="fixed z-[1000] flex h-full w-full max-w-full flex-col bg-nri-cream text-slate-800 shadow-2xl transition-all duration-300 ease-out [transition-timing-function:cubic-bezier(0.16,1,0.3,1)] sm:bottom-0 sm:left-auto sm:right-0 sm:top-0 sm:max-w-[min(100vw,400px)]"
        style={{
          transform: isOpen ? "translate3d(0,0,0)" : "translate3d(100%,0,0)",
          pointerEvents: isOpen ? "auto" : "none",
          boxShadow: isOpen
            ? "0 0 0 1px rgba(15,23,42,0.06), -12px 0 40px rgba(15,23,42,0.12)"
            : undefined,
        }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="nri-assistant-title"
      >
        <header className="shrink-0 border-b border-amber-900/10 bg-gradient-to-r from-nri-cream to-white/90 px-4 py-3.5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2
                id="nri-assistant-title"
                className="text-sm font-semibold tracking-tight text-slate-900"
              >
                NRI Suvidha Assistant
              </h2>
              <div className="mt-0.5 flex items-center gap-1.5 text-xs text-slate-500">
                <span className="inline-flex h-1.5 w-1.5 items-center justify-center" aria-hidden>
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 shadow-[0_0_0_2px_rgba(16,185,129,0.35)]" />
                </span>
                <span>Online</span>
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 items-center justify-center rounded-full text-slate-500 transition hover:bg-amber-900/10 hover:text-slate-800 focus:outline-none focus:ring-2 focus:ring-nri-gold/50"
              aria-label="Close chat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </header>

        <div
          ref={scrollRef}
          className="min-h-0 flex-1 space-y-3 overflow-y-auto overscroll-contain bg-[linear-gradient(180deg,#f8f2ee_0%,#fdfbf7_32%,#fff_100%)] px-4 py-4"
        >
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex animate-message-in ${
                m.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-[88%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "bg-gradient-to-br from-nri-gold to-[#a8893a] text-white"
                    : "border border-amber-900/10 bg-white/95 text-slate-700"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}
        </div>

        <div className="shrink-0 border-t border-amber-900/10 bg-nri-cream/95 p-3 backdrop-blur-sm">
          <div className="flex items-end gap-2">
            <button
              type="button"
              className="mb-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-amber-900/10 hover:text-nri-gold focus:outline-none focus:ring-2 focus:ring-nri-gold/30"
              aria-label="Voice input (demo only)"
            >
              <Mic className="h-4 w-4" />
            </button>
            <div className="flex min-w-0 flex-1 items-center gap-1 rounded-2xl border border-amber-900/12 bg-white px-3 py-1.5 shadow-sm focus-within:ring-2 focus-within:ring-nri-gold/30">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => onInput(e.target.value)}
                onKeyDown={onKey}
                placeholder="Type your message…"
                className="w-full min-w-0 border-0 bg-transparent py-2 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-0"
                autoComplete="off"
                disabled={!isOpen}
              />
            </div>
            <button
              type="button"
              onClick={onSend}
              disabled={!input.trim()}
              className="mb-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-nri-gold to-[#9a7a30] text-white shadow-md transition hover:brightness-105 focus:outline-none focus:ring-2 focus:ring-nri-gold/50 disabled:cursor-not-allowed disabled:opacity-40"
              aria-label="Send message"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
          <p className="mt-2 text-center text-[0.65rem] text-slate-400">
            This is a demo. Responses are simulated and not from a real advisor.
          </p>
        </div>
      </aside>
    </>
  )
}
