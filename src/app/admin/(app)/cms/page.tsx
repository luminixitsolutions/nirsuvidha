'use client'

import { FormEvent, useEffect, useState, useMemo } from 'react'
import { adminApi } from '@/lib/admin-api'
import { Card } from '@/components/admin/ui/Card'
import { Input } from '@/components/admin/ui/Input'
import { Button } from '@/components/admin/ui/Button'
import { toast } from 'sonner'
import { FileText, Trash2 } from 'lucide-react'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { CmsHomePanel } from '@/components/admin/CmsHomePanel'

type Row = { id: number; section: string; key: string; value: string | null }

export default function AdminCmsPage() {
  const [rows, setRows] = useState<Row[]>([])
  const [section, setSection] = useState('hero')
  const [key, setKey] = useState('headline')
  const [value, setValue] = useState('')

  function load() {
    adminApi.get<{ data: Row[] }>('/cms').then((r) => setRows(r.data.data))
  }

  useEffect(() => {
    load()
  }, [])

  const bySection = useMemo(() => {
    const m = new Map<string, Row[]>()
    for (const r of rows) {
      if (!m.has(r.section)) m.set(r.section, [])
      m.get(r.section)!.push(r)
    }
    for (const arr of m.values()) {
      arr.sort((a, b) => a.key.localeCompare(b.key))
    }
    return [...m.entries()].sort(([a], [b]) => a.localeCompare(b))
  }, [rows])

  async function saveRow(id: number, v: string) {
    await adminApi.put(`/cms/${id}`, { value: v })
    toast.success('Saved')
    load()
  }

  async function onCreate(e: FormEvent) {
    e.preventDefault()
    await adminApi.post('/cms', { section, key, value })
    setValue('')
    toast.success('Entry created')
    load()
  }

  return (
    <div className="space-y-8">
      <CmsHomePanel />
      <Card
        className="mt-0"
        title="Add or upsert a field"
        description="Combine section + key uniquely; new rows create a new cell"
      >
        <form
          onSubmit={onCreate}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          <Input
            label="Section"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            placeholder="hero, footer, …"
          />
          <Input
            label="Key"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            placeholder="headline, cta, …"
          />
          <Input
            className="sm:col-span-2 lg:col-span-1"
            label="Value"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <div className="flex items-end sm:col-span-2 lg:col-span-1">
            <Button type="submit" className="w-full">
              Upsert
            </Button>
          </div>
        </form>
      </Card>

      <div className="mt-8 space-y-6">
        {bySection.length === 0 && (
          <p className="text-sm text-slate-500">No CMS keys yet. Create one above.</p>
        )}
        {bySection.map(([sec, list]) => (
          <div key={sec}>
            <div className="mb-2 flex items-center gap-2">
              <AdminIcon icon={FileText} className="text-[#9A7B32]" />
              <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
                {sec}
              </h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2">
              {list.map((r) => (
                <CmsField key={r.id} row={r} onSave={(v) => saveRow(r.id, v)} onLoad={load} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CmsField({
  row,
  onSave,
  onLoad,
}: {
  row: Row
  onSave: (v: string) => void
  onLoad: () => void
}) {
  const [v, setV] = useState(row.value || '')

  async function remove() {
    if (!confirm('Delete this CMS key? The public site will fall back to defaults for missing keys.')) {
      return
    }
    try {
      await adminApi.delete(`/cms/${row.id}`)
      toast.success('Entry removed')
      onLoad()
    } catch {
      toast.error('Could not delete')
    }
  }

  return (
    <Card
      className="h-full p-0 shadow-sm"
      noPadding
      variant="solid"
    >
      <div className="flex items-start justify-between border-b border-slate-200/80 bg-slate-50/50 px-5 py-3">
        <div>
          <p className="text-sm font-medium text-slate-900">{row.key}</p>
          <p className="text-xs text-slate-500">section · {row.section}</p>
        </div>
        <Button type="button" size="sm" variant="ghost" className="h-8 w-8 p-0 text-red-600" onClick={remove}>
          <AdminIcon icon={Trash2} size="sm" className="text-red-600" />
        </Button>
      </div>
      <div className="p-5">
        <label className="text-xs text-slate-500">Value</label>
        <textarea
          className="mt-1.5 w-full min-h-[100px] rounded-xl border border-slate-200/90 bg-slate-50/50 p-3 text-sm text-slate-800"
          value={v}
          onChange={(e) => setV(e.target.value)}
        />
        <Button
          type="button"
          size="sm"
          className="mt-3"
          onClick={() => onSave(v)}
        >
          Save
        </Button>
      </div>
    </Card>
  )
}
