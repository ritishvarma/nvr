import React, { useEffect, useState } from 'react'
import { useInViewOnce } from '../../hooks/useInViewOnce'

const StatCounter = ({ value, label, suffix = '' }) => {
  const { ref, inView } = useInViewOnce()
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()

    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const current = value * progress
      setDisplay(value < 10 ? current.toFixed(1) : Math.round(current))
      if (progress < 1) requestAnimationFrame(step)
    }

    requestAnimationFrame(step)
  }, [inView, value])

  return (
    <div ref={ref} className="flex flex-col items-start gap-1">
      <p className="text-3xl md:text-4xl font-extrabold text-accent">
        {display}
        {suffix}
      </p>
      <p className="text-sm text-slate-300">{label}</p>
    </div>
  )
}

export default StatCounter

