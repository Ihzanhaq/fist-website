import { useLayoutEffect } from 'react'
import { gsap } from './gsap'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const useIsoLayoutEffect =
  typeof window !== 'undefined' ? useLayoutEffect : () => {}

/**
 * Scroll-triggered reveal. Animates the ref element, or its descendants
 * matching `selector`, with an optional stagger. Uses useLayoutEffect so the
 * start state is applied before first paint (no flash of un-animated content).
 * Disabled under reduced motion (content shown immediately).
 */
export function useReveal(
  ref,
  {
    selector = null,
    y = 28,
    delay = 0,
    stagger = 0.08,
    duration = 0.9,
    start = 'top 85%',
    once = true,
  } = {}
) {
  const reduce = useReducedMotion()

  useIsoLayoutEffect(() => {
    const root = ref.current
    if (!root) return
    const targets = selector ? Array.from(root.querySelectorAll(selector)) : [root]
    if (!targets.length) return

    if (reduce) {
      gsap.set(targets, { opacity: 1, y: 0, clearProps: 'opacity,transform' })
      return
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, { opacity: 0, y })
      gsap.to(targets, {
        opacity: 1,
        y: 0,
        duration,
        delay,
        stagger,
        ease: 'power3.out',
        scrollTrigger: { trigger: root, start, once },
      })
    }, root)

    return () => ctx.revert()
  }, [reduce, selector, y, delay, stagger, duration, start, once])

  return ref
}

export default useReveal
