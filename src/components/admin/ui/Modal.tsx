'use client'

import { useEffect, type ReactNode } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { AdminIcon } from '@/components/admin/AdminIcon'
import { cx } from '@/lib/cn'
import { Button } from './Button'

type ModalProps = {
  open: boolean
  onClose: () => void
  title: string
  children: ReactNode
  footer?: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

const widths = {
  sm: 'max-w-md',
  md: 'max-w-lg',
  lg: 'max-w-2xl',
}

export function Modal({ open, onClose, title, children, footer, size = 'md' }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (typeof document === 'undefined' || !open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      role="dialog"
      aria-modal
      aria-labelledby="modal-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-stone-900/50 backdrop-blur-sm transition"
        onClick={onClose}
        aria-label="Close dialog"
      />
      <div
        className={cx(
          'relative w-full overflow-hidden rounded-2xl',
          'border border-slate-200/90 bg-white',
          'shadow-2xl shadow-slate-900/10',
          widths[size],
        )}
      >
        <div className="flex items-start justify-between gap-4 border-b border-slate-200/80 bg-slate-50/50 px-6 py-4">
          <h2 id="modal-title" className="text-lg font-semibold text-slate-900">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-lg p-1.5 text-slate-500 transition duration-200 hover:scale-105 hover:bg-slate-100 hover:text-slate-800"
            aria-label="Close"
          >
            <AdminIcon icon={X} size="lg" className="text-stone-500" />
          </button>
        </div>
        <div className="px-6 py-5 text-sm text-slate-700">{children}</div>
        {footer != null ? (
          <div className="flex flex-wrap items-center justify-end gap-2 border-t border-slate-200/80 bg-slate-50/40 px-6 py-4">
            {footer}
          </div>
        ) : (
          <div className="flex justify-end border-t border-slate-200/80 px-6 py-3">
            <Button type="button" variant="secondary" onClick={onClose}>
              Close
            </Button>
          </div>
        )}
      </div>
    </div>,
    document.body,
  )
}
