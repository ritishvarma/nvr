import { useEffect, useRef, useState } from 'react'

export const useInViewOnce = (options = { threshold: 0.2 }) => {
  const [inView, setInView] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true)
        observer.disconnect()
      }
    }, options)

    observer.observe(node)

    return () => observer.disconnect()
  }, [options])

  return { ref, inView }
}

