'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getAdminToken } from '@/lib/admin-api'

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const path = usePathname()
  const router = useRouter()
  const isLogin = path === '/admin/login'
  const [ready, setReady] = useState(isLogin)

  useEffect(() => {
    if (isLogin) {
      setReady(true)
      return
    }
    if (!getAdminToken()) {
      router.replace('/admin/login')
      return
    }
    setReady(true)
  }, [isLogin, path, router])

  if (!ready) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white text-slate-600">
        Loading…
      </div>
    )
  }

  return <>{children}</>
}
