'use client'

import { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { adminApi } from '@/lib/admin-api'
import { Button } from '@/components/admin/ui/Button'
import { Card } from '@/components/admin/ui/Card'
import { Modal } from '@/components/admin/ui/Modal'
import { Badge } from '@/components/admin/ui/Badge'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { ADMIN_ICON_STROKE, AdminIcon } from '@/components/admin/AdminIcon'
import { Package, Pencil, Plus, Trash2 } from 'lucide-react'
import { toast } from 'sonner'

type Svc = {
  id: number
  title: string
  slug: string | null
  icon: string | null
  description: string | null
  short_description: string | null
  status: string
}

export default function AdminServicesPage() {
  const [rows, setRows] = useState<Svc[]>([])
  const [load, setLoad] = useState(true)
  const [deleting, setDeleting] = useState<Svc | null>(null)

  const loadRows = useCallback(() => {
    return adminApi.get<{ data: Svc[] }>('/services').then((r) => setRows(r.data.data))
  }, [])

  useEffect(() => {
    setLoad(true)
    loadRows()
      .catch(() => toast.error('Failed to load services'))
      .finally(() => setLoad(false))
  }, [loadRows])

  async function remove() {
    if (!deleting) return
    try {
      await adminApi.delete(`/services/${deleting.id}`)
      toast.success('Service removed')
      setDeleting(null)
      await loadRows()
    } catch {
      toast.error('Delete failed')
    }
  }

  if (load) {
    return (
      <div>
        <Skeleton className="h-8 w-48" />
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-40 rounded-2xl" />
          ))}
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-lg font-semibold text-slate-900">Services</h1>
        <Link href="/admin/services/new">
          <Button type="button" className="gap-2">
            <AdminIcon icon={Plus} size="sm" />
            New service
          </Button>
        </Link>
      </div>

      {rows.length === 0 ? (
        <div className="mt-0">
          <EmptyState
            title="No services"
            description="Create a service to manage catalog content on the public site."
            icon={
              <Package
                className="h-10 w-10 text-slate-300"
                strokeWidth={ADMIN_ICON_STROKE}
                aria-hidden
              />
            }
            action={
              <Link href="/admin/services/new">
                <Button type="button" size="sm" className="mt-2">
                  Add service
                </Button>
              </Link>
            }
          />
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {rows.map((s) => (
            <Card
              key={s.id}
              className="flex h-full flex-col p-0 shadow-md transition hover:shadow-lg"
              noPadding
            >
              <div className="p-5">
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#C9A34E]/12 text-[#9A7B32]">
                    <AdminIcon icon={Package} size="md" className="text-[#9A7B32]" aria-hidden />
                  </div>
                  <div className="flex gap-1">
                    <Link
                      href={`/admin/services/${s.id}`}
                      className="inline-flex h-8 w-8 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100/80 hover:text-slate-900"
                      title="Edit & details"
                    >
                      <AdminIcon icon={Pencil} size="sm" />
                    </Link>
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-red-600"
                      onClick={() => setDeleting(s)}
                    >
                      <AdminIcon icon={Trash2} size="sm" className="text-red-600" />
                    </Button>
                  </div>
                </div>
                <Link href={`/admin/services/${s.id}`} className="mt-3 block text-lg font-semibold text-slate-900 hover:text-[#9A7B32]">
                  {s.title}
                </Link>
                {s.slug && <p className="mt-1 line-clamp-1 text-xs text-slate-500">/ {s.slug}</p>}
                {s.icon && <p className="mt-1 line-clamp-1 text-xs text-slate-500">Icon: {s.icon}</p>}
                <p className="mt-2 line-clamp-3 text-sm text-slate-600">
                  {s.short_description || s.description || '—'}
                </p>
                <div className="mt-4">
                  <Badge
                    tone={s.status === 'active' ? 'success' : 'muted'}
                    className="capitalize"
                  >
                    {s.status}
                  </Badge>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}

      <Modal
        open={!!deleting}
        onClose={() => setDeleting(null)}
        title="Remove service"
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
        {deleting && (
          <p className="text-slate-600">
            Remove <span className="font-medium">{deleting.title}</span> from the catalog?
          </p>
        )}
      </Modal>
    </div>
  )
}
