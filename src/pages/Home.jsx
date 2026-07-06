import { Fragment } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '@/components/Seo'
import Container from '@/components/Container'
import Section from '@/components/Section'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'
import Card from '@/components/Card'
import Button from '@/components/Button'
import SmartImage from '@/components/SmartImage'
import Hero from '@/sections/home/Hero'
import TrustBand from '@/sections/shared/TrustBand'
import CtaBand from '@/sections/shared/CtaBand'
import { seo } from '@/data/seo'
import { flagshipProducts, widerSuite } from '@/data/products'
import { industries } from '@/data/industries'
import { images } from '@/data/images'

const pillars = [
  {
    title: 'AI & Automation',
    body: 'Automate document-heavy, repetitive work with DRONA — 98.5% OCR accuracy and up to 60% lower processing cost.',
    to: '/products',
    image: images.pillarAi,
  },
  {
    title: 'GIS & Geospatial',
    body: 'Turn roads, pipelines, forests, assets and collateral into live, decision-ready maps with FiGIS.',
    to: '/products/figis',
    image: images.pillarGis,
  },
  {
    title: 'Enterprise ERP & Cloud',
    body: 'Unify operations on one cloud-native ERP — and migrate off legacy with zero downtime and 100% data reconciliation.',
    to: '/services',
    image: images.pillarErp,
  },
]

const reasons = [
  {
    title: 'End-to-end ownership.',
    body: 'Strategy, engineering, deployment and support under one roof.',
  },
  {
    title: 'Proven where it’s hard.',
    body: 'Delivered across regulated banking and government environments — not just MVPs.',
  },
  {
    title: 'A real product suite.',
    body: 'DRONA, ATTO, FiGIS, SEAL and more shorten time-to-value from months to weeks.',
  },
]

export default function Home() {
  return (
    <>
      <Seo {...seo.home} path="/" />

      <Hero />
      <TrustBand />

      {/* What we do — three pillars */}
      <Section id="what-we-do">
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>What we do</Eyebrow>
          </Reveal>
          <SplitHeading className="mt-6 text-headline text-ink">
            Three ways we turn slow, manual operations into measurable results.
          </SplitHeading>
        </div>

        <Reveal
          selector="[data-grid] > *"
          stagger={0.12}
          className="mt-14 grid gap-6 md:grid-cols-3"
          data-grid
        >
          {pillars.map((p) => (
            <Card key={p.title} hover className="group overflow-hidden">
              <SmartImage
                src={p.image}
                alt=""
                ratio="aspect-[16/10]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.body}</p>
                <Link
                  to={p.to}
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-accent"
                >
                  Learn more
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </Card>
          ))}
        </Reveal>
      </Section>

      {/* Why FIST */}
      <Section className="border-y border-line bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Why FIST</Eyebrow>
              </Reveal>
              <SplitHeading className="mt-6 text-headline text-ink">
                One accountable partner, from strategy to scale.
              </SplitHeading>
              <Reveal delay={0.1} className="mt-6 max-w-md text-muted">
                <p>
                  We pair agility and reliability with long-term scalability — engineered for the
                  regulated, high-stakes environments where most teams stall.
                </p>
              </Reveal>
            </div>
            <div className="lg:col-span-7">
              <Reveal selector="[data-reasons] > *" stagger={0.1} data-reasons className="space-y-px overflow-hidden rounded-2xl border border-line bg-line">
                {reasons.map((r) => (
                  <div key={r.title} className="bg-surface p-7 md:p-8">
                    <h3 className="font-display text-xl font-semibold text-ink">{r.title}</h3>
                    <p className="mt-2 text-muted">{r.body}</p>
                  </div>
                ))}
              </Reveal>
            </div>
          </div>
        </Container>
      </Section>

      {/* Featured products teaser */}
      <Section>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Products</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              A purpose-built suite that shortens time-to-value.
            </SplitHeading>
          </div>
          <Reveal delay={0.1}>
            <Button to="/products" variant="secondary" withArrow>
              View all products
            </Button>
          </Reveal>
        </div>

        <Reveal
          selector="[data-flagship] > *"
          stagger={0.1}
          className="mt-14 grid gap-6 sm:grid-cols-2"
          data-flagship
        >
          {flagshipProducts.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="group rounded-2xl border border-line bg-surface p-8 transition-[border-color,background-color] duration-300 hover:border-accent/50 hover:bg-surface-2"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-semibold text-ink">{p.name}</h3>
                <ArrowRight className="h-5 w-5 text-muted transition-all duration-300 group-hover:translate-x-1 group-hover:text-accent" />
              </div>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">{p.kicker.split('—')[0].trim()}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.tagline}</p>
            </Link>
          ))}
        </Reveal>
      </Section>

      {/* Industries teaser */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Industries</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              Purpose-built for the sectors where precision matters most.
            </SplitHeading>
          </div>
          <Reveal
            selector="[data-ind] > *"
            stagger={0.06}
            className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4"
            data-ind
          >
            {industries.map((ind) => (
              <Link
                key={ind.name}
                to="/industries"
                className="group bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
              >
                <h3 className="font-display text-base font-semibold text-ink">{ind.name}</h3>
                <p className="mt-2 line-clamp-2 text-xs text-muted">{ind.body}</p>
              </Link>
            ))}
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        title="Ready to transform your operations?"
        body="Tell us the process that costs you the most time, money or errors. We’ll show you exactly how we’d fix it."
        buttonLabel="Book a Discovery Call"
      />

      {/* Wider-suite mention for completeness */}
      <Section className="py-16 md:py-20">
        <Container>
          <Reveal className="flex flex-wrap items-center justify-center gap-x-2 gap-y-2 text-center text-sm text-muted">
            <span className="text-faint">Also in the suite:</span>
            {widerSuite.map((p, i) => (
              <Fragment key={p.name}>
                <span className="font-medium text-ink">{p.name}</span>
                {i < widerSuite.length - 1 && <span className="text-faint">·</span>}
              </Fragment>
            ))}
          </Reveal>
        </Container>
      </Section>
    </>
  )
}
