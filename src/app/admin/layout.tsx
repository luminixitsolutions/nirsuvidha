import type { ReactNode } from 'react'
import './admin.css'

export const metadata = {
  title: 'NRI Suvidha — Admin',
}

export default function AdminRootLayout({ children }: { children: ReactNode }) {
  return <div id="admin-root">{children}</div>
}
