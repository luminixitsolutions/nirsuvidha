'use client'

import { useCallback, useEffect, useState, FormEvent } from 'react'
import { adminApi } from '@/lib/admin-api'
import { Badge } from '@/components/admin/ui/Badge'
import { Button } from '@/components/admin/ui/Button'
import { Card } from '@/components/admin/ui/Card'
import { Input } from '@/components/admin/ui/Input'
import { Bell, AlertTriangle, CheckCircle2, Info, XCircle, Trash2, Check } from 'lucide-react'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { cx } from '@/lib/cn'
import { toast } from 'sonner'

type N = { id: number; title: string; message: string | null; type: string; read_at: string | null }

const icon = (t: string) => {
  switch (t) {
    case 'success':
      return <CheckCircle2 className="h-4 w-4" />
    case 'warning':
      return <AlertTriangle className="h-4 w-4" />
    case 'error':
      return <XCircle className="h-4 w-4" />
    default:
      return <Info className="h-4 w-4" />
  }
}

const cardTone: Record<string, string> = {
  info: 'from-slate-50/80 to-white',
  success: 'from-emerald-50/50 to-white',
  warning: 'from-amber-50/40 to-white',
  error: 'from-red-50/40 to-white',
}

const badge: Record<string, 'success' | 'warning' | 'danger' | 'gold' | 'outline' | 'default'> = {
  info: 'default',
  success: 'success',
  warning: 'warning',
  error: 'danger',
}

export default function AdminNotificationsPage() {
  const [rows, setRows] = useState<N[]>([])
  const [load, setLoad] = useState(true)
  const [title, setTitle] = useState('')
  const [message, setMessage] = useState('')
  const [type, setType] = useState('info')
  const [sending, setSending] = useState(false)

  const loadRows = useCallback(() => {
    return adminApi.get<{ data: N[] }>('/notifications').then((r) => setRows(r.data.data))
  }, [])

  useEffect(() => {
    setLoad(true)
    loadRows().finally(() => setLoad(false))
  }, [loadRows])

  async function onCreate(e: FormEvent) {
    e.preventDefault()
    if (!title.trim()) return
    setSending(true)
    try {
      await adminApi.post('/notifications', { title, message: message || null, type })
      setTitle('')
      setMessage('')
      setType('info')
      toast.success('Notification created')
      void loadRows()
    } catch {
      toast.error('Create failed')
    } finally {
      setSending(false)
    }
  }

  async function markRead(id: number) {
    try {
      await adminApi.put(`/notifications/${id}/read`)
      void loadRows()
    } catch {
      toast.error('Could not mark read')
    }
  }

  async function remove(id: number) {
    if (!confirm('Delete this entry?')) return
    try {
      await adminApi.delete(`/notifications/${id}`)
      toast.success('Deleted')
      void loadRows()
    } catch {
      toast.error('Delete failed')
    }
  }

  if (load) {
    return (
      <div>
        <Skeleton className="h-8 w-64" />
        <div className="mt-6 space-y-3">
          <Skeleton className="h-24 w-full rounded-2xl" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <Card
        className="mt-0"
        title="New notification"
        description="Shorthand inbox messages for the admin (not sent to NRI end-users unless wired in backend jobs)"
        noPadding
        variant="solid"
      >
        <form
          onSubmit={onCreate}
          className="space-y-4 p-5"
        >
          <Input
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Message (optional)</label>
            <textarea
              className="w-full min-h-[80px] rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 py-2.5 text-sm"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Type</label>
            <select
              className="h-10 w-full max-w-xs rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option value="info">info</option>
              <option value="success">success</option>
              <option value="warning">warning</option>
              <option value="error">error</option>
            </select>
          </div>
          <Button type="submit" loading={sending}>
            Create
          </Button>
        </form>
      </Card>

      {rows.length === 0 && (
        <div className="mt-6">
          <EmptyState
            title="Inbox is empty"
            description="Add a notification or wait for system events to surface here."
            icon={<Bell className="h-10 w-10 text-slate-300" />}
          />
        </div>
      )}

      {rows.length > 0 && (
        <ul className="mt-6 space-y-3">
        {rows.map((n) => {
          const t = n.type || 'info'
          return (
            <li key={n.id}>
              <div
                className={cx(
                  'group overflow-hidden rounded-2xl border border-slate-200/80 bg-gradient-to-b shadow-sm',
                  'transition duration-200 hover:shadow-md',
                  cardTone[t] || cardTone.info,
                )}
              >
                <div className="flex flex-wrap items-start justify-between gap-2 p-4 sm:p-5">
                  <div className="flex min-w-0 flex-1 gap-4">
                    <div
                      className={cx(
                        'mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-xl',
                        t === 'success' && 'bg-emerald-100/90 text-emerald-800',
                        t === 'warning' && 'bg-amber-200/60 text-amber-900',
                        t === 'error' && 'bg-red-100/90 text-red-800',
                        t === 'info' && 'bg-slate-100 text-slate-800',
                      )}
                    >
                      {icon(t)}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-semibold text-slate-900">{n.title}</p>
                      {n.message && (
                        <p className="mt-1 text-sm leading-relaxed text-slate-600">{n.message}</p>
                      )}
                      <div className="mt-2 flex flex-wrap items-center gap-2 text-[10px] text-slate-400 sm:text-xs">
                        <Badge tone={badge[t] || 'default'} className="capitalize">
                          {n.type}
                        </Badge>
                        {n.read_at ? (
                          <span>Read {new Date(n.read_at).toLocaleString()}</span>
                        ) : (
                          <Badge tone="gold" className="text-[10px]" dot>
                            Unread
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {!n.read_at && (
                      <Button
                        type="button"
                        size="sm"
                        variant="secondary"
                        className="h-8 gap-1"
                        onClick={() => void markRead(n.id)}
                        title="Mark as read"
                      >
                        <Check className="h-3.5 w-3.5" />
                        Read
                      </Button>
                    )}
                    <Button
                      type="button"
                      size="sm"
                      variant="ghost"
                      className="h-8 w-8 p-0 text-red-600"
                      onClick={() => void remove(n.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </li>
          )
        })}
        </ul>
      )}
    </div>
  )
}
