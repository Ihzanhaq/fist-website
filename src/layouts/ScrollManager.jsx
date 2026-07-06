import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useLenis } from '@/hooks/useLenis'
import { lenisStore, scrollTo } from '@/hooks/lenisStore'

/**
 * Owns Lenis lifecycle and resets/restores scroll position on route changes.
 */
export default function ScrollManager() {
  useLenis()
  const { pathname, hash } = useLocation()

  useEffect(() => {
    // Allow the new page to mount before measuring anchors.
    const t = window.setTimeout(() => {
      if (hash) {
        scrollTo(hash, { offset: -88 })
      } else {
        const lenis = lenisStore.current
        if (lenis) lenis.scrollTo(0, { immediate: true })
        window.scrollTo(0, 0)
      }
    }, 0)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return null
}
