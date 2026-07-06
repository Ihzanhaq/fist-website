import { useLayoutEffect, useRef } from 'react'
import { gsap } from '@/animations/gsap'
import Container from '@/components/Container'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'
import VideoBackground from '@/components/VideoBackground'
import { useReducedMotion } from '@/hooks/useReducedMotion'
import { cta } from '@/data/site'
import { images } from '@/data/images'

const useIsoLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => {}

export default function Hero() {
  const reduce = useReducedMotion()
  const root = useRef(null)
  const headingRef = useRef(null)

  useIsoLayoutEffect(() => {
    if (reduce) return
    const ctx = gsap.context(() => {
      const lines = headingRef.current.querySelectorAll('[data-line]')
      gsap.from(lines, {
        yPercent: 120,
        duration: 1,
        ease: 'power4.out',
        stagger: 0.11,
        delay: 0.15,
      })
    }, root)
    return () => ctx.revert()
  }, [reduce])

  return (
    <section
      ref={root}
      className="relative flex min-h-svh items-center overflow-hidden"
    >
      {/* Background video + legibility scrims.
          Local /compressed_hero.mp4 is used first (fast); falls back to the
          remote Pexels source automatically. */}
      <VideoBackground sources={['/compressed_hero.mp4', images.heroVideo]} poster={images.hero} />
      {/* Content scrim for the white heading. Fades to a FIXED dark color
          (not the theme canvas) so the hero reads identically in light and
          dark mode — no light "smoke" bleeding in at the bottom in light mode. */}
      <div
        className="absolute inset-0 bg-linear-to-b from-black/20 via-black/55 to-[#0a0a0b]"
        aria-hidden="true"
      />
      {/* Nav-legibility band: dark at the very top so the transparent navbar's
          light chrome stays readable over the video in both themes. */}
      <div
        className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-[#0a0a0b] to-transparent"
        aria-hidden="true"
      />

      <Container className="relative w-full py-32 pt-40 md:pt-44">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
              <span className="h-px w-7 bg-accent" aria-hidden="true" />
              AI · GIS · ERP — built for scale
            </span>
          </Reveal>

          <h1
            ref={headingRef}
            className="mt-6 font-display text-hero font-semibold tracking-tight text-white"
          >
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-line className="block">
                Intelligent software
              </span>
            </span>
            <span className="block overflow-hidden pb-[0.06em]">
              <span data-line className="block">
                that moves your business —
              </span>
            </span>
            <span className="block overflow-hidden">
              <span data-line className="block">
                <span className="text-accent">fast, secure</span> &amp; built to scale.
              </span>
            </span>
          </h1>

          <Reveal
            delay={0.35}
            className="mt-7 max-w-xl text-base leading-relaxed text-white/80 md:text-lg"
          >
            <p>
              FIST Innovations builds AI automation, geospatial intelligence and cloud-native
              enterprise systems for banks, governments and enterprises — from MVP to
              nation-scale. Since 2020, 140+ projects delivered across India, the GCC and Europe.
            </p>
          </Reveal>

          <Reveal delay={0.5} className="mt-9 flex flex-wrap items-center gap-3">
            <Button to={cta.discovery.to} size="lg" magnetic withArrow>
              {cta.discovery.label}
            </Button>
            <Button to={cta.explore.to} size="lg" variant="secondary">
              {cta.explore.label}
            </Button>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
