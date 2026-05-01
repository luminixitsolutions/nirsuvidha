/** Static content for `/services/real-estate-services` — aligned with Lovable real-estate hub. */

export const REAL_ESTATE_MAIN_TABS = [
  { id: 'buy-sell-rent' as const, label: 'Buy/Sell/Rent' },
  { id: 'preconstruction' as const, label: 'Pre-Construction' },
  { id: 'homeloans' as const, label: 'Home Loans' },
  { id: 'verification' as const, label: 'Verification' },
]

export type RealEstateMainTabId = (typeof REAL_ESTATE_MAIN_TABS)[number]['id']

export const REAL_ESTATE_CATEGORY_TILES = [
  {
    variant: 'light' as const,
    icon: 'fa-solid fa-building-columns',
    title: 'Buy Property',
    description: 'Purchase residential or commercial properties',
    cta: 'Explore',
  },
  {
    variant: 'light' as const,
    icon: 'fa-solid fa-dollar-sign',
    title: 'Sell Property',
    description: 'List and sell your property with expert assistance',
    cta: 'Explore',
  },
  {
    variant: 'light' as const,
    icon: 'fa-solid fa-house',
    title: 'Rent Property',
    description: 'Find rental properties or list for rent',
    cta: 'Explore',
  },
  {
    variant: 'gold' as const,
    icon: 'fa-solid fa-shield-halved',
    title: 'RERA Verified',
    description: 'All properties are RERA certified and legally verified',
    badgeLabel: '100% Verified',
    cta: 'Explore',
  },
] as const

export const REAL_ESTATE_FEED_TABS = [
  { id: 'all' as const, label: 'All Listings', count: 6 },
  { id: 'nri' as const, label: 'NRI Sellers', count: 2 },
  { id: 'builder' as const, label: 'Builder Partners', count: 2 },
  { id: 'private' as const, label: 'Private Sellers', count: 2 },
]

export type RealEstateFeedTabId = (typeof REAL_ESTATE_FEED_TABS)[number]['id']

export type RealEstateTransactionType = 'buy' | 'rent' | 'sell'

/** Curated grid card — matches admin + public API shape used on `/services/real-estate-services`. */
export type RealEstateCuratedListingCard = {
  id: string
  feed: RealEstateFeedTabId
  title: string
  price: string
  sellerLabel: string
  sellerVariant: 'nri' | 'builder' | 'private'
  gradient: string
  imageUrl?: string
  location?: string
  bhk?: string
  sqft?: string
  status?: string
  listedBy?: string
  isVerified?: boolean
  transactionType?: RealEstateTransactionType
  /** Set when listing comes from API — used by feed filters */
  stateId?: number | null
  cityId?: number | null
  propertyTypeId?: number | null
  budgetRangeId?: number | null
}

