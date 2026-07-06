import { useLayoutEffect } from 'react'
import { gsap } from './gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : () => {}

/**
 * Subtle scroll parallax. Moves the element on Y as it passes through the
 * viewport. The element should sit inside an `overflow-hidden` parent and be
 * sized slightly larger (e.g. scale-110) to avoid gaps. Disabled under
 * reduced motion.
 */
export function useParallax(ref, { intensity = 0.12, start = 'top bottom', end = 'bottom top' } = {}) {
  const reduce = useReducedMotion()

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el || reduce) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { yPercent: -intensity * 100 },
        {
          yPercent: intensity * 100,
          ease: 'none',
          scrollTrigger: { trigger: el, start, end, scrub: true },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [reduce, intensity, start, end])

  return ref
}

export default useParallax
