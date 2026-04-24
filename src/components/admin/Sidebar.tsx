'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  type LucideIcon,
  LayoutDashboard,
  Users,
  Package,
  Kanban,
  Handshake,
  FileCode2,
  Tag,
  Bell,
  BarChart3,
  Settings2,
} from 'lucide-react'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { cx } from '@/lib/cn'

const groups: { label: string; items: { href: string; label: string; icon: LucideIcon }[] }[] = [
  {
    label: 'Core',
    items: [
      { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
      { href: '/admin/users', label: 'Users', icon: Users },
      { href: '/admin/services', label: 'Services', icon: Package },
      { href: '/admin/leads', label: 'Leads', icon: Kanban },
    ],
  },
  {
    label: 'Management',
    items: [
      { href: '/admin/partners', label: 'Partners', icon: Handshake },
      { href: '/admin/cms', label: 'CMS', icon: FileCode2 },
      { href: '/admin/pricings', label: 'Pricing', icon: Tag },
      { href: '/admin/notifications', label: 'Notifications', icon: Bell },
    ],
  },
  {
    label: 'Reports & system',
    items: [
      { href: '/admin/reports', label: 'Reports', icon: BarChart3 },
      { href: '/admin/settings', label: 'Settings', icon: Settings2 },
    ],
  },
]

export function Sidebar() {
  const pathname = usePathname()

  function isActive(href: string) {
    if (href === '/admin') return pathname === '/admin'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  return (
    <aside
      className={cx(
        'fixed left-0 top-0 z-40 flex h-screen w-64 flex-col',
        'border-r border-slate-200/90 bg-white',
        'shadow-sm',
      )}
    >
      <div className="relative border-b border-slate-200/80 px-5 py-6">
        <p className="text-lg font-bold tracking-tight text-slate-900">NRI Suvidha</p>
        <p className="text-xs font-medium text-slate-500">Admin console</p>
      </div>
      <nav className="relative flex-1 space-y-6 overflow-y-auto overscroll-y-contain px-3 py-4">
        {groups.map((g) => (
          <div key={g.label}>
            <p className="mb-2 px-2 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
              {g.label}
            </p>
            <div className="space-y-0.5">
              {g.items.map((it) => {
                const active = isActive(it.href)
                return (
                  <Link
                    key={it.href}
                    href={it.href}
                    className={cx(
                      'group/nav relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium',
                      'transform-gpu transition-all duration-200 ease-out',
                      'hover:translate-x-0.5',
                      'active:scale-[0.99] motion-reduce:translate-x-0',
                      active
                        ? 'bg-gradient-to-r from-[#C9A34E] to-[#B89345] text-white shadow-sm shadow-amber-900/15'
                        : 'text-slate-600 hover:border hover:border-slate-200/90 hover:bg-slate-50 hover:shadow-sm',
                    )}
                  >
                    <span
                      className={cx(
                        'shrink-0 text-slate-500 transition duration-200 ease-out group-hover/nav:scale-110',
                        active && 'text-white',
                      )}
                    >
                      <AdminIcon icon={it.icon} size="md" className={active ? 'text-white' : undefined} />
                    </span>
                    {it.label}
                  </Link>
                )
              })}
            </div>
          </div>
        ))}
      </nav>
      <div className="relative border-t border-slate-200/80 p-4">
        <div
          className={cx(
            'flex items-center gap-2 rounded-xl border border-slate-200/80 bg-slate-50/80 px-3 py-2',
            'transition duration-200 hover:border-slate-200',
          )}
        >
          <div
            className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-xs font-bold text-white"
          >
            N
          </div>
          <div className="min-w-0">
            <p className="truncate text-xs font-semibold text-slate-800">NRI Suvidha</p>
            <p className="text-[10px] text-slate-500">v1 · admin</p>
          </div>
        </div>
      </div>
    </aside>
  )
}
