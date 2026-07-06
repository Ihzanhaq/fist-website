import Container from '@/components/Container'
import StatStrip from '@/components/StatStrip'
import Reveal from '@/components/Reveal'
import { recognitions } from '@/data/site'

export default function TrustBand() {
  return (
    <section className="border-b border-line py-12 md:py-16">
      <Container>
        <StatStrip />
        <Reveal className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm">
          <span className="text-faint">Recognised by</span>
          {recognitions.map((r) => (
            <span key={r.name} className="font-medium text-ink">
              {r.name}
            </span>
          ))}
        </Reveal>
      </Container>
    </section>
  )
}
