import { useMemo } from 'react'
import Seo from '@/components/Seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'
import PageHeader from '@/sections/shared/PageHeader'
import CtaBand from '@/sections/shared/CtaBand'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { scrollTo } from '@/hooks/lenisStore'
import { seo } from '@/data/seo'
import { services, migrationSteps } from '@/data/services'
import { cta } from '@/data/site'
import { images } from '@/data/images'

export default function Services() {
  const refs = useMemo(() => services.map(() => ({ current: null })), [])
  const active = useScrollSpy(refs)

  return (
    <>
      <Seo {...seo.services} path="/services" />

      <PageHeader
        eyebrow="Services & capabilities"
        title="Eleven capabilities. One accountable partner."
        intro="From AI orchestration to cloud migration, we own the outcome end-to-end. Each capability below is framed by the business result it delivers."
        image={images.servicesHero}
      />

      {/* Capabilities — sticky index */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Sticky rail */}
          <aside className="hidden lg:col-span-4 lg:block">
            <div className="sticky top-28">
              <Eyebrow>Capabilities</Eyebrow>
              <div className="mt-8 flex items-baseline gap-3">
                <span className="font-display text-6xl font-semibold tabular-nums text-accent">
                  {services[active].no}
                </span>
                <span className="text-sm text-faint">of {services.length}</span>
              </div>
              <h3 className="mt-3 max-w-xs font-display text-xl font-semibold text-ink">
                {services[active].title}
              </h3>

              <ul className="mt-8 space-y-0.5 border-l border-line">
                {services.map((s, i) => (
                  <li key={s.no}>
                    <button
                      type="button"
                      onClick={() => scrollTo(`#svc-${s.no}`)}
                      className={`-ml-px block border-l-2 py-1.5 pl-4 text-left text-sm transition-colors ${
                        i === active
                          ? 'border-accent text-ink'
                          : 'border-transparent text-muted hover:text-ink'
                      }`}
                    >
                      <span className="mr-2 tabular-nums text-faint">{s.no}</span>
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Flowing list */}
          <div className="space-y-12 lg:col-span-8 lg:space-y-20">
            {services.map((s, i) => (
              <article
                key={s.no}
                id={`svc-${s.no}`}
                ref={(el) => {
                  refs[i].current = el
                }}
                className="grid scroll-mt-28 gap-4 border-t border-line pt-8 sm:grid-cols-[auto_1fr] sm:gap-10"
              >
                <span className="font-display text-2xl font-semibold tabular-nums text-faint">
                  {s.no}
                </span>
                <div>
                  <Reveal>
                    <h3 className="font-display text-2xl font-semibold text-ink">{s.title}</h3>
                  </Reveal>
                  <Reveal delay={0.05}>
                    <p className="mt-3 max-w-2xl text-muted">{s.body}</p>
                  </Reveal>
                  <Reveal delay={0.1} className="mt-4 flex flex-wrap gap-2">
                    {s.solutions.map((sol) => (
                      <span
                        key={sol}
                        className="rounded-full border border-line bg-surface px-3 py-1 text-xs text-muted"
                      >
                        {sol}
                      </span>
                    ))}
                  </Reveal>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>

      {/* ERP migration method */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>ERP migration method</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              Legacy to cloud-native — without disruption.
            </SplitHeading>
            <Reveal delay={0.1} className="mt-5 text-muted">
              <p>
                A phased method that keeps the business running: <strong className="text-ink">zero downtime, 100% data reconciliation.</strong>
              </p>
            </Reveal>
          </div>

          <Reveal
            selector="[data-steps] > *"
            stagger={0.1}
            className="mt-14 grid gap-4 sm:grid-cols-3 lg:grid-cols-5"
            data-steps
          >
            {migrationSteps.map((m, i) => (
              <div key={m.step} className="relative rounded-2xl border border-line bg-surface p-6">
                <span className="font-display text-sm font-semibold tabular-nums text-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 font-display text-lg font-semibold text-ink">{m.step}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted">{m.detail}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Not sure where to start?"
        title="Get a free assessment."
        body="Tell us the process that hurts most. We’ll map the right capability to it — and show the payback on your volumes."
        buttonLabel={cta.assessment.label}
        buttonTo={cta.assessment.to}
      />
    </>
  )
}
