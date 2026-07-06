import { useState } from 'react'
import { Mail, Phone, CalendarClock, MapPin, ArrowRight, Check } from 'lucide-react'
import Seo from '@/components/Seo'
import Section from '@/components/Section'
import Container from '@/components/Container'
import Eyebrow from '@/components/Eyebrow'
import SplitHeading from '@/components/SplitHeading'
import Reveal from '@/components/Reveal'
import Card from '@/components/Card'
import Button from '@/components/Button'
import Field from '@/components/Field'
import MapEmbed from '@/components/MapEmbed'
import PageHeader from '@/sections/shared/PageHeader'
import { seo } from '@/data/seo'
import { company, offices, cta } from '@/data/site'
import { scrollTo } from '@/hooks/lenisStore'
import { images } from '@/data/images'

const INTERESTS = ['AI & Automation', 'GIS', 'ERP', 'E-commerce', 'HRMS', 'Custom', 'Other']
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT // optional: Formspree/Netlify endpoint

const quickCards = [
  {
    icon: Mail,
    label: 'Email',
    detail: company.email,
    href: `mailto:${company.email}`,
    cta: 'Email us',
  },
  {
    icon: Phone,
    label: 'Call / WhatsApp',
    detail: company.phoneDisplay,
    href: company.whatsappHref,
    cta: 'Tap to chat',
  },
  {
    icon: CalendarClock,
    label: 'Book a meeting',
    detail: 'Pick a 30-min slot with our team',
    href: '#enquiry',
    cta: 'Book a meeting',
    anchor: true,
  },
  {
    icon: MapPin,
    label: 'Visit',
    detail: 'Trivandrum · Calicut · Bahrain',
    href: '#offices',
    cta: 'Get directions',
    anchor: true,
  },
]

