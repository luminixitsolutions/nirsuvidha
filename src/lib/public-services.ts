import { fetchPublicJson } from '@/lib/public-api'

const base = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api').replace(
  /\/$/,
  '',
)

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
  try {
    const res = await fetchPublicJson<{ data: PublicService[] }>('/services')
    return res.data
  } catch {
    return []
  }
}

/**
 * Service detail + published sub-services for `/services/[slug]`.
 */
export async function getPublicServiceDetail(
  slug: string,
): Promise<PublicServiceDetailPayload | null> {
  const url = `${base}/public/services/${encodeURIComponent(slug)}`
  const res = await fetch(url, {
    headers: { Accept: 'application/json' },
    next: { revalidate: 60 },
  })
  if (res.status === 404) {
    return null
  }
  if (!res.ok) {
    throw new Error(`public API ${res.status}`)
  }
  const json = (await res.json()) as { data: PublicServiceDetailPayload }
  return json.data
}
