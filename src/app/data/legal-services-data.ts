/** Copy & structure for /legal-services — aligned with NRI Suvidha legal hub layout */

export const legalPage = {
  title: 'Legal Services',
  subtitle: 'Expert legal consultation and case management',
  searchPlaceholder: 'Search for legal services, lawyers, or case types...',
  categoriesHeading: 'Legal Service Categories',
  categoriesSub: 'Choose your area of legal need',
  quickHeading: 'Quick Legal Actions',
  quickSub: 'Fast-track your legal requirements',
  additionalHeading: 'Legal Services',
  additionalSub: 'Additional legal support services for NRI clients',
  estateHeading: 'Inheritance Planning',
  estateSub: 'Plan and secure the legacy you leave behind',
  transferHeading: 'Property / Account Transfer',
  transferSub: 'Post-demise transfers, claims, and succession services',
  featuredHeading: 'Featured Lawyers',
  featuredSub: 'Top-rated legal experts ready to help you',
} as const

export const legalCategories = [
  { title: 'Property Law', desc: 'Title verification, disputes, and property documentation.', cases: 156, icon: 'fa-solid fa-house' },
  { title: 'Family Law', desc: 'Divorce, custody, maintenance, and family settlements.', cases: 142, icon: 'fa-solid fa-people-roof' },
  { title: 'Corporate Law', desc: 'Contracts, compliance, and corporate governance.', cases: 234, icon: 'fa-solid fa-building' },
  { title: 'Criminal Law', desc: 'Defense coordination and bail-related support.', cases: 67, icon: 'fa-solid fa-scale-balanced' },
  { title: 'Consumer Protection', desc: 'Consumer forums, defective goods, and service disputes.', cases: 123, icon: 'fa-solid fa-shield-halved' },
  { title: 'Employment Law', desc: 'Workplace disputes, contracts, and exit settlements.', cases: 98, icon: 'fa-solid fa-briefcase' },
] as const

export const quickLegalActions = [
  {
    title: 'Generate Legal Documents',
    desc: 'Create power of attorney, property agreements, wills & more',
    cta: 'Start Document Generator',
    icon: 'fa-solid fa-file-lines',
    href: '/legal-document-generator',
  },
  {
    title: 'Book Legal Consultation',
    desc: 'Schedule video calls with verified lawyers',
    cta: 'Book Consultation',
    icon: 'fa-solid fa-video',
    href: '/legal-consultation-booking',
  },
] as const

export const additionalLegalCards = [
  {
    title: 'Legal Support',
    desc: 'Structured legal coordination when you need it. We coordinate with vetted lawyers, manage documentation, and track case progress.',
    bullets: [
      'Lawyer referral and coordination',
      'Document preparation support',
      'Case status tracking',
      'POA management',
      'Legal notice assistance',
    ],
  },
  {
    title: 'Apostille',
    desc: 'Official apostille certification service for your documents, coordinated end-to-end.',
  },
  {
    title: 'Document Verification',
    desc: 'Complete verification of property documents, title check, and encumbrance certificate review.',
  },
  {
    title: 'Legal Notice Assistance',
    desc: 'Drafting and dispatch of legal notices with lawyer coordination.',
  },
  {
    title: 'POA Setup',
    desc: 'Power of Attorney document preparation, review, and registration coordination.',
  },
  {
    title: 'Legal Wills',
    desc: 'End-to-end drafting of legally valid wills tailored to NRI asset structures across India and abroad.',
    sectionTitle: 'Legal Wills',
    sectionSub: 'Drafting and management of legally valid wills.',
  },
] as const

export const estatePlanningCards = [
  { title: 'Will Registration', desc: 'Official registration of your will with the sub-registrar for legal enforceability.' },
  { title: 'Will Proof-reading', desc: 'Expert review of existing wills to ensure clarity, compliance, and dispute-proof language.' },
  { title: 'Power of Attorney', desc: 'Drafting and registration of general or specific POA to authorize trusted representatives in India.' },
  { title: 'Living Will / AMD', desc: 'Advance Medical Directive preparation outlining your healthcare wishes in advance.' },
  { title: 'Gift Deed', desc: 'Drafting and registration of gift deeds for transferring property or assets to loved ones.' },
  { title: 'Senior Citizen Support', desc: 'Dedicated legal and welfare assistance for elderly parents staying back in India.' },
] as const

export const propertyTransferCards = [
  { title: 'Probate of Will', desc: 'Court-led probate process to legally validate and execute the will of the deceased.' },
  { title: 'Property Transfer & Claims', desc: 'End-to-end coordination of property mutation, transfer, and rightful claims for heirs.' },
  { title: 'Unclaimed Asset Recovery', desc: 'Locate and recover dormant bank accounts, shares, and unclaimed assets.' },
  { title: 'Government ID Closure', desc: 'Closure and succession coordination for government IDs and linked accounts.' },
] as const

export const whyChooseLegal = [
  { title: 'Verified Lawyers', desc: 'All lawyers are bar council verified', icon: 'fa-solid fa-shield-halved' },
  { title: 'Quick Matching', desc: 'Get matched within 2 hours', icon: 'fa-solid fa-clock' },
  { title: 'Top Rated', desc: '4.8+ average rating', icon: 'fa-solid fa-star' },
] as const

export const recentCasesDisplay = [
  { title: 'Property Dispute', status: 'In Progress', variant: 'primary' as const },
  { title: 'Contract Review', status: 'Completed', variant: 'success' as const },
] as const

export const featuredLawyers = [
  {
    name: 'Adv. Priya Sharma',
    verified: true,
    specialization: 'Property Law',
    experience: 12,
    location: 'Mumbai',
    rating: 4.9,
    reviews: 234,
    fee: '₹2,500',
    languages: 'Hindi, English, Marathi',
  },
  {
    name: 'Adv. Rohan Mehta',
    verified: true,
    specialization: 'Corporate Law',
    experience: 9,
    location: 'Delhi',
    rating: 4.8,
    reviews: 189,
    fee: '₹3,000',
    languages: 'Hindi, English',
  },
  {
    name: 'Adv. Ananya Krishnan',
    verified: true,
    specialization: 'Family Law',
    experience: 15,
    location: 'Bangalore',
    rating: 4.9,
    reviews: 312,
    fee: '₹2,800',
    languages: 'English, Kannada, Tamil',
  },
] as const
