import type { ButtonHTMLAttributes, ReactNode } from 'react'
import { cx } from '@/lib/cn'

const variants: Record<string, string> = {
  primary:
    'bg-brand-gold text-white shadow-sm hover:bg-[#B89440] focus-visible:ring-2 focus-visible:ring-brand-gold/50',
  secondary:
    'border border-slate-200/90 bg-white text-slate-800 hover:border-slate-300 hover:bg-slate-50',
  ghost: 'text-slate-600 hover:bg-slate-100/80 hover:text-slate-900',
  danger:
    'border border-red-200/80 bg-white text-red-700 hover:border-red-300 hover:bg-red-50',
  outline: 'border border-slate-200/90 text-slate-800 hover:border-slate-300 hover:bg-slate-50',
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: keyof typeof variants
  size?: 'sm' | 'md' | 'lg'
  className?: string
  children: ReactNode
  loading?: boolean
}

const sizes: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'h-8 rounded-lg px-3 text-xs',
  md: 'h-10 rounded-xl px-4 text-sm',
  lg: 'h-11 rounded-xl px-5 text-sm',
}

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  disabled,
  loading,
  type = 'button',
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={cx(
        'inline-flex items-center justify-center gap-2 font-medium transition duration-200 ease-out focus-visible:outline-none active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100 motion-reduce:active:scale-100',
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={disabled || loading}
      {...rest}
    >
      {loading && (
        <span
          className="h-3.5 w-3.5 animate-spin rounded-full border-2 border-white/30 border-t-white"
          aria-hidden
        />
      )}
      {children}
    </button>
  )
}
