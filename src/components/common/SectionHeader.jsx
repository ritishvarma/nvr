import React from 'react'

const SectionHeader = ({ eyebrow, title, subtitle, align = 'left' }) => {
  const alignment =
    align === 'center' ? 'text-center items-center' : 'text-left items-start'

  return (
    <div className={`flex flex-col gap-2 ${alignment}`}>
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl md:text-3xl font-bold text-slate-50">{title}</h2>
      {subtitle ? (
        <p className="text-sm md:text-base text-slate-400 max-w-xl">
          {subtitle}
        </p>
      ) : null}
    </div>
  )
}

export default SectionHeader

