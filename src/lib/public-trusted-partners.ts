import { fetchPublicJson } from '@/lib/public-api'

/**
 * Resolves a trusted-partner `logo` URL for the browser (Laravel `storage/...` via `asset()`).
 * Plain `<img>` is used for http(s) URLs so logos work across localhost/127.0.0.1 like testimonials.
 */
export function getTrustedPartnerLogoSrc(
  logo: string | null | undefined,
  index: number,
): string {
  if (logo == null || String(logo).trim() === '') {
    return `/img/c${(index % 6) + 1}.png`
  }
  const p = String(logo).trim()
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

export type PublicTrustedPartner = {
  id: number
  name: string
  logo: string | null
  sort_order: number
}

/**
 * Active “Trusted by” companies for the home partner strip (Laravel `trusted_partners` table).
 */
export async function getPublicTrustedPartners(): Promise<PublicTrustedPartner[]> {
  try {
    const res = await fetchPublicJson<{ data: PublicTrustedPartner[] }>('/trusted-partners')
    return res.data
  } catch {
    return []
  }
}