export const REAL_ESTATE_CURATED_LISTINGS: RealEstateCuratedListingCard[] = [
  {
    id: '1',
    feed: 'all',
    title: '3 BHK Sea-View Apartment',
    price: '₹4.2 Cr',
    sellerLabel: 'NRI Seller',
    sellerVariant: 'nri',
    gradient: 'linear-gradient(145deg, #1e3a5f 0%, #3d6a99 45%, #93c5fd 100%)',
    location: 'Bandra West, Mumbai',
    bhk: '3 BHK',
    sqft: '1650 sq ft',
    status: 'Ready',
    listedBy: 'NRI Owner (UAE)',
    isVerified: true,
    transactionType: 'buy',
  },
  {
    id: '2',
    feed: 'all',
    title: 'Lodha Park – 2 & 3 BHK',
    price: '₹2.8 Cr onwards',
    sellerLabel: 'Builder',
    sellerVariant: 'builder',
    gradient: 'linear-gradient(145deg, #422006 0%, #b45309 50%, #fcd34d 100%)',
    location: 'Worli, Mumbai',
    bhk: '2/3 BHK',
    sqft: '980 sq ft',
    status: 'Dec 2026',
    listedBy: 'Lodha Group',
    isVerified: true,
    transactionType: 'buy',
  },
  {
    id: '3',
    feed: 'all',
    title: '2 BHK Ready Possession',
    price: '₹1.85 Cr',
    sellerLabel: 'Private Seller',
    sellerVariant: 'private',
    gradient: 'linear-gradient(145deg, #14532d 0%, #15803d 45%, #86efac 100%)',
    location: 'Whitefield, Bengaluru',
    bhk: '2 BHK',
    sqft: '1180 sq ft',
    status: 'Ready',
    listedBy: 'Private Seller',
    isVerified: true,
    transactionType: 'buy',
  },
  {
    id: '4',
    feed: 'nri',
    title: '4 BHK Duplex — Gurugram',
    price: '₹5.5 Cr',
    sellerLabel: 'NRI Seller',
    sellerVariant: 'nri',
    gradient: 'linear-gradient(145deg, #312e81 0%, #6366f1 50%, #c7d2fe 100%)',
    location: 'Sector 57, Gurugram',
    bhk: '4 BHK',
    sqft: '2400 sq ft',
    status: 'Ready',
    listedBy: 'NRI Owner (Singapore)',
    isVerified: true,
    transactionType: 'buy',
  },
  {
    id: '5',
    feed: 'builder',
    title: 'Lakefront Row Villa',
    price: '₹6.2 Cr',
    sellerLabel: 'Builder',
    sellerVariant: 'builder',
    gradient: 'linear-gradient(145deg, #0c4a6e 0%, #0284c7 50%, #bae6fd 100%)',
    location: 'Sarjapur, Bengaluru',
    bhk: '4 BHK',
    sqft: '3200 sq ft',
    status: 'Under construction',
    listedBy: 'Prestige Group',
    isVerified: true,
    transactionType: 'buy',
  },
  {
    id: '6',
    feed: 'private',
    title: 'Garden Penthouse — Pune',
    price: '₹4.95 Cr',
    sellerLabel: 'Private Seller',
    sellerVariant: 'private',
    gradient: 'linear-gradient(145deg, #4c1d95 0%, #7c3aed 50%, #ddd6fe 100%)',
    location: 'Baner, Pune',
    bhk: '3 BHK',
    sqft: '1950 sq ft',
    status: 'Ready',
    listedBy: 'Private Seller',
    isVerified: true,
    transactionType: 'buy',
  },
]

export const REAL_ESTATE_FEED_FILTERS = [
  { label: 'State', placeholder: 'All States' },
  { label: 'City', placeholder: 'All Cities' },
  { label: 'Property Type', placeholder: 'All Types' },
  { label: 'Budget', placeholder: 'Any Budget' },
] as const

export const REAL_ESTATE_SEARCH_MODE_TABS = [
  { id: 'buy' as const, label: 'Buy' },
  { id: 'sell' as const, label: 'Sell' },
  { id: 'rent' as const, label: 'Rent' },
]

export const REAL_ESTATE_NRI_SIDEBAR = [
  { icon: 'fa-solid fa-shield-halved', text: 'Power of Attorney assistance' },
  { icon: 'fa-regular fa-file-lines', text: 'Property management' },
  { icon: 'fa-solid fa-indian-rupee-sign', text: 'NRE/NRO account guidance' },
  { icon: 'fa-solid fa-book', text: 'FEMA compliance support' },
] as const

export type RealEstateSearchSelectOption = {
  value: string
  label: string
}

export type RealEstateSearchFieldDef = {
  key: string
  label: string
  placeholder: string
  options: readonly RealEstateSearchSelectOption[]
}

