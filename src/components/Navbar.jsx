import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import Button from './Button'
import MobileMenu from './MobileMenu'
import { nav, cta } from '@/data/site'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // The transparent (un-scrolled) header floats over a dark hero/header image,
  // so its chrome uses a fixed LIGHT treatment in BOTH themes. Once scrolled it
  // picks up the themed canvas background and theme text colors. (Logo inherits
  // the header's text color, so text-white / text-ink drives it too.)
  const linkTone = scrolled
    ? { active: 'text-ink', idle: 'text-muted hover:text-ink' }
    : { active: 'text-white', idle: 'text-white/70 hover:text-white' }

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter,color] duration-300 ${
        scrolled
          ? 'border-b border-line bg-canvas/80 text-ink backdrop-blur-xl'
          : 'border-b border-transparent text-white'
      }`}
    >
      <Container className="flex h-16 items-center justify-between md:h-20">
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `group relative px-3.5 py-2 text-sm transition-colors duration-200 after:absolute after:bottom-1.5 after:left-3.5 after:h-px after:w-[calc(100%-1.75rem)] after:origin-left after:scale-x-0 after:transition-transform after:duration-300 after:ease-out after:content-[''] ${
                  scrolled ? 'after:bg-accent' : 'after:bg-white'
                } ${
                  isActive
                    ? `after:scale-x-100 ${linkTone.active}`
                    : `${linkTone.idle} hover:after:scale-x-100`
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle overMedia={!scrolled} className="hidden sm:grid" />
          <Button
            to={cta.meeting.to}
            size="sm"
            magnetic
            variant={scrolled ? 'primary' : 'onMedia'}
            className="hidden sm:inline-flex"
          >
            {cta.meeting.label}
          </Button>
          <button
            type="button"
            className={`grid h-9 w-9 place-items-center rounded-full border md:hidden ${
              scrolled ? 'border-line text-ink' : 'border-white/30 text-white'
            }`}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </Container>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </header>
  )
}
