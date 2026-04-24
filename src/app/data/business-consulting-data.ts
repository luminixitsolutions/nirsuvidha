/** /business-consulting */

export const businessPage = {
  title: 'Business Setup & Advisory',
  subtitle: 'Incorporation, GST, payroll, and ongoing compliance for your India presence',
} as const

export const incorporationOptions = [
  {
    title: 'Private Limited Company',
    desc: 'Most common for funded startups and growing teams.',
    points: ['Limited liability', 'Easier fundraising', 'Professional perception'],
    cta: 'Discuss Pvt Ltd',
  },
  {
    title: 'Limited Liability Partnership (LLP)',
    desc: 'Flexible structure for professional and partnership businesses.',
    points: ['Lower compliance overhead', 'Flexible partners', 'Tax-efficient flows'],
    cta: 'Discuss LLP',
  },
  {
    title: 'Partnership firm',
    desc: 'Lightweight option for small ventures and family businesses.',
    points: ['Faster setup', 'Simple operations', 'Lower fixed costs'],
    cta: 'Discuss partnership',
  },
] as const

export const advisoryBlocks = [
  {
    title: 'Compliance package',
    desc: 'GST, payroll, TDS, and annual filings bundled for predictable operations.',
    bullets: ['GST returns', 'Payroll & PF', 'ROC / MCA filings', 'Audit coordination'],
    primary: 'Subscribe (from ₹5,000/mo)',
    secondary: 'One-time cleanup (from ₹15,000)',
  },
  {
    title: 'Strategic advisory',
    desc: 'Regulatory, tax, and market entry guidance as you scale in India.',
    bullets: ['Entity design', 'Contract templates', 'Vendor & payroll setup'],
    primary: 'Retainer (from ₹10,000/mo)',
    secondary: 'Hourly consult (from ₹2,500/hr)',
  },
] as const
