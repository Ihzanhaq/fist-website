import { useLayoutEffect } from 'react'
import SplitType from 'split-type'
import { gsap } from './gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : () => {}

/**
 * Staggered word reveal for headings (SplitType). Breakpoint-safe: animates
 * words (not lines), so re-flow at different widths never breaks the mask.
 * Disabled under reduced motion.
 */
export function useSplitReveal(
  ref,
  { delay = 0, stagger = 0.035, duration = 0.9, start = 'top 88%', once = true } = {}
) {
  const reduce = useReducedMotion()

  useIsoLayoutEffect(() => {
    const el = ref.current
    if (!el) return

    if (reduce) return

    const split = new SplitType(el, { types: 'words' })
    el.setAttribute('data-split', '')

    const ctx = gsap.context(() => {
      gsap.set(split.words, { yPercent: 120, opacity: 0 })
      gsap.to(split.words, {
        yPercent: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: 'power4.out',
        scrollTrigger: { trigger: el, start, once },
      })
    }, el)

    return () => {
      ctx.revert()
      split.revert()
      el.removeAttribute('data-split')
    }
  }, [reduce, delay, stagger, duration, start, once])

  return ref
}

export default useSplitReveal
