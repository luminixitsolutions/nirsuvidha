import type { NextConfig } from 'next'

function getApiOrigin(): URL {
  const api = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
  try {
    return new URL(api.replace(/\/?api\/?$/i, '/'))
  } catch {
    return new URL('http://localhost:8000/')
  }
}

const origin = getApiOrigin()

/**
 * Patterns for `next/image` to load files from Laravel `public/storage` (symlink).
 * `asset()` in Laravel uses `APP_URL` while the app may use a different host in
 * `NEXT_PUBLIC_API_URL` (e.g. 127.0.0.1 vs localhost) — they must all be allowed
 * or remote testimonial/brand photos break with a broken-image icon.
 */
function storageImageRemotePatterns(
  o: URL,
): Array<{
  protocol: 'http' | 'https'
  hostname: string
  port?: string
  pathname: string
}> {
  const protocol = o.protocol.replace(':', '') as 'http' | 'https'
  const port = o.port || undefined
  const pathname = '/storage/**'
  const base = {
    protocol,
    ...(port ? { port } : {}),
    pathname,
  }

  if (o.hostname === '127.0.0.1' || o.hostname === 'localhost') {
    return [
      { ...base, hostname: '127.0.0.1' },
      { ...base, hostname: 'localhost' },
    ]
  }
  return [{ ...base, hostname: o.hostname }]
}

// Allow Next/Image for CMS images from Laravel storage on the API host.
const nextConfig: NextConfig = {
  images: {
    remotePatterns: storageImageRemotePatterns(origin),
  },
}

export default nextConfig
