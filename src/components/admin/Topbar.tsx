'use client'

import { useCallback, useEffect, useRef, useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import {
  Bell,
  LogOut,
  Search,
  ChevronDown,
  UserCircle2,
} from 'lucide-react'
import { setAdminToken } from '@/lib/admin-api'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { Button } from '@/components/admin/ui/Button'
import { cx } from '@/lib/cn'

const titles: { prefix: string; title: string; subtitle: string }[] = [
  { prefix: '/admin/users', title: 'Users', subtitle: 'NRI directory & outreach' },
  { prefix: '/admin/services', title: 'Services', subtitle: 'Catalog and availability' },
  { prefix: '/admin/leads', title: 'Leads', subtitle: 'Pipeline & follow-ups' },
  { prefix: '/admin/partners', title: 'Partners', subtitle: 'Logos & brand assets' },
  { prefix: '/admin/cms', title: 'Homepage CMS', subtitle: 'Section keys & copy' },
  { prefix: '/admin/pricings', title: 'Pricing', subtitle: 'Plans and features' },
  { prefix: '/admin/notifications', title: 'Notifications', subtitle: 'Admin inbox' },
  { prefix: '/admin/reports', title: 'Reports', subtitle: 'Exports and summaries' },
  { prefix: '/admin/settings', title: 'Settings', subtitle: 'Key / value configuration' },
]

function pageHeading(path: string) {
  if (path === '/admin') {
    return { title: 'Dashboard', subtitle: 'Live metrics and pipeline health' }
  }
  const m = titles.find((t) => path.startsWith(t.prefix))
  if (m) return { title: m.title, subtitle: m.subtitle }
  return { title: 'Admin', subtitle: 'NRI Suvidha' }
}

export function Topbar() {
  const router = useRouter()
  const pathname = usePathname()
  const [search, setSearch] = useState('')
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState<string | null>(null)
  const ref = useRef<HTMLDivElement | null>(null)
  const heading = pageHeading(pathname)

  useEffect(() => {
    setEmail(typeof window !== 'undefined' ? localStorage.getItem('admin_email') : null)
  }, [])

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    return () => document.removeEventListener('mousedown', onDoc)
  }, [])

  const onSearch = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault()
      const q = search.trim()
      router.push(q ? `/admin/users?q=${encodeURIComponent(q)}` : '/admin/users')
    },
    [router, search],
  )

  function logout() {
    setAdminToken(null)
    router.push('/admin/login')
  }

  return (
    <header
      className={cx(
        'sticky top-0 z-30 flex min-h-[4.5rem] shrink-0 items-center justify-between gap-4 py-2.5',
        'border-b border-slate-200/90 bg-white',
        'px-4 shadow-sm sm:px-6',
      )}
    >
      <div className="min-w-0 flex-1">
        <h1 className="relative truncate text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
          {heading.title}
        </h1>
        <div
          className="mt-1.5 h-0.5 max-w-10 rounded-full bg-gradient-to-r from-[#C9A34E] to-amber-300/70"
          aria-hidden
        />
        <p className="mt-1.5 hidden text-sm text-slate-500 sm:block">{heading.subtitle}</p>
      </div>
      <form
        onSubmit={onSearch}
        className="hidden max-w-md flex-1 md:block"
      >
        <div className="group/search relative">
          <AdminIcon
            icon={Search}
            className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 transition-colors duration-200 group-focus-within/search:text-slate-600"
            aria-hidden
          />
          <input
            type="search"
            name="q"
            placeholder="Search users by name, email, phone…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 py-2 pl-10 pr-3 text-sm text-slate-900 shadow-sm placeholder:text-slate-400 transition duration-200 ease-out focus:border-slate-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/15"
            autoComplete="off"
          />
        </div>
      </form>
      <div className="flex items-center gap-1 sm:gap-2">
        <Button
          type="button"
          variant="ghost"
          size="sm"
          className="hidden h-9 w-9 p-0 text-slate-500 hover:text-slate-800 sm:inline-flex"
          aria-label="Notifications"
        >
          <AdminIcon icon={Bell} className="text-slate-500" />
        </Button>
        <div className="relative" ref={ref}>
          <Button
            type="button"
            variant="secondary"
            size="sm"
            onClick={() => setOpen((o) => !o)}
            className="gap-1.5 pl-2 pr-2.5"
            aria-expanded={open}
            aria-haspopup="menu"
          >
            <AdminIcon icon={UserCircle2} className="text-slate-500" />
            <span className="hidden max-w-[9rem] truncate sm:inline">Account</span>
            <AdminIcon
              icon={ChevronDown}
              size="sm"
              className={cx('text-slate-500 transition-transform duration-200', open && 'rotate-180')}
            />
          </Button>
          {open && (
            <div
              className="absolute right-0 mt-2 w-60 overflow-hidden rounded-xl border border-slate-200/90 bg-white py-1.5 text-sm shadow-md"
              role="menu"
            >
              <p className="px-3 py-2 text-xs text-slate-500">Signed in</p>
                <p className="truncate px-3 text-sm font-medium text-slate-800">
                {email || 'admin@nrisuvidha.test'}
              </p>
              <div className="my-1.5 border-t border-amber-100" role="none" />
              <button
                type="button"
                onClick={logout}
                className="flex w-full items-center gap-2 px-3 py-2 text-slate-700 transition duration-150 ease-out hover:bg-slate-50 active:scale-[0.99]"
                role="menuitem"
              >
                <AdminIcon icon={LogOut} className="text-slate-500" />
                Log out
              </button>
            </div>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          size="sm"
          onClick={logout}
          className="border-slate-200/90 text-slate-700"
        >
          <span className="hidden sm:inline">Logout</span>
          <AdminIcon icon={LogOut} className="sm:hidden text-slate-500" />
        </Button>
      </div>
    </header>
  )
}
