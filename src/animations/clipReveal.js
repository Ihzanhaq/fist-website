import { useLayoutEffect } from 'react'
import { gsap } from './gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : () => {}

/**
 * Cinematic clip-path reveal for media wrappers. The element is clipped from
 * the bottom up, then opens to full while a slight scale settles. Pair with a
 * container that has `overflow-hidden`. Disabled under reduced motion.
 */
export function useClipReveal(ref, { delay = 0, start = 'top 85%', once = true } = {}) {
  const reduce = useReducedMotion()

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduce) {
      gsap.set(el, { clearProps: 'clipPath,scale,opacity' })
      return
    }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { clipPath: 'inset(100% 0% 0% 0%)', scale: 1.08 },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          scale: 1,
          duration: 1.2,
          delay,
          ease: 'power4.out',
          scrollTrigger: { trigger: el, start, once },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [reduce, delay, start, once])

  return ref
}

export default useClipReveal
