import Seo from '@/components/Seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'
import Card from '@/components/Card'
import TeamCard from '@/components/TeamCard'
import Carousel from '@/components/Carousel'
import Button from '@/components/Button'
import SmartImage from '@/components/SmartImage'
import PageHeader from '@/sections/shared/PageHeader'
import CtaBand from '@/sections/shared/CtaBand'
import { useParallax } from '@/animations/parallax'
import { seo } from '@/data/seo'
import { pillars, recognitions, offices, partners, leadership, cta } from '@/data/site'
import { images } from '@/data/images'

export default function About() {
  const parallaxRef = useParallax({ intensity: 0.1 })

  return (
    <>
      <Seo {...seo.about} path="/about" />

      <PageHeader
        eyebrow="About FIST"
        title="Engineering the digital backbone of governments and enterprises."
        intro="A product and technology company building intelligent platforms — from startup MVPs to government-scale systems."
        image={images.aboutStory}
      />

      {/* Story */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-6">
            <SmartImage
              src={images.aboutStory}
              alt="The FIST Innovations engineering workspace"
              ratio="aspect-[5/6]"
              className="overflow-hidden rounded-3xl border border-line"
            />
          </Reveal>
          <div className="lg:col-span-6 lg:pt-6">
            <Reveal>
              <Eyebrow>Our story</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-title text-ink">
              Independent software vendor and system integrator, since 2020.
            </SplitHeading>
            <Reveal delay={0.1} className="mt-6 space-y-4 text-muted">
              <p>
                FIST Innovations Private Limited is a product and technology company
                headquartered in Thiruvananthapuram, Kerala. Founded in 2020 and recognised
                under Startup India, we’re an independent software vendor and system integrator
                with a 40+ strong team and deep expertise across the full technology stack.
              </p>
              <p>
                We solve complex business challenges through innovation, precision engineering
                and domain-driven design — combining AI/ML, ERP, GIS, automation, cloud-native
                architecture and mobile-first experiences to power flagship products across
                banking, infrastructure, healthcare, education, logistics and retail.
              </p>
              <p>
                From startup MVPs to government-scale systems, we deliver trusted solutions that
                pair agility and reliability with long-term scalability.
              </p>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Mission & Vision */}
      <Section className="border-y border-line bg-surface">
        <Container>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2">
            <Reveal className="bg-surface p-8 md:p-12">
              <Eyebrow>Mission</Eyebrow>
              <p className="mt-6 font-display text-2xl font-medium leading-snug text-ink">
                To become a global technology partner recognised for building intelligent digital
                platforms that enable governments, enterprises and institutions to innovate, scale
                and achieve sustainable impact.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="bg-surface p-8 md:p-12">
              <Eyebrow>Vision</Eyebrow>
              <p className="mt-6 font-display text-2xl font-medium leading-snug text-ink">
                To deliver Fast, Intuitive, Secure and Transformative technology that empowers
                organisations to adapt, evolve and thrive — combining innovation, domain expertise
                and precision engineering to solve real problems.
              </p>
            </Reveal>
          </div>
        </Container>
      </Section>

      {/* Four pillars */}
      <Section>
        <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>What we stand for</Eyebrow>
          </Reveal>
          <SplitHeading className="mt-6 text-headline text-ink">
            Fast · Intuitive · Secure · Transformative.
          </SplitHeading>
        </div>
        <Reveal
          selector="[data-pillars] > *"
          stagger={0.1}
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
          data-pillars
        >
          {pillars.map((p) => (
            <Card key={p.name} hover className="p-7">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                {p.name}
              </span>
              <p className="mt-4 text-sm leading-relaxed text-muted">{p.body}</p>
            </Card>
          ))}
        </Reveal>
      </Section>

      {/* Recognition */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Recognition & accreditation</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              Recognised by leading government innovation programmes.
            </SplitHeading>
          </div>
          <Reveal
            selector="[data-rec] > *"
            stagger={0.1}
            className="mt-14 grid gap-6 md:grid-cols-3"
            data-rec
          >
            {recognitions.map((r) => (
              <Card key={r.name} className="p-8">
                <h3 className="font-display text-lg font-semibold text-ink">{r.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{r.detail}</p>
              </Card>
            ))}
          </Reveal>
        </Container>
      </Section>

      {/* Global footprint */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Global footprint</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              Three offices. A partner network across the GCC.
            </SplitHeading>
            <Reveal delay={0.1} className="mt-8 space-y-6">
              {offices.map((o) => (
                <div key={o.city} className="border-l-2 border-accent/50 pl-5">
                  <p className="font-display text-lg font-semibold text-ink">
                    {o.city}{' '}
                    <span className="text-sm font-normal text-faint">· {o.tag}</span>
                  </p>
                  <p className="mt-1 text-sm text-muted">{o.address}</p>
                </div>
              ))}
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
              {partners.map((p) => (
                <span
                  key={p.name}
                  className="rounded-full border border-line bg-surface px-4 py-2 text-sm text-muted"
                >
                  {p.name} · {p.region}
                </span>
              ))}
            </Reveal>
          </div>
          <div className="overflow-hidden rounded-3xl border border-line lg:col-span-7">
            <div ref={parallaxRef} className="h-full">
              <SmartImage
                src={images.footprint}
                alt="Global operations spanning India, the GCC and Europe"
                ratio="aspect-[4/3]"
                imgClassName="scale-110"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Team */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Reveal className="flex justify-center">
              <Eyebrow>Team</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              The people behind the platforms.
            </SplitHeading>
            <Reveal delay={0.1} className="mt-5 text-muted">
              <p>A compact, senior team across product, engineering and delivery.</p>
            </Reveal>
          </div>

          <Reveal delay={0.15} className="mt-14">
            <Carousel ariaLabel="Team members">
              {leadership.map((m) => (
                <TeamCard
                  key={m.name}
                  name={m.name}
                  role={m.role}
                  image={m.image}
                  initials={m.initials}
                />
              ))}
            </Carousel>
          </Reveal>
        </Container>
      </Section>

      <CtaBand
        eyebrow="Let’s talk"
        title="See how we’d approach your hardest problem."
        body="Book a focused conversation with our team — no slide-ware, just a direct read on your challenge."
        buttonLabel={cta.talk.label}
        buttonTo={cta.talk.to}
      />
    </>
  )
}
