const PRODUCTION_API_BASE =
  'https://luminixprojects.in/nrisuvidha/public/admin'

function isLoopbackApiUrl(url: string): boolean {
  try {
    const u = new URL(url.trim().replace(/\/$/, ''))
    const h = u.hostname.toLowerCase()
    return (
      h === 'localhost' ||
      h === '127.0.0.1' ||
      h === '::1' ||
      h === '[::1]'
    )
  } catch {
    return false
  }
}

/**
 * On Vercel, `NEXT_PUBLIC_*` is baked at build time. If the project still has a
 * local Laravel URL in env, ignore it and use production so prerender/build never hits :8000.
 */
function resolveApiBaseUrl(): string {
  const raw = process.env.NEXT_PUBLIC_API_URL?.trim()
  if (!raw) return PRODUCTION_API_BASE
  if (process.env.VERCEL && isLoopbackApiUrl(raw)) {
    return PRODUCTION_API_BASE
  }
  return raw.replace(/\/$/, '')
}

export const API_BASE_URL = resolveApiBaseUrl()

/**
 * Base URL for authenticated admin JSON API (`/admin/services`, `/admin/cms`, …).
 */
export function getAdminApiBaseUrl(): string {
  const base = API_BASE_URL.replace(/\/$/, '')
  if (base.endsWith('/admin')) return base
  return `${base}/admin`
}

/**
 * Origin for Laravel `public` (storage assets). Strips trailing `/admin` or `/api` from the API base path.
 */
export function getLaravelPublicOrigin(): string {
  const raw = getAdminApiBaseUrl()
  try {
    const u = new URL(raw)
    let path = u.pathname.replace(/\/$/, '') || '/'
    if (path.endsWith('/admin')) {
      path = path.slice(0, -'/admin'.length) || '/'
    } else if (path.endsWith('/api')) {
      path = path.slice(0, -'/api'.length) || '/'
    }
    u.pathname = path
    return u.toString().replace(/\/$/, '')
  } catch {
    return 'https://luminixprojects.in/nrisuvidha/public'
  }
}

/**
 * Laravel `public` URL (with `index.php`). Public JSON routes are `{getPublicApiBaseUrl()}/api/public/*`.
 */
export function getPublicApiBaseUrl(): string {
  return getLaravelPublicOrigin()
}

/**
 * CMS / storage URLs from Laravel: may be absolute with loopback host, or relative (`/storage/...`).
 * Browsers on Vercel cannot load 127.0.0.1; relative paths would hit the Next origin by mistake.
 */
export function resolvePublicMediaUrl(raw: string | null | undefined): string {
  if (raw == null) return ''
  const s = String(raw).trim()
  if (!s) return ''

  const origin = getLaravelPublicOrigin()

  if (s.startsWith('http://') || s.startsWith('https://')) {
    try {
      const u = new URL(s)
      const h = u.hostname.toLowerCase()
      if (
        h === 'localhost' ||
        h === '127.0.0.1' ||
        h === '::1' ||
        h === '[::1]'
      ) {
        return `${origin}${u.pathname}${u.search}${u.hash}`
      }
      return s
    } catch {
      return s
    }
  }

  if (s.startsWith('/')) {
    return `${origin}${s}`
  }
  return `${origin}/${s}`
}

export function buildApiUrl(path: string): string {
  const baseUrl = getPublicApiBaseUrl().replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const baseUrl = getPublicApiBaseUrl().replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`

  try {
    const res = await fetch(`${baseUrl}${cleanPath}`, {
      ...options,
      cache: 'no-store',
    })

    if (!res.ok) return null
    return await res.json()
  } catch {
    return null
  }
}

/**
 * Parses JSON for any HTTP status (e.g. Laravel validation on 422). For `FormData` POSTs.
 */
export async function apiFetchAlwaysJson<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<{ ok: boolean; data: T | null }> {
  const baseUrl = getPublicApiBaseUrl().replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  try {
    const res = await fetch(`${baseUrl}${cleanPath}`, {
      ...options,
      cache: 'no-store',
    })
    const data = (await res.json().catch(() => null)) as T | null
    return { ok: res.ok, data }
  } catch {
    return { ok: false, data: null }
  }
}
