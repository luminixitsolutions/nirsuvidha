import { fetchPublicJson } from '@/lib/public-api'

export type RealEstatePublicCountry = {
  id: number
  name: string
  slug: string
}

export type RealEstatePublicState = {
  id: number
  country_id: number
  name: string
  slug: string
}

export type RealEstatePublicCity = {
  id: number
  state_id: number
  name: string
  slug: string
}

export type RealEstatePublicPropertyType = {
  id: number
  name: string
  slug: string
}

export type RealEstatePublicBudgetRange = {
  id: number
  label: string
  slug: string
}

export type RealEstatePublicBhkType = {
  id: number
  label: string
  slug: string
}

export type RealEstatePublicListingDocument = {
  url: string
  name: string
}

export type RealEstatePublicCuratedListing = {
  id: string
  title: string
  price: string
  seller_label: string
  seller_variant: 'nri' | 'builder' | 'private'
  gradient: string
  image_url: string | null
  /** Resolved absolute URLs for gallery images */
  gallery_urls?: string[]
  documents?: RealEstatePublicListingDocument[]
  location: string | null
  bhk: string | null
  sqft: string | null
  status: string | null
  listed_by: string | null
  is_verified: boolean
  state_id: number | null
  city_id: number | null
  property_type_id: number | null
  budget_range_id: number | null
  transaction_type?: string
}

export type RealEstatePublicFeaturedListing = {
  id: string
  title: string
  location: string
  status: string
  bhk: string
  sqft: string
  rera: string
  amenities: string[]
  price: string
  builder: string
  image_url?: string | null
  gallery_urls?: string[]
  documents?: RealEstatePublicListingDocument[]
  transaction_type?: string
}

export type RealEstatePublicPreConstructionProject = {
  id: string
  title: string
  status_badge: string
  badge_variant: 'muted' | 'accent'
  description: string
  starting_price: string
  possession: string
  payment_plan: string
  benefits_heading: string
  benefits: string[]
  cta_button_text: string
}

export type RealEstatePublicHomeLoanPartner = {
  id: string
  bank: string
  icon: string | null
  interest_rate: string
  processing_fee: string
  max_tenure: string
}

export type RealEstatePublicCareService = {
  id: string
  title: string
  description: string
  bullets: string[]
  show_bullets: boolean
}

export type RealEstatePublicGeoRef = {
  id: number
  name: string
  slug: string | null
}

export type RealEstatePublicListingAmenity = {
  label: string
  icon_class: string | null
}

export type RealEstatePublicListingDetail = RealEstatePublicCuratedListing & {
  listing_type: string
  is_featured: boolean
  rera: string | null
  /** Long-form copy for the public property page (plain text). */
  property_details?: string | null
  amenities: RealEstatePublicListingAmenity[]
  bhk_type_id: number | null
  country: RealEstatePublicGeoRef | null
  state: RealEstatePublicGeoRef | null
  city: RealEstatePublicGeoRef | null
  property_type: { id: number; name: string; slug: string | null } | null
  budget_range: { id: number; label: string; slug: string | null } | null
  bhk_type: { id: number; label: string; slug: string | null } | null
}

export type RealEstatePublicBundle = {
  countries: RealEstatePublicCountry[]
  states: RealEstatePublicState[]
  cities: RealEstatePublicCity[]
  property_types: RealEstatePublicPropertyType[]
  budget_ranges: RealEstatePublicBudgetRange[]
  bhk_types: RealEstatePublicBhkType[]
  curated_listings: RealEstatePublicCuratedListing[]
  featured_listings: RealEstatePublicFeaturedListing[]
  pre_construction_projects?: RealEstatePublicPreConstructionProject[]
  home_loan_partners?: RealEstatePublicHomeLoanPartner[]
  real_estate_care_services?: RealEstatePublicCareService[]
}

export async function fetchRealEstateListingDetail(
  id: string,
): Promise<RealEstatePublicListingDetail | null> {
  if (!/^\d+$/.test(id)) {
    return null
  }
  const json = await fetchPublicJson<{ data: RealEstatePublicListingDetail }>(
    `/real-estate/listings/${encodeURIComponent(id)}`,
  )
  return json?.data ?? null
}

export async function fetchRealEstatePublicBundle(): Promise<RealEstatePublicBundle | null> {
  const json = await fetchPublicJson<{ data: RealEstatePublicBundle }>(
    '/real-estate',
  )
  return json?.data ?? null
}
