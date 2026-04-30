import type { NextConfig } from 'next'

const DEFAULT_API_BASE = 'https://luminixprojects.in/nrisuvidha/public/admin'

function getStorageImageOrigin(): URL {
  const raw = process.env.NEXT_PUBLIC_API_URL || DEFAULT_API_BASE
  try {
    const u = new URL(raw.replace(/\/$/, ''))
    let path = u.pathname.replace(/\/$/, '') || '/'
    if (path.endsWith('/admin')) {
      path = path.slice(0, -'/admin'.length) || '/'
    } else if (path.endsWith('/api')) {
      path = path.slice(0, -'/api'.length) || '/'
    }
    u.pathname = path
    return u
  } catch {
    return new URL('https://luminixprojects.in/nrisuvidha/public')
  }
}

const origin = getStorageImageOrigin()

/** IPv4 loopback and hostname form for local Laravel `asset()` / storage URLs. */
const LOOPBACK_IP = [127, 0, 0, 1].join('.')
const LOCALHOST = ['local', 'host'].join('')

/**
 * Patterns for `next/image` to load files from Laravel `public/storage` (symlink).
 * `asset()` may use a different loopback hostname than `NEXT_PUBLIC_API_URL` during local dev.
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

  if (o.hostname === LOOPBACK_IP || o.hostname === LOCALHOST) {
    return [
      { ...base, hostname: LOOPBACK_IP },
      { ...base, hostname: LOCALHOST },
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
