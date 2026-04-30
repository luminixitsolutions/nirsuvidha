'use client'

import { useEffect, useState } from 'react'
import styles from './hero-badge-animated.module.css'

const ROTATE_MS = 4000

type Props = {
  /** From Laravel CMS; when empty, nothing is shown. */
  lines: string[]
}

export default function HeroBadgeAnimated({ lines }: Props) {
  const [index, setIndex] = useState(0)
  const [hasRotated, setHasRotated] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(
      typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )
  }, [])

  useEffect(() => {
    if (reduceMotion || lines.length < 2) return

    const tick = window.setInterval(() => {
      setHasRotated(true)
      setIndex((i) => (i + 1) % lines.length)
    }, ROTATE_MS)

    return () => window.clearInterval(tick)
  }, [reduceMotion, lines])

  if (lines.length === 0) {
    return null
  }

  const line = lines[reduceMotion ? 0 : index] ?? lines[0]

  /* Skip enter animation on first line so the hero doesn’t bounce on load */
  const animateLine =
    !reduceMotion && (index !== 0 || hasRotated)

  return (
    <span className={styles.root} aria-live="polite">
      <span
        key={reduceMotion ? 'static' : index}
        className={animateLine ? styles.line : undefined}
      >
        {line}
      </span>
    </span>
  )
}
