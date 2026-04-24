'use client'

import { useCallback, useEffect, useMemo, useState, FormEvent, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { adminApi } from '@/lib/admin-api'
import { Button } from '@/components/admin/ui/Button'
import { Input } from '@/components/admin/ui/Input'
import { Badge } from '@/components/admin/ui/Badge'
import { DataTable, THead, TBody, Th, Td, Tr } from '@/components/admin/ui/Table'
import { Modal } from '@/components/admin/ui/Modal'
import { EmptyState } from '@/components/admin/ui/EmptyState'
import { Skeleton } from '@/components/admin/ui/Skeleton'
import { toast } from 'sonner'
import Link from 'next/link'
import { Pencil, Plus, Trash2, Search } from 'lucide-react'

type Nri = {
  id: number
  name: string
  email: string
  phone: string | null
  country: string | null
  status: string
  created_at: string
}

const pageSize = 10

function UsersTableInner() {
  const sp = useSearchParams()
  const [q, setQ] = useState('')
  const [status, setStatus] = useState('')
  const [country, setCountry] = useState('')
  const [rows, setRows] = useState<Nri[]>([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState(true)
  const [err, setErr] = useState('')

  const [edit, setEdit] = useState<Nri | null>(null)
  const [del, setDel] = useState<Nri | null>(null)
  const [createOpen, setCreateOpen] = useState(false)
  const [createForm, setCreateForm] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    status: 'active' as 'active' | 'inactive',
  })

  useEffect(() => {
    const u = sp.get('q') || ''
    if (u) setQ(u)
  }, [sp])

  const load = useCallback(() => {
    setErr('')
    setLoading(true)
    return adminApi
      .get<{ data: Nri[] }>('/users', {
        params: { search: q || undefined, status: status || undefined, per_page: 'all' },
      })
      .then((r) => setRows(r.data.data))
      .catch(() => {
        setErr('Could not load users.')
        setRows([])
      })
      .finally(() => setLoading(false))
  }, [q, status])

  useEffect(() => {
    setPage(1)
  }, [q, status, country])

  useEffect(() => {
    void load()
  }, [load])

  const countries = useMemo(
    () =>
      [...new Set(rows.map((r) => (r.country || '').trim()).filter(Boolean))].sort((a, b) =>
        a.localeCompare(b),
      ),
    [rows],
  )

  const filtered = useMemo(
    () => (!country ? rows : rows.filter((u) => (u.country || '') === country)),
    [rows, country],
  )

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize) || 1)
  const safePage = Math.min(page, pageCount)
  const paged = useMemo(() => {
    const start = (safePage - 1) * pageSize
    return filtered.slice(start, start + pageSize)
  }, [filtered, safePage])

  useEffect(() => {
    if (page !== safePage) setPage(safePage)
  }, [page, safePage])

  function onFilter(e: FormEvent) {
    e.preventDefault()
    void load()
  }

  async function saveUser() {
    if (!edit) return
    try {
      await adminApi.put(`/users/${edit.id}`, {
        name: edit.name,
        email: edit.email,
        phone: edit.phone || null,
        country: edit.country || null,
        status: edit.status,
      })
      toast.success('User updated')
      setEdit(null)
      void load()
    } catch {
      toast.error('Update failed')
    }
  }

  async function doCreate() {
    if (!createForm.name.trim() || !createForm.email.trim()) {
      return
    }
    try {
      await adminApi.post('/users', {
        name: createForm.name.trim(),
        email: createForm.email.trim(),
        phone: createForm.phone || null,
        country: createForm.country || null,
        status: createForm.status,
      })
      toast.success('User created')
      setCreateOpen(false)
      setCreateForm({ name: '', email: '', phone: '', country: '', status: 'active' })
      void load()
    } catch {
      toast.error('Could not create user (unique email required)')
    }
  }

  async function doDelete() {
    if (!del) return
    try {
      await adminApi.delete(`/users/${del.id}`)
      toast.success('User removed')
      setDel(null)
      void load()
    } catch {
      toast.error('Could not delete user')
    }
  }

  if (loading) {
    return (
      <div>
        <Skeleton className="h-8 w-64" />
        <div className="mt-4 flex gap-2">
          <Skeleton className="h-10 flex-1" />
          <Skeleton className="h-10 w-24" />
        </div>
        <div className="mt-4">
          <Skeleton className="h-64 w-full rounded-2xl" />
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-4 flex flex-wrap items-center justify-end gap-2">
        <Button type="button" onClick={() => setCreateOpen(true)} className="gap-1.5">
          <Plus className="h-4 w-4" />
          Add NRI
        </Button>
      </div>
      {err && (
        <p className="mb-4 text-sm text-red-600" role="alert">
          {err}
        </p>
      )}

      <form
        onSubmit={onFilter}
        className="flex flex-col gap-3 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-sm sm:flex-row sm:items-end"
      >
        <div className="min-w-0 flex-1">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50/80 pl-9 pr-3 text-sm focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold/15"
              placeholder="Name, email, or phone"
              value={q}
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-600">Status</label>
          <select
            className="h-10 w-full min-w-[8rem] rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="">All</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div>
          <label className="mb-1.5 block text-xs font-medium text-slate-600">Country</label>
          <select
            className="h-10 w-full min-w-[8rem] rounded-xl border border-slate-200/90 bg-slate-50/80 px-3 text-sm"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
          >
            <option value="">All</option>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </div>
        <div className="flex gap-2 sm:pb-0.5">
          <Button type="submit" className="min-w-[6rem]">
            Apply
          </Button>
          <Button
            type="button"
            variant="secondary"
            onClick={() => {
              setQ('')
              setStatus('')
              setCountry('')
            }}
          >
            Reset
          </Button>
        </div>
      </form>

      {filtered.length === 0 && !err ? (
        <div className="mt-6">
          <EmptyState
            title="No users"
            description="Import leads or add NRIs to see them here."
          />
        </div>
      ) : (
        <>
          <p className="mb-2 mt-4 text-xs text-slate-500">
            Showing {paged.length} of {filtered.length} result{filtered.length !== 1 ? 's' : ''}
            {q || status || country ? ' (filtered list)' : ''}
          </p>
          <DataTable className="mt-0">
            <THead>
              <Tr>
                <Th>NRI</Th>
                <Th>Phone</Th>
                <Th>Country</Th>
                <Th>Status</Th>
                <Th narrow>Actions</Th>
              </Tr>
            </THead>
            <TBody>
              {paged.map((u) => (
                <Tr key={u.id}>
                  <Td>
                    <Link
                      href={`/admin/users/${u.id}`}
                      className="font-medium text-slate-900 hover:text-[#9A7B32] hover:underline"
                    >
                      {u.name}
                    </Link>
                    <div className="text-xs text-slate-500">{u.email}</div>
                  </Td>
                  <Td className="text-slate-600">{u.phone || '—'}</Td>
                  <Td>{u.country || '—'}</Td>
                  <Td>
                    <Badge
                      tone={u.status === 'active' ? 'success' : 'muted'}
                      className="capitalize"
                    >
                      {u.status}
                    </Badge>
                  </Td>
                  <Td>
                    <div className="flex items-center justify-end gap-1">
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0"
                        onClick={() => setEdit({ ...u })}
                        aria-label="Edit user"
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button
                        type="button"
                        size="sm"
                        variant="ghost"
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                        onClick={() => setDel(u)}
                        aria-label="Delete user"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </Td>
                </Tr>
              ))}
            </TBody>
          </DataTable>

          <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
            <p className="text-xs text-slate-500">
              Page {safePage} of {pageCount}
            </p>
            <div className="flex gap-2">
              <Button
                type="button"
                size="sm"
                variant="secondary"
                disabled={safePage <= 1}
                onClick={() => setPage((p) => Math.max(1, p - 1))}
              >
                Previous
              </Button>
              <Button
                type="button"
                size="sm"
                variant="secondary"
                disabled={safePage >= pageCount}
                onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
              >
                Next
              </Button>
            </div>
          </div>
        </>
      )}

      <Modal
        open={createOpen}
        onClose={() => setCreateOpen(false)}
        title="Add NRI user"
        size="md"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setCreateOpen(false)}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={doCreate}
              disabled={!createForm.name.trim() || !createForm.email.trim()}
            >
              Create
            </Button>
          </>
        }
      >
        <div className="space-y-3">
          <Input
            label="Name"
            value={createForm.name}
            onChange={(e) => setCreateForm((c) => ({ ...c, name: e.target.value }))}
            required
          />
          <Input
            label="Email"
            type="email"
            value={createForm.email}
            onChange={(e) => setCreateForm((c) => ({ ...c, email: e.target.value }))}
            required
          />
          <Input
            label="Phone"
            value={createForm.phone}
            onChange={(e) => setCreateForm((c) => ({ ...c, phone: e.target.value }))}
          />
          <Input
            label="Country"
            value={createForm.country}
            onChange={(e) => setCreateForm((c) => ({ ...c, country: e.target.value }))}
          />
          <div>
            <label className="mb-1.5 block text-xs font-medium text-slate-600">Status</label>
            <select
              className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50 px-3 text-sm"
              value={createForm.status}
              onChange={(e) =>
                setCreateForm((c) => ({ ...c, status: e.target.value as 'active' | 'inactive' }))
              }
            >
              <option value="active">active</option>
              <option value="inactive">inactive</option>
            </select>
          </div>
        </div>
      </Modal>

      <Modal
        open={!!edit}
        onClose={() => setEdit(null)}
        title="Edit NRI user"
        size="md"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setEdit(null)}>
              Cancel
            </Button>
            <Button type="button" onClick={saveUser}>
              Save
            </Button>
          </>
        }
      >
        {edit && (
          <div className="space-y-3">
            <Input
              label="Name"
              value={edit.name}
              onChange={(e) => setEdit({ ...edit, name: e.target.value })}
            />
            <Input
              label="Email"
              type="email"
              value={edit.email}
              onChange={(e) => setEdit({ ...edit, email: e.target.value })}
            />
            <Input
              label="Phone"
              value={edit.phone || ''}
              onChange={(e) => setEdit({ ...edit, phone: e.target.value })}
            />
            <Input
              label="Country"
              value={edit.country || ''}
              onChange={(e) => setEdit({ ...edit, country: e.target.value })}
            />
            <div>
              <label className="mb-1.5 block text-xs font-medium text-slate-600">Status</label>
              <select
                className="h-10 w-full rounded-xl border border-slate-200/90 bg-slate-50 px-3 text-sm"
                value={edit.status}
                onChange={(e) => setEdit({ ...edit, status: e.target.value })}
              >
                <option value="active">active</option>
                <option value="inactive">inactive</option>
              </select>
            </div>
          </div>
        )}
      </Modal>

      <Modal
        open={!!del}
        onClose={() => setDel(null)}
        title="Delete this user?"
        size="sm"
        footer={
          <>
            <Button type="button" variant="secondary" onClick={() => setDel(null)}>
              Cancel
            </Button>
            <Button type="button" variant="danger" onClick={doDelete}>
              Delete
            </Button>
          </>
        }
      >
        {del && (
          <p className="text-slate-600">
            Remove <span className="font-semibold">{del.name}</span> and their NRI account? This
            cannot be undone.
          </p>
        )}
      </Modal>
    </div>
  )
}

export default function AdminUsersPage() {
  return (
    <Suspense
      fallback={
        <div>
          <Skeleton className="h-8 w-64" />
          <Skeleton className="mt-4 h-20 w-full rounded-2xl" />
        </div>
      }
    >
      <div>
        <UsersTableInner />
      </div>
    </Suspense>
  )
}
