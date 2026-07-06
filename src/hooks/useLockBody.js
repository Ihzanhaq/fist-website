import { useEffect } from 'react'
import { lenisStore } from './lenisStore'

/** Locks page scroll while `locked` is true (mobile menu, modals). */
export function useLockBody(locked) {
  useEffect(() => {
    if (!locked) return

    const lenis = lenisStore.current
    lenis?.stop()

    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = overflow
      lenis?.start()
    }
  }, [locked])
}

export default useLockBody
