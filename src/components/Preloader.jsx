import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useReducedMotion } from '@/hooks/useReducedMotion'

const EASE = [0.16, 1, 0.3, 1]

/**
 * Brief cinematic entrance overlay, shown once per browser session.
 * Skipped entirely under reduced motion.
 */
export default function Preloader() {
  const reduce = useReducedMotion()
  const [show, setShow] = useState(() => {
    if (reduce) return false
    try {
      return !sessionStorage.getItem('fist-intro')
    } catch {
      return false
    }
  })

  useEffect(() => {
    if (!show) return
    const t = window.setTimeout(() => {
      setShow(false)
      try {
        sessionStorage.setItem('fist-intro', '1')
      } catch {
        /* ignore */
      }
    }, 1500)
    return () => window.clearTimeout(t)
  }, [show])

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[100] grid place-items-center overflow-hidden bg-canvas"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: EASE }}
          aria-hidden="true"
        >
          <div className="overflow-hidden">
            <motion.span
              className="block font-display text-5xl font-bold tracking-tight text-ink md:text-6xl"
              initial={{ y: '110%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              FIST
            </motion.span>
          </div>
          <motion.div
            className="absolute bottom-0 left-0 h-px bg-accent"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.3, ease: 'easeInOut' }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  )
}
