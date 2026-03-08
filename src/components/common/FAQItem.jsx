import React, { useState } from 'react'

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-slate-700 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="text-sm md:text-base font-medium text-slate-100">
          {question}
        </span>
        <span className="ml-4 text-accent text-xl">{open ? '−' : '+'}</span>
      </button>
      {open ? (
        <div className="px-4 pb-4 text-sm text-slate-300">{answer}</div>
      ) : null}
    </div>
  )
}

export default FAQItem

