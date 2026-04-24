const base = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api').replace(/\/$/, '')

/**
 * Unauthenticated fetches to Laravel `/api/public/*` (CMS + services catalog).
 */
export async function fetchPublicJson<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${base}/public${path.startsWith('/') ? path : `/${path}`}`, {
    ...init,
    headers: {
      Accept: 'application/json',
      ...init?.headers,
    },
    next: { revalidate: 60 },
  })
  if (!res.ok) {
    throw new Error(`public API ${res.status}`)
  }
  return res.json() as Promise<T>
}
