/** Static content for `/services/banking` — mirrors Lovable legal-services layout patterns. */

export type CategoryTile = {
  icon: string
  title: string
  description: string
  casesHandled: number
}

export type QuickAction = {
  icon: string
  title: string
  description: string
  cta: string
  href: string
}

export type BankingServiceCard = {
  title: string
  description: string
  bullets?: string[]
  fullWidth?: boolean
}

export type CategorySection = {
  title: string
  subtitle: string
  items: { title: string; description: string; fullWidth?: boolean }[]
}

export type FeaturedExpert = {
  name: string
  badge: string
  specialty: string
  experience: string
  location: string
  rating: number
  reviews: number
  fee: string
  languages: string
}

export type RecentApplication = {
  title: string
  status: 'in_progress' | 'completed'
  statusLabel: string
}

export const BANKING_CATEGORY_TILES: CategoryTile[] = [
  {
    icon: 'fa-solid fa-building-columns',
    title: 'NRE / NRO Accounts',
    description:
      'Open and manage non-resident accounts, repatriation, and consolidation.',
    casesHandled: 842,
  },
  {
    icon: 'fa-solid fa-chart-line',
    title: 'Investments',
    description:
      'Mutual funds, equities, and portfolio reviews aligned with your India goals.',
    casesHandled: 612,
  },
  {
    icon: 'fa-solid fa-hand-holding-dollar',
    title: 'Loans & Credit',
    description:
      'Home loans, LAP, and structured credit for NRIs with India collateral.',
    casesHandled: 391,
  },
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Secure Onboarding',
    description:
      'Verified KYC, encrypted uploads, and a single vault for sensitive files.',
    casesHandled: 1204,
  },
  {
    icon: 'fa-solid fa-file-invoice-dollar',
    title: 'Tax & Compliance',
    description:
      'TDS, reporting, and coordination with your CA for cross-border income.',
    casesHandled: 528,
  },
  {
    icon: 'fa-solid fa-globe',
    title: 'Remittance',
    description:
      'Wire schedules, FEMA-aware routing, and beneficiary setup assistance.',
    casesHandled: 673,
  },
]

export const BANKING_QUICK_ACTIONS: QuickAction[] = [
  {
    icon: 'fa-solid fa-file-circle-plus',
    title: 'Apply for NRE / NRO Account',
    description:
      'Digital-first application with checklist, KYC guidance, and RM follow-up.',
    cta: 'Start Application',
    href: '/#contact',
  },
  {
    icon: 'fa-solid fa-video',
    title: 'Book Banking Consultation',
    description:
      'Schedule a video call with a dedicated relationship manager.',
    cta: 'Book Consultation',
    href: '/#contact',
  },
]

export const BANKING_SERVICE_CARDS: BankingServiceCard[] = [
  {
    title: 'Wealth Advisory',
    description:
      'Structured wealth reviews when you need them. We coordinate with partner banks, consolidate statements, and track action items.',
    bullets: [
      'RM referral and coordination',
      'Statement & portfolio consolidation',
      'Goal tracking across India holdings',
      'Joint-holder & nominee hygiene',
    ],
  },
  {
    title: 'Fixed Deposits & Liquidity',
    description:
      'Competitive FD ladders and liquidity windows coordinated end-to-end with your bank.',
  },
  {
    title: 'Cross-border Transfers',
    description:
      'Routing guidance for compliant inward/outward remittances aligned with FEMA.',
  },
  {
    title: 'Loan Origination Support',
    description:
      'Documentation prep, eligibility checks, and lender coordination for NRIs.',
  },
]

export const BANKING_CATEGORY_SECTIONS: CategorySection[] = [
  {
    title: 'Account Management',
    subtitle: 'Comprehensive solutions for your NRI banking footprint.',
    items: [
      {
        title: 'NRE / NRO Account Opening',
        description:
          'End-to-end assistance to open and activate resident and non-resident accounts with the right tax codes.',
        fullWidth: true,
      },
    ],
  },
  {
    title: 'Investment Services',
    subtitle: 'Grow your wealth with tailored banking and markets access.',
    items: [
      {
        title: 'Mutual Funds via Banking Channel',
        description:
          'SIP/lump-sum routes through partner banks with consolidated reporting.',
      },
      {
        title: 'Portfolio Reviews',
        description:
          'Quarterly reviews with India allocation vs global book alignment.',
      },
      {
        title: 'Structured Products',
        description:
          'Access to issuer-led structures where eligible via banking relationships.',
      },
      {
        title: 'Gold / Bonds',
        description:
          'Sovereign gold bonds and gilt ladders coordinated with custody.',
      },
    ],
  },
  {
    title: 'Loans & Mortgage',
    subtitle: 'Credit solutions with documentation comfort for overseas earners.',
    items: [
      {
        title: 'Home Loans',
        description:
          'Eligibility modelling, property diligence coordination, and sanction support.',
      },
      {
        title: 'Loan Against Property',
        description:
          'LAP for liquidity against India residential/commercial collateral.',
      },
      {
        title: 'Top-up & Balance Transfer',
        description:
          'Refinance evaluation with fee and APR comparison tables.',
      },
      {
        title: 'Pre-approved Offers',
        description:
          'Where available from partner banks for eligible salary / SB profiles.',
      },
    ],
  },
]

export const BANKING_FEATURED_EXPERTS: FeaturedExpert[] = [
  {
    name: 'Ms. Ananya Mehta',
    badge: 'Verified',
    specialty: 'NRI Banking & RM Desk',
    experience: '12 years',
    location: 'Mumbai',
    rating: 4.9,
    reviews: 312,
    fee: '₹1,800 / consultation',
    languages: 'English, Hindi, Gujarati',
  },
  {
    name: 'Mr. Karthik Iyer',
    badge: 'Verified',
    specialty: 'Mortgage & LAP',
    experience: '9 years',
    location: 'Bengaluru',
    rating: 4.8,
    reviews: 189,
    fee: '₹2,200 / consultation',
    languages: 'English, Tamil, Kannada',
  },
  {
    name: 'Ms. Deepika Rao',
    badge: 'Verified',
    specialty: 'Wealth & Investments',
    experience: '11 years',
    location: 'Hyderabad',
    rating: 4.95,
    reviews: 267,
    fee: '₹2,500 / consultation',
    languages: 'English, Telugu, Hindi',
  },
]

export const BANKING_RECENT_APPLICATIONS: RecentApplication[] = [
  {
    title: 'NRE Account — Documentation',
    status: 'in_progress',
    statusLabel: 'In progress',
  },
  {
    title: 'Home Loan — Pre-approval',
    status: 'in_progress',
    statusLabel: 'In progress',
  },
  {
    title: 'FD Ladder — Renewal',
    status: 'completed',
    statusLabel: 'Completed',
  },
]

export const WHY_BANKING_ICONS: { icon: string; title: string; sub: string }[] =
  [
    {
      icon: 'fa-solid fa-shield-halved',
      title: 'Secure Transactions',
      sub: 'Bank-grade encryption and verified partner institutions.',
    },
    {
      icon: 'fa-solid fa-clock',
      title: 'Quick Matching',
      sub: 'RM callback within one business day in most metros.',
    },
    {
      icon: 'fa-solid fa-star',
      title: 'Top Rated',
      sub: '4.8+ average satisfaction across assisted journeys.',
    },
  ]
