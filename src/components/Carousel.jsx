import { Children, useCallback, useEffect, useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useReducedMotion } from '@/hooks/useReducedMotion'

/**
 * Coverflow-style carousel: one large card center-stage, with smaller, angled
 * cards fanned out to the left and right. Auto-advances every `autoInterval`
 * ms, pauses on hover/focus, and cycles through all slides.
 *
 * Accessible: prev/next buttons + dot indicators drive navigation (arrow keys
 * when focused); side cards are decorative (aria-hidden). Auto-advance is
 * disabled under reduced-motion; the global CSS neutralizes the transition.
 */
export default function Carousel({
  children,
  ariaLabel = 'Carousel',
  autoInterval = 4000,
  className = '',
}) {
  const slides = Children.toArray(children)
  const count = slides.length
  const [index, setIndex] = useState(0)
  const [slotStep, setSlotStep] = useState(30)
  const reduce = useReducedMotion()
  const paused = useRef(false)
  const trackRef = useRef(null)

  const go = useCallback((n) => setIndex(((n % count) + count) % count), [count])
  const next = useCallback(() => setIndex((i) => (i + 1) % count), [count])
  const prev = useCallback(() => setIndex((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    if (reduce || count <= 1) return
    const id = window.setInterval(() => {
      if (!paused.current) setIndex((i) => (i + 1) % count)
    }, autoInterval)
    return () => window.clearInterval(id)
  }, [reduce, count, autoInterval])

  // Derive fan spacing from the active card width so side cards sit flush
  // (fixed offsets left visible gaps between the 2nd and 3rd cards per side).
  useEffect(() => {
    const el = trackRef.current
    if (!el) return

    const update = () => {
      const w = el.offsetWidth
      const cardWidthPct = w >= 1024 ? 40 : w >= 640 ? 50 : 68
      const half = (scale) => (cardWidthPct * scale) / 2
      // Base step keeps adjacent cards touching; extra spread fans them outward.
      setSlotStep(half(0.82) + half(0.66) + 18)
    }

    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  // Shortest circular distance from slide i to the active index.
  const offsetOf = (i) => {
    let d = i - index
    if (d > count / 2) d -= count
    if (d < -count / 2) d += count
    return d
  }

  const cardStyle = (d) => {
    const abs = Math.abs(d)
    const scale = abs === 0 ? 1 : abs === 1 ? 0.82 : abs === 2 ? 0.66 : 0.5
    const xPct = d * slotStep
    const opacity = abs === 0 ? 1 : abs === 1 ? 0.7 : abs === 2 ? 0.3 : 0
    return {
      transform: `translate(calc(-50% + ${xPct}%), -50%) scale(${scale}) rotateY(${d * -16}deg)`,
      opacity,
      zIndex: 30 - abs,
      pointerEvents: opacity === 0 ? 'none' : 'auto',
    }
  }

  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') {
      e.preventDefault()
      next()
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault()
      prev()
    }
  }

  if (count === 0) return null

  return (
    <div
      className={className}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
      onMouseEnter={() => (paused.current = true)}
      onMouseLeave={() => (paused.current = false)}
      onFocusCapture={() => (paused.current = true)}
      onBlurCapture={() => (paused.current = false)}
    >
      <div
        ref={trackRef}
        className="relative h-115 w-full outline-none sm:h-130 md:h-145 lg:h-150"
        style={{ perspective: '1400px' }}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-label={`Slide ${index + 1} of ${count}`}
      >
        {slides.map((slide, i) => {
          const d = offsetOf(i)
          const isActive = d === 0
          return (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 aspect-4/5 w-[68%] cursor-pointer transition-[transform,opacity] duration-700 ease-out sm:w-[50%] lg:w-[40%]"
              style={cardStyle(d)}
              onClick={() => !isActive && go(i)}
              aria-hidden={isActive ? undefined : 'true'}
              role="group"
              aria-roledescription="slide"
              aria-label={isActive ? `${slides[index].props?.name || `Slide ${i + 1}`} — ${i + 1} of ${count}` : undefined}
            >
              {slide}
            </div>
          )
        })}
      </div>

      {count > 1 && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            type="button"
            onClick={prev}
            aria-label="Previous slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent/60 hover:text-accent"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-2" role="tablist" aria-label="Choose slide">
            {slides.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={i === index}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => go(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === index ? 'w-6 bg-accent' : 'w-2 bg-line hover:bg-faint'
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Next slide"
            className="grid h-10 w-10 place-items-center rounded-full border border-line text-ink transition-colors hover:border-accent/60 hover:text-accent"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      )}
    </div>
  )
}
