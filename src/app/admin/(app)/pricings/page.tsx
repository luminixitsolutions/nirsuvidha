'use client'

import { useCallback, useEffect, useState } from 'react'
import { adminApi } from '@/lib/admin-api'
import { Card } from '@/components/admin/ui/Card'
import { Button } from '@/components/admin/ui/Button'
import { Input } from '@/components/admin/ui/Input'
import { Modal } from '@/components/admin/ui/Modal'
import { Badge } from '@/components/admin/ui/Badge'
import { Check, Pencil, Plus, Star, Trash2 } from 'lucide-react'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { toast } from 'sonner'
import { cx } from '@/lib/cn'

type P = {
  id: number
  title: string
  price: string
  features: string[] | null
  status: string
  sort_order: number
  is_highlight: boolean
}

const empty: P = {
  id: 0,
  title: '',
  price: '',
  features: [],
  status: 'active',
  sort_order: 0,
  is_highlight: false,
}

function FeatureLines({
  value,
  onChange,
}: {
  value: string[]
  onChange: (f: string[]) => void
}) {
  return (
    <div className="space-y-2">
      {value.map((f, i) => (
        <div key={i} className="flex gap-2">
          <input
            className="w-full rounded-lg border border-slate-200/90 px-3 py-1.5 text-sm"
            value={f}
            onChange={(e) =>
              onChange(value.map((x, j) => (i === j ? e.target.value : x)))
            }
          />
          <button
            type="button"
            className="text-red-600"
            onClick={() => onChange(value.filter((_, j) => j !== i))}
          >
            ×
          </button>
        </div>
      ))}
      <Button
        type="button"
        size="sm"
        variant="secondary"
        onClick={() => onChange([...value, ''])}
      >
        + Feature
      </Button>
    </div>
  )
}

export default function AdminPricingsPage() {
  const [rows, setRows] = useState<P[]>([])
  const [load, setLoad] = useState(true)
  const [form, setForm] = useState<P>(empty)
  const [creating, setCreating] = useState(false)
  const [del, setDel] = useState<P | null>(null)
  const [saving, setSaving] = useState(false)

  const fetchRows = useCallback(() => {
    return adminApi
      .get<{ data: P[] }>('/pricings')
      .then((r) => setRows(r.data.data))
      .catch(() => toast.error('Load failed'))
  }, [])

  useEffect(() => {
    setLoad(true)
    fetchRows().finally(() => setLoad(false))
  }, [fetchRows])

  function openNew() {
    setForm({
      ...empty,
      id: 0,
      features: [''],
    })
    setCreating(true)
  }

  function openEdit(p: P) {
    setForm({
      ...p,
      features: p.features && p.features.length ? [...p.features] : [''],
    })
    setCreating(true)
  }

  async function save() {
    setSaving(true)
    const feats = (form.features || []).map((f) => f.trim()).filter(Boolean)
    const payload = {
      title: form.title.trim(),
      price: form.price.trim(),
      features: feats,
      status: form.status,
      sort_order: form.sort_order,
      is_highlight: form.is_highlight,
    }
    try {
      if (form.id) {
        await adminApi.put(`/pricings/${form.id}`, payload)
        toast.success('Plan updated')
      } else {
        await adminApi.post('/pricings', payload)
        toast.success('Plan created')
      }
      setCreating(false)
      void fetchRows()
    } catch {
      toast.error('Save failed')
    } finally {
      setSaving(false)
    }
  }

  async function remove() {
    if (!del) return
    try {
      await adminApi.delete(`/pricings/${del.id}`)
      setDel(null)
      toast.success('Deleted')
      void fetchRows()
    } catch {
      toast.error('Delete failed')
    }
  }

  if (load) {
    return (
      <div>
        <Skeleton className="h-8 w-56" />
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Skeleton className="h-80 rounded-2xl" />
          <Skeleton className="h-80 rounded-2xl" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <h1 className="text-lg font-semibold text-slate-900">Plans</h1>
        <Button type="button" onClick={openNew} className="gap-1.5">
          <Plus className="h-4 w-4" />
          New plan
        </Button>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {rows.map((p) => (
          <Card
            key={p.id}
            className={cx(
              'relative flex flex-col p-0 shadow-md transition duration-200 hover:shadow-lg',
              p.is_highlight && 'ring-2 ring-amber-400/80',
            )}
            noPadding
          >
            <div className="absolute right-3 top-3 flex gap-1">
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0"
                onClick={() => openEdit(p)}
                aria-label="Edit"
              >
                <Pencil className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                size="sm"
                variant="ghost"
                className="h-8 w-8 p-0 text-red-600"
                onClick={() => setDel(p)}
                aria-label="Delete"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
            {p.is_highlight && (
              <div className="absolute left-3 top-3 text-amber-500">
                <Star className="h-5 w-5 fill-amber-400" />
              </div>
            )}
            <div className="bg-gradient-to-br from-slate-800 to-slate-700 p-6 text-white">
              <p className="text-sm font-medium opacity-90">Plan</p>
              <h2 className="text-xl font-bold">{p.title}</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight tabular-nums">
                {p.price}
              </p>
            </div>
            <div className="flex flex-1 flex-col p-6">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <Badge tone="outline" className="capitalize">
                  {p.status}
                </Badge>
                <span className="text-xs text-slate-500">order {p.sort_order}</span>
              </div>
              {p.features && p.features.length > 0 && (
                <ul className="mt-2 space-y-2.5 text-sm text-slate-600">
                  {p.features.map((f) => (
                    <li key={f} className="flex gap-2.5">
                      <Check className="h-4 w-4 shrink-0 text-slate-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </Card>
        ))}
      </div>

      <Modal
        open={creating}
        onClose={() => setCreating(false)}
        title={form.id ? 'Edit plan' : 'New plan'}
        size="md"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setCreating(false)}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={save}
              loading={saving}
              disabled={!form.title.trim() || !form.price.trim()}
            >
              {form.id ? 'Update' : 'Create'}
            </Button>
          </>
        }
      >
        <div className="space-y-3">
          <Input
            label="Title"
            value={form.title}
            onChange={(e) => setForm((f) => ({ ...f, title: e.target.value }))}
          />
          <Input
            label="Price"
            value={form.price}
            onChange={(e) => setForm((f) => ({ ...f, price: e.target.value }))}
            placeholder="e.g. ₹4,999/mo"
          />
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Features</label>
            <FeatureLines
              value={form.features || []}
              onChange={(f) => setForm((o) => ({ ...o, features: f }))}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Status</label>
            <select
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
              value={form.status}
              onChange={(e) => setForm((f) => ({ ...f, status: e.target.value }))}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
          <Input
            type="number"
            label="Sort order"
            value={String(form.sort_order)}
            onChange={(e) => setForm((f) => ({ ...f, sort_order: parseInt(e.target.value, 10) || 0 }))}
          />
          <label className="flex items-center gap-2 text-sm text-slate-700">
            <input
              type="checkbox"
              checked={form.is_highlight}
              onChange={(e) => setForm((f) => ({ ...f, is_highlight: e.target.checked }))}
            />
            Highlight / featured
          </label>
        </div>
      </Modal>

      <Modal
        open={!!del}
        onClose={() => setDel(null)}
        title="Delete plan"
        size="sm"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setDel(null)}>
              Cancel
            </Button>
            <Button type="button" variant="danger" onClick={remove}>
              Delete
            </Button>
          </>
        }
      >
        {del && <p className="text-slate-600">Delete plan “{del.title}”?</p>}
      </Modal>
    </div>
  )
}
