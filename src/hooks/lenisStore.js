/**
 * Module-level Lenis singleton. ScrollManager owns the instance lifecycle;
 * other modules (useLockBody, anchor links) read/stop it from here.
 */
export const lenisStore = { current: null }

/**
 * Smooth-scroll to a selector, element, or y-offset, with a header offset.
 * Falls back to native smooth scroll when Lenis isn't running (reduced motion).
 */
export function scrollTo(target, options = {}) {
  const lenis = lenisStore.current
  const offset = options.offset ?? -88

  if (lenis) {
    lenis.scrollTo(target, { offset, duration: 1.2, ...options })
    return
  }

  let top = 0
  if (typeof target === 'number') top = target
  else if (typeof target === 'string' && target.startsWith('#')) {
    const el = document.querySelector(target)
    if (el) top = el.getBoundingClientRect().top + window.scrollY + offset
  } else if (target instanceof HTMLElement) {
    top = target.getBoundingClientRect().top + window.scrollY + offset
  }
  window.scrollTo({ top, behavior: options.immediate ? 'auto' : 'smooth' })
}