export const REAL_ESTATE_SEARCH_FIELDS: RealEstateSearchFieldDef[] = [
  {
    key: 'property-type',
    label: 'Property Type',
    placeholder: 'Select property type',
    options: [
      { value: 'apartment', label: 'Apartment' },
      { value: 'villa-house', label: 'Villa/House' },
      { value: 'plot-land', label: 'Plot/Land' },
      { value: 'commercial', label: 'Commercial' },
      { value: 'office-space', label: 'Office Space' },
    ],
  },
  {
    key: 'bhk-type',
    label: 'BHK Type',
    placeholder: 'Select BHK',
    options: [
      { value: '1-bhk', label: '1 BHK' },
      { value: '2-bhk', label: '2 BHK' },
      { value: '3-bhk', label: '3 BHK' },
      { value: '4-plus-bhk', label: '4+ BHK' },
    ],
  },
  {
    key: 'state',
    label: 'State',
    placeholder: 'Select state',
    options: [
      { value: 'maharashtra', label: 'Maharashtra' },
      { value: 'karnataka', label: 'Karnataka' },
      { value: 'delhi', label: 'Delhi' },
      { value: 'telangana', label: 'Telangana' },
      { value: 'tamil-nadu', label: 'Tamil Nadu' },
      { value: 'gujarat', label: 'Gujarat' },
      { value: 'west-bengal', label: 'West Bengal' },
      { value: 'kerala', label: 'Kerala' },
    ],
  },
  {
    key: 'city',
    label: 'City / Location',
    placeholder: 'Select city',
    options: [
      { value: 'mumbai', label: 'Mumbai' },
      { value: 'delhi-ncr', label: 'Delhi NCR' },
      { value: 'bangalore', label: 'Bangalore' },
      { value: 'pune', label: 'Pune' },
      { value: 'hyderabad', label: 'Hyderabad' },
      { value: 'chennai', label: 'Chennai' },
      { value: 'kolkata', label: 'Kolkata' },
      { value: 'ahmedabad', label: 'Ahmedabad' },
    ],
  },
  {
    key: 'budget-range',
    label: 'Budget Range',
    placeholder: 'Select budget',
    options: [
      { value: 'under-50l', label: 'Under ₹50 Lakhs' },
      { value: '50l-1cr', label: '₹50L - ₹1 Cr' },
      { value: '1-2cr', label: '₹1 - ₹2 Crores' },
      { value: '2-5cr', label: '₹2 - ₹5 Crores' },
      { value: 'above-5cr', label: 'Above ₹5 Crores' },
    ],
  },
]

export type RealEstateFeaturedListingCard = {
  id: string
  transactionType: RealEstateTransactionType
  title: string
  location: string
  status: string
  bhk: string
  sqft: string
  rera: string
  amenities: string[]
  price: string
  builder: string
}

export const REAL_ESTATE_FEATURED: RealEstateFeaturedListingCard[] = [
  {
    id: 'seed-featured-1',
    transactionType: 'buy',
    title: '3 BHK Apartment in Gurgaon',
    location: 'Sector 70, Gurgaon',
    status: 'Ready to Move',
    bhk: '3 BHK',
    sqft: '1450 sq ft',
    rera: 'GGM/298/2019/30',
    amenities: ['Parking', 'Gym', 'Swimming Pool', 'Security'],
    price: '₹1.2 Crores',
    builder: 'DLF Limited',
  },
  {
    id: 'seed-featured-2',
    transactionType: 'buy',
    title: '2 BHK Villa in Pune',
    location: 'Hinjewadi, Pune',
    status: 'Under Construction',
    bhk: '2 BHK',
    sqft: '1200 sq ft',
    rera: 'P52100017352',
    amenities: ['Garden', 'Car Parking', 'Security', 'Club House'],
    price: '₹85 Lakhs',
    builder: 'Godrej Properties',
  },
]

export const HOME_LOAN_SECTION = {
  title: 'Home Loan Partners',
  subtitle: 'Compare and apply for home loans from top lenders.',
} as const

export type HomeLoanPartner = {
  id?: string
  icon: string
  bank: string
  interestRate: string
  processingFee: string
  maxTenure: string
}