function buildMailto(data) {
  const subject = encodeURIComponent(`New enquiry — ${data.interest || 'General'}`)
  const body = encodeURIComponent(
    `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone || '—'}\nOrganisation: ${
      data.organisation || '—'
    }\nInterest: ${data.interest}\n\n${data.message}`
  )
  return `mailto:${company.email}?subject=${subject}&body=${body}`
}

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    interest: '',
    message: '',
    consent: false,
  })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle')

  const update = (key) => (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value
    setForm((f) => ({ ...f, [key]: value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  function validate(data) {
    const next = {}
    if (!data.name.trim()) next.name = 'Please enter your full name.'
    if (!data.email.trim()) next.email = 'Please enter your work email.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = 'Please enter a valid email address.'
    if (!data.interest) next.interest = 'Please choose an area of interest.'
    if (!data.message.trim()) next.message = 'Tell us a little about what you need.'
    if (!data.consent) next.consent = 'Please agree to be contacted.'
    return next
  }

  async function handleSubmit(e) {
    e.preventDefault()
    const next = validate(form)
    setErrors(next)
    if (Object.keys(next).length) return

    setStatus('submitting')
    try {
      if (ENDPOINT) {
        const res = await fetch(ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
          body: JSON.stringify(form),
        })
        if (!res.ok) throw new Error('Request failed')
      } else {
        window.location.href = buildMailto(form)
      }
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo {...seo.contact} path="/contact" />

      <PageHeader
        eyebrow="Contact us"
        title="Let’s build together."
        intro="Ready to transform your operations with intelligent digital solutions? Tell us what you’re trying to achieve — we’ll get back within one business day."
        image={images.ctaBand}
      />

      {/* Quick contact options */}
      <Section className="py-16 md:py-20">
        <Reveal
          selector="[data-quick] > *"
          stagger={0.08}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          data-quick
        >
          {quickCards.map((c) => {
            const Icon = c.icon
            const onClick = c.anchor
              ? (e) => {
                  e.preventDefault()
                  scrollTo(c.href)
                }
              : undefined
            return (
              <a
                key={c.label}
                href={c.href}
                onClick={onClick}
                target={c.anchor || c.href.startsWith('mailto:') ? undefined : '_blank'}
                rel={c.anchor || c.href.startsWith('mailto:') ? undefined : 'noreferrer'}
                className="group rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-accent/50 hover:bg-surface-2"
              >
                <span className="grid h-11 w-11 place-items-center rounded-full bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <p className="mt-5 text-xs uppercase tracking-[0.18em] text-faint">{c.label}</p>
                <p className="mt-1 font-medium text-ink">{c.detail}</p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm text-accent">
                  {c.cta}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                </span>
              </a>
            )
          })}
        </Reveal>
      </Section>

      {/* Booking + form */}
      <Section className="border-t border-line py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Booking block */}
          <div className="lg:col-span-5">
            <Reveal>
              <Eyebrow>Discovery call</Eyebrow>
            </Reveal>
            <SplitHeading className="mt-6 text-headline text-ink">
              Book a free 30-minute discovery call.
            </SplitHeading>
            <Reveal delay={0.1} className="mt-5 text-muted">
              <p>
                Choose a time that suits you. We’ll come prepared with relevant examples from your
                industry — no slide-ware, just a focused conversation about your problem and how
                we’d solve it.
              </p>
            </Reveal>
            <Reveal delay={0.15} className="mt-8">
              <Button type="button" magnetic withArrow onClick={() => scrollTo('#enquiry')}>
                {cta.slot.label}
              </Button>
            </Reveal>

            <Reveal delay={0.2} className="mt-10 rounded-2xl border border-line bg-surface p-6">
              <p className="text-sm text-muted">
                Prefer email? Reach us directly at{' '}
                <a href={`mailto:${company.email}`} className="text-accent hover:underline">
                  {company.email}
                </a>{' '}
                or call{' '}
                <a href={`tel:${company.phoneHref}`} className="text-accent hover:underline">
                  {company.phoneDisplay}
                </a>
                .
              </p>
            </Reveal>
          </div>

          {/* Form */}
          <div className="lg:col-span-7" id="enquiry">
            <Reveal>
              <Card className="p-6 md:p-10">
                {status === 'success' ? (
                  <div className="flex flex-col items-center py-10 text-center">
                    <span className="grid h-14 w-14 place-items-center rounded-full bg-accent-soft text-accent">
                      <Check className="h-7 w-7" />
                    </span>
                    <h2 className="mt-6 font-display text-2xl font-semibold text-ink">
                      Thanks — we’ve got your enquiry.
                    </h2>
                    <p className="mt-3 max-w-sm text-muted">
                      We’ll reply within one business day. If your mail client opened, just hit send
                      to complete it.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setStatus('idle')
                        setForm({
                          name: '',
                          email: '',
                          phone: '',
                          organisation: '',
                          interest: '',
                          message: '',
                          consent: false,
                        })
                      }}
                      className="mt-8 text-sm text-accent hover:underline"
                    >
                      Send another enquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate name="contact" method="post">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <Field
                        label="Full name"
                        name="name"
                        required
                        autoComplete="name"
                        value={form.name}
                        onChange={update('name')}
                        error={errors.name}
                      />
                      <Field
                        label="Work email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        value={form.email}
                        onChange={update('email')}
                        error={errors.email}
                      />
                      <Field
                        label="Phone / WhatsApp"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        value={form.phone}
                        onChange={update('phone')}
                      />
                      <Field
                        label="Organisation"
                        name="organisation"
                        autoComplete="organization"
                        value={form.organisation}
                        onChange={update('organisation')}
                      />
                    </div>

                    <div className="mt-5">
                      <Field
                        label="I’m interested in"
                        name="interest"
                        as="select"
                        required
                        options={INTERESTS}
                        value={form.interest}
                        onChange={update('interest')}
                        error={errors.interest}
                        className="sm:max-w-sm"
                      />
                    </div>

                    <div className="mt-5">
                      <Field
                        label="How can we help?"
                        name="message"
                        as="textarea"
                        required
                        rows={5}
                        value={form.message}
                        onChange={update('message')}
                        error={errors.message}
                      />
                    </div>

                    <label className="mt-5 flex items-start gap-3 text-sm text-muted">
                      <input
                        type="checkbox"
                        name="consent"
                        checked={form.consent}
                        onChange={update('consent')}
                        aria-invalid={errors.consent ? true : undefined}
                        className="mt-0.5 h-4 w-4 shrink-0 rounded border-line accent-(--color-accent)"
                      />
                      <span>
                        I agree to be contacted about my enquiry.{' '}
                        {errors.consent && (
                          <span className="block text-red-500">{errors.consent}</span>
                        )}
                      </span>
                    </label>

                    {status === 'error' && (
                      <p className="mt-5 rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm text-red-500">
                        Something went wrong sending your enquiry. Please email us at{' '}
                        {company.email}.
                      </p>
                    )}

                    <div className="mt-7">
                      <Button
                        type="submit"
                        size="lg"
                        magnetic
                        withArrow
                        disabled={status === 'submitting'}
                      >
                        {status === 'submitting' ? 'Sending…' : 'Send My Enquiry'}
                      </Button>
                    </div>
                  </form>
                )}
              </Card>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Offices */}
      <Section id="offices" className="border-t border-line bg-surface">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <Reveal>
                <Eyebrow>Offices</Eyebrow>
              </Reveal>
              <SplitHeading className="mt-6 text-headline text-ink">
                Find us across India and the GCC.
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
            </div>
            <div className="overflow-hidden rounded-3xl border border-line lg:col-span-7">
              <div className="h-80 w-full md:h-full md:min-h-112">
                <MapEmbed query={offices[0].address} title="FIST Innovations headquarters — Trivandrum" />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  )
}
