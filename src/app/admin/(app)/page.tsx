'use client'

import { useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { adminApi } from '@/lib/admin-api'
import { StatCard } from '@/components/admin/ui/StatCard'
import { Card } from '@/components/admin/ui/Card'
import { StatGridSkeleton, Skeleton } from '@/components/admin/ui/Skeleton'
import { Badge } from '@/components/admin/ui/Badge'
import { DataTable, THead, TBody, Th, Td, Tr } from '@/components/admin/ui/Table'
import { LeadActivityCharts } from '@/components/admin/dashboard/LeadActivityCharts'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { Users, Target, IndianRupee, Package, Bell, ArrowRight } from 'lucide-react'

type Summary = {
  nri_users_total: number
  leads_total: number
  services_active: number
  revenue: number
  leads_by_status: Record<string, number>
}

type Lead = {
  id: number
  name: string | null
  email: string | null
  status: string
  created_at: string
  service?: { title: string }
}

type Notif = {
  id: number
  title: string
  message: string | null
  type: string
  read_at: string | null
}

function buildLineData(leads: { created_at: string }[], days: number) {
  const keys: string[] = []
  for (let i = days - 1; i >= 0; i--) {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    d.setDate(d.getDate() - i)
    keys.push(d.toISOString().slice(0, 10))
  }
  const counts: Record<string, number> = Object.fromEntries(keys.map((k) => [k, 0]))
  for (const l of leads) {
    if (!l.created_at) continue
    const k = l.created_at.slice(0, 10)
    if (k in counts) counts[k]++
  }
  return keys.map((k) => ({ name: k.slice(5), leads: counts[k] }))
}

function leadWeekTrend(leads: { created_at: string }[]) {
  const D = 86400000
  const now = Date.now()
  const recent = leads.filter((l) => {
    const t = new Date(l.created_at).getTime()
    return t > now - 7 * D && t <= now
  })
  const prev = leads.filter((l) => {
    const t = new Date(l.created_at).getTime()
    return t > now - 14 * D && t <= now - 7 * D
  })
  if (recent.length === 0 && prev.length === 0) {
    return { label: 'No new leads in last 14d', up: null as boolean | null }
  }
  if (prev.length === 0) {
    return { label: recent.length > 0 ? `+${recent.length} this week` : 'No new this week', up: true as boolean | null }
  }
  const pct = Math.round(((recent.length - prev.length) / prev.length) * 100)
  return {
    label: `${pct >= 0 ? '+' : ''}${pct}% vs prior week`,
    up: (recent.length >= prev.length) as boolean,
  }
}

function toPieData(byStatus: Record<string, number> | undefined) {
  if (!byStatus) return [] as { name: string; value: number }[]
  return Object.entries(byStatus)
    .filter(([, v]) => v > 0)
    .map(([k, v]) => ({ name: k.replace(/-/g, ' '), value: v }))
}

export default function AdminDashboard() {
  const [summary, setSummary] = useState<Summary | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [notes, setNotes] = useState<Notif[]>([])
  const [err, setErr] = useState('')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setErr('')
    setLoading(true)
    Promise.all([
      adminApi.get<Summary>('/reports/summary'),
      adminApi
        .get('/leads', { params: { per_page: 200 } })
        .then((r) => (r.data as { data: Lead[] }).data),
      adminApi
        .get('/notifications')
        .then((r) => (r.data as { data: Notif[] }).data.slice(0, 5))
        .catch(() => [] as Notif[]),
    ])
      .then(([sumRes, ld, ns]) => {
        setSummary(sumRes.data)
        setLeads(ld)
        setNotes(ns)
      })
      .catch(() => setErr('We could not load the dashboard. Check the API and try again.'))
      .finally(() => setLoading(false))
  }, [])

  const lineData = useMemo(() => buildLineData(leads, 14), [leads])
  const leadTrend = useMemo(() => leadWeekTrend(leads), [leads])
  const pieData = useMemo(
    () => toPieData(summary?.leads_by_status),
    [summary?.leads_by_status],
  )
  const barData = useMemo(
    () => [{ name: 'Total', value: Math.round((summary?.revenue ?? 0) * 100) / 100 }],
    [summary?.revenue],
  )
  const recentLeads = useMemo(
    () => [...leads].sort((a, b) => b.id - a.id).slice(0, 5),
    [leads],
  )

  if (err) {
    return (
      <div className="max-w-lg rounded-2xl border border-red-200/80 bg-red-50/50 p-6 text-sm text-red-800">
        {err}
      </div>
    )
  }

  if (loading || !summary) {
    return (
      <div>
        <Skeleton className="h-7 w-48" />
        <Skeleton className="mt-2 h-4 w-64" />
        <div className="mt-8">
          <StatGridSkeleton />
        </div>
        <div className="mt-8 h-64 rounded-2xl">
          <Skeleton className="h-full w-full" />
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-gradient-to-r from-sky-50/50 via-white to-amber-50/40 p-4 shadow-sm sm:p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {new Date().toLocaleDateString(undefined, {
            weekday: 'long',
            month: 'long',
            day: 'numeric',
            year: 'numeric',
          })}
        </p>
        <p className="mt-1.5 text-sm text-slate-600">
          <span className="font-semibold text-slate-900">Your workspace at a glance</span>
          <span className="text-slate-500"> — key metrics, trends, and pipeline. Data loads from the live API.</span>
        </p>
        <div
          className="pointer-events-none absolute -right-12 -top-8 h-32 w-32 rounded-full bg-sky-200/25 blur-2xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-6 right-1/3 h-24 w-24 rounded-full bg-amber-200/30 blur-2xl"
          aria-hidden
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          index={0}
          title="NRI users"
          value={summary.nri_users_total}
          icon={<AdminIcon icon={Users} size="xl" aria-hidden />}
          hint="All-time sign-ups"
          accent="sky"
        />
        <StatCard
          index={1}
          title="Leads"
          value={summary.leads_total}
          icon={<AdminIcon icon={Target} size="xl" aria-hidden />}
          trendLabel={leadTrend.label}
          trendUp={leadTrend.up}
          accent="violet"
        />
        <StatCard
          index={2}
          title="Revenue"
          value={new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }).format(
            summary.revenue,
          )}
          icon={<AdminIcon icon={IndianRupee} size="xl" aria-hidden />}
          hint="Placeholders until billing is connected"
          accent="emerald"
        />
        <StatCard
          index={3}
          title="Active services"
          value={summary.services_active}
          icon={<AdminIcon icon={Package} size="xl" aria-hidden />}
          hint="Items marked active in catalog"
          accent="amber"
        />
      </div>

      <div>
        <LeadActivityCharts lineData={lineData} barData={barData} pieData={pieData} />
      </div>

      <div className="grid gap-6 lg:grid-cols-5">
        <Card
          className="lg:col-span-3"
          title="Recent leads"
          description="Latest by ID"
          revealIndex={3}
          action={
            <Link
              href="/admin/leads"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9A7B32] transition duration-200 ease-out hover:translate-x-0.5 hover:text-[#7A6128]"
            >
              Open pipeline
              <AdminIcon icon={ArrowRight} size="sm" className="text-[#9A7B32]" />
            </Link>
          }
          noPadding
        >
          {recentLeads.length === 0 ? (
            <p className="px-6 py-8 text-center text-sm text-slate-500">No leads yet</p>
          ) : (
            <DataTable className="border-0 shadow-none">
              <THead>
                <Tr>
                  <Th>Lead</Th>
                  <Th>Service</Th>
                  <Th>Status</Th>
                </Tr>
              </THead>
              <TBody>
                {recentLeads.map((l) => (
                  <Tr key={l.id}>
                    <Td>
                      <div className="font-medium text-slate-900">
                        {l.name || l.email || 'Lead'}
                      </div>
                      {l.email && l.name && (
                        <div className="text-xs text-slate-500">{l.email}</div>
                      )}
                    </Td>
                    <Td className="text-slate-600">
                      {l.service?.title ?? '—'}
                    </Td>
                    <Td>
                      <Badge tone="gold" className="capitalize">
                        {l.status?.replace(/-/g, ' ') || '—'}
                      </Badge>
                    </Td>
                  </Tr>
                ))}
              </TBody>
            </DataTable>
          )}
        </Card>

        <Card
          className="lg:col-span-2"
          title="Inbox"
          description="System notifications"
          noPadding
          revealIndex={4}
        >
          {notes.length === 0 ? (
            <p className="px-6 py-8 text-center text-sm text-slate-500">You’re all caught up</p>
          ) : (
            <ul className="divide-y divide-slate-100">
              {notes.map((n) => (
                <li key={n.id} className="flex gap-3 px-5 py-4">
                  <div className="mt-0.5 flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-600">
                    <AdminIcon icon={Bell} size="sm" className="text-[#9A7B32]" aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-slate-900">{n.title}</p>
                    {n.message && <p className="mt-0.5 line-clamp-2 text-sm text-slate-600">{n.message}</p>}
                    <p className="mt-1 flex flex-wrap items-center gap-2 text-[11px] text-slate-400">
                      <Badge tone="outline" className="font-normal text-[10px] text-slate-500">
                        {n.type}
                      </Badge>
                      {n.read_at ? (
                        <span>Read</span>
                      ) : (
                        <Badge tone="success" className="text-[10px]" dot>
                          Unread
                        </Badge>
                      )}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          )}
          <div className="border-t border-slate-200/80 px-5 py-3">
            <Link
              href="/admin/notifications"
              className="text-sm font-medium text-[#9A7B32] transition hover:underline"
            >
              All notifications
            </Link>
          </div>
        </Card>
      </div>
    </div>
  )
}
