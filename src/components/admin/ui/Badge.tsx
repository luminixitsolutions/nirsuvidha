import type { ReactNode } from 'react'
import { cx } from '@/lib/cn'

const colors: Record<string, string> = {
  default: 'bg-slate-100 text-slate-800',
  success: 'bg-emerald-100/90 text-emerald-800',
  warning: 'bg-amber-200/60 text-amber-950',
  danger: 'bg-red-100/90 text-red-800',
  muted: 'bg-slate-100 text-slate-600',
  gold: 'bg-[#C9A34E]/20 text-[#6B5A2E] ring-1 ring-inset ring-[#C9A34E]/30',
  outline: 'bg-white text-slate-700 ring-1 ring-inset ring-slate-200/80',
}

type BadgeProps = {
  children: ReactNode
  className?: string
  tone?: keyof typeof colors
  dot?: boolean
}

export function Badge({ children, className, tone = 'default', dot }: BadgeProps) {
  return (
    <span
      className={cx(
        'inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium',
        colors[tone],
        className,
      )}
    >
      {dot && (
        <span
          className={cx(
            'h-1.5 w-1.5 rounded-full',
            tone === 'success' && 'bg-emerald-500',
            tone === 'danger' && 'bg-red-500',
            tone === 'default' && 'bg-brand-gold',
            (tone === 'warning' || tone === 'gold') && 'bg-amber-600',
            tone === 'muted' && 'bg-slate-400',
            tone === 'outline' && 'bg-slate-300',
          )}
        />
      )}
      {children}
    </span>
  )
}
