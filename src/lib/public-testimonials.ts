import { getLaravelPublicOrigin } from '@/lib/api'
import { fetchPublicJson } from '@/lib/public-api'

/**
 * Resolves a testimonial `photo` value for the browser.
 * - Absolute http(s) URLs (from Laravel `asset()`) are used as-is.
 * - Relative paths like `/storage/...` are prefixed with the Laravel public origin.
 */
export function getTestimonialPhotoSrc(
  photo: string | null | undefined,
  index: number,
): string {
  if (photo == null || String(photo).trim() === '') {
    return `/img/team-${(index % 5) + 1}.jpg`
  }
  const p = String(photo).trim()
  if (p.startsWith('http://') || p.startsWith('https://')) {
    return p
  }
  const base = getLaravelPublicOrigin()
  if (p.startsWith('/')) {
    return `${base}${p}`
  }
  return `${base}/${p}`
}

export type PublicTestimonial = {
  id: number
  name: string
  designation: string | null
  rating: number
  feedback: string
  photo: string | null
  sort_order: number
}

/**
 * Active testimonials for the home reviews section (Laravel `testimonials` table).
 */
export async function getPublicTestimonials(): Promise<PublicTestimonial[]> {
  const res = await fetchPublicJson<{ data: PublicTestimonial[] }>('/testimonials')
  return res?.data ?? []
}
