'use client'

import { useEffect, useState, useMemo } from 'react'
import { adminApi } from '@/lib/admin-api'
import { Card } from '@/components/admin/ui/Card'
import { StatCard } from '@/components/admin/ui/StatCard'
import { LeadActivityCharts } from '@/components/admin/dashboard/LeadActivityCharts'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { Users, Target, IndianRupee, Package } from 'lucide-react'

type Rep = {
  nri_users_total: number
  leads_total: number
  services_active: number
  revenue: number
  leads_by_status: Record<string, number>
}

type Lead = { id: number; status: string; created_at: string }

export default function AdminReportsPage() {
  const [d, setD] = useState<Rep | null>(null)
  const [leads, setLeads] = useState<Lead[]>([])
  const [raw, setRaw] = useState(false)
  const [load, setLoad] = useState(true)

  useEffect(() => {
    Promise.all([
      adminApi.get<Rep>('/reports/summary').then((r) => r.data),
      adminApi.get('/leads', { params: { per_page: 200 } }).then(
        (r) => (r.data as { data: Lead[] }).data,
      ),
    ])
      .then(([r, l]) => {
        setD(r)
        setLeads(l)
      })
      .finally(() => setLoad(false))
  }, [])

  const lineData = useMemo(() => {
    const D = 86400000
    const now = Date.now()
    const keys: string[] = []
    for (let i = 13; i >= 0; i--) {
      const n = new Date(now - i * D)
      n.setHours(0, 0, 0, 0)
      keys.push(n.toISOString().slice(0, 10))
    }
    const c: Record<string, number> = Object.fromEntries(keys.map((k) => [k, 0]))
    for (const l of leads) {
      if (!l.created_at) continue
      const k = l.created_at.slice(0, 10)
      if (k in c) c[k]++
    }
    return keys.map((k) => ({ name: k.slice(5), leads: c[k] }))
  }, [leads])

  const pieData = useMemo(
    () =>
      d
        ? Object.entries(d.leads_by_status)
            .filter(([, v]) => v > 0)
            .map(([k, v]) => ({ name: k.replace(/-/g, ' '), value: v }))
        : [],
    [d],
  )
  const barData = useMemo(
    () => (d ? [{ name: 'Total', value: Math.round((d.revenue || 0) * 100) / 100 }] : []),
    [d],
  )

  if (load || !d) {
    return (
      <div>
        <Skeleton className="h-8 w-40" />
        <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((i) => (
            <Skeleton key={i} className="h-32 rounded-2xl" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard
          index={0}
          title="NRI users"
          value={d.nri_users_total}
          icon={<AdminIcon icon={Users} size="xl" aria-hidden />}
          hint="All-time"
          accent="sky"
        />
        <StatCard
          index={1}
          title="Leads"
          value={d.leads_total}
          icon={<AdminIcon icon={Target} size="xl" aria-hidden />}
          hint="In pipeline (totals API)"
          accent="violet"
        />
        <StatCard
          index={2}
          title="Revenue"
          value={d.revenue}
          icon={<AdminIcon icon={IndianRupee} size="xl" aria-hidden />}
          hint="As reported from backend"
          accent="emerald"
        />
        <StatCard
          index={3}
          title="Active services"
          value={d.services_active}
          icon={<AdminIcon icon={Package} size="xl" aria-hidden />}
          accent="amber"
        />
      </div>

      <div className="mt-8">
        <LeadActivityCharts
          lineData={lineData}
          barData={barData}
          pieData={pieData}
        />
      </div>

      <Card
        className="mt-8"
        title="API payload (debug)"
        revealIndex={4}
        action={
          <button
            type="button"
            onClick={() => setRaw((x) => !x)}
            className="text-xs font-medium text-[#9A7B32] hover:underline"
          >
            {raw ? 'Hide' : 'Show'} raw JSON
          </button>
        }
      >
        {raw && (
          <pre className="mt-0 max-w-full overflow-x-auto rounded-xl bg-slate-100 p-4 text-xs text-slate-800">
            {JSON.stringify(d, null, 2)}
          </pre>
        )}
        {!raw && (
          <p className="text-sm text-slate-500">
            Toggle to inspect the exact <code className="rounded bg-slate-100 px-1.5">/reports/summary</code> response for integrations and QA.
          </p>
        )}
      </Card>
    </div>
  )
}
