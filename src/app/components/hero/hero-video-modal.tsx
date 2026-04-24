'use client'

import { useEffect, useState } from 'react'
import { heroIntroYouTubeId } from '../../data/site-content'
import styles from './hero-video-modal.module.css'

type Props = {
  /** Default: large circle for hero center. `inline`: compact, sits next to CTA buttons */
  variant?: 'default' | 'inline'
}

export default function HeroVideoModal({ variant = 'default' }: Props) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [open])

  const embedSrc = open
    ? `https://www.youtube.com/embed/${heroIntroYouTubeId}?autoplay=1&rel=0&modestbranding=1`
    : ''

  return (
    <>
      <button
        type="button"
        className={
          variant === 'inline' ? `${styles.playBtn} ${styles.playBtnInline}` : styles.playBtn
        }
        onClick={() => setOpen(true)}
        aria-label="Play NRI Suvidha introduction video"
      >
        <i className="fa-solid fa-play" aria-hidden />
      </button>

      {open && (
        <div
          className={styles.backdrop}
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            className={styles.modalBox}
            role="dialog"
            aria-modal="true"
            aria-labelledby="hero-video-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setOpen(false)}
              aria-label="Close video"
            >
              <i className="fa-solid fa-xmark" aria-hidden />
            </button>
            <div className={styles.aspect}>
              <iframe
                title="NRI Suvidha introduction"
                id="hero-video-title"
                src={embedSrc}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
            <p className={`${styles.caption} mb-0`}>NRI Suvidha — watch on YouTube</p>
          </div>
        </div>
      )}
    </>
  )
}
