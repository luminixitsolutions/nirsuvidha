'use client'

import { use, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { adminApi } from '@/lib/admin-api'
import { Button } from '@/components/admin/ui/Button'
import { Card } from '@/components/admin/ui/Card'
import { Input } from '@/components/admin/ui/Input'
import { Modal } from '@/components/admin/ui/Modal'
import { Badge } from '@/components/admin/ui/Badge'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'

const STATUS = ['new', 'contacted', 'in-progress', 'completed'] as const

type ServiceOpt = { id: number; title: string }
type NriOpt = { id: number; name: string; email: string }
type Lead = {
  id: number
  status: string
  name: string | null
  email: string | null
  phone: string | null
  notes: string | null
  nri_user_id: number | null
  service_id: number | null
  created_at: string
  nriUser?: { id: number; name: string; email: string } | null
  service?: { id: number; title: string } | null
}

type P = { params: Promise<{ id: string }> }

export default function LeadDetailPage({ params }: P) {
  const { id } = use(params)
  const [lead, setLead] = useState<Lead | null>(null)
  const [services, setServices] = useState<ServiceOpt[]>([])
  const [users, setUsers] = useState<NriOpt[]>([])
  const [saving, setSaving] = useState(false)
  const [err, setErr] = useState(false)
  const [del, setDel] = useState(false)

  const load = useCallback(() => {
    if (!/^\d+$/.test(id)) {
      setErr(true)
      return
    }
    return Promise.all([
      adminApi.get<{ data: Lead }>(`/leads/${id}`).then((r) => r.data.data),
      adminApi
        .get<{ data: ServiceOpt[] }>('/services')
        .then((r) => r.data.data)
        .catch(() => [] as ServiceOpt[]),
      adminApi
        .get<{ data: NriOpt[] }>('/users', { params: { per_page: 'all' } })
        .then((r) => r.data.data)
        .catch(() => [] as NriOpt[]),
    ]).then(([L, s, n]) => {
      setLead(L)
      setServices(s)
      setUsers(n)
    }, () => setErr(true))
  }, [id])

  useEffect(() => {
    void load()
  }, [load])

  async function save() {
    if (!lead) return
    setSaving(true)
    try {
      const { data } = await adminApi.put<{ data: Lead }>(`/leads/${lead.id}`, {
        status: lead.status,
        name: lead.name,
        email: lead.email,
        phone: lead.phone,
        notes: lead.notes,
        nri_user_id: lead.nri_user_id,
        service_id: lead.service_id,
      })
      setLead(data.data)
      toast.success('Lead updated')
    } catch {
      toast.error('Could not save lead')
    } finally {
      setSaving(false)
    }
  }

  async function doDelete() {
    try {
      await adminApi.delete(`/leads/${id}`)
      window.location.href = '/admin/leads'
    } catch {
      toast.error('Delete failed')
    }
  }

  if (err) {
    return <p className="text-sm text-red-600">Lead not found.</p>
  }
  if (!lead) {
    return (
      <div>
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-4 h-64" />
      </div>
    )
  }

  return (
    <div>
      <Link
        href="/admin/leads"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9A7B32] hover:underline"
      >
        <AdminIcon icon={ArrowLeft} size="sm" className="text-[#9A7B32]" />
        Pipeline
      </Link>
      <div className="mt-2 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-lg font-semibold text-slate-900">
          {lead.name || lead.email || `Lead #${lead.id}`}
        </h1>
        <Badge className="capitalize">{lead.status?.replace(/-/g, ' ')}</Badge>
      </div>
      <p className="text-xs text-slate-500">
        Created {new Date(lead.created_at).toLocaleString()}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" onClick={save} loading={saving}>
          Save
        </Button>
        <Button type="button" variant="secondary" onClick={() => setDel(true)}>
          Delete
        </Button>
      </div>

      <Card className="mt-6" title="Contact" variant="solid" noPadding>
        <div className="space-y-4 p-5">
          <Input
            label="Name"
            value={lead.name || ''}
            onChange={(e) => setLead({ ...lead, name: e.target.value })}
          />
          <Input
            type="email"
            label="Email"
            value={lead.email || ''}
            onChange={(e) => setLead({ ...lead, email: e.target.value })}
          />
          <Input
            label="Phone"
            value={lead.phone || ''}
            onChange={(e) => setLead({ ...lead, phone: e.target.value })}
          />
        </div>
      </Card>

      <Card className="mt-4" title="Link & status" noPadding>
        <div className="space-y-4 p-5">
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Pipeline</label>
            <select
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
              value={lead.status}
              onChange={(e) => setLead({ ...lead, status: e.target.value })}
            >
              {STATUS.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Linked NRI (optional)</label>
            <select
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
              value={lead.nri_user_id ?? ''}
              onChange={(e) => {
                const n = e.target.value ? parseInt(e.target.value, 10) : null
                setLead({ ...lead, nri_user_id: n })
              }}
            >
              <option value="">—</option>
              {users.map((u) => (
                <option key={u.id} value={u.id}>
                  {u.name} ({u.email})
                </option>
              ))}
            </select>
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Service (optional)</label>
            <select
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
              value={lead.service_id ?? ''}
              onChange={(e) => {
                const n = e.target.value ? parseInt(e.target.value, 10) : null
                setLead({ ...lead, service_id: n })
              }}
            >
              <option value="">—</option>
              {services.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.title}
                </option>
              ))}
            </select>
          </div>
        </div>
      </Card>

      <Card className="mt-4" title="Internal notes" noPadding>
        <div className="p-5">
          <label className="text-xs text-slate-500">Notes</label>
          <textarea
            className="mt-1.5 w-full min-h-[120px] rounded-xl border border-slate-200/90 bg-slate-50/80 p-3 text-sm"
            value={lead.notes || ''}
            onChange={(e) => setLead({ ...lead, notes: e.target.value })}
            placeholder="Call context, follow-ups…"
          />
        </div>
      </Card>

      <Modal
        open={del}
        onClose={() => setDel(false)}
        title="Delete lead"
        size="sm"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setDel(false)}>
              Cancel
            </Button>
            <Button type="button" variant="danger" onClick={doDelete}>
              Delete
            </Button>
          </>
        }
      >
        <p className="text-sm text-slate-600">Remove this lead from the system?</p>
      </Modal>
    </div>
  )
}
