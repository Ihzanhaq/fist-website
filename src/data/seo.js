/**
 * Per-page SEO meta. Titles ≤60 chars, descriptions ≤155 chars (from the pack).
 * Used by the <Seo/> component via react-helmet-async.
 */

const BASE = 'FIST Innovations'

export const seo = {
  home: {
    title: 'FIST Innovations | AI, GIS & ERP Software, Kerala',
    description:
      'AI automation, geospatial intelligence and cloud-native ERP for banks, governments and enterprises. 140+ projects since 2020. Book a discovery call.',
  },
  about: {
    title: 'About FIST Innovations | Startup India Tech Company',
    description:
      'A Kerala-based product & technology company building intelligent platforms for government and enterprise. 40+ engineers, recognised by KSUM & K-SPACE.',
  },
  products: {
    title: 'Products | DRONA, ATTO, FiGIS, SEAL & FIST ERP',
    description:
      "Explore FIST's proprietary platforms — AI automation (DRONA), document OCR (ATTO), geospatial (FiGIS), bank asset intelligence (SEAL) and more.",
  },
  services: {
    title: 'IT Services | AI, GIS, ERP, Cloud & Custom Software',
    description:
      'Eleven capabilities, one accountable partner — AI automation, GIS, ERP migration, e-commerce, HRMS, mobile and cloud consulting. Get a free assessment.',
  },
  industries: {
    title: 'Industries | Government, Banking, Logistics & More',
    description:
      'Sector-specific solutions for government, banking, logistics, travel, retail, healthcare and education. See the right FIST solution for your industry.',
  },
  contact: {
    title: 'Contact FIST Innovations | Book a Meeting',
    description:
      'Email info@fistinnovations.com or book a free 30-minute discovery call. Offices in Trivandrum, Calicut and Bahrain.',
  },
  notFound: {
    title: 'Page not found | FIST Innovations',
    description: 'The page you’re looking for doesn’t exist. Explore FIST’s AI, GIS and ERP platforms instead.',
  },
}

export function productSeo(product) {
  return {
    title: `${product.name} — ${product.kicker.split('—')[0].trim()} | ${BASE}`,
    description: product.tagline.slice(0, 155),
  }
}
