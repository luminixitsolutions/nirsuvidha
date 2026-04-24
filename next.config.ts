import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  /** Reduces stale chunk errors (Cannot find module './xxxx.js') after HMR / Fast Refresh */
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = false
    }
    return config
  },
}

export default nextConfig
