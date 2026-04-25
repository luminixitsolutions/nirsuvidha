/** Central copy for NRI Suvidha — import for text only; no styling. */

export const siteName = 'NRI SUVIDHA'
export const siteNameShort = 'NRI Suvidha'
export const tagline = 'Partnering Locally, Serving Globally'
export const siteDescription =
  'NRI Suvidha is a financial super-app designed for NRIs and OCIs to manage legal, banking, investment, tax, and property services in India from anywhere in the world.'

/** “Global Indians” is styled in brand gold on the home hero h1 */
export const heroTitleBeforeGold = 'Financial Super-App for '
export const heroTitleGoldPart = 'Global Indians'
export const heroTitle = `${heroTitleBeforeGold}${heroTitleGoldPart}` as const
export const heroSubtitle =
  'From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.'
/** Hero green badge — full line rotates with animation on the home hero */
export const heroBadgeLines = [
  'Trusted by 100K+ NRIs Worldwide',
  'Serving NRIs across 75+ cities in India',
  '120K+ services fulfilled for global Indians',
  'Secure processes built for NRIs & OCIs',
  'Loved by families in the US, UK, UAE & Canada',
] as const

/** First badge line — use where a single static string is needed */
export const heroBadge = heroBadgeLines[0]
export const heroPrimaryCta = "Get Started – It's Free"
export const heroSecondaryCta = 'Login'

/** Home hero “play” intro — YouTube Shorts video ID (embed: youtube.com/embed/ID) */
export const heroIntroYouTubeId = 'Hdwkx3gTQI0'

export const sectionServicesTitle = 'All-in-One NRI Services Platform'
export const sectionServicesSubtitle =
  'Manage your financial, legal, and investment needs in India from anywhere in the world with a single trusted platform.'

export const sectionWhyChooseTitle = 'Why Choose Us'
export const whyChooseUs = [
  'Trusted by NRIs Worldwide',
  'End-to-End Service Platform',
  'Expert Legal & Financial Advisors',
  'Secure & Transparent Process',
]

export const sectionHowItWorksTitle = 'How It Works'
export const howItWorksSteps = [
  'Sign Up & Create Profile',
  'Choose Required Service',
  'Get Expert Assistance & Track Progress',
]

export const ctaBannerTitle = 'Living abroad is amazing - Until you have to...'
export const ctaBannerSubtitle =
  'File taxes in multiple countries, manage Indian investments, or handle property transactions from overseas.'
export const ctaPrimaryButton = 'Get Started'
export const ctaSecondaryButton = 'Talk to Expert'

export const footerTagline =
  'NRI Suvidha – Your trusted partner for managing financial, legal, and compliance services in India from anywhere in the world.'

export const copyrightLine = (year: number) =>
  `© ${year} ${siteNameShort}. All rights reserved.`

export const featuredServicesHeading = 'Featured Services'

/** Partner strip — small label + bold rotating audience line (rotates on home) */
export const partnerTrustedByLabel = 'Trusted by'
/** Primary gold for the rotating “Trusted by” headline */
export const partnerTrustedByHeadlineColor = '#c9a54c'
export const partnerTrustedByAudiences = [
  'Global Indians in the US, UK & UAE',
  'Global Indians in Canada, Australia & Singapore',
  'Professionals across the US & Europe',
  'Families in the UK, GCC & India',
  'NRIs & OCIs in Singapore, Qatar & Oman',
] as const

export const testimonialsHeading = 'Trusted by NRIs Worldwide'
export const testimonialsSubtitle =
  'Real stories from global Indians who simplified legal, tax, and banking in India with NRI Suvidha.'

/** Core service catalog — single source for grids and copy. */
export const services = [
  {
    title: 'Legal Services',
    desc: 'Power of Attorney, will drafting, inheritance planning, and complete legal documentation support for NRIs.',
  },
  {
    title: 'Banking',
    desc: 'NRE/NRO account opening, fixed deposits, and seamless international remittance solutions.',
  },
  {
    title: 'Investment Services',
    desc: 'Mutual funds, stock investments, and portfolio management to grow your wealth in India.',
  },
  {
    title: 'Tax Compliance',
    desc: 'Income tax filing, DTAA advisory, and global income compliance for NRIs.',
  },
  {
    title: 'Business Setup & Advisory',
    desc: 'Company registration, compliance, and business advisory services in India.',
  },
  {
    title: 'Real Estate Services',
    desc: 'Property buying, selling, legal verification, and documentation support.',
  },
] as const

export const legalInheritancePlanning = [
  'Will Registration',
  'Will Proof-reading',
  'Power of Attorney (POA)',
  'Living Will / AMD',
  'Gift Deed',
  'Senior Citizen Support',
]

export const legalPropertyAndTransfer = [
  'Probate of Will',
  'Property Transfer & Claims',
  'Unclaimed Asset Recovery',
  'Government ID Closure',
  'Succession / Legal Heir Certificate',
  'Ancillary Inheritance Services',
  'All Post Demise Services',
]

/** Routes treated as “Services” area for nav active state (single-page site) */
export const serviceBrowsePaths: string[] = []

export const homePaths = ['/']

/** Terminology replacements (display strings) */
export const labels = {
  jobs: 'Services',
  job: 'Service',
  candidates: 'NRI Clients',
  candidate: 'NRI Client',
  employers: 'Service Experts',
  employer: 'Service Expert',
  applyNow: 'Get Started',
  findJobs: 'Explore Services',
  browseJobs: 'Browse Services',
  career: 'Services',
} as const

/** /contact page — hero, cards, form copy */
export const contactPage = {
  badge: 'Get In Touch',
  title: 'Contact NRI Suvidha',
  subtitle:
    'Have questions about our NRI financial services? We’re here to help you manage your Indian affairs from anywhere in the world.',
  generalTitle: 'General Inquiries',
  generalEmail: 'hello@nrisuvidha.com',
  generalPhone: '+91-1800-123-4567',
  generalPhoneNote: 'Toll Free',
  supportTitle: 'Customer Support',
  supportEmail: 'support@nrisuvidha.com',
  supportNote: 'Available 24/7 for all your queries',
  formTitle: 'Send us a message',
  formSubtitle: 'Fill in the form below and our team will respond shortly.',
  submitLabel: 'Submit request',
} as const
