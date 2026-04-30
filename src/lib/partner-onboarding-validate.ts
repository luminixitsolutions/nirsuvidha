import type { PartnerType } from '@/lib/partner-onboarding-data'

export type PartnerFormState = {
  fullName: string
  email: string
  phoneNumber: string
  businessName: string
  yearsExperience: string
  primaryCity: string
  serviceRadius: string
  operatingStates: string[]
  languagesSpoken: string[]
  consultationFee: string
  availabilityType: string
  responseTime: string
  profilePhoto: File | null
  license: File | null
  partnerAgreement: File | null
  uniqueSellingPoint: string
  successStories: string
  agreeTerms: boolean
  barCouncilState: string
  barRegistrationNumber: string
  lawSchool: string
  practiceAreas: string[]
  courtLevels: string[]
  clientCategories: string[]
  notableCaseTypes: string
  icaiMembershipNumber: string
  caFinalYear: string
  specializations: string[]
  industryExpertise: string[]
  clientSizePreference: string[]
  softwareExpertise: string[]
  additionalCertifications: string[]
  reraRegistrationNumber: string
  reraState: string
  teamSize: string
  propertyTypes: string[]
  transactionTypes: string[]
  priceRangeExpertise: string[]
  localityExpertise: string
  notableProjects: string
}

export function emptyPartnerForm(): PartnerFormState {
  return {
    fullName: '',
    email: '',
    phoneNumber: '',
    businessName: '',
    yearsExperience: '',
    primaryCity: '',
    serviceRadius: '',
    operatingStates: [],
    languagesSpoken: [],
    consultationFee: '',
    availabilityType: '',
    responseTime: '',
    profilePhoto: null,
    license: null,
    partnerAgreement: null,
    uniqueSellingPoint: '',
    successStories: '',
    agreeTerms: false,
    barCouncilState: '',
    barRegistrationNumber: '',
    lawSchool: '',
    practiceAreas: [],
    courtLevels: [],
    clientCategories: [],
    notableCaseTypes: '',
    icaiMembershipNumber: '',
    caFinalYear: '',
    specializations: [],
    industryExpertise: [],
    clientSizePreference: [],
    softwareExpertise: [],
    additionalCertifications: [],
    reraRegistrationNumber: '',
    reraState: '',
    teamSize: '',
    propertyTypes: [],
    transactionTypes: [],
    priceRangeExpertise: [],
    localityExpertise: '',
    notableProjects: '',
  }
}

/** Match Laravel / Zod messages from preview app */
export function validatePartnerForm(
  partnerType: PartnerType,
  f: PartnerFormState
): Record<string, string> {
  const e: Record<string, string> = {}

  if (!partnerType) {
    e.partnerType = 'Please select a partner type'
  }

  if (f.fullName.trim().length < 2) {
    e.fullName = 'Full name must be at least 2 characters'
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.email.trim())) {
    e.email = 'Please enter a valid email address'
  }
  const phone = f.phoneNumber.replace(/\D/g, '')
  if (!/^[6-9]\d{9}$/.test(phone)) {
    e.phoneNumber = 'Please enter a valid Indian mobile number'
  }
  if (f.businessName.trim().length < 2) {
    e.businessName = 'Business/Firm name is required'
  }
  if (!f.yearsExperience.trim()) {
    e.yearsExperience = 'Years of experience is required'
  }
  if (f.primaryCity.trim().length < 2) {
    e.primaryCity = 'Primary city is required'
  }
  if (!f.serviceRadius) {
    e.serviceRadius = 'Service radius is required'
  }
  if (f.operatingStates.length < 1) {
    e.operatingStates = 'Select at least one operating state'
  }
  if (f.languagesSpoken.length < 1) {
    e.languagesSpoken = 'Select at least one language'
  }
  if (!f.consultationFee.trim()) {
    e.consultationFee = 'Consultation fee is required'
  }
  if (!f.availabilityType) {
    e.availabilityType = 'Please select availability type'
  }
  if (!f.responseTime) {
    e.responseTime = 'Expected response time is required'
  }
  if (!f.license) {
    e.license = 'Professional License is required'
  }
  if (!f.partnerAgreement) {
    e.partnerAgreement = 'Partner Agreement is required'
  }
  if (f.uniqueSellingPoint.trim().length < 20) {
    e.uniqueSellingPoint = 'Please describe what makes you unique (minimum 20 characters)'
  }
  if (!f.agreeTerms) {
    e.agreeTerms = 'You must agree to the Terms & Conditions'
  }

  if (partnerType === 'lawyer') {
    if (!f.barCouncilState) e.barCouncilState = 'Bar Council state registration is required'
    if (!f.barRegistrationNumber.trim()) e.barRegistrationNumber = 'Bar registration number is required'
    if (!f.lawSchool.trim()) e.lawSchool = 'Law school/university is required'
    if (f.practiceAreas.length < 1) e.practiceAreas = 'Select at least one practice area'
    if (f.courtLevels.length < 1) e.courtLevels = 'Select court levels you practice in'
    if (f.clientCategories.length < 1) e.clientCategories = 'Select client categories you serve'
  }

  if (partnerType === 'accountant') {
    if (!f.icaiMembershipNumber.trim()) e.icaiMembershipNumber = 'ICAI membership number is required'
    if (f.caFinalYear.trim().length < 4) e.caFinalYear = 'CA final completion year is required'
    if (f.specializations.length < 1) e.specializations = 'Select at least one specialization'
    if (f.industryExpertise.length < 1) e.industryExpertise = 'Select industry expertise areas'
    if (f.clientSizePreference.length < 1) e.clientSizePreference = 'Select client size preferences'
    if (f.softwareExpertise.length < 1) e.softwareExpertise = 'Select software you are proficient in'
  }

  if (partnerType === 'property-broker') {
    if (!f.reraRegistrationNumber.trim()) e.reraRegistrationNumber = 'RERA registration number is required'
    if (!f.reraState) e.reraState = 'RERA registration state is required'
    if (!f.teamSize) e.teamSize = 'Team size is required'
    if (f.propertyTypes.length < 1) e.propertyTypes = 'Select property types you deal with'
    if (f.transactionTypes.length < 1) e.transactionTypes = 'Select transaction types'
    if (f.priceRangeExpertise.length < 1) e.priceRangeExpertise = 'Select price range expertise'
    if (f.localityExpertise.trim().length < 10) {
      e.localityExpertise = 'Describe your locality expertise'
    }
  }

  return e
}

