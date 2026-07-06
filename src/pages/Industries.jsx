import Seo from '@/components/Seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'
import Card from '@/components/Card'
import SmartImage from '@/components/SmartImage'
import PageHeader from '@/sections/shared/PageHeader'
import CtaBand from '@/sections/shared/CtaBand'
import { seo } from '@/data/seo'
import { industries } from '@/data/industries'
import { cta } from '@/data/site'
import { images } from '@/data/images'

const industryImages = [
  images.indGovernment,
  images.indBanking,
  images.indLogistics,
  images.indTravel,
  images.indRetail,
  images.indHealth,
  images.indGeospatial,
  images.indEducation,
]

const framings = [
  {
    tag: 'Public sector',
    body: 'Lead with our Startup India, KSUM and K-SPACE recognition — and a track record in regulated government environments.',
  },
  {
    tag: 'Private enterprise',
    body: 'Lead with delivery proof and the product suite — 140+ projects, a 40+ engineering team, and platforms already in production.',
  },
]

export default function Industries() {
  return (
    <>
      <Seo {...seo.industries} path="/industries" />

      <PageHeader
        eyebrow="Industries we serve"
        title="Purpose-built for the sectors where precision matters."
        intro="Match your sector to the right solution instantly. Each card below links the outcome you need to the platforms that deliver it."
        image={images.indGeospatial}
      />

      {/* Industry grid */}
      <Section>
        <Reveal
          selector="[data-ind] > *"
          stagger={0.08}
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          data-ind
        >
          {industries.map((ind, i) => (
            <Card key={ind.name} hover className="group overflow-hidden">
              <SmartImage
                src={industryImages[i]}
                alt=""
                ratio="aspect-[16/10]"
                imgClassName="transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="p-7">
                <h3 className="font-display text-xl font-semibold text-ink">{ind.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{ind.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {ind.solutions.map((sol) => (
                    <span
                      key={sol}
                      className="rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent"
                    >
                      {sol}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </Reveal>
      </Section>

      {/* Public / private framing */}
      <Section className="border-t border-line bg-surface">
        <Container>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>How we show up</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              Different buyers, different proof.
            </SplitHeading>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {framings.map((f) => (
              <Reveal key={f.tag}>
                <Card className="h-full p-8 md:p-10">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    {f.tag}
                  </span>
                  <p className="mt-4 font-display text-xl font-medium leading-snug text-ink">
                    {f.body}
                  </p>
                </Card>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CtaBand
        title="Discuss your sector with our team."
        body="We’ll come prepared with relevant examples from your industry and a clear view of which platform fits."
        buttonLabel={cta.sector.label}
        buttonTo={cta.sector.to}
      />
    </>
  )
}
