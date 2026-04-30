import { fetchPublicJson } from '@/lib/public-api'

export type PublicService = {
  id: number
  /** URL segment for `/services/[slug]` (from Laravel). */
  slug?: string
  title: string
  icon: string
  short_details: string
  full_details: string | null
  below_short_title: string | null
  photo: string | null
  multiple_photos: string[]
  sort_order: number
  link_href: string | null
}

export type PublicSubServiceCard = {
  id: number
  name: string
  icon: string
  short_details: string
  details: string | null
  photo: string | null
  cases_handled: number | null
  sort_order: number
}

export type PublicServiceDetailPayload = {
  service: PublicService
  sub_services: PublicSubServiceCard[]
}

/**
 * Live services for the home grid (Laravel `services` table).
 */
export async function getPublicServices(): Promise<PublicService[]> {
  const res = await fetchPublicJson<{ data: PublicService[] }>('/services')
  return res?.data ?? []
}

/**
 * Service detail + published sub-services for `/services/[slug]`.
 */
export async function getPublicServiceDetail(
  slug: string,
): Promise<PublicServiceDetailPayload | null> {
  const json = await fetchPublicJson<{ data: PublicServiceDetailPayload }>(
    `/services/${encodeURIComponent(slug)}`,
  )
  return json?.data ?? null
}
