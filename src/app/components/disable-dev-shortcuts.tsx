'use client'

import { useEffect } from 'react'

/**
 * Discourages casual right-click / common devtools shortcuts (production only).
 * Does not provide real security — anyone can still inspect via browser menus.
 */
export default function DisableDevShortcuts() {
  useEffect(() => {
    if (process.env.NODE_ENV !== 'production') return

    const blockContextMenu = (e: MouseEvent) => {
      e.preventDefault()
    }

    const blockDrag = (e: DragEvent) => {
      e.preventDefault()
    }

    const blockKeys = (e: KeyboardEvent) => {
      const key = e.key
      const ctrl = e.ctrlKey || e.metaKey
      const shift = e.shiftKey

      if (key === 'F12') {
        e.preventDefault()
        return
      }

      if (ctrl && shift && (key === 'I' || key === 'J' || key === 'C')) {
        e.preventDefault()
        return
      }

      if (ctrl && (key === 'u' || key === 'U')) {
        e.preventDefault()
      }
    }

    document.addEventListener('contextmenu', blockContextMenu)
    document.addEventListener('dragstart', blockDrag)
    document.addEventListener('keydown', blockKeys, true)

    return () => {
      document.removeEventListener('contextmenu', blockContextMenu)
      document.removeEventListener('dragstart', blockDrag)
      document.removeEventListener('keydown', blockKeys, true)
    }
  }, [])

  return null
}
