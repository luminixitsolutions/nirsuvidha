import type { ReactNode, CSSProperties } from 'react'
import { cx } from '@/lib/cn'
import { AdminIcon, ADMIN_ICON_STROKE } from '@/components/admin/AdminIcon'
import { TrendingDown, TrendingUp, Minus } from 'lucide-react'

export type StatAccent = 'sky' | 'violet' | 'emerald' | 'amber' | 'none'

const ACCENT: Record<
  Exclude<StatAccent, 'none'>,
  { card: string; iconWrap: string; glow: string; topBar: string }
> = {
  sky: {
    card: 'border-sky-200/60 bg-gradient-to-br from-sky-50/90 via-white to-white',
    iconWrap:
      'from-sky-100 to-cyan-100 text-sky-600 ring-1 ring-sky-200/50 shadow-sky-100/50',
    glow: 'bg-sky-400/15',
    topBar: 'from-sky-400 to-cyan-500',
  },
  violet: {
    card: 'border-violet-200/50 bg-gradient-to-br from-violet-50/90 via-white to-white',
    iconWrap:
      'from-violet-100 to-fuchsia-100 text-violet-600 ring-1 ring-violet-200/50 shadow-violet-100/50',
    glow: 'bg-violet-400/15',
    topBar: 'from-violet-500 to-fuchsia-500',
  },
  emerald: {
    card: 'border-emerald-200/50 bg-gradient-to-br from-emerald-50/90 via-white to-white',
    iconWrap:
      'from-emerald-100 to-teal-100 text-emerald-600 ring-1 ring-emerald-200/50 shadow-emerald-100/50',
    glow: 'bg-emerald-400/12',
    topBar: 'from-emerald-400 to-teal-500',
  },
  amber: {
    card: 'border-amber-200/50 bg-gradient-to-br from-amber-50/90 via-white to-white',
    iconWrap:
      'from-amber-100 to-yellow-100 text-amber-700 ring-1 ring-amber-200/60 shadow-amber-100/50',
    glow: 'bg-amber-400/12',
    topBar: 'from-amber-400 to-yellow-500',
  },
}

type StatCardProps = {
  title: string
  value: string | number
  /** Prefer Lucide + AdminIcon in callers; any ReactNode still supported. */
  icon: ReactNode
  trendLabel?: string
  trendUp?: boolean | null
  hint?: string
  className?: string
  /** Stagger animation order (0-based) */
  index?: number
  /** Branded color accent; default neutral white */
  accent?: StatAccent
}

export function StatCard({
  title,
  value,
  icon,
  trendLabel,
  trendUp,
  hint,
  className,
  index = 0,
  accent = 'none',
}: StatCardProps) {
  const a = accent !== 'none' ? ACCENT[accent] : null
  const style: CSSProperties = {
    animationDelay: `${60 + index * 75}ms`,
  }
  return (
    <div
      className={cx(
        'group/stat relative overflow-hidden rounded-2xl p-5',
        'shadow-stat ring-1 ring-slate-900/5',
        a ? a.card : 'border border-slate-200/80 bg-white',
        'transition duration-300 ease-out-expo',
        'hover:-translate-y-0.5 hover:shadow-md',
        a ? '' : 'hover:border-slate-300/90',
        'motion-reduce:translate-y-0',
        'animate-fade-in-up motion-reduce:animate-none',
        className,
      )}
      style={style}
    >
      {a && (
        <>
          <div
            className={cx(
              'pointer-events-none absolute left-0 right-0 top-0 h-1 bg-gradient-to-r',
              a.topBar,
            )}
            aria-hidden
          />
          <div
            className={cx(
              'pointer-events-none absolute -right-8 -top-12 h-32 w-32 rounded-full blur-2xl',
              a.glow,
            )}
            aria-hidden
          />
        </>
      )}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-slate-300/30 to-transparent opacity-0 transition-opacity duration-500 group-hover/stat:opacity-100"
        aria-hidden
      />
      <div className="relative z-[1] flex items-start justify-between gap-3">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-2 text-3xl font-semibold tracking-tight text-slate-900 tabular-nums">
            {value}
          </p>
        </div>
        <div
          className={cx(
            'flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br',
            a
              ? a.iconWrap
              : 'from-slate-100 to-slate-50 text-slate-600 ring-1 ring-slate-200/80',
            'transition duration-300 ease-out-expo group-hover/stat:scale-110 group-hover/stat:shadow-sm',
            'motion-reduce:group-hover/stat:scale-100',
          )}
        >
          {icon}
        </div>
      </div>
      {hint && !trendLabel && (
        <p className="relative z-[1] mt-3 text-xs text-slate-500 transition-colors duration-200 group-hover/stat:text-slate-600">
          {hint}
        </p>
      )}
      {trendLabel && (
        <div className="relative z-[1] mt-4 flex items-center gap-2 text-sm">
          {trendUp === true && (
            <span className="inline-flex items-center gap-0.5 text-emerald-600">
              <AdminIcon
                icon={TrendingUp}
                size="sm"
                className="text-emerald-600"
                strokeWidth={ADMIN_ICON_STROKE}
              />
            </span>
          )}
          {trendUp === false && (
            <span className="inline-flex items-center gap-0.5 text-red-600">
              <AdminIcon
                icon={TrendingDown}
                size="sm"
                className="text-red-600"
                strokeWidth={ADMIN_ICON_STROKE}
              />
            </span>
          )}
          {trendUp === null && (
            <span className="text-slate-400">
              <AdminIcon icon={Minus} size="sm" strokeWidth={ADMIN_ICON_STROKE} />
            </span>
          )}
          <span
            className={cx(
              'text-xs font-medium',
              trendUp === true && 'text-emerald-700',
              trendUp === false && 'text-red-600',
              trendUp === null && 'text-slate-500',
            )}
          >
            {trendLabel}
          </span>
        </div>
      )}
    </div>
  )
}
