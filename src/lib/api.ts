export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'https://luminixprojects.in/nrisuvidha/public/admin'

export function getAdminApiBaseUrl(): string {
  return API_BASE_URL.replace(/\/$/, '')
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

export function buildApiUrl(path: string): string {
  const baseUrl = API_BASE_URL.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  return `${baseUrl}${cleanPath}`
}

export async function apiFetch(path: string, options: RequestInit = {}) {
  const baseUrl = API_BASE_URL.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`

  try {
    const res = await fetch(`${baseUrl}${cleanPath}`, {
      ...options,
      cache: 'no-store',
    })

    if (!res.ok) {
      console.error('API error:', res.status, res.statusText)
      return null
    }

    return await res.json()
  } catch (error) {
    console.error('API fetch failed:', error)
    return null
  }
}

/**
 * Same transport as `apiFetch` but parses JSON for any status (e.g. Laravel validation on 422).
 * Use for `FormData` POSTs. `data` is null only on network failure or non-JSON body.
 */
export async function apiFetchAlwaysJson<T = unknown>(
  path: string,
  options: RequestInit = {},
): Promise<{ ok: boolean; data: T | null }> {
  const baseUrl = API_BASE_URL.replace(/\/$/, '')
  const cleanPath = path.startsWith('/') ? path : `/${path}`
  try {
    const res = await fetch(`${baseUrl}${cleanPath}`, {
      ...options,
      cache: 'no-store',
    })
    const data = (await res.json().catch(() => null)) as T | null
    return { ok: res.ok, data }
  } catch (error) {
    console.error('API fetch failed:', error)
    return { ok: false, data: null }
  }
}