export function partnerFormToFormData(partnerType: PartnerType, f: PartnerFormState): FormData {
  const fd = new FormData()
  fd.append('partner_type', partnerType)
  fd.append('full_name', f.fullName.trim())
  fd.append('email', f.email.trim())
  fd.append('phone_number', f.phoneNumber.replace(/\D/g, '').slice(0, 10))
  fd.append('business_name', f.businessName.trim())
  fd.append('years_experience', f.yearsExperience.trim())
  fd.append('primary_city', f.primaryCity.trim())
  fd.append('service_radius', f.serviceRadius)
  f.operatingStates.forEach((s) => fd.append('operating_states[]', s))
  f.languagesSpoken.forEach((s) => fd.append('languages_spoken[]', s))
  fd.append('consultation_fee', f.consultationFee.trim())
  fd.append('availability_type', f.availabilityType)
  fd.append('response_time', f.responseTime)
  fd.append('unique_selling_point', f.uniqueSellingPoint.trim())
  if (f.successStories.trim()) fd.append('success_stories', f.successStories.trim())
  fd.append('agree_terms', f.agreeTerms ? '1' : '0')

  if (f.profilePhoto) fd.append('profile_photo', f.profilePhoto)
  fd.append('license', f.license as Blob)
  fd.append('partner_agreement', f.partnerAgreement as Blob)

  if (partnerType === 'lawyer') {
    fd.append('bar_council_state', f.barCouncilState)
    fd.append('bar_registration_number', f.barRegistrationNumber.trim())
    fd.append('law_school', f.lawSchool.trim())
    f.practiceAreas.forEach((x) => fd.append('practice_areas[]', x))
    f.courtLevels.forEach((x) => fd.append('court_levels[]', x))
    f.clientCategories.forEach((x) => fd.append('client_categories[]', x))
    if (f.notableCaseTypes.trim()) fd.append('notable_case_types', f.notableCaseTypes.trim())
  }

  if (partnerType === 'accountant') {
    fd.append('icai_membership_number', f.icaiMembershipNumber.trim())
    fd.append('ca_final_year', f.caFinalYear.trim())
    f.specializations.forEach((x) => fd.append('specializations[]', x))
    f.industryExpertise.forEach((x) => fd.append('industry_expertise[]', x))
    f.clientSizePreference.forEach((x) => fd.append('client_size_preference[]', x))
    f.softwareExpertise.forEach((x) => fd.append('software_expertise[]', x))
    f.additionalCertifications.forEach((x) => fd.append('additional_certifications[]', x))
  }

  if (partnerType === 'property-broker') {
    fd.append('rera_registration_number', f.reraRegistrationNumber.trim())
    fd.append('rera_state', f.reraState)
    fd.append('team_size', f.teamSize)
    f.propertyTypes.forEach((x) => fd.append('property_types[]', x))
    f.transactionTypes.forEach((x) => fd.append('transaction_types[]', x))
    f.priceRangeExpertise.forEach((x) => fd.append('price_range_expertise[]', x))
    fd.append('locality_expertise', f.localityExpertise.trim())
    if (f.notableProjects.trim()) fd.append('notable_projects', f.notableProjects.trim())
  }

  return fd
}
