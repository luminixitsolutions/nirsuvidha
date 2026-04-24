'use client'

import { useEffect, useState, FormEvent } from 'react'
import { adminApi } from '@/lib/admin-api'
import { Button } from '@/components/admin/ui/Button'
import { Input } from '@/components/admin/ui/Input'
import { Card } from '@/components/admin/ui/Card'
import { Modal } from '@/components/admin/ui/Modal'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { Upload, ImageIcon, Pencil, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

const API = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000/api'
const base = API.replace(/\/api\/?$/, '')

type P = { id: number; name: string; link: string | null; logo: string | null }

export default function AdminPartnersPage() {
  const [rows, setRows] = useState<P[]>([])
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const [busy, setBusy] = useState(false)
  const [editing, setEditing] = useState<P | null>(null)
  const [edName, setEdName] = useState('')
  const [edLink, setEdLink] = useState('')
  const [edFile, setEdFile] = useState<File | null>(null)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<P | null>(null)

  useEffect(() => {
    load()
  }, [])

  function load() {
    adminApi.get<{ data: P[] }>('/partners').then((r) => setRows(r.data.data))
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (!name) return
    setBusy(true)
    try {
      const fd = new FormData()
      fd.append('name', name)
      if (link.trim()) fd.append('link', link.trim())
      if (file) fd.append('logo', file)
      await adminApi.post('/partners', fd)
      setName('')
      setLink('')
      setFile(null)
      load()
      toast.success('Partner added')
    } catch {
      toast.error('Could not add partner')
    } finally {
      setBusy(false)
    }
  }

  function openEdit(p: P) {
    setEditing(p)
    setEdName(p.name)
    setEdLink(p.link || '')
    setEdFile(null)
  }

  async function saveEditFixed() {
    if (!editing) return
    setSaving(true)
    try {
      await adminApi.put(`/partners/${editing.id}`, { name: edName, link: edLink || null })
      if (edFile) {
        const fd = new FormData()
        fd.append('name', edName)
        if (edLink) fd.append('link', edLink)
        fd.append('logo', edFile)
        await adminApi.put(`/partners/${editing.id}`, fd)
      }
      setEditing(null)
      load()
      toast.success('Partner updated')
    } catch {
      toast.error('Update failed')
    } finally {
      setSaving(false)
    }
  }

  async function remove() {
    if (!deleting) return
    try {
      await adminApi.delete(`/partners/${deleting.id}`)
      toast.success('Removed')
      setDeleting(null)
      load()
    } catch {
      toast.error('Delete failed')
    }
  }

  return (
    <div>
      <Card
        className="mt-0"
        title="Add partner"
        description="Name, optional site link, and logo for the trust band"
      >
        <form
          onSubmit={onSubmit}
          className="grid gap-4 sm:grid-cols-1 lg:grid-cols-2"
        >
          <Input label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
          <Input
            label="Link (optional)"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="https://…"
          />
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Logo</label>
            <div className="flex items-center gap-2">
              <label className="flex h-10 cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-slate-300/80 bg-slate-50/60 px-3 text-sm text-slate-600 transition hover:border-slate-400 hover:bg-slate-100/80">
                <Upload className="h-4 w-4" />
                <span>Choose file</span>
                <input
                  type="file"
                  className="sr-only"
                  accept="image/*"
                  onChange={(e) => setFile(e.target.files?.[0] || null)}
                />
              </label>
              {file && <span className="text-xs text-slate-500 line-clamp-1">{file.name}</span>}
            </div>
          </div>
          <div className="flex items-end">
            <Button type="submit" loading={busy} className="w-full sm:max-w-xs">
              Add partner
            </Button>
          </div>
        </form>
      </Card>

      {rows.length === 0 ? (
        <div className="mt-10">
          <EmptyState
            title="No partners"
            description="Add logos for the trust bar on the home page."
            icon={<ImageIcon className="h-10 w-10 text-slate-300" />}
          />
        </div>
      ) : (
        <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((p) => (
            <li key={p.id}>
              <Card
                className="flex h-full min-h-36 flex-col justify-between p-0 shadow-sm transition hover:shadow-md"
                noPadding
              >
                <div className="flex border-b border-slate-200/80 px-3 py-2">
                  <div className="ml-auto flex gap-1">
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0"
                      onClick={() => openEdit(p)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-red-600"
                      onClick={() => setDeleting(p)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex h-full min-h-32 items-center justify-center p-5">
                  {p.logo ? (
                    <a href={p.link || '#'} target={p.link ? '_blank' : undefined} rel="noreferrer" className="block">
                      <img
                        className="max-h-20 max-w-[85%] object-contain"
                        src={`${base}/storage/${p.logo}`}
                        alt=""
                      />
                    </a>
                  ) : (
                    <div className="text-center text-slate-400">
                      <p className="text-xs">No logo</p>
                    </div>
                  )}
                </div>
                <div className="border-t border-slate-200 bg-slate-50/60 px-4 py-3">
                  <p className="text-center text-sm font-semibold text-slate-900">{p.name}</p>
                  {p.link && (
                    <p className="mt-0.5 truncate text-center text-xs text-slate-500">{p.link}</p>
                  )}
                </div>
              </Card>
            </li>
          ))}
        </ul>
      )}

      <Modal
        open={!!editing}
        onClose={() => setEditing(null)}
        title="Edit partner"
        size="md"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setEditing(null)}>
              Cancel
            </Button>
            <Button type="button" onClick={saveEditFixed} loading={saving}>
              Save
            </Button>
          </>
        }
      >
        {editing && (
          <div className="space-y-3">
            <Input label="Name" value={edName} onChange={(e) => setEdName(e.target.value)} />
            <Input label="Link" value={edLink} onChange={(e) => setEdLink(e.target.value)} />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600">New logo (optional)</label>
              <input
                type="file"
                accept="image/*"
                className="text-sm"
                onChange={(e) => setEdFile(e.target.files?.[0] || null)}
              />
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={!!deleting}
        onClose={() => setDeleting(null)}
        title="Delete partner"
        size="sm"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setDeleting(null)}>
              Cancel
            </Button>
            <Button type="button" variant="danger" onClick={remove}>
              Delete
            </Button>
          </>
        }
      >
        {deleting && <p className="text-slate-600">Remove {deleting.name}?</p>}
      </Modal>
    </div>
  )
}