export const HOME_LOAN_PARTNERS: HomeLoanPartner[] = [
  {
    icon: 'fa-solid fa-house-chimney',
    bank: 'HDFC Ltd',
    interestRate: '8.5%',
    processingFee: '0.5%',
    maxTenure: '30 years',
  },
  {
    icon: 'fa-solid fa-landmark',
    bank: 'SBI Home Loans',
    interestRate: '8.65%',
    processingFee: '0.35%',
    maxTenure: '30 years',
  },
  {
    icon: 'fa-solid fa-building-columns',
    bank: 'ICICI Bank',
    interestRate: '8.75%',
    processingFee: '0.5%',
    maxTenure: '30 years',
  },
  {
    icon: 'fa-solid fa-building',
    bank: 'LIC Housing Finance',
    interestRate: '8.5%',
    processingFee: '0.5%',
    maxTenure: '30 years',
  },
]

export const NRI_HOME_LOAN_BENEFITS = [
  { icon: 'fa-solid fa-chart-line', text: 'Up to 80% financing' },
  { icon: 'fa-regular fa-file-lines', text: 'Minimal documentation' },
  { icon: 'fa-solid fa-shield-halved', text: 'FEMA compliant process' },
  { icon: 'fa-solid fa-wallet', text: 'NRE/NRO account linking' },
] as const

export const PRECONSTRUCTION_HEADING = {
  title: 'Pre-Construction Investment Opportunities',
  subtitle:
    'Invest in upcoming projects from top developers with attractive payment plans.',
} as const

export type PreconstructionProject = {
  /** Set when loaded from API (stable React key) */
  id?: string
  title: string
  badge: string
  badgeVariant: 'muted' | 'accent'
  description: string
  stats: { label: string; value: string }[]
  benefitsHeading: string
  benefits: string[]
  cta: string
}

export const PRECONSTRUCTION_PROJECTS: PreconstructionProject[] = [
  {
    title: 'DLF Privana Gurgaon',
    badge: 'Launching Soon',
    badgeVariant: 'muted',
    description: 'Premium 3-4 BHK apartments in Sector 76, Gurgaon',
    stats: [
      { label: 'Starting Price', value: '₹2.5 Crores' },
      { label: 'Possession', value: 'Dec 2027' },
      { label: 'Payment Plan', value: '20:80' },
    ],
    benefitsHeading: 'Pre-launch Benefits',
    benefits: [
      'Early bird discount up to ₹5 Lakhs',
      'Flexible payment schedule',
      'Free car parking',
      '2 years maintenance free',
    ],
    cta: 'Register Interest',
  },
  {
    title: 'Godrej Woods Noida',
    badge: 'Pre-Launch',
    badgeVariant: 'accent',
    description: 'Luxury 2-3 BHK apartments in Sector 43, Noida',
    stats: [
      { label: 'Starting Price', value: '₹1.8 Crores' },
      { label: 'Possession', value: 'Jun 2028' },
      { label: 'Payment Plan', value: '10:90' },
    ],
    benefitsHeading: 'Launch Offers',
    benefits: [
      'No registration charges',
      'Zero EMI till possession',
      'Assured rental guarantee',
      'Furniture package included',
    ],
    cta: 'Book Now',
  },
]

export const PROPERTY_LEGAL_VERIFICATION = {
  title: 'Property Legal Verification',
  subtitle:
    'Complete legal due diligence for your property investment.',
} as const

export const VERIFICATION_SERVICE_CARDS = [
  {
    icon: 'fa-solid fa-shield-halved',
    title: 'Title Verification',
    description: 'Complete chain of title verification',
  },
  {
    icon: 'fa-regular fa-file-lines',
    title: 'Legal Document Review',
    description: 'Sale deed, approvals, NOCs verification',
  },
  {
    icon: 'fa-solid fa-building',
    title: 'RERA & Approval Check',
    description: 'RERA registration and statutory approvals',
  },
] as const

