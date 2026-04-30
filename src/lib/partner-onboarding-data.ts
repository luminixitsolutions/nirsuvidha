/** Mirrors backend App\Support\PartnerOnboardingLists — keep in sync with Lovable preview. */

export const INDIAN_STATES = [
  'Andhra Pradesh',
  'Arunachal Pradesh',
  'Assam',
  'Bihar',
  'Chhattisgarh',
  'Goa',
  'Gujarat',
  'Haryana',
  'Himachal Pradesh',
  'Jharkhand',
  'Karnataka',
  'Kerala',
  'Madhya Pradesh',
  'Maharashtra',
  'Manipur',
  'Meghalaya',
  'Mizoram',
  'Nagaland',
  'Odisha',
  'Punjab',
  'Rajasthan',
  'Sikkim',
  'Tamil Nadu',
  'Telangana',
  'Tripura',
  'Uttar Pradesh',
  'Uttarakhand',
  'West Bengal',
  'Delhi',
  'Jammu and Kashmir',
  'Ladakh',
] as const

export const LANGUAGES = [
  'Hindi',
  'English',
  'Bengali',
  'Telugu',
  'Marathi',
  'Tamil',
  'Gujarati',
  'Urdu',
  'Kannada',
  'Odia',
  'Malayalam',
  'Punjabi',
  'Assamese',
  'Nepali',
] as const

export const PARTNER_TYPES = [
  { value: 'lawyer', label: 'Lawyer / Advocate' },
  { value: 'accountant', label: 'Chartered Accountant' },
  { value: 'property-broker', label: 'Property Broker / Real Estate Agent' },
] as const

export const SERVICE_RADIUS = [
  { value: 'city-only', label: 'City Only' },
  { value: 'metro-area', label: 'Metro Area' },
  { value: 'state-wide', label: 'State Wide' },
  { value: 'pan-india', label: 'Pan India' },
  { value: 'international', label: 'International' },
] as const

export const AVAILABILITY_TYPE = [
  { value: 'full-time', label: 'Full-time (Mon-Sat)' },
  { value: 'part-time', label: 'Part-time' },
  { value: 'consultation-only', label: 'Consultation Only' },
] as const

export const RESPONSE_TIME = [
  { value: 'within-1-hour', label: 'Within 1 hour' },
  { value: 'within-4-hours', label: 'Within 4 hours' },
  { value: 'within-24-hours', label: 'Within 24 hours' },
  { value: 'within-48-hours', label: 'Within 48 hours' },
] as const

export const PRACTICE_AREAS = [
  'Corporate Law',
  'Property/Real Estate Law',
  'Family Law',
  'Criminal Law',
  'Civil Law',
  'Tax Law',
  'Labour Law',
  'Intellectual Property',
  'Banking & Finance',
  'Immigration Law',
  'Consumer Protection',
  'Environmental Law',
  'Constitutional Law',
  'Arbitration & Mediation',
] as const

export const COURT_LEVELS = [
  'District Court',
  'High Court',
  'Supreme Court',
  'Tribunals',
  'Lok Adalat',
] as const

export const CLIENT_CATEGORIES_LAW = [
  'Individual Clients',
  'Small Businesses',
  'Medium Enterprises',
  'Large Corporations',
  'Government Bodies',
  'NGOs',
  'International Clients',
] as const

export const CA_SPECIALIZATIONS = [
  'Direct Tax',
  'Indirect Tax (GST)',
  'Audit & Assurance',
  'Corporate Finance',
  'Forensic Accounting',
  'Management Consulting',
  'International Taxation',
  'Insolvency & Bankruptcy',
  'Company Law',
  'FEMA Compliance',
] as const

export const INDUSTRIES = [
  'Manufacturing',
  'Information Technology',
  'Real Estate',
  'Healthcare',
  'Education',
  'Retail',
  'Banking & Finance',
  'Automobile',
  'Textiles',
  'Pharmaceuticals',
  'Agriculture',
  'Media & Entertainment',
  'Logistics',
  'E-commerce',
] as const

export const CLIENT_SIZE_PREF = ['Individuals', 'Startups', 'SMEs', 'Large Enterprises', 'MNCs'] as const

export const SOFTWARE_EXPERTISE = [
  'Tally',
  'SAP',
  'QuickBooks',
  'Zoho Books',
  'Oracle',
  'Excel Advanced',
  'GST Software',
  'Income Tax Software',
  'Audit Software',
  'ERP Systems',
] as const

export const ADDITIONAL_CERTS = ['CPA', 'ACCA', 'CMA', 'CS', 'CFA', 'FRM', 'CIA'] as const

export const PROPERTY_TYPES = ['Residential', 'Commercial', 'Industrial', 'Agricultural', 'Plots/Land'] as const

export const TRANSACTION_TYPES = ['Buy/Sell', 'Rent/Lease', 'Investment Advisory', 'Property Management'] as const

export const PRICE_RANGE = [
  'Below ₹50 Lakh',
  '₹50L - ₹1 Crore',
  '₹1-2 Crore',
  '₹2-5 Crore',
  'Above ₹5 Crore',
] as const

export const TEAM_SIZE = [
  { value: 'solo', label: 'Solo Practice' },
  { value: '2-5', label: '2-5 Members' },
  { value: '6-10', label: '6-10 Members' },
  { value: '11-25', label: '11-25 Members' },
  { value: '25+', label: '25+ Members' },
] as const

export type PartnerType = 'lawyer' | 'accountant' | 'property-broker' | ''
