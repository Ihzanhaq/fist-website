/**
 * Global site data: company facts, navigation, contact, offices, social,
 * recognitions, and the CTA microcopy library.
 * Source: FIST Innovations Website Content Pack.
 *
 * NOTE FOR THE OWNER — facts to confirm (flagged in the content pack):
 *  - Countries served: trust band uses "7"; prose says "India, the GCC & Europe".
 *  - Primary phone: +91 83300 18881 (a second number, +91 88488 54628, exists).
 *  - HQ address uses the "Neoito Technology Center" version.
 */

export const company = {
  name: 'FIST',
  legalName: 'FIST Innovations Private Limited',
  full: 'FIST Innovations',
  tagline: 'Fast · Intuitive · Secure · Transformative',
  established: 2020,
  email: 'info@fistinnovations.com',
  phoneDisplay: '+91 83300 18881',
  phoneHref: '+918330018881',
  whatsappHref: 'https://wa.me/918330018881',
  website: 'www.fistinnovations.com',
  websiteHref: 'https://fistinnovations.com',
  logoUrl: 'https://fistinnovations.com/assets/images/logo.svg',
}

export const nav = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Products', to: '/products' },
  { label: 'Services', to: '/services' },
  { label: 'Industries', to: '/industries' },
  { label: 'Contact', to: '/contact' },
]

export const stats = [
  { value: '2020', label: 'Established' },
  { value: '140+', label: 'Projects delivered' },
  { value: '40+', label: 'Engineers & specialists' },
  { value: '7', label: 'Countries served' },
]

export const recognitions = [
  {
    name: 'Startup India (DPIIT)',
    detail:
      'Recognised by the Department for Promotion of Industry and Internal Trade, Government of India.',
  },
  {
    name: 'Kerala Startup Mission (KSUM)',
    detail: "Supported by Kerala's nodal agency for entrepreneurship and emerging technology.",
  },
  {
    name: 'Kerala Space Park (K-SPACE)',
    detail: "Part of the Government of Kerala's deep-tech and geospatial innovation ecosystem.",
  },
]

export const offices = [
  {
    city: 'Trivandrum',
    tag: 'Headquarters',
    address:
      'First Floor, Neoito Technology Center, Marappalam Road, Pattom P.O., Thiruvananthapuram, Kerala 695003',
    country: 'India',
  },
  {
    city: 'Calicut',
    tag: 'Studio',
    address: 'First Floor, Tower 1, Hilite Business Park, Kozhikode, Kerala, India',
    country: 'India',
  },
  {
    city: 'Bahrain',
    tag: 'GCC',
    address: 'Al Seef, Kingdom of Bahrain',
    country: 'Bahrain',
  },
]

export const partners = [
  { name: 'Rayan Star', region: 'Bahrain' },
  { name: 'LRG International', region: 'Qatar' },
]

export const social = [
  { label: 'LinkedIn', href: 'https://in.linkedin.com/company/fist-innovations' },
  { label: 'Instagram', href: 'https://www.instagram.com/fistinnovations/' },
  { label: 'Facebook', href: 'https://www.facebook.com/fistinnovations/' },
]

const TEAM_IMG = 'https://fistinnovations.com/assets/images/team'

export const leadership = [
  { name: 'Akhil A', role: 'CEO', image: `${TEAM_IMG}/team1-1.webp`, initials: 'AA' },
  { name: 'Athul RD', role: 'CTO', image: `${TEAM_IMG}/team1-4.webp`, initials: 'AR' },
  { name: 'Manish', role: 'Lead Developer', image: `${TEAM_IMG}/team1-2.webp`, initials: 'MN' },
  { name: 'Arsha', role: 'Lead Developer', image: `${TEAM_IMG}/team1-5.webp`, initials: 'AR' },
  { name: 'Harisanth', role: 'Sales Coordinator', image: `${TEAM_IMG}/team1-3.webp`, initials: 'HS' },
]

/** Configurable scheduler. Swap for a real embed URL (Calendly/Zoho/etc.) when ready. */
export const bookingUrl = '/contact#book'

/** CTA microcopy library — action-led labels replace generic "Contact Us" / "Learn More". */
export const cta = {
  discovery: { label: 'Book a Discovery Call', to: '/contact' },
  meeting: { label: 'Book a Meeting', to: '/contact' },
  talk: { label: 'Talk to Our Team', to: '/contact' },
  demo: { label: 'Request a Demo', to: '/contact' },
  assessment: { label: 'Get a Free Assessment', to: '/contact' },
  sector: { label: 'Discuss My Sector', to: '/contact' },
  explore: { label: 'Explore Our Products', to: '/products' },
  slot: { label: 'Book My Slot', to: bookingUrl },
}

export const pillars = [
  {
    name: 'Fast',
    body: 'Rapid deployment and iteration — quick wins and short time-to-value.',
  },
  {
    name: 'Intuitive',
    body: 'User-centric design at every layer — adoption without heavy training.',
  },
  {
    name: 'Secure',
    body: 'Enterprise-grade security by default — built for regulated industries.',
  },
  {
    name: 'Transformative',
    body: 'Real digital evolution, not incremental change.',
  },
]

export const trustLine =
  'Recognised by Startup India, KSUM and K-SPACE. 140+ projects delivered since 2020 across India, the GCC and Europe — by a team of engineers, with security and compliance built in by default.'

export const footerProducts = [
  'DRONA',
  'ATTO',
  'FiGIS',
  'SEAL',
  'FIST ERP',
  'EASE',
  'PRESENX',
  'FLMS',
]
