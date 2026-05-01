/** Content for /finance-services — sourced from sample Finance Services hub */

export const financePage = {
  title: 'Finance Services',
  subtitle: 'Loans, banking, fixed deposits, and PAN support for NRIs & OCIs',
} as const

/** Lovable-aligned section headers for Banking & FD tab */
export const financeFdSection = {
  title: 'Best Fixed Deposit Rates',
  subtitle: 'Earn up to 8.5% p.a. with top-rated banks & NBFCs',
} as const

export const financeAccountsSection = {
  title: 'Open Bank Account - NRI/NRO/NRE Accounts',
  subtitle: "Open accounts with India's leading banks with zero balance",
} as const

export const financeAccountForm = {
  title: 'Quick Account Opening Application',
  subtitle: 'Fill this form to start your account opening process',
  panCheckbox: "I don't have a PAN Card",
  panCheckboxHelp: 'Check this if you need help with PAN card application',
  panCalloutTitle: 'No PAN Card? No Problem!',
  panCalloutBody:
    "We'll help you apply for a PAN card as part of the account opening process. Our team will guide you through the entire documentation process.",
  submitCta: 'Start Account Opening Process',
} as const

export const loanProducts = [
  {
    id: 'personal',
    title: 'Personal Loan',
    description: 'Instant approval paths with minimal documentation',
    interestRate: '10.5% – 24%',
    maxAmount: '₹50 Lakhs',
    tenure: '12–60 months',
    processing: 'Up to 2%',
    banks: ['HDFC', 'ICICI', 'SBI', 'Axis'],
    features: ['No collateral options', 'Quick disbursal', 'Flexible tenure'],
  },
  {
    id: 'home',
    title: 'Home Loan',
    description: 'Buy or build in India with competitive rates',
    interestRate: '8.5% – 11.5%',
    maxAmount: '₹10 Crores',
    tenure: '5–30 years',
    processing: 'From 0.5%',
    banks: ['HDFC', 'SBI', 'LIC HFL', 'Kotak'],
    features: ['Tax benefits', 'Part-prepayment', 'Balance transfer'],
  },
  {
    id: 'business',
    title: 'Business Loan',
    description: 'Working capital and growth financing',
    interestRate: '11% – 20%',
    maxAmount: '₹5 Crores',
    tenure: '12–84 months',
    processing: '1–3%',
    banks: ['HDFC', 'ICICI', 'Yes Bank', 'IndusInd'],
    features: ['Working capital', 'Equipment finance', 'CC / OD facilities'],
  },
  {
    id: 'vehicle',
    title: 'Vehicle Loan',
    description: 'Cars and two-wheelers in India',
    interestRate: '7.5% – 15%',
    maxAmount: '₹2 Crores',
    tenure: '12–84 months',
    processing: '~1%',
    banks: ['HDFC Bank', 'Mahindra Finance', 'Bajaj Finance'],
    features: ['Fast approval', 'Pre-approved offers', 'Flexible EMI'],
  },
] as const

export const fdHighlights = [
  { label: 'Highest Rate', value: '8.5%' },
  { label: 'Min Investment', value: '₹1,000' },
  { label: 'Min Tenure', value: '7 Days' },
  { label: 'Safe & Secure', value: '100%' },
] as const

export const fdOffers = [
  {
    name: 'Mahindra Finance',
    rate: '8.5% p.a.',
    min: '₹25,000',
    tenure: '12–60 months',
    initial: 'M',
  },
  {
    name: 'Bajaj Finance',
    rate: '8.1% p.a.',
    min: '₹15,000',
    tenure: '12–36 months',
    initial: 'B',
  },
  {
    name: 'Shriram Finance',
    rate: '8.0% p.a.',
    min: '₹10,000',
    tenure: '18–60 months',
    initial: 'S',
  },
] as const

export const nriBankAccounts = [
  {
    bank: 'ICICI Bank',
    note: 'NRE/NRO Accounts',
    badge: 'Zero Balance',
    accent: 'primary',
  },
  {
    bank: 'SBI',
    note: 'NRI Services',
    badge: '₹10K Min',
    accent: 'primary',
  },
  {
    bank: 'HDFC Bank',
    note: 'Global Banking',
    badge: 'Premium',
    accent: 'danger',
  },
  {
    bank: 'Axis Bank',
    note: 'NRI Banking',
    badge: 'Digital',
    accent: 'purple',
  },
] as const

export const loanDocumentsChecklist = [
  'Identity proof (Aadhaar / passport)',
  'Address proof',
  'Income proof (salary slips / ITR)',
  'Bank statements (typically 6 months)',
] as const

export const panNewDocs = [
  'Passport (first & last pages)',
  'Visa / immigration stamp',
  'Overseas address proof',
  'Birth certificate (if name differs)',
  'Passport-size photographs',
] as const

export const panUpdateItems = [
  'Address change',
  'Name correction',
  'Date of birth update',
  "Father's name correction",
  'Contact details update',
] as const
