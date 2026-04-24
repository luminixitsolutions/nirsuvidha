/** /taxation-services */

export const taxationPage = {
  title: 'Taxation Services',
  subtitle: 'ITR, DTAA, GST, and ongoing compliance for global Indians',
} as const

export const taxationServices = [
  {
    title: 'Income Tax Returns',
    desc: 'ITR preparation and filing for individuals and businesses, including foreign income schedules.',
    bullets: ['Multi-year catch-up', 'Refund follow-up', 'Notice support'],
    cta: 'Discuss ITR',
  },
  {
    title: 'GST Services',
    desc: 'Registration, returns, and compliance for your India business footprint.',
    bullets: ['Registration', 'Monthly / quarterly filings', 'Reconciliation'],
    cta: 'GST help',
  },
  {
    title: 'TDS & advance tax',
    desc: 'Quarterly estimates, challans, and certificate tracking.',
    bullets: ['TDS credit matching', 'Advance tax calendar', 'Lower deduction certificates'],
    cta: 'Plan taxes',
  },
  {
    title: 'Tax planning & DTAA',
    desc: 'Treaty positions, foreign tax credits, and structuring for NRIs / OCIs.',
    bullets: ['DTAA analysis', 'FEMA alignment', 'Multi-year roadmap'],
    cta: 'Book advisory',
  },
] as const
