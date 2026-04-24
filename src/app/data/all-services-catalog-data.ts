/** /all-services — catalog from sample “All Services” page */

export const allServicesPage = {
  title: 'All Services',
  subtitle: 'Browse every NRI Suvidha service line with indicative pricing — final scope after consultation.',
} as const

export const catalogStats = [
  { value: '6', label: 'Service categories' },
  { value: '24+', label: 'Individual offerings' },
  { value: '₹2,000', label: 'Starting from' },
  { value: '24/7', label: 'Support desk' },
] as const

export type CatalogService = {
  name: string
  price: string
  description: string
  features: string[]
}

export type CatalogCategory = {
  id: string
  title: string
  description: string
  icon: string
  services: CatalogService[]
}

export const serviceCatalog: CatalogCategory[] = [
  {
    id: 'legal',
    title: 'Legal Services',
    description: 'Comprehensive legal support for NRIs & OCIs',
    icon: 'fa-solid fa-scale-balanced',
    services: [
      {
        name: 'Property legal services',
        price: '₹15,000',
        description: 'Due diligence, title review, and registration coordination',
        features: ['Property due diligence', 'Title verification', 'Registration assistance', 'POA drafting'],
      },
      {
        name: 'Family law',
        price: '₹12,000',
        description: 'Family matters and documentation support',
        features: ['Consultation', 'Documentation', 'Mediation support', 'Court filings'],
      },
      {
        name: 'Business legal',
        price: '₹20,000',
        description: 'Corporate contracts and compliance',
        features: ['Contract drafting', 'Compliance advisory', 'Disputes', 'IP basics'],
      },
      {
        name: 'Immigration support',
        price: '₹8,000',
        description: 'Document packs and legal consultation',
        features: ['Checklists', 'Notarization guidance', 'Apostille coordination'],
      },
    ],
  },
  {
    id: 'finance',
    title: 'Finance & banking',
    description: 'Accounts, loans, and remittance coordination',
    icon: 'fa-solid fa-building-columns',
    services: [
      {
        name: 'NRE / NRO account opening',
        price: '₹3,000',
        description: 'Bank selection and documentation',
        features: ['Bank shortlist', 'Document pack', 'Video KYC help', 'Remittance setup'],
      },
      {
        name: 'Home loan facilitation',
        price: '₹10,000',
        description: 'Eligibility, application, and closure support',
        features: ['Eligibility', 'Sanction support', 'Documentation', 'Rate comparison'],
      },
      {
        name: 'Personal loan facilitation',
        price: '₹7,000',
        description: 'Credit assessment and lender matching',
        features: ['Application', 'Credit review', 'Lender coordination'],
      },
      {
        name: 'Forex & remittance',
        price: '₹2,000',
        description: 'Competitive rates and compliance guidance',
        features: ['Rate comparison', 'FEMA checks', 'Transaction support'],
      },
    ],
  },
  {
    id: 'investment',
    title: 'Investment services',
    description: 'Mutual funds, equities, and insurance planning',
    icon: 'fa-solid fa-chart-line',
    services: [
      {
        name: 'Portfolio guidance',
        price: '₹15,000',
        description: 'Goal-based allocation for India exposure',
        features: ['Risk profiling', 'Fund shortlist', 'Review cadence'],
      },
      {
        name: 'Mutual funds',
        price: '₹5,000',
        description: 'SIP / lump-sum onboarding',
        features: ['Fund research', 'SIP setup', 'Goal tagging'],
      },
      {
        name: 'Real estate investment support',
        price: '₹25,000',
        description: 'Market scan and diligence coordination',
        features: ['Market notes', 'Developer checks', 'Legal handoff'],
      },
      {
        name: 'Insurance planning',
        price: '₹8,000',
        description: 'Life & health needs analysis for India covers',
        features: ['Needs analysis', 'Policy comparison', 'Claims guidance'],
      },
    ],
  },
  {
    id: 'taxation',
    title: 'Taxation',
    description: 'ITR, GST, and DTAA advisory',
    icon: 'fa-solid fa-file-invoice-dollar',
    services: [
      {
        name: 'Income tax filing',
        price: '₹5,000',
        description: 'ITR with foreign income schedules',
        features: ['ITR prep', 'DTAA notes', 'Refund tracking'],
      },
      {
        name: 'TDS & advance tax',
        price: '₹3,000',
        description: 'Quarterly compliance',
        features: ['Challans', 'Certificates', 'Credits'],
      },
      {
        name: 'Tax planning',
        price: '₹10,000',
        description: 'Multi-year roadmap',
        features: ['Optimization', 'FEMA alignment', 'Family structures'],
      },
      {
        name: 'GST',
        price: '₹7,000',
        description: 'Registration and filings',
        features: ['Registration', 'Returns', 'Reconciliation'],
      },
    ],
  },
  {
    id: 'business',
    title: 'Business setup & advisory',
    description: 'Incorporation and ongoing compliance',
    icon: 'fa-solid fa-briefcase',
    services: [
      {
        name: 'Company registration',
        price: '₹15,000',
        description: 'Pvt Ltd / LLP / partnership',
        features: ['Name approval', 'Incorporation', 'PAN / GST', 'Bank intro'],
      },
      {
        name: 'Startup advisory',
        price: '₹25,000',
        description: 'Fundraising and regulatory readiness',
        features: ['Data room', 'Compliance calendar', 'Mentor intro'],
      },
      {
        name: 'Compliance retainer',
        price: '₹12,000',
        description: 'Monthly filings and payroll',
        features: ['GST / TDS', 'Payroll', 'ROC'],
      },
      {
        name: 'Restructuring',
        price: '₹30,000',
        description: 'Entity and tax redesign',
        features: ['Structure map', 'Implementation', 'Legal coordination'],
      },
    ],
  },
  {
    id: 'realestate',
    title: 'Real estate',
    description: 'Transaction and management support',
    icon: 'fa-solid fa-house-chimney',
    services: [
      {
        name: 'Buying assistance',
        price: '₹20,000',
        description: 'End-to-end purchase coordination',
        features: ['Search', 'Legal verification', 'Negotiation', 'Registration'],
      },
      {
        name: 'Selling assistance',
        price: '₹15,000',
        description: 'Listing and buyer diligence',
        features: ['Pricing', 'Marketing', 'Closure'],
      },
      {
        name: 'Property management',
        price: '₹8,000/mo',
        description: 'Tenant and maintenance oversight',
        features: ['Tenant ops', 'Rent collection', 'Maintenance'],
      },
      {
        name: 'Documentation',
        price: '₹10,000',
        description: 'Title and agreement packs',
        features: ['Title check', 'Agreements', 'Registration'],
      },
    ],
  },
]
