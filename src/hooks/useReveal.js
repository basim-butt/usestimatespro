import { useEffect, useRef } from 'react'

export function useReveal(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

export function useStagger(options = {}) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) el.classList.add('visible') },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px', ...options }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}

