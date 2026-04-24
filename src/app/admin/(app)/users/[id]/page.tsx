'use client'

import { use, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { adminApi } from '@/lib/admin-api'
import { Button } from '@/components/admin/ui/Button'
import { Input } from '@/components/admin/ui/Input'
import { Card } from '@/components/admin/ui/Card'
import { Modal } from '@/components/admin/ui/Modal'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { ArrowLeft } from 'lucide-react'
import { toast } from 'sonner'

type Nri = {
  id: number
  name: string
  email: string
  phone: string | null
  country: string | null
  status: string
  created_at: string
  updated_at?: string
}

type P = { params: Promise<{ id: string }> }

export default function UserDetailPage({ params }: P) {
  const { id } = use(params)
  const [u, setU] = useState<Nri | null>(null)
  const [err, setErr] = useState(false)
  const [saving, setSaving] = useState(false)
  const [del, setDel] = useState(false)

  const load = useCallback(() => {
    if (!/^\d+$/.test(id)) {
      setErr(true)
      return
    }
    return adminApi
      .get<{ data: Nri }>(`/users/${id}`)
      .then((r) => setU(r.data.data))
      .catch(() => setErr(true))
  }, [id])

  useEffect(() => {
    void load()
  }, [load])

  async function save() {
    if (!u) return
    setSaving(true)
    try {
      const r = await adminApi.put<{ data: Nri }>(`/users/${u.id}`, {
        name: u.name,
        email: u.email,
        phone: u.phone || null,
        country: u.country || null,
        status: u.status,
      })
      setU(r.data.data)
      toast.success('Saved')
    } catch {
      toast.error('Update failed')
    } finally {
      setSaving(false)
    }
  }

  async function doDelete() {
    try {
      await adminApi.delete(`/users/${id}`)
      window.location.href = '/admin/users'
    } catch {
      toast.error('Delete failed')
    }
  }

  if (err || !/^\d+$/.test(id)) {
    return <p className="text-sm text-red-600">User not found.</p>
  }
  if (!u) {
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
        href="/admin/users"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9A7B32] hover:underline"
      >
        <AdminIcon icon={ArrowLeft} size="sm" className="text-[#9A7B32]" />
        All users
      </Link>
      <h1 className="mt-2 text-lg font-semibold text-slate-900">{u.name}</h1>
      <p className="text-xs text-slate-500">
        Joined {u.created_at ? new Date(u.created_at).toLocaleString() : '—'}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        <Button type="button" variant="secondary" onClick={() => setDel(true)}>
          Delete
        </Button>
        <Button type="button" onClick={save} loading={saving}>
          Update
        </Button>
      </div>

      <Card className="mt-6" title="Profile" variant="solid" noPadding>
        <div className="space-y-4 p-5">
          <Input
            label="Name"
            value={u.name}
            onChange={(e) => setU({ ...u, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            value={u.email}
            onChange={(e) => setU({ ...u, email: e.target.value })}
          />
          <Input
            label="Phone"
            value={u.phone || ''}
            onChange={(e) => setU({ ...u, phone: e.target.value })}
          />
          <Input
            label="Country"
            value={u.country || ''}
            onChange={(e) => setU({ ...u, country: e.target.value })}
          />
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Status</label>
            <select
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50 px-3 text-sm"
              value={u.status}
              onChange={(e) => setU({ ...u, status: e.target.value })}
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
        </div>
      </Card>

      <Modal
        open={del}
        onClose={() => setDel(false)}
        title="Delete user"
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
        <p className="text-sm text-slate-600">Remove this NRI user permanently?</p>
      </Modal>
    </div>
  )
}
