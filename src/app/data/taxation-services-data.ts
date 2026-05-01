/** `/services/tax-compliance` — aligned with Lovable taxation-services hub */

export const taxationPage = {
  title: 'Taxation Services',
  subtitle: 'ITR, DTAA, GST, and ongoing compliance for global Indians',
} as const

/** Primary section — matches Lovable “Tax Filing Services” block */
export const taxationHubSection = {
  title: 'Tax Filing Services',
  subtitle: 'Complete tax compliance solutions',
} as const

export const taxationServices = [
  {
    title: 'Income Tax Returns',
    tagline: 'ITR filing for individuals and businesses',
    desc: 'ITR preparation and filing for individuals and businesses, including foreign income schedules.',
    bullets: ['Multi-year catch-up', 'Refund follow-up', 'Notice support'],
    cta: 'File ITR',
    href: '/contact',
    icon: 'fa-solid fa-file-lines',
  },
  {
    title: 'GST Services',
    tagline: 'GST registration and filing services',
    desc: 'Registration, returns, and compliance for your India business footprint.',
    bullets: ['Registration', 'Monthly / quarterly filings', 'Reconciliation'],
    cta: 'GST Services',
    href: '/contact',
    icon: 'fa-solid fa-receipt',
  },
  {
    title: 'TDS & advance tax',
    tagline: 'Quarterly estimates, challans, and certificate tracking',
    desc: 'Quarterly estimates, challans, and certificate tracking.',
    bullets: ['TDS credit matching', 'Advance tax calendar', 'Lower deduction certificates'],
    cta: 'Plan taxes',
    href: '/contact',
    icon: 'fa-solid fa-coins',
  },
  {
    title: 'Tax planning & DTAA',
    tagline: 'Treaty positions and foreign tax credits for NRIs / OCIs',
    desc: 'Treaty positions, foreign tax credits, and structuring for NRIs / OCIs.',
    bullets: ['DTAA analysis', 'FEMA alignment', 'Multi-year roadmap'],
    cta: 'Book advisory',
    href: '/contact',
    icon: 'fa-solid fa-scale-balanced',
  },
] as const

export const taxationWhyChoose = [
  {
    icon: 'fa-solid fa-user-shield',
    title: 'CA-verified workflows',
    sub: 'Structured reviews aligned with Indian tax law and NRI reporting.',
  },
  {
    icon: 'fa-solid fa-clock',
    title: 'Deadline tracking',
    sub: 'Reminders for ITR, advance tax, and GST due dates in your timezone.',
  },
  {
    icon: 'fa-solid fa-file-circle-check',
    title: 'Document vault',
    sub: 'Secure uploads and versioned records for notices and filings.',
  },
] as const
