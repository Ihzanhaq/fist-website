import { useEffect } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useReducedMotion } from './useReducedMotion'
import { lenisStore } from './lenisStore'

gsap.registerPlugin(ScrollTrigger)

/**
 * Initialises Lenis smooth scroll and wires it into the GSAP ticker so
 * ScrollTrigger stays in sync. Disabled entirely under reduced-motion
 * (native scroll used instead). Mounted once by ScrollManager.
 */
export function useLenis() {
  const reduce = useReducedMotion()

  useEffect(() => {
    if (reduce) {
      lenisStore.current = null
      return
    }

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 1.6,
    })
    lenisStore.current = lenis

    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    const raf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(raf)
    gsap.ticker.lagSmoothing(0)

    // Recalculate trigger positions once fonts/layout settle.
    const refresh = () => ScrollTrigger.refresh()
    window.addEventListener('load', refresh)
    const refreshTimer = window.setTimeout(refresh, 600)

    return () => {
      window.removeEventListener('load', refresh)
      window.clearTimeout(refreshTimer)
      gsap.ticker.remove(raf)
      lenis.off('scroll', onScroll)
      lenis.destroy()
      lenisStore.current = null
    }
  }, [reduce])
}

export default useLenis
