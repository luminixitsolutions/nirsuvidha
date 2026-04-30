import { getLaravelPublicOrigin } from '@/lib/api'
import { fetchPublicJson } from '@/lib/public-api'

/**
 * Resolves a trusted-partner `logo` URL for the browser (Laravel `storage/...` via `asset()`).
 * Plain `<img>` is used for http(s) URLs; relative paths use the Laravel public origin.
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
  const base = getLaravelPublicOrigin()
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
  const res = await fetchPublicJson<{ data: PublicTrustedPartner[] }>(
    '/trusted-partners',
  )
  return res?.data ?? []
}
