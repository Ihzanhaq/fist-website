import { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { nav, cta, social } from '@/data/site'
import { useLockBody } from '@/hooks/useLockBody'
import Logo from './Logo'
import Button from './Button'
import ThemeToggle from './ThemeToggle'

const EASE = [0.16, 1, 0.3, 1]

export default function MobileMenu({ open, onClose }) {
  useLockBody(open)
  const closeBtnRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    closeBtnRef.current?.focus()
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          className="fixed inset-0 z-[60] md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <div className="absolute inset-0 bg-canvas/95 backdrop-blur-xl" onClick={onClose} aria-hidden="true" />
          <motion.div
            className="relative flex h-full flex-col p-6 text-ink"
            initial={{ y: -16 }}
            animate={{ y: 0 }}
            exit={{ y: -16 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <div className="flex items-center justify-between">
              <Logo />
              <div className="flex items-center gap-2">
                <ThemeToggle />
                <button
                  ref={closeBtnRef}
                  type="button"
                  aria-label="Close menu"
                  onClick={onClose}
                  className="grid h-9 w-9 place-items-center rounded-full border border-line text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            <nav className="mt-10 flex flex-col" aria-label="Mobile">
              {nav.map((item, i) => (
                <motion.div
                  key={item.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * i + 0.1, duration: 0.4, ease: EASE }}
                >
                  <NavLink
                    to={item.to}
                    end={item.to === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `block border-b border-line py-4 font-display text-2xl ${
                        isActive ? 'text-accent' : 'text-ink'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto flex flex-col gap-5 pt-8">
              <Button to={cta.meeting.to} onClick={onClose} size="lg" withArrow>
                {cta.meeting.label}
              </Button>
              <div className="flex gap-5 text-sm text-muted">
                {social.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-accent"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
