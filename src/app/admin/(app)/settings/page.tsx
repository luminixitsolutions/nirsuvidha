'use client'

import { useEffect, useState } from 'react'
import { adminApi } from '@/lib/admin-api'
import { Card } from '@/components/admin/ui/Card'
import { Input } from '@/components/admin/ui/Input'
import { Button } from '@/components/admin/ui/Button'
import { toast } from 'sonner'
import { KeyRound, Save } from 'lucide-react'

export default function AdminSettingsPage() {
  const [k, setK] = useState('app_name')
  const [v, setV] = useState('NRI Suvidha')
  const [load, setLoad] = useState(true)

  useEffect(() => {
    adminApi
      .get('/settings')
      .then((r) => {
        const data = (r.data as { data: Record<string, string> }).data
        if (data?.app_name) {
          setV(String(data.app_name))
        }
      })
      .finally(() => setLoad(false))
  }, [])

  async function save() {
    try {
      await adminApi.put('/settings', { items: { [k]: v } })
      toast.success('Settings saved')
    } catch {
      toast.error('Could not save')
    }
  }

  if (load) {
    return (
      <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200/60" />
    )
  }

  return (
    <div>
      <Card
        className="mt-0"
        title="Key / value"
        description="Add any site-wide flags your backend exposes. Common keys: app name, support email."
      >
        <div className="max-w-md space-y-4">
          <div className="flex items-start gap-3">
            <div className="mt-1.5 text-slate-300">
              <KeyRound className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <Input
                label="Key"
                value={k}
                onChange={(e) => setK(e.target.value)}
                placeholder="app_name"
              />
            </div>
          </div>
          <Input
            label="Value"
            value={v}
            onChange={(e) => setV(e.target.value)}
            placeholder="Display name, URL, or JSON as string"
          />
          <Button type="button" onClick={save} className="min-w-32">
            <Save className="h-4 w-4" />
            Save
          </Button>
        </div>
      </Card>
    </div>
  )
}
