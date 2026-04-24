import type { ReactNode } from 'react'
import { Inbox } from 'lucide-react'

type EmptyStateProps = {
  title: string
  description?: string
  action?: ReactNode
  icon?: ReactNode
}

export function EmptyState({
  title,
  description,
  action,
  icon = <Inbox className="h-10 w-10 text-slate-300" aria-hidden />,
}: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-200/90 bg-slate-50/50 px-6 py-12 text-center">
      <div className="mb-3 rounded-2xl bg-slate-100 p-4">{icon}</div>
      <h3 className="text-sm font-semibold text-slate-800">{title}</h3>
      {description && (
        <p className="mt-1 max-w-sm text-sm text-slate-500">{description}</p>
      )}
      {action && <div className="mt-5">{action}</div>}
    </div>
  )
}
