'use client'

import { Toaster } from 'sonner'

export function AdminToaster() {
  return (
    <Toaster
      richColors
      position="top-right"
      closeButton
      toastOptions={{
        classNames: {
          toast: 'rounded-xl border-slate-200/90 bg-white',
        },
      }}
    />
  )
}
