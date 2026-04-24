'use client'

import { use, useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import { adminApi } from '@/lib/admin-api'
import { ServiceForm, type ServiceRecord } from '@/components/admin/ServiceForm'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { Button } from '@/components/admin/ui/Button'
import { toast } from 'sonner'
import { Modal } from '@/components/admin/ui/Modal'
import { ArrowLeft } from 'lucide-react'
import { AdminIcon } from '@/components/admin/AdminIcon'

type Props = { params: Promise<{ id: string }> }

export default function EditServicePage({ params }: Props) {
  const { id } = use(params)
  const [row, setRow] = useState<ServiceRecord | null>(null)
  const [err, setErr] = useState(false)
  const [del, setDel] = useState(false)
  const load = useCallback(() => {
    if (!/^\d+$/.test(id)) {
      setErr(true)
      return
    }
    return adminApi
      .get<{ data: ServiceRecord }>(`/services/${id}`)
      .then((r) => setRow(r.data.data))
      .catch(() => setErr(true))
  }, [id])

  useEffect(() => {
    void load()
  }, [load])

  async function doDelete() {
    try {
      await adminApi.delete(`/services/${id}`)
      toast.success('Removed')
      window.location.href = '/admin/services'
    } catch {
      toast.error('Delete failed')
    }
  }

  if (err) {
    return <p className="text-sm text-red-600">Service not found.</p>
  }
  if (!row) {
    return (
      <div>
        <Skeleton className="h-8 w-48" />
        <Skeleton className="mt-4 h-96 w-full" />
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <div>
          <Link
            href="/admin/services"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-[#9A7B32] hover:underline"
          >
            <AdminIcon icon={ArrowLeft} size="sm" className="text-[#9A7B32]" />
            All services
          </Link>
          <h1 className="mt-2 text-lg font-semibold text-slate-900">{row.title || 'Service'}</h1>
        </div>
        <div className="flex gap-2">
          <Button type="button" variant="secondary" onClick={() => setDel(true)}>
            Delete
          </Button>
        </div>
      </div>
      <ServiceForm initial={row} mode="edit" />

      <Modal
        open={del}
        onClose={() => setDel(false)}
        title="Delete service"
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
        <p className="text-sm text-slate-600">
          Remove <span className="font-medium">{row.title}</span> from the catalog? Leads that reference
          it may show empty service.
        </p>
      </Modal>
    </div>
  )
}
