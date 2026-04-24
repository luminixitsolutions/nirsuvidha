'use client'

import { useRouter } from 'next/navigation'
import { FormEvent, useEffect, useState } from 'react'
import { adminApi, getAdminToken, setAdminToken } from '@/lib/admin-api'

export default function AdminLoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState('admin@nrisuvidha.test')
  const [password, setPassword] = useState('password')
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (getAdminToken()) {
      router.replace('/admin')
    }
  }, [router])

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    setErr('')
    setLoading(true)
    try {
      const { data } = await adminApi.post<{
        token: string
      }>('/login', { email, password })
      setAdminToken(data.token)
      if (typeof window !== 'undefined') {
        localStorage.setItem('admin_email', email)
      }
      router.replace('/admin')
    } catch (ex: unknown) {
      setErr('Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm rounded-2xl border border-slate-200/90 bg-white p-8 shadow-card">
        <h1 className="text-center text-xl font-bold text-stone-900">Admin sign in</h1>
        <p className="mb-6 text-center text-sm text-stone-500">NRI Suvidha</p>
        <form onSubmit={onSubmit} className="space-y-4">
          {err && (
            <p className="rounded-lg border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-800">
              {err}
            </p>
          )}
          <div>
            <label className="text-xs font-medium text-stone-500">Email</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2 text-slate-900 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label className="text-xs font-medium text-stone-500">Password</label>
            <input
              className="mt-1 w-full rounded-lg border border-slate-200/90 bg-white px-3 py-2 text-slate-900 focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold/20"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-brand-gold py-2.5 text-sm font-semibold text-white shadow-sm transition hover:opacity-95 disabled:opacity-50"
          >
            {loading ? 'Signing in…' : 'Sign in'}
          </button>
        </form>
        <p className="mt-4 text-center text-xs text-stone-400">API: {process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'}</p>
      </div>
    </div>
  )
}
