import { useEffect, useRef, useState } from 'react'

export function useCounter(target, suffix = '', duration = 2000) {
  const [value, setValue] = useState('0' + suffix)
  const ref = useRef(null)
  const counted = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counted.current) {
          counted.current = true
          const isDecimal = target % 1 !== 0
          const step = target / (duration / 16)
          let current = 0
          const timer = setInterval(() => {
            current += step
            if (current >= target) {
              current = target
              clearInterval(timer)
            }
            const display = isDecimal
              ? current.toFixed(1) + suffix
              : Math.floor(current).toLocaleString() + suffix
            setValue(display)
          }, 16)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, suffix, duration])

  return { ref, value }
}

