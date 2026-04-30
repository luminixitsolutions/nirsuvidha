'use client'

import { useEffect } from 'react'

/**
 * Renders when the home page cannot reach the Laravel public API
 * (e.g. `php artisan serve` not running or `NEXT_PUBLIC_API_URL` is wrong).
 */
export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="container py-5 text-center">
      <h1 className="h4">Something went wrong</h1>
      <p className="text-muted small mt-2">
        The public site could not load CMS data. Ensure the Laravel server is
        running and <code className="small">NEXT_PUBLIC_API_URL</code> is set
        to your <code className="small">/api</code> base URL.
      </p>
      <button className="btn btn-main mt-3" type="button" onClick={() => reset()}>
        Try again
      </button>
    </div>
  )
}
