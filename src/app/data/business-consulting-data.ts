/** `/services/business-setup-advisory` — aligned with Lovable business-consulting hub */

export const businessPage = {
  title: 'Business Setup & Advisory',
  subtitle: 'Company registration and ongoing advisory for NRIs & OCIs building in India',
} as const

export const incorporationSection = {
  title: 'Company Registration Services',
  subtitle: 'Complete business setup solutions for NRIs and OCIs in India',
} as const

export type IncorporationOption = {
  title: string
  desc: string
  bullets: readonly string[]
  cta: string
  icon: string
}

export const incorporationOptions: readonly IncorporationOption[] = [
  {
    title: 'Private Limited Company',
    desc: 'Most popular for startups and businesses with external funding',
    bullets: [
      'Limited liability protection',
      'Easy to raise capital',
      'Professional credibility',
    ],
    cta: 'Register PVT LTD',
    icon: 'fa-solid fa-building',
  },
  {
    title: 'Limited Liability Partnership (LLP)',
    desc: 'Ideal for professional services and partnerships',
    bullets: [
      'Lower compliance requirements',
      'Flexible management structure',
      'Tax benefits',
    ],
    cta: 'Register LLP',
    icon: 'fa-solid fa-users',
  },
  {
    title: 'Partnership Firm',
    desc: 'Simple structure for small businesses and family ventures',
    bullets: ['Easy to set up', 'Minimal compliance', 'Quick decision making'],
    cta: 'Register Partnership',
    icon: 'fa-solid fa-handshake',
  },
] as const

export const advisoryHubSection = {
  title: 'Compliance & Advisory Services',
  subtitle: 'Ongoing support to keep your business compliant and growing',
} as const

export const advisoryOffers = [
  {
    title: 'Tax Compliance Package',
    desc: 'GST registration, income tax filing, and regulatory compliance',
    bullets: [
      'GST registration & returns',
      'Income tax planning & filing',
      'TDS compliance',
      'Audit support',
    ],
    primaryCta: 'Subscribe Monthly (₹5,000/month)',
    secondaryCta: 'One-time Service (₹15,000)',
    icon: 'fa-solid fa-file-invoice-dollar',
  },
  {
    title: 'Business Advisory',
    desc: 'Strategic consulting for business growth and expansion',
    bullets: [
      'Business strategy planning',
      'Regulatory advisory',
      'Investment planning',
      'Market entry support',
    ],
    primaryCta: 'Premium Plan (₹10,000/month)',
    secondaryCta: 'Consultation (₹2,500/hour)',
    icon: 'fa-solid fa-chart-line',
  },
] as const

export const businessWhyChoose = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Dedicated incorporations desk',
    sub: 'End-to-end filing support with MCA-ready documentation.',
  },
  {
    icon: 'fa-solid fa-calendar-days',
    title: 'Compliance calendars',
    sub: 'GST, ROC, payroll, and tax timelines aligned to your desk.',
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Single point of contact',
    sub: 'Coordinated CA and compliance partners across time zones.',
  },
] as const
