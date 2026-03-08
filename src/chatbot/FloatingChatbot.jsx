import React, { useEffect, useRef, useState } from 'react'
import { getAssistantResponse } from '../utils/chatbotLogic'

const FloatingChatbot = () => {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    {
      id: 1,
      from: 'bot',
      text: "Hi! I'm NVR Assistant. How can I help you?",
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const chatEndRef = useRef(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, typing, open])

  const handleSend = async () => {
    const trimmed = input.trim()
    if (!trimmed) return

    const userMsg = {
      id: Date.now(),
      from: 'user',
      text: trimmed,
    }
    setMessages((prev) => [...prev, userMsg])
    setInput('')
    setTyping(true)

    const finalAnswer = getAssistantResponse(trimmed)

    setMessages((prev) => [
      ...prev,
      {
        id: Date.now() + 1,
        from: 'bot',
        text: finalAnswer,
      },
    ])
    setTyping(false)
  }

  const handleKey = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-accent shadow-soft border border-slate-700"
        aria-label="Open chatbot"
      >
        {open ? '✕' : '💬'}
      </button>

      <div
        className={`fixed bottom-20 right-6 z-40 w-80 max-w-[90vw] transform transition-all duration-300 ${
          open
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : 'translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col rounded-2xl bg-slate-900 border border-slate-700 shadow-soft overflow-hidden">
          <div className="flex items-center justify-between px-4 py-3 bg-slate-950 border-b border-slate-800">
            <div>
              <p className="text-sm font-semibold text-slate-50">
                NVR Assistant
              </p>
              <p className="text-[11px] text-slate-400">
                Ask about services, pricing &amp; timelines
              </p>
            </div>
            <span className="text-xs rounded-full bg-green-500/10 px-2 py-0.5 text-green-400">
              Online
            </span>
          </div>

          <div className="flex-1 max-h-80 overflow-y-auto px-3 py-3 space-y-2 text-sm bg-gradient-to-b from-slate-900 to-slate-950">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${
                  msg.from === 'user' ? 'justify-end' : 'justify-start'
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-3 py-2 ${
                    msg.from === 'user'
                      ? 'bg-accent text-slate-900 rounded-br-sm'
                      : 'bg-slate-800 text-slate-100 rounded-bl-sm'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {typing ? (
              <div className="flex justify-start">
                <div className="flex items-center gap-1 rounded-2xl bg-slate-800 px-3 py-2 text-slate-300">
                  <span className="text-xs">NVR Assistant is typing</span>
                  <span className="flex gap-0.5">
                    <span className="h-1 w-1 rounded-full bg-slate-400 animate-bounce" />
                    <span className="h-1 w-1 rounded-full bg-slate-500 animate-bounce delay-75" />
                    <span className="h-1 w-1 rounded-full bg-slate-600 animate-bounce delay-150" />
                  </span>
                </div>
              </div>
            ) : null}
            <div ref={chatEndRef} />
          </div>

          <div className="border-t border-slate-800 p-2 bg-slate-950">
            <textarea
              rows={1}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question..."
              className="w-full resize-none rounded-xl bg-slate-900 px-3 py-2 text-xs text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-1 focus:ring-accent"
            />
            <div className="mt-2 flex items-center justify-between">
              <span className="text-[10px] text-slate-500">
                NVR Assistant
              </span>
              <button
                type="button"
                onClick={handleSend}
                className="rounded-full bg-accent px-3 py-1 text-[11px] font-semibold text-slate-900 hover:bg-orange-500"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FloatingChatbot

