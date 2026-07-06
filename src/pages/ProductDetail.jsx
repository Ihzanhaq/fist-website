import { Link, useParams } from 'react-router-dom'
import { ArrowRight, Check, ArrowLeft } from 'lucide-react'
import Seo from '@/components/Seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'
import Button from '@/components/Button'
import ImageBackground from '@/components/ImageBackground'
import CtaBand from '@/sections/shared/CtaBand'
import { productSeo } from '@/data/seo'
import { getProduct, flagshipProducts } from '@/data/products'
import { cta } from '@/data/site'
import { productImage } from '@/data/images'

export default function ProductDetail() {
  const { slug } = useParams()
  const product = getProduct(slug)

  if (!product) {
    return (
      <Section className="pt-40 text-center">
        <Container size="prose">
          <p className="text-sm uppercase tracking-[0.2em] text-faint">Product not found</p>
          <h1 className="mt-4 font-display text-3xl font-semibold text-ink">
            We couldn’t find that product.
          </h1>
          <p className="mt-3 text-muted">
            It may be part of the wider suite. Explore all platforms instead.
          </p>
          <div className="mt-8 flex justify-center">
            <Button to="/products" variant="secondary" withArrow>
              All products
            </Button>
          </div>
        </Container>
      </Section>
    )
  }

  const meta = productSeo(product)
  const related = flagshipProducts.filter((p) => p.slug !== product.slug)

  return (
    <>
      <Seo title={meta.title} description={meta.description} path={`/products/${product.slug}`} />

      {/* Hero — product image with heading overlay */}
      <header className="relative overflow-hidden">
        <ImageBackground src={productImage(product.slug)} alt="">
          <div className="absolute inset-0 bg-linear-to-b from-black/20 via-black/55 to-canvas" />
          <div className="absolute inset-x-0 top-0 h-28 bg-linear-to-b from-canvas to-transparent" />
        </ImageBackground>

        <Container className="relative pb-16 pt-36 md:pb-24 md:pt-52">
          <Reveal>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-white"
            >
              <ArrowLeft className="h-4 w-4" /> All products
            </Link>
          </Reveal>

          <div className="mt-8 max-w-3xl">
            <Reveal>
              <span className="inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-white/70">
                <span className="h-px w-7 bg-accent" aria-hidden="true" />
                {product.kicker}
              </span>
            </Reveal>
            <Reveal delay={0.05}>
              <h1 className="mt-5 font-display text-display font-semibold tracking-tight text-white">
                {product.name}
              </h1>
            </Reveal>
            <Reveal delay={0.1} className="mt-5 max-w-xl text-lg text-white/80">
              <p>{product.tagline}</p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8 flex flex-wrap gap-3">
              <Button to={cta.demo.to} magnetic withArrow>
                {cta.demo.label}
              </Button>
              <Button to={cta.talk.to} variant="secondary">
                {cta.talk.label}
              </Button>
            </Reveal>
          </div>
        </Container>
      </header>

      {/* Summary */}
      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Overview</Eyebrow>
            </Reveal>
          </div>
          <div className="lg:col-span-7">
            <Reveal delay={0.1} className="space-y-6 text-lg leading-relaxed text-muted">
              <p>{product.summary}</p>
              {product.bestFor && (
                <div className="rounded-2xl border border-line bg-surface p-6">
                  <p className="text-xs uppercase tracking-[0.18em] text-accent">Best for</p>
                  <p className="mt-2 text-base text-ink">{product.bestFor}</p>
                </div>
              )}
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Capabilities */}
      {product.capabilities && (
        <Section className="border-t border-line bg-surface">
          <Container>
            <div className="max-w-2xl">
              <Reveal>
                <Eyebrow>Capabilities</Eyebrow>
              </Reveal>
              <SplitHeading className="mt-6 text-headline text-ink">
                What it does, end to end.
              </SplitHeading>
            </div>
            <Reveal
              selector="[data-caps] > *"
              stagger={0.08}
              className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
              data-caps
            >
              {product.capabilities.map((c) => (
                <div key={c} className="flex items-start gap-3 bg-surface p-7">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm text-ink">{c}</p>
                </div>
              ))}
            </Reveal>
          </Container>
        </Section>
      )}

      {/* Modules (FiGIS) */}
      {product.modules && (
        <Section>
          <div className="max-w-2xl">
            <Reveal>
              <Eyebrow>Domain modules</Eyebrow>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="mt-6 font-display text-headline font-semibold text-ink">
                The exact module your domain needs.
              </h2>
            </Reveal>
          </div>
          <Reveal
            selector="[data-mods] > *"
            stagger={0.06}
            className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
            data-mods
          >
            {product.modules.map((m) => (
              <div key={m.code} className="rounded-2xl border border-line bg-surface p-6">
                <p className="font-display text-xl font-semibold text-accent">{m.code}</p>
                <p className="mt-1 text-sm text-muted">{m.label}</p>
              </div>
            ))}
          </Reveal>
        </Section>
      )}

      {/* Proof */}
      {product.proof && (
        <Section className="border-t border-line bg-surface">
          <Container>
            <Reveal>
              <Eyebrow>Proof</Eyebrow>
            </Reveal>
            <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-4">
              {product.proof.map((pr) => (
                <Reveal key={pr.label} className="bg-surface p-8 text-center">
                  <p className="font-display text-3xl font-semibold text-ink md:text-4xl">
                    {pr.value}
                  </p>
                  <p className="mt-1 text-sm text-muted">{pr.label}</p>
                </Reveal>
              ))}
            </div>
          </Container>
        </Section>
      )}

      {/* Related */}
      <Section>
        <div className="flex items-end justify-between">
          <Reveal>
            <Eyebrow>Explore more</Eyebrow>
          </Reveal>
          <Reveal delay={0.05}>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-accent"
            >
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {related.map((p) => (
            <Link
              key={p.slug}
              to={`/products/${p.slug}`}
              className="group rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-accent/50 hover:bg-surface-2"
            >
              <h3 className="font-display text-xl font-semibold text-ink">{p.name}</h3>
              <p className="mt-1 text-xs uppercase tracking-[0.18em] text-accent">
                {p.kicker.split('—')[0].trim()}
              </p>
              <p className="mt-3 line-clamp-2 text-sm text-muted">{p.tagline}</p>
            </Link>
          ))}
        </div>
      </Section>

      <CtaBand
        title={`Put ${product.name} to work on your workflow.`}
        body="Tell us the process you want to automate, map or unify. We’ll show you exactly how it plays out on your data."
        buttonLabel={cta.demo.label}
        buttonTo={cta.demo.to}
      />
    </>
  )
}
