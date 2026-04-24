'use client'

import { useEffect, useState } from 'react'
import { adminApi } from '@/lib/admin-api'
import { Card } from '@/components/admin/ui/Card'
import { Input } from '@/components/admin/ui/Input'
import { Button } from '@/components/admin/ui/Button'
import { toast } from 'sonner'

const SECTION = 'home'
const FIELDS: { key: string; label: string; multiline?: boolean; hint?: string }[] = [
  { key: 'hero_title_before', label: 'Hero — title (before gold)' },
  { key: 'hero_title_gold', label: 'Hero — gold part of title' },
  { key: 'hero_subtitle', label: 'Hero — subtitle', multiline: true },
  { key: 'hero_primary_cta', label: 'Hero — primary CTA' },
  { key: 'hero_secondary_cta', label: 'Hero — secondary CTA' },
  { key: 'section_services_title', label: 'Services band — title' },
  { key: 'section_services_subtitle', label: 'Services band — subtitle', multiline: true },
  { key: 'section_how_it_works_title', label: '“How it works” title' },
  { key: 'testimonials_heading', label: 'Testimonials — heading' },
  { key: 'testimonials_subtitle', label: 'Testimonials — subtitle', multiline: true },
  { key: 'site_name_short', label: 'Brand name (assistant card, etc.)' },
  {
    key: 'stats_json',
    label: 'Stats row (JSON)',
    multiline: true,
    hint: 'Array of {kind:"count"|"text", title, end, suffix, value, separator}',
  },
]

type Row = { id: number; section: string; key: string; value: string | null }

export function CmsHomePanel() {
  const [val, setVal] = useState<Record<string, string>>(() =>
    Object.fromEntries(FIELDS.map((f) => [f.key, ''])),
  )
  const [idMap, setIdMap] = useState<Record<string, number>>({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    adminApi
      .get<{ data: Row[] }>(`/cms?section=${SECTION}`)
      .then((r) => {
        const m: Record<string, string> = { ...val }
        const ids: Record<string, number> = {}
        for (const x of r.data.data) {
          m[x.key] = x.value ?? ''
          ids[x.key] = x.id
        }
        setVal((o) => ({ ...o, ...m }))
        setIdMap(ids)
      })
      .catch(() => toast.error('Could not load home copy'))
      .finally(() => setLoading(false))
  }, [])

  function setK(k: string, v: string) {
    setVal((s) => ({ ...s, [k]: v }))
  }

  async function saveAll() {
    try {
      for (const f of FIELDS) {
        const v = val[f.key] ?? ''
        if (idMap[f.key]) {
          await adminApi.put(`/cms/${idMap[f.key]}`, { value: v })
        } else {
          const r = await adminApi.post<{ data: Row }>('/cms', { section: SECTION, key: f.key, value: v })
          setIdMap((m) => ({ ...m, [f.key]: r.data.data.id }))
        }
      }
      toast.success('Home copy saved')
    } catch {
      toast.error('Save failed')
    }
  }

  if (loading) {
    return <p className="text-sm text-slate-500">Loading home fields…</p>
  }

  return (
    <Card
      className="mt-0"
      title="Homepage (section: home)"
      description="Powers hero, services band, testimonials, stats, and name on the main site when the API is reachable"
    >
      <div className="space-y-4">
        {FIELDS.map((f) =>
          f.multiline ? (
            <div key={f.key}>
              <label className="mb-1.5 block text-xs font-medium text-slate-600">{f.label}</label>
              {f.hint && <p className="mb-1 text-xs text-slate-400">{f.hint}</p>}
              <textarea
                className="w-full min-h-[72px] rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5 text-sm"
                value={val[f.key] ?? ''}
                onChange={(e) => setK(f.key, e.target.value)}
              />
            </div>
          ) : (
            <Input
              key={f.key}
              label={f.label}
              value={val[f.key] ?? ''}
              onChange={(e) => setK(f.key, e.target.value)}
            />
          ),
        )}
        <div className="pt-2">
          <Button type="button" onClick={saveAll}>
            Save homepage copy
          </Button>
        </div>
      </div>
    </Card>
  )
}
