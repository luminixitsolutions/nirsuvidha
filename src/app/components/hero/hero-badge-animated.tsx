'use client'

import { useEffect, useState } from 'react'
import { heroBadgeLines } from '../../data/site-content'
import styles from './hero-badge-animated.module.css'

const ROTATE_MS = 4000

export default function HeroBadgeAnimated() {
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
    if (reduceMotion || heroBadgeLines.length < 2) return

    const tick = window.setInterval(() => {
      setHasRotated(true)
      setIndex((i) => (i + 1) % heroBadgeLines.length)
    }, ROTATE_MS)

    return () => window.clearInterval(tick)
  }, [reduceMotion])

  const line =
    heroBadgeLines[reduceMotion ? 0 : index] ?? heroBadgeLines[0]

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
