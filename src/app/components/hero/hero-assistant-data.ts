/** Smart NRI Assistant — wizard options & recommendation rules */

/** Step 1 — aligned with home “Services” grid (`categoryData` in data.ts) */
export type NeedId =
  | 'legal'
  | 'banking'
  | 'investment'
  | 'tax'
  | 'business'
  | 'real-estate'
  | 'onboarding'
  | 'expert'

export type RegionId =
  | 'usa'
  | 'uk'
  | 'uae'
  | 'canada'
  | 'australia'
  | 'other'

export type UrgentId = 'urgent' | 'month' | 'exploring'

export type LevelId = 'basic' | 'standard' | 'premium'

export const NEED_OPTIONS: {
  id: NeedId
  label: string
  desc: string
  footer: string
  /** Full Font Awesome classes, e.g. `fa-solid fa-scale-balanced` */
  icon: string
}[] = [
  {
    id: 'legal',
    label: 'Legal Services',
    desc: 'Wills, POA, probate, and inheritance workflows built for NRIs and OCIs.',
    footer: 'Power of Attorney, wills & inheritance support',
    icon: 'fa-solid fa-scale-balanced',
  },
  {
    id: 'banking',
    label: 'Banking',
    desc: 'Open NRE/NRO accounts, fixed deposits, and streamline cross-border transfers.',
    footer: 'NRE/NRO accounts & remittances',
    icon: 'fa-solid fa-building-columns',
  },
  {
    id: 'investment',
    label: 'Investment Services',
    desc: 'Mutual funds, equities, and portfolio reviews aligned with your India goals.',
    footer: 'Mutual funds, stocks & portfolio guidance',
    icon: 'fa-solid fa-chart-line',
  },
  {
    id: 'tax',
    label: 'Tax Compliance',
    desc: 'ITR, DTAA, and reporting support so global income stays compliant.',
    footer: 'ITR, DTAA & global income compliance',
    icon: 'fa-solid fa-file-invoice-dollar',
  },
  {
    id: 'business',
    label: 'Business Setup & Advisory',
    desc: 'Incorporation, GST, and ongoing compliance for your India presence.',
    footer: 'Company registration & compliance',
    icon: 'fa-solid fa-briefcase',
  },
  {
    id: 'real-estate',
    label: 'Real Estate Services',
    desc: 'Due diligence, documentation, and closure support for property in India.',
    footer: 'Buy, sell & legal verification',
    icon: 'fa-solid fa-house-chimney',
  },
  {
    id: 'onboarding',
    label: 'Secure Onboarding',
    desc: 'Verified KYC, encrypted uploads, and a single vault for sensitive files.',
    footer: 'KYC & document vault',
    icon: 'fa-solid fa-shield-halved',
  },
  {
    id: 'expert',
    label: 'Expert Assistance',
    desc: 'Specialists and relationship managers who coordinate your end-to-end request.',
    footer: 'Dedicated relationship managers',
    icon: 'fa-solid fa-headset',
  },
]

export const REGION_OPTIONS: {
  id: RegionId
  label: string
  icon: string
}[] = [
  { id: 'usa', label: 'USA', icon: 'fa-flag-usa' },
  { id: 'uk', label: 'UK', icon: 'fa-sterling-sign' },
  { id: 'uae', label: 'UAE', icon: 'fa-mosque' },
  { id: 'canada', label: 'Canada', icon: 'fa-canadian-maple-leaf' },
  { id: 'australia', label: 'Australia', icon: 'fa-earth-oceania' },
  { id: 'other', label: 'Other', icon: 'fa-globe' },
]

export const URGENT_OPTIONS: {
  id: UrgentId
  label: string
  sub: string
  icon: string
}[] = [
  { id: 'urgent', label: 'Urgent', sub: '24–48 hrs', icon: 'fa-bolt' },
  { id: 'month', label: 'This Month', sub: 'Planning ahead', icon: 'fa-calendar-week' },
  { id: 'exploring', label: 'Just Exploring', sub: 'No rush', icon: 'fa-compass' },
]

export const LEVEL_OPTIONS: {
  id: LevelId
  label: string
  sub: string
  icon: string
}[] = [
  { id: 'basic', label: 'Basic', sub: 'Guidance only', icon: 'fa-book-open' },
  { id: 'standard', label: 'Standard', sub: 'Assisted', icon: 'fa-handshake' },
  { id: 'premium', label: 'Premium', sub: 'We handle everything', icon: 'fa-crown' },
]

