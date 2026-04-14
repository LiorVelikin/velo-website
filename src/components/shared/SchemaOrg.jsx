/**
 * SchemaOrg — injects JSON-LD structured data via react-helmet-async.
 * Usage:
 *   <SchemaOrg type="organization" />
 *   <SchemaOrg type="faq" faqs={[{ q, a }]} />
 *   <SchemaOrg type="service" name="..." description="..." url="..." />
 */

const BASE_URL = 'https://liorvelikin.github.io/velo-website'

const ORGANIZATION = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'VELO Studio',
  alternateName: 'VELO DIGITAL',
  url: BASE_URL + '/',
  logo: BASE_URL + '/velo-v.png',
  image: BASE_URL + '/og-image.png',
  description: 'סוכנות שיווק דיגיטלי לעסקים — תוכן AI, אתרים ממירים, ניהול קמפיינים וקידום SEO.',
  founder: {
    '@type': 'Person',
    name: 'ליאור וליקין',
    jobTitle: 'מייסד ומנכ"ל',
  },
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'IL',
  },
  areaServed: ['IL', 'US'],
  knowsLanguage: ['he', 'en'],
  sameAs: [
    'https://instagram.com',
    'https://facebook.com',
    'https://linkedin.com',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'שירותי שיווק דיגיטלי',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'עיצוב אתרים לעסקים' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'עיצוב דפי נחיתה' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'בניית חנויות Shopify' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'יצירת תוכן AI' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'ניהול קמפיינים ממומנים' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'קידום אתרים SEO' } },
    ],
  },
}

function buildFAQSchema(faqs) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map(({ q, a }) => ({
      '@type': 'Question',
      name: q,
      acceptedAnswer: { '@type': 'Answer', text: a },
    })),
  }
}

function buildServiceSchema(name, description, url) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: BASE_URL + url,
    provider: {
      '@type': 'Organization',
      name: 'VELO Studio',
      url: BASE_URL + '/',
    },
    areaServed: { '@type': 'Country', name: 'Israel' },
  }
}

function buildBreadcrumbSchema(items) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.name,
      item: BASE_URL + item.path,
    })),
  }
}

/**
 * Renders one or more <script type="application/ld+json"> blocks.
 * Must be placed inside a <Helmet> in the consuming component.
 */
export function orgSchema() {
  return JSON.stringify(ORGANIZATION)
}

export function faqSchema(faqs) {
  return JSON.stringify(buildFAQSchema(faqs))
}

export function serviceSchema(name, description, url) {
  return JSON.stringify(buildServiceSchema(name, description, url))
}

export function breadcrumbSchema(items) {
  return JSON.stringify(buildBreadcrumbSchema(items))
}
