import type { ReactNode } from 'react'
import { cx } from '@/lib/cn'

type TableProps = { children: ReactNode; className?: string }

export function DataTable({ children, className }: TableProps) {
  return (
    <div
      className={cx(
        'overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm',
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="min-w-full text-left text-sm text-slate-800">{children}</table>
      </div>
    </div>
  )
}

export function THead({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <thead className={cx('bg-slate-50/90 text-slate-600', className)}>
      {children}
    </thead>
  )
}

export function TBody({ children, className }: { children: ReactNode; className?: string }) {
  return <tbody className={cx('divide-y divide-slate-100/90', className)}>{children}</tbody>
}

export function Tr({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <tr
      className={cx(
        'transition duration-150 ease-out hover:bg-slate-50/80 motion-reduce:transition-none',
        className,
      )}
    >
      {children}
    </tr>
  )
}

export function Th({
  children,
  className,
  narrow,
}: {
  children: ReactNode
  className?: string
  narrow?: boolean
}) {
  return (
    <th
      className={cx('px-4 py-3 text-left text-xs font-semibold uppercase tracking-wide', narrow && 'w-1 whitespace-nowrap', className)}
    >
      {children}
    </th>
  )
}

export function Td({ children, className }: { children: ReactNode; className?: string }) {
  return <td className={cx('px-4 py-3', className)}>{children}</td>
}
