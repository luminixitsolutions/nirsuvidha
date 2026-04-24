import type { ReactNode, CSSProperties } from 'react'
import { cx } from '@/lib/cn'

type CardProps = {
  className?: string
  children: ReactNode
  title?: string
  description?: string
  action?: ReactNode
  noPadding?: boolean
  /**
   * `glass` — very light glassmorphism on the admin canvas.
   * `solid` — crisper for nested or dense blocks.
   */
  variant?: 'glass' | 'solid'
  /** Staggered fade-in; higher = later */
  revealIndex?: number
}

const glassShell =
  'border border-slate-200/80 bg-white shadow-sm ring-1 ring-slate-900/5'

const solidShell = 'border border-slate-200/80 bg-white shadow-sm'

export function Card({
  className,
  children,
  title,
  description,
  action,
  noPadding,
  variant = 'glass',
  revealIndex,
}: CardProps) {
  const shell = variant === 'glass' ? glassShell : solidShell
  const style: CSSProperties | undefined =
    revealIndex != null
      ? { animationDelay: `${32 + revealIndex * 60}ms` }
      : undefined
  return (
    <div
      className={cx(
        'group/card relative overflow-hidden rounded-2xl transition duration-300 ease-out-expo',
        shell,
        'hover:-translate-y-px hover:border-slate-300/90 hover:shadow-md',
        'motion-reduce:translate-y-0',
        revealIndex != null &&
          'animate-fade-in-up motion-reduce:animate-none motion-reduce:opacity-100',
        className,
      )}
      style={style}
    >
      {/* Very subtle shine sweep on hover (glass only) */}
      {variant === 'glass' && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-500 group-hover/card:opacity-100"
          style={{
            background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
            backgroundSize: '200% 100%',
          }}
          aria-hidden
        />
      )}
      {(title || description || action) && (
        <div
          className={cx(
            'relative z-[1] flex flex-wrap items-start justify-between gap-3 border-b px-6 py-4',
            variant === 'glass'
              ? 'border-slate-200/80 bg-slate-50/50'
              : 'border-slate-200/80 bg-slate-50/60',
          )}
        >
          <div>
            {title && (
              <h2 className="text-base font-semibold tracking-tight text-slate-900">{title}</h2>
            )}
            {description && <p className="mt-0.5 text-sm text-slate-500">{description}</p>}
          </div>
          {action}
        </div>
      )}
      <div className={noPadding ? undefined : 'relative z-[1] p-6'}>{children}</div>
    </div>
  )
}