export type ServiceRec = {
  title: string
  blurb: string
  icon: string
}

const NEED_SERVICES: Record<NeedId, ServiceRec[]> = {
  legal: [
    {
      title: 'Wills, POA & probate',
      blurb: 'Drafting, registration, and India court coordination for NRIs & OCIs.',
      icon: 'fa-file-signature',
    },
    {
      title: 'Inheritance & succession',
      blurb: 'Legal heir certificate, transmission, and cross-border alignment.',
      icon: 'fa-scale-balanced',
    },
  ],
  banking: [
    {
      title: 'NRE / NRO & remittance',
      blurb: 'Account opening guidance, FEMA-safe transfers, and repatriation.',
      icon: 'fa-landmark',
    },
    {
      title: 'Deposits & cross-border flows',
      blurb: 'FDs, SWIFT/LRS limits, and documentation in one place.',
      icon: 'fa-money-bill-transfer',
    },
  ],
  investment: [
    {
      title: 'India investments for NRIs',
      blurb: 'Mutual funds, equities, and PMS with compliant onboarding.',
      icon: 'fa-chart-line',
    },
    {
      title: 'Portfolio reviews',
      blurb: 'Align India holdings with tax and repatriation goals.',
      icon: 'fa-wallet',
    },
  ],
  tax: [
    {
      title: 'ITR & DTAA',
      blurb: 'NRI/OCI filing, treaty relief, and dual-country reporting.',
      icon: 'fa-file-invoice-dollar',
    },
    {
      title: 'Global income compliance',
      blurb: 'Notices, advance tax, and capital gains coordination.',
      icon: 'fa-chart-pie',
    },
  ],
  business: [
    {
      title: 'Incorporation & GST',
      blurb: 'Company/LLP setup, registrations, and first-year compliance.',
      icon: 'fa-building',
    },
    {
      title: 'Ongoing India compliance',
      blurb: 'Filings, payroll, and advisory for your India presence.',
      icon: 'fa-clipboard-list',
    },
  ],
  'real-estate': [
    {
      title: 'Due diligence & documentation',
      blurb: 'Title checks, agreements, and closure support for India property.',
      icon: 'fa-building-circle-check',
    },
    {
      title: 'Buy / sell & RERA',
      blurb: 'End-to-end coordination with verified legal workflows.',
      icon: 'fa-house-chimney',
    },
  ],
  onboarding: [
    {
      title: 'Verified KYC & uploads',
      blurb: 'Secure document capture and validation for India services.',
      icon: 'fa-id-card',
    },
    {
      title: 'Document vault',
      blurb: 'One encrypted place for sensitive files across your journey.',
      icon: 'fa-cloud-arrow-up',
    },
  ],
  expert: [
    {
      title: 'Dedicated relationship manager',
      blurb: 'A single point of contact across legal, tax, and banking.',
      icon: 'fa-headset',
    },
    {
      title: 'End-to-end coordination',
      blurb: 'Specialists sequenced on one timeline — no chasing vendors.',
      icon: 'fa-people-group',
    },
  ],
}

const REGION_LABEL: Record<RegionId, string> = {
  usa: 'the United States',
  uk: 'the UK',
  uae: 'the UAE',
  canada: 'Canada',
  australia: 'Australia',
  other: 'your region',
}

export function buildRecommendations(
  need: NeedId,
  region: RegionId,
  urgent: UrgentId,
  level: LevelId,
): { services: ServiceRec[]; summaryLine: string; planHint: string } {
  const base = NEED_SERVICES[need]
  const regionLine = `Handpicked for NRIs in ${REGION_LABEL[region]}.`

  let urgencyHint = ''
  if (urgent === 'urgent') {
    urgencyHint = ' Priority routing for faster first response.'
  } else if (urgent === 'month') {
    urgencyHint = ' Scheduled around your travel or filing window.'
  } else {
    urgencyHint = ' Explore options at your pace — no pressure.'
  }

  let planHint = ''
  if (level === 'basic') {
    planHint =
      'Basic plan: expert guidance and clear next steps — you execute where comfortable.'
  } else if (level === 'standard') {
    planHint =
      'Standard plan: assisted execution with document help and checkpoints.'
  } else {
    planHint =
      'Premium plan: end-to-end ownership — we coordinate specialists and timelines.'
  }

  return {
    services: base,
    summaryLine: `${regionLine}${urgencyHint}`,
    planHint,
  }
}
