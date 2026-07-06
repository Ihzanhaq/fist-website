import { Link } from 'react-router-dom'
import { Mail, Phone, Globe, ArrowUpRight } from 'lucide-react'
import Container from './Container'
import Logo from './Logo'
import {
  nav,
  company,
  offices,
  recognitions,
  social,
  footerProducts,
} from '@/data/site'

export default function Footer() {
  const year = 2026
  return (
    <footer className="relative border-t border-line bg-surface">
      <Container className="py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              <span className="text-ink">{company.tagline}.</span> Building intelligent AI,
              GIS and ERP platforms for governments and enterprises since {company.established}.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" /> {company.email}
              </a>
              <a
                href={`tel:${company.phoneHref}`}
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" /> {company.phoneDisplay}
              </a>
              <a
                href={company.websiteHref}
                className="flex items-center gap-2 text-muted transition-colors hover:text-accent"
              >
                <Globe className="h-4 w-4" /> {company.website}
              </a>
            </div>
          </div>

          {/* Menus */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-5">
            <FooterCol title="Company">
              {nav.map((item) => (
                <FooterLink key={item.to} to={item.to}>
                  {item.label}
                </FooterLink>
              ))}
              <FooterLink to="/contact">Book a Meeting</FooterLink>
            </FooterCol>

            <FooterCol title="Products">
              {footerProducts.map((p) => (
                <FooterLink key={p} to="/products">
                  {p}
                </FooterLink>
              ))}
            </FooterCol>

            <FooterCol title="Offices">
              {offices.map((o) => (
                <li key={o.city} className="text-sm text-muted">
                  <span className="text-ink">{o.city}</span>
                  <span className="block text-xs">{o.country}</span>
                </li>
              ))}
            </FooterCol>
          </div>

          {/* Recognitions */}
          <div className="lg:col-span-3">
            <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">
              Recognised by
            </h3>
            <ul className="mt-4 space-y-3">
              {recognitions.map((r) => (
                <li key={r.name} className="text-sm text-muted">
                  <span className="text-ink">{r.name}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
              {social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-line pt-6 text-xs text-muted sm:flex-row sm:items-center">
          <p>
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex gap-5">
            <Link to="/contact" className="transition-colors hover:text-accent">
              Privacy Policy
            </Link>
            <Link to="/contact" className="transition-colors hover:text-accent">
              Terms of Use
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

function FooterCol({ title, children }) {
  return (
    <div>
      <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-faint">{title}</h3>
      <ul className="mt-4 space-y-2.5">{children}</ul>
    </div>
  )
}

function FooterLink({ to, children }) {
  return (
    <li>
      <Link
        to={to}
        className="text-sm text-muted transition-colors duration-200 hover:text-accent"
      >
        {children}
      </Link>
    </li>
  )
}
