import { fetchPublicJson } from '@/lib/public-api'

/**
 * Resolves a testimonial `photo` value for the browser.
 * - Absolute http(s) URLs (from Laravel `asset()`) are used as-is.
 * - Relative paths like `/storage/...` are prefixed with the API origin
 *   so images work on localhost:3000 when `NEXT_PUBLIC_API_URL` is set.
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
  const base = (
    process.env.NEXT_PUBLIC_API_URL || 'http://127.0.0.1:8000/api'
  ).replace(/\/api\/?$/i, '')
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
  try {
    const res = await fetchPublicJson<{ data: PublicTestimonial[] }>('/testimonials')
    return res.data
  } catch {
    return []
  }
}
