import type { InputHTMLAttributes } from 'react'
import { cx } from '@/lib/cn'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
  hint?: string
  className?: string
  inputClassName?: string
}

export function Input({
  label,
  error,
  hint,
  className,
  inputClassName,
  id,
  ...rest
}: InputProps) {
  const iid = id || rest.name
  return (
    <div className={className}>
      {label && (
        <label htmlFor={iid} className="mb-1.5 block text-xs font-medium text-slate-600">
          {label}
        </label>
      )}
      <input
        id={iid}
        className={cx(
          'w-full rounded-xl border border-slate-200/90 bg-white px-3.5 py-2.5 text-sm text-slate-900',
          'placeholder:text-slate-400 transition duration-200 ease-out',
          'focus:border-slate-300 focus:outline-none focus:ring-2 focus:ring-brand-gold/15',
          error && 'border-red-300 focus:border-red-400 focus:ring-red-200',
          inputClassName,
        )}
        {...rest}
      />
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
      {hint && !error && <p className="mt-1.5 text-xs text-slate-500">{hint}</p>}
    </div>
  )
}
