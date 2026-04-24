'use client'

import { useCallback, useEffect, useMemo, useState } from 'react'
import Link from 'next/link'
import { adminApi } from '@/lib/admin-api'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { Kanban, Mail, Phone, Loader2, ExternalLink } from 'lucide-react'
import { cx } from '@/lib/cn'
import { toast } from 'sonner'
import { LeadActivityCharts } from '@/components/admin/dashboard/LeadActivityCharts'

type Lead = {
  id: number
  status: string
  name: string | null
  email: string | null
  phone: string | null
  service?: { title: string }
  nriUser?: { name: string; email: string } | null
  created_at?: string
  notes?: string | null
  nri_user_id?: number | null
  service_id?: number | null
}

const col = ['new', 'contacted', 'in-progress', 'completed'] as const

const pipeline: { key: (typeof col)[number]; label: string; hint: string }[] = [
  { key: 'new', label: 'New', hint: 'Fresh interest' },
  { key: 'contacted', label: 'Contacted', hint: 'First touch' },
  { key: 'in-progress', label: 'In progress', hint: 'Ongoing' },
  { key: 'completed', label: 'Completed', hint: 'Won or closed' },
]

type Summary = {
  leads_by_status: Record<string, number>
  revenue: number
}

function buildLineDataEmpty() {
  const k: { name: string; leads: number }[] = []
  for (let i = 13; i >= 0; i--) {
    const d = new Date()
    d.setHours(0, 0, 0, 0)
    d.setDate(d.getDate() - i)
    k.push({ name: d.toISOString().slice(5, 10), leads: 0 })
  }
  return k
}

export default function AdminLeadsPage() {
  const [leads, setLeads] = useState<Lead[]>([])
  const [summary, setSummary] = useState<Summary | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState<number | null>(null)

  const load = useCallback(() => {
    return adminApi
      .get('/leads', { params: { per_page: 200 } })
      .then((r) => {
        setLeads((r.data as { data: Lead[] }).data)
      })
  }, [])

  useEffect(() => {
    setLoading(true)
    Promise.all([load(), adminApi.get<Summary>('/reports/summary').then((r) => r.data)])
      .then(([, s]) => setSummary(s))
      .catch(() => toast.error('Could not load leads'))
      .finally(() => setLoading(false))
  }, [load])

  const lineData = useMemo(() => {
    const D = 86400000
    const now = Date.now()
    const keys: string[] = []
    for (let i = 13; i >= 0; i--) {
      const d = new Date(now - i * D)
      d.setHours(0, 0, 0, 0)
      keys.push(d.toISOString().slice(0, 10))
    }
    const c: Record<string, number> = Object.fromEntries(keys.map((k) => [k, 0]))
    for (const l of leads) {
      if (!l.created_at) continue
      const k = l.created_at.slice(0, 10)
      if (k in c) c[k]++
    }
    return keys.map((k) => ({ name: k.slice(5), leads: c[k] }))
  }, [leads])

  const pieData = useMemo(() => {
    if (!summary?.leads_by_status) return []
    return Object.entries(summary.leads_by_status)
      .filter(([, v]) => v > 0)
      .map(([k, v]) => ({ name: k.replace(/-/g, ' '), value: v }))
  }, [summary?.leads_by_status])

  const barData = useMemo(
    () => [{ name: 'Total', value: Math.round((summary?.revenue ?? 0) * 100) / 100 }],
    [summary?.revenue],
  )

  async function setStatus(
    id: number,
    status: (typeof col)[number],
  ) {
    setSaving(id)
    try {
      await adminApi.put(`/leads/${id}/status`, { status })
      toast.success('Stage updated')
      await load()
    } catch {
      toast.error('Could not update lead')
    } finally {
      setSaving(null)
    }
  }

  if (loading) {
    return (
      <div>
        <Skeleton className="h-8 w-48" />
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
      {leads.length === 0 && (
        <div>
          <EmptyState
            title="No open leads"
            description="As inquiries arrive from the public site, they will appear in New."
            icon={<Kanban className="h-10 w-10 text-slate-300" />}
          />
        </div>
      )}

      {summary && (
        <div className="mt-6">
          <LeadActivityCharts
            lineData={lineData.length ? lineData : buildLineDataEmpty()}
            barData={barData}
            pieData={pieData}
          />
        </div>
      )}

      <div className="mt-6 grid min-h-0 items-start gap-4 lg:grid-cols-4">
        {pipeline.map(({ key, label, hint }) => {
          const list = leads.filter((l) => l.status === key)
          return (
            <div key={key} className="flex min-h-0 flex-col">
              <div className="mb-3">
                <h2 className="text-sm font-semibold text-slate-900">{label}</h2>
                <p className="text-xs text-slate-500">{hint} · {list.length}</p>
              </div>
              <div className="min-h-48 space-y-3 overflow-y-auto rounded-2xl border border-slate-200/80 bg-slate-50/50 p-3 sm:min-h-64">
                {list.map((l) => {
                  const title = l.name || l.nriUser?.name || l.email || l.nriUser?.email || 'Lead'
                  return (
                    <div
                      key={l.id}
                      className={cx(
                        'group rounded-2xl border border-slate-200/80 bg-white p-4 text-sm',
                        'shadow-sm transition duration-200 hover:shadow-md',
                        saving === l.id && 'pointer-events-none opacity-70',
                      )}
                    >
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          href={`/admin/leads/${l.id}`}
                          className="font-semibold text-slate-900 line-clamp-1 hover:text-[#9A7B32] hover:underline"
                        >
                          {title}
                        </Link>
                        <Link
                          href={`/admin/leads/${l.id}`}
                          className="shrink-0 text-slate-400 transition hover:text-[#9A7B32]"
                          title="Open details"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </Link>
                      </div>
                      {l.service && (
                        <p className="mt-0.5 text-xs text-slate-500 line-clamp-1">{l.service.title}</p>
                      )}
                      {l.notes && (
                        <p className="mt-1 line-clamp-2 text-xs text-slate-500">{l.notes}</p>
                      )}
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-slate-400">
                        {l.email && <span className="inline-flex items-center gap-0.5"><Mail className="h-2.5 w-2.5" />{l.email}</span>}
                        {l.phone && <span className="inline-flex items-center gap-0.5"><Phone className="h-2.5 w-2.5" />{l.phone}</span>}
                      </div>
                      <div className="mt-3 flex items-center gap-2">
                        <label className="text-[10px] font-medium text-slate-500">Move</label>
                        <div className="relative flex-1 min-w-0">
                          {saving === l.id && (
                            <Loader2 className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 animate-spin text-brand-gold" />
                          )}
                          <select
                            className="w-full rounded-xl border border-slate-200/90 bg-slate-50/80 py-1.5 pl-2.5 pr-2 text-xs font-medium text-slate-800"
                            value={l.status}
                            onChange={(e) =>
                              setStatus(l.id, e.target.value as (typeof col)[number])
                            }
                            disabled={saving === l.id}
                          >
                            {col.map((p) => (
                              <option key={p} value={p}>
                                {p}
                              </option>
                            ))}
                          </select>
                        </div>
                      </div>
                    </div>
                  )
                })}
                {list.length === 0 && (
                  <p className="py-8 text-center text-xs text-slate-400">Drop leads here (none yet)</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
