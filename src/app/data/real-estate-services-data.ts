/** /real-estate-services — condensed from sample Real Estate hub */

export const realEstatePage = {
  title: 'Real Estate Services',
  subtitle: 'Buy, sell, rent, and finance property in India with verified documentation',
} as const

export const propertyJourneys = [
  {
    title: 'Buy',
    desc: 'Shortlist, diligence, negotiation, and registration support.',
    icon: 'fa-solid fa-building',
  },
  {
    title: 'Sell',
    desc: 'Pricing guidance, buyer checks, and closure coordination.',
    icon: 'fa-solid fa-tags',
  },
  {
    title: 'Rent',
    desc: 'Tenant discovery, agreements, and deposit handling.',
    icon: 'fa-solid fa-house',
  },
  {
    title: 'Pre-construction',
    desc: 'Builder due diligence, milestone tracking, and RERA checks.',
    icon: 'fa-solid fa-helmet-safety',
  },
] as const

export const featuredListings = [
  {
    title: '3 BHK apartment — example listing',
    location: 'Gurugram (illustrative)',
    price: '₹1.2 Cr',
    meta: 'Ready to move · RERA registered',
  },
  {
    title: '2 BHK villa — example listing',
    location: 'Pune (illustrative)',
    price: '₹85 L',
    meta: 'Under construction · RERA registered',
  },
] as const

export const homeLoanPartners = [
  { name: 'HDFC Ltd', rate: 'From 8.5%', fee: '~0.5%' },
  { name: 'SBI Home Loans', rate: 'From 8.65%', fee: '~0.35%' },
  { name: 'ICICI Bank', rate: 'From 8.75%', fee: '~0.5%' },
  { name: 'LIC Housing', rate: 'From 8.5%', fee: '~0.5%' },
] as const

export const verificationLink = {
  label: 'Dedicated property verification',
  href: '/property-verification',
  desc: 'Title, encumbrance, and municipal checks coordinated end-to-end.',
} as const
