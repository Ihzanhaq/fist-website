import Container from '@/components/Container'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Button from '@/components/Button'
import Reveal from '@/components/Reveal'

/** Reusable closing CTA band. */
export default function CtaBand({
  eyebrow = 'Start the conversation',
  title,
  body,
  buttonLabel = 'Book a Discovery Call',
  buttonTo = '/contact',
}) {
  return (
    <section className="relative overflow-hidden py-24 md:py-36">
      <div className="pointer-events-none absolute inset-0 bg-glow opacity-80" aria-hidden="true" />
      <Container className="relative text-center">
        <Reveal className="flex justify-center">
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <SplitHeading className="mx-auto mt-6 max-w-3xl text-headline text-ink">{title}</SplitHeading>
        {body && (
          <Reveal y={20} delay={0.1} className="mx-auto mt-5 max-w-xl text-lg text-muted">
            {body}
          </Reveal>
        )}
        <Reveal y={20} delay={0.2} className="mt-9 flex justify-center">
          <Button to={buttonTo} size="lg" magnetic withArrow>
            {buttonLabel}
          </Button>
        </Reveal>
      </Container>
    </section>
  )
}
