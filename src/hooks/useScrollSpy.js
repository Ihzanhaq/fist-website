import { useEffect, useState } from 'react'

/**
 * Tracks which element (by ref) is currently in view, returning its index.
 * Robust alternative to GSAP pinning for sticky-storytelling layouts.
 */
export function useScrollSpy(refs, { rootMargin = '-45% 0px -50% 0px', threshold = 0 } = {}) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const els = refs.map((r) => r.current).filter(Boolean)
    if (!els.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = els.indexOf(entry.target)
            if (idx !== -1) setActive(idx)
          }
        })
      },
      { rootMargin, threshold }
    )

    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [refs, rootMargin, threshold])

  return active
}

export default useScrollSpy
