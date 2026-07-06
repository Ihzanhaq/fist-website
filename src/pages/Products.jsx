import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Seo from '@/components/Seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import SmartImage from '@/components/SmartImage'
import PageHeader from '@/sections/shared/PageHeader'
import CtaBand from '@/sections/shared/CtaBand'
import { seo } from '@/data/seo'
import { flagshipProducts, widerSuite } from '@/data/products'
import { cta } from '@/data/site'
import { productImage, images } from '@/data/images'

export default function Products() {
  return (
    <>
      <Seo {...seo.products} path="/products" />

      <PageHeader
        eyebrow="Products"
        title="A purpose-built product suite that shortens time-to-value."
        intro="These are FIST’s own platforms — built, hardened and deployed in production. Lead with the flagships: DRONA, ATTO, FiGIS and SEAL."
        image={images.heroAlt}
      />

      {/* Flagship products */}
      <Section>
        <div className="space-y-24 md:space-y-32">
          {flagshipProducts.map((p, i) => (
            <div key={p.slug} className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <Reveal className={i % 2 === 1 ? 'lg:order-2' : ''}>
                <SmartImage
                  src={productImage(p.slug)}
                  alt={`${p.name} — ${p.kicker}`}
                  ratio="aspect-[4/3]"
                  className="rounded-3xl border border-line"
                />
              </Reveal>

              <div className={i % 2 === 1 ? 'lg:order-1' : ''}>
                <Reveal>
                  <Eyebrow>{p.kicker}</Eyebrow>
                </Reveal>
                <SplitHeading className="mt-5 text-title text-ink">{p.name}</SplitHeading>
                <Reveal delay={0.1} className="mt-4 text-lg text-muted">
                  <p>{p.tagline}</p>
                </Reveal>

                {p.capabilities && (
                  <Reveal delay={0.15} selector="ul > *" stagger={0.06}>
                    <ul className="mt-6 space-y-2.5">
                      {p.capabilities.map((c) => (
                        <li key={c} className="flex items-start gap-2.5 text-sm text-ink">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                          {c}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}

                {p.modules && (
                  <Reveal delay={0.15} className="mt-6">
                    <p className="text-xs uppercase tracking-[0.18em] text-faint">Modules</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {p.modules.map((m) => (
                        <span
                          key={m.code}
                          className="rounded-full border border-line bg-surface px-3 py-1.5 text-xs"
                        >
                          <span className="font-semibold text-accent">{m.code}</span>
                          <span className="text-muted"> · {m.label}</span>
                        </span>
                      ))}
                    </div>
                  </Reveal>
                )}

                {p.proof && (
                  <Reveal delay={0.2} className="mt-7 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-6">
                    {p.proof.map((pr) => (
                      <div key={pr.label}>
                        <p className="font-display text-xl font-semibold text-ink">{pr.value}</p>
                        <p className="text-xs text-muted">{pr.label}</p>
                      </div>
                    ))}
                  </Reveal>
                )}

                <Reveal delay={0.2} className="mt-8 flex flex-wrap items-center gap-3">
                  <Button to={cta.demo.to} magnetic withArrow>
                    {cta.demo.label}
                  </Button>
                  <Link
                    to={`/products/${p.slug}`}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
                  >
                    View details
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </Reveal>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Wider suite */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>The wider suite</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              One platform family, across the whole operation.
            </SplitHeading>
          </div>
          <Reveal
            selector="[data-suite] > *"
            stagger={0.06}
            className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
            data-suite
          >
            {widerSuite.map((p) => (
              <div key={p.name} className="bg-surface p-7 transition-colors duration-300 hover:bg-surface-2">
                <h3 className="font-display text-lg font-semibold text-ink">{p.name}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.body}</p>
              </div>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="See DRONA, FiGIS or SEAL on your own data."
        body="Book a personalised demo and we’ll walk you through the platform against a real workflow from your team."
        buttonLabel={cta.demo.label}
        buttonTo={cta.demo.to}
      />
    </>
  )
}