export const VERIFICATION_TYPE_OPTIONS = [
  { value: '', label: 'Select verification type' },
  { value: 'title-chain', label: 'Title chain verification' },
  { value: 'documents', label: 'Legal document review' },
  { value: 'rera', label: 'RERA & approvals check' },
  { value: 'full-bundle', label: 'Full verification bundle' },
] as const

export type RealEstateCareCard = {
  id?: string
  title: string
  description: string
  bullets: string[]
  /** When false, the bullet list is hidden on the card. */
  showBullets?: boolean
}

export const REAL_ESTATE_CARE_SERVICES: RealEstateCareCard[] = [
  {
    title: 'Property Protection',
    description:
      'Comprehensive risk prevention for your Indian real estate. We monitor for encroachment risks, unauthorized access, and property condition deterioration.',
    bullets: [
      'Regular perimeter checks',
      'Boundary verification',
      'Unauthorized construction monitoring',
      'Access control verification',
      'Risk assessment reports',
    ],
  },
  {
    title: 'Risk Monitoring',
    description:
      '24/7 alert system for threats to your property. From tenant payment defaults to suspicious activity in your neighborhood.',
    bullets: [
      'Real-time alerts',
      'Neighborhood monitoring',
      'Market risk updates',
      'Regulatory change notifications',
      'Early warning systems',
    ],
  },
  {
    title: 'Document Management',
    description:
      'Secure, organized, accessible. Your property documents in a bank-grade encrypted vault with intelligent organization.',
    bullets: [
      'Document upload and storage',
      'Title deed verification',
      'Encumbrance certificate tracking',
      'Tax receipt organization',
      'Secure sharing',
    ],
  },
  {
    title: 'Property Inspections',
    description:
      'Professional physical inspections on your schedule. Trained agents visit, document conditions with photos, and provide detailed reports.',
    bullets: [
      'Scheduled inspections',
      'On-demand visits',
      'Condition documentation',
      'Maintenance assessments',
      'Photo/video reports',
    ],
  },
  {
    title: 'Tenant/Caretaker Coordination',
    description:
      'Professional oversight of occupants and property managers. We verify identities, monitor compliance, and coordinate communication.',
    bullets: [
      'Identity verification',
      'Rent payment tracking',
      'Agreement compliance',
      'Move-in/move-out documentation',
      'Dispute coordination',
    ],
  },
  {
    title: 'Compliance Reminders',
    description:
      'Never miss a deadline. Automated tracking for property tax payments, society maintenance, insurance renewals, and regulatory filings.',
    bullets: [
      'Tax deadline alerts',
      'Maintenance payment tracking',
      'Renewal reminders',
      'Filing assistance',
      'Penalty avoidance',
    ],
  },
  {
    title: 'Local Response Support',
    description:
      'When urgent issues arise, our city teams respond. From leak repairs to security concerns, we coordinate immediate on-ground action.',
    bullets: [
      'Urgent site visits',
      'Vendor coordination',
      'Emergency repairs',
      'Security incident response',
      'Society liaison',
    ],
  },
  {
    title: 'Emergency Site Visit',
    description:
      'Urgent physical inspection within 24 hours for crisis situations.',
    showBullets: false,
    bullets: [
      'Rapid dispatch to property',
      'Photo/video evidence pack',
      'Society / neighbor liaison',
      'Escalation to legal partner if needed',
    ],
  },
]

export const WHY_REAL_ESTATE = [
  {
    icon: 'fa-solid fa-globe',
    title: 'Built for NRIs & OCIs',
    sub: 'Time-zone friendly coordination and plain-English updates.',
  },
  {
    icon: 'fa-solid fa-file-shield',
    title: 'Documentation you can trust',
    sub: 'RERA, title, and encumbrance checks with structured reporting.',
  },
  {
    icon: 'fa-solid fa-headset',
    title: 'Single point of contact',
    sub: 'One team across search, diligence, registration, and handover.',
  },
] as const
