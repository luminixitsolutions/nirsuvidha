'use client'

import { useCallback, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { adminApi } from '@/lib/admin-api'
import { Button } from '@/components/admin/ui/Button'
import { Card } from '@/components/admin/ui/Card'
import { Input } from '@/components/admin/ui/Input'
import { toast } from 'sonner'

export type ServiceRecord = {
  id?: number
  title: string
  slug: string | null
  icon: string | null
  description: string | null
  short_description: string | null
  full_description: string | null
  status: string
  banner_image: string | null
  gallery: string[] | null
  features: unknown
  benefits: unknown
  steps: unknown
  faqs: unknown
  banner_image_url?: string | null
  gallery_urls?: string[] | null
}

type Faq = { q: string; a: string }

const apiBase = (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api').replace(/\/$/, '')
const siteBase = apiBase.replace(/\/api\/?$/, '')

function asLines(v: unknown): string[] {
  if (Array.isArray(v)) {
    return v.map((x) => (typeof x === 'string' ? x : JSON.stringify(x)))
  }
  if (v == null) return []
  return [String(v)]
}

function asFaqs(v: unknown): Faq[] {
  if (!Array.isArray(v)) return [{ q: '', a: '' }]
  const o = v
    .map((row) => {
      if (row && typeof row === 'object' && 'question' in row && 'answer' in row) {
        return {
          q: String((row as { question: string }).question ?? ''),
          a: String((row as { answer: string }).answer ?? ''),
        }
      }
      if (row && typeof row === 'object' && 'q' in row && 'a' in row) {
        return { q: String((row as Faq).q), a: String((row as Faq).a) }
      }
      return { q: '', a: '' }
    })
    .filter((f) => f.q || f.a)
  return o.length ? o : [{ q: '', a: '' }]
}

export function ServiceForm({
  initial,
  mode,
}: {
  initial: ServiceRecord
  mode: 'create' | 'edit'
}) {
  const router = useRouter()
  const [title, setTitle] = useState(initial.title)
  const [slug, setSlug] = useState(initial.slug || '')
  const [icon, setIcon] = useState(initial.icon || '')
  const [shortDesc, setShortDesc] = useState(initial.short_description || initial.description || '')
  const [fullDesc, setFullDesc] = useState(initial.full_description || '')
  const [status, setStatus] = useState(initial.status)
  const [features, setFeatures] = useState<string[]>(asLines(initial.features))
  const [benefits, setBenefits] = useState<string[]>(asLines(initial.benefits))
  const [steps, setSteps] = useState<string[]>(asLines(initial.steps))
  const [faqs, setFaqs] = useState<Faq[]>(asFaqs(initial.faqs))
  const [galleryKeep, setGalleryKeep] = useState<string[]>(
    Array.isArray(initial.gallery) ? [...initial.gallery] : [],
  )
  const [bannerFile, setBannerFile] = useState<File | null>(null)
  const [newGallery, setNewGallery] = useState<File[]>([])
  const [saving, setSaving] = useState(false)

  const bannerPreview = useMemo(() => {
    if (bannerFile) return URL.createObjectURL(bannerFile)
    if (initial.banner_image) {
      if (initial.banner_image_url) return initial.banner_image_url
      if (initial.banner_image.startsWith('http')) return initial.banner_image
      return `${siteBase}/storage/${initial.banner_image.replace(/^\//, '')}`
    }
    return null
  }, [bannerFile, initial.banner_image, initial.banner_image_url])

  const addLine = useCallback(
    (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
      setter((b) => [...b, ''])
    },
    [],
  )

  async function submit() {
    setSaving(true)
    try {
      const fd = new FormData()
      fd.append('title', title.trim())
      if (slug.trim()) fd.append('slug', slug.trim())
      fd.append('icon', icon.trim() || '')
      fd.append('short_description', shortDesc)
      fd.append('full_description', fullDesc)
      fd.append('status', status)
      fd.append('features', JSON.stringify(features.map((s) => s.trim()).filter(Boolean)))
      fd.append('benefits', JSON.stringify(benefits.map((s) => s.trim()).filter(Boolean)))
      fd.append('steps', JSON.stringify(steps.map((s) => s.trim()).filter(Boolean)))
      const faqOut = faqs
        .filter((f) => f.q.trim() || f.a.trim())
        .map((f) => ({ question: f.q.trim(), answer: f.a.trim() }))
      fd.append('faqs', JSON.stringify(faqOut))
      fd.append('gallery', JSON.stringify(galleryKeep))
      if (bannerFile) fd.append('banner_image', bannerFile)
      newGallery.forEach((f) => fd.append('gallery_files[]', f))

      if (mode === 'create') {
        await adminApi.post('/services', fd)
        toast.success('Service created')
      } else if (initial.id) {
        await adminApi.put(`/services/${initial.id}`, fd)
        toast.success('Service updated')
      }
      router.push('/admin/services')
      router.refresh()
    } catch (e) {
      console.error(e)
      toast.error('Save failed — check fields and API')
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="space-y-6 max-w-4xl">
      <div className="flex flex-wrap gap-2">
        <Button type="button" variant="secondary" onClick={() => router.push('/admin/services')}>
          Cancel
        </Button>
        <Button type="button" onClick={submit} loading={saving}>
          {mode === 'create' ? 'Create' : 'Update'}
        </Button>
      </div>

      <Card className="mt-0" title="Basic" description="Search-friendly slug and list copy">
        <div className="space-y-4">
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <Input
            label="Slug"
            value={slug}
            onChange={(e) => setSlug(e.target.value)}
            placeholder="auto if empty"
            hint="URL key for public pages (e.g. legal-services-1)"
          />
          <Input
            label="Icon (class name or key)"
            value={icon}
            onChange={(e) => setIcon(e.target.value)}
            placeholder="e.g. lucide name or font-awesome class"
          />
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Short description</label>
            <textarea
              className="w-full min-h-[88px] rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5 text-sm"
              value={shortDesc}
              onChange={(e) => setShortDesc(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Full description</label>
            <textarea
              className="w-full min-h-[160px] rounded-xl border border-slate-200/90 bg-slate-50/80 px-3.5 py-2.5 text-sm"
              value={fullDesc}
              onChange={(e) => setFullDesc(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Status</label>
            <select
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
        </div>
      </Card>

      <Card title="Media" description="Banner and gallery (stored in API storage)">
        <div className="space-y-4">
          {bannerPreview && (
            <div>
              <p className="mb-2 text-xs text-slate-500">Banner preview</p>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={bannerPreview}
                alt=""
                className="h-32 max-w-full rounded-lg object-cover object-center ring-1 ring-slate-200/80"
              />
            </div>
          )}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Replace banner</label>
            <input
              type="file"
              accept="image/*"
              className="text-sm"
              onChange={(e) => setBannerFile(e.target.files?.[0] || null)}
            />
          </div>
          {mode === 'edit' && galleryKeep.length > 0 && (
            <div>
              <p className="mb-2 text-xs text-slate-500">Current gallery (remove before save to delete files)</p>
              <ul className="max-h-40 space-y-2 overflow-y-auto text-xs">
                {galleryKeep.map((p) => (
                  <li key={p} className="flex items-center justify-between gap-2">
                    <span className="font-mono text-slate-600 line-clamp-1">{p}</span>
                    <button
                      type="button"
                      className="shrink-0 text-red-600 hover:underline"
                      onClick={() => setGalleryKeep((g) => g.filter((x) => x !== p))}
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Add gallery images</label>
            <input
              type="file"
              accept="image/*"
              multiple
              className="text-sm"
              onChange={(e) =>
                setNewGallery(
                  e.target.files ? Array.from(e.target.files) : [],
                )
              }
            />
            {newGallery.length > 0 && (
              <p className="mt-1 text-xs text-slate-500">
                {newGallery.length} new file{newGallery.length > 1 ? 's' : ''} to upload
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card title="Features" description="One per line; use Add to extend">
        <StringList
          values={features}
          setValues={setFeatures}
          onAdd={() => addLine(setFeatures)}
        />
      </Card>

      <Card title="Benefits">
        <StringList
          values={benefits}
          setValues={setBenefits}
          onAdd={() => addLine(setBenefits)}
        />
      </Card>

      <Card title="Steps / process">
        <StringList
          values={steps}
          setValues={setSteps}
          onAdd={() => addLine(setSteps)}
        />
      </Card>

      <Card title="FAQs" description="Question and answer">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="rounded-xl border border-slate-200/80 bg-slate-50/40 p-3">
              <div className="mb-2 flex items-center justify-between">
                <span className="text-xs font-medium text-slate-600">FAQ {i + 1}</span>
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="text-red-600"
                  onClick={() => setFaqs((rows) => rows.filter((_, j) => j !== i))}
                >
                  Remove
                </Button>
              </div>
              <Input
                label="Question"
                value={f.q}
                onChange={(e) =>
                  setFaqs((rows) => rows.map((r, j) => (j === i ? { ...r, q: e.target.value } : r)))
                }
              />
              <div className="mt-2">
                <label className="mb-1.5 block text-xs font-medium text-slate-600">Answer</label>
                <textarea
                  className="w-full min-h-[72px] rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-sm"
                  value={f.a}
                  onChange={(e) =>
                    setFaqs((rows) => rows.map((r, j) => (j === i ? { ...r, a: e.target.value } : r)))
                  }
                />
              </div>
            </div>
          ))}
          <Button type="button" variant="secondary" size="sm" onClick={() => setFaqs((r) => [...r, { q: '', a: '' }])}>
            Add FAQ
          </Button>
        </div>
      </Card>

      <div className="flex flex-wrap gap-2 pb-8">
        <Button type="button" variant="secondary" onClick={() => router.push('/admin/services')}>
          Cancel
        </Button>
        <Button type="button" onClick={submit} loading={saving}>
          {mode === 'create' ? 'Create' : 'Update'}
        </Button>
      </div>
    </div>
  )
}

function StringList({
  values,
  setValues,
  onAdd,
}: {
  values: string[]
  setValues: React.Dispatch<React.SetStateAction<string[]>>
  onAdd: () => void
}) {
  return (
    <div className="space-y-2">
      {values.map((v, i) => (
        <div key={i} className="flex gap-2">
          <input
            className="w-full rounded-xl border border-slate-200/90 bg-white px-3 py-2 text-sm"
            value={v}
            onChange={(e) =>
              setValues((row) => row.map((a, j) => (i === j ? e.target.value : a)))
            }
            placeholder="Line of text"
          />
          <Button
            type="button"
            variant="ghost"
            className="shrink-0 text-red-600"
            onClick={() => setValues((row) => row.filter((_, j) => j !== i))}
          >
            ×
          </Button>
        </div>
      ))}
      <Button type="button" size="sm" variant="secondary" onClick={onAdd}>
        Add
      </Button>
    </div>
  )
}
