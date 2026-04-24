/** /investment-services — from sample Investment Services */

export const investmentPage = {
  title: 'Investment Services',
  subtitle: 'Mutual funds, equities, and portfolio guidance aligned with your India goals',
} as const

export const recommendationStrip = [
  {
    tag: 'Recommended',
    tagClass: 'text-success',
    name: 'Large-cap diversified fund',
    note: 'Illustrative 12–15% past range — not a guarantee',
  },
  {
    tag: 'Trending',
    tagClass: 'text-primary',
    name: 'Blue-chip focused fund',
    note: 'Illustrative 10–12% past range',
  },
  {
    tag: 'Balanced',
    tagClass: 'text-main',
    name: 'Hybrid / balanced fund',
    note: 'Illustrative 8–10% past range',
  },
] as const

export const investmentUniverse = [
  {
    name: 'Illustrative Large-cap Fund A',
    category: 'Large Cap',
    nav: '₹685.50',
    ret: '+12.5%',
    risk: 'Moderate',
  },
  {
    name: 'Illustrative Large-cap Fund B',
    category: 'Large Cap',
    nav: '₹58.20',
    ret: '+10.8%',
    risk: 'Low',
  },
  {
    name: 'Illustrative Sector Fund',
    category: 'Sectoral',
    nav: '₹125.80',
    ret: '+18.2%',
    risk: 'High',
  },
  {
    name: 'Illustrative Small-cap Fund',
    category: 'Small Cap',
    nav: '₹45.30',
    ret: '+22.1%',
    risk: 'Very High',
  },
  {
    name: 'Illustrative Listed Stock',
    category: 'Equity',
    nav: '₹245.60',
    ret: '+8.5%',
    risk: 'High',
  },
] as const

export const investmentProcess = [
  {
    title: 'Risk profile & goals',
    desc: 'We align recommendations to your timeline and India exposure preferences.',
  },
  {
    title: 'Execution support',
    desc: 'Assisted onboarding with KYC-compliant channels.',
  },
  {
    title: 'Review cadence',
    desc: 'Periodic portfolio reviews and rebalancing guidance.',
  },
] as const
