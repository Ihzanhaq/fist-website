import Seo from '@/components/Seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Button from '@/components/Button'
import { seo } from '@/data/seo'
import { cta } from '@/data/site'

export default function NotFound() {
  return (
    <>
      <Seo {...seo.notFound} />
      <Section className="grid min-h-[70vh] place-items-center pt-32 text-center">
        <Container size="prose">
          <p className="font-display text-display font-semibold text-accent">404</p>
          <h1 className="mt-4 font-display text-headline font-semibold text-ink">
            This page drifted off the map.
          </h1>
          <p className="mt-4 text-muted">
            The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button to="/" magnetic withArrow>
              Back to home
            </Button>
            <Button to={cta.explore.to} variant="secondary">
              Explore products
            </Button>
          </div>
        </Container>
      </Section>
    </>
  )
}
