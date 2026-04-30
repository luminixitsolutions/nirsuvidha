import { apiFetch } from '@/lib/api'

/**
 * Unauthenticated fetches to Laravel `/api/public/*` (CMS + services catalog).
 */
export async function fetchPublicJson<T>(
  path: string,
  init?: RequestInit,
): Promise<T | null> {
  const p = `/api/public${path.startsWith('/') ? path : `/${path}`}`
  const data = await apiFetch(p, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...init?.headers,
    },
  })
  return data as T | null
}
