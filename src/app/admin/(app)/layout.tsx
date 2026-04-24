import type { ReactNode } from 'react'
import { AuthGuard } from '@/components/admin/AuthGuard'
import { AdminToaster } from '@/components/admin/AdminToaster'
import { Sidebar } from '@/components/admin/Sidebar'
import { Topbar } from '@/components/admin/Topbar'

export default function AdminAppLayout({ children }: { children: ReactNode }) {
  return (
    <AuthGuard>
      {/*
        Shell first: AdminToaster must not precede the layout, or a Sonner
        in-flow node can create a white strip at the very top of the page.
      */}
      <div className="flex min-h-screen w-full min-w-0 max-w-full overflow-x-hidden bg-white">
        <Sidebar />
        <div className="ml-64 flex min-h-0 min-w-0 flex-1 flex-col">
          <Topbar />
          <main className="min-h-0 flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
        </div>
      </div>
      <AdminToaster />
    </AuthGuard>
  )
}
