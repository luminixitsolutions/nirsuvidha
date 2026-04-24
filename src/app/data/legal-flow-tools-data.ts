/** Shared data for legal document generator, verification, and consultation booking */

export const documentGeneratorPage = {
  title: 'Legal Document Generator',
  subtitle: 'Choose a document type — we guide you through details, review, and e-sign readiness',
} as const

export const documentTypes = [
  {
    id: 'power-of-attorney',
    name: 'Power of Attorney',
    description: 'Authorize a trusted person to act in India on your behalf',
    fee: '₹2,500',
  },
  {
    id: 'property-agreement',
    name: 'Property sale agreement',
    description: 'Agreement drafts for purchase / sale transactions',
    fee: '₹5,000',
  },
  {
    id: 'will-testament',
    name: 'Will & testament',
    description: 'Capture wishes with India-enforceable language',
    fee: '₹3,000',
  },
  {
    id: 'rental-agreement',
    name: 'Rental agreement',
    description: 'Residential or commercial lease drafts',
    fee: '₹1,500',
  },
  {
    id: 'business-contract',
    name: 'Business contract',
    description: 'Commercial agreement templates with lawyer review',
    fee: '₹4,000',
  },
] as const

export const propertyVerificationPage = {
  title: 'Property Verification',
  subtitle: 'Upload documents — we coordinate title, encumbrance, and municipal checks',
} as const

export const verificationChecks = [
  { name: 'Title deed review', status: 'completed' as const, result: 'Illustrative — clear' },
  { name: 'Legal clearance', status: 'completed' as const, result: 'No red flags' },
  { name: 'Municipality records', status: 'processing' as const, result: 'In progress' },
  { name: 'Encumbrance certificate', status: 'pending' as const, result: 'Queued' },
  { name: 'Litigation scan', status: 'completed' as const, result: 'No cases found' },
] as const

export const consultationPage = {
  title: 'Book Legal Consultation',
  subtitle: 'Pick a verified lawyer, date, and slot — video or phone',
} as const

export const bookingLawyers = [
  {
    id: 'adv-priya',
    name: 'Adv. Priya Sharma',
    specialization: 'Property law',
    experience: '12 years',
    rating: 4.8,
    fee: '₹2,500',
    availability: 'Same week',
  },
  {
    id: 'adv-rajesh',
    name: 'Adv. Rajesh Kumar',
    specialization: 'Corporate law',
    experience: '15 years',
    rating: 4.9,
    fee: '₹3,000',
    availability: 'Next week',
  },
  {
    id: 'adv-meera',
    name: 'Adv. Meera Patel',
    specialization: 'Family law',
    experience: '10 years',
    rating: 4.7,
    fee: '₹2,000',
    availability: 'Same week',
  },
] as const

export const bookingTimeSlots = [
  '09:00 AM',
  '10:00 AM',
  '11:00 AM',
  '02:00 PM',
  '03:00 PM',
  '04:00 PM',
  '05:00 PM',
] as const
