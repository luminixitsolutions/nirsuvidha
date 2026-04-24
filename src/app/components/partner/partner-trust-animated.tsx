'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  partnerTrustedByAudiences,
  partnerTrustedByHeadlineColor,
  partnerTrustedByLabel,
} from '../../data/site-content'
import { partnerLogoSrcs } from './partner-one'
import layoutStyles from './partner-trust-animated.module.css'
import styles from './partner-marquee.module.css'

const ROTATE_MS = 4200
const FADE_MS = 320

function LogoGroup({ instanceId }: { instanceId: string }) {
  return (
    <>
      {partnerLogoSrcs.map((src, index) => (
        <div
          key={`${instanceId}-${index}-${src}`}
          className={styles.logoCell}
        >
          <figure className="single-brand thumb-figure mb-0">
            <Image
              src={src}
              width={0}
              height={0}
              sizes="120px"
              className={`img-fluid ${styles.logoImage}`}
              alt="Partner logo"
            />
          </figure>
        </div>
      ))}
    </>
  )
}

export default function PartnerTrustAnimated() {
  const [headlineIndex, setHeadlineIndex] = useState(0)
  const [headlineVisible, setHeadlineVisible] = useState(true)
  const [reduceMotion, setReduceMotion] = useState(false)

  useEffect(() => {
    setReduceMotion(
      typeof window !== 'undefined' &&
        window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    )
  }, [])

  useEffect(() => {
    if (reduceMotion || partnerTrustedByAudiences.length < 2) return

    const tick = window.setInterval(() => {
      setHeadlineVisible(false)
      window.setTimeout(() => {
        setHeadlineIndex(
          (i) => (i + 1) % partnerTrustedByAudiences.length,
        )
        setHeadlineVisible(true)
      }, FADE_MS)
    }, ROTATE_MS)

    return () => window.clearInterval(tick)
  }, [reduceMotion])

  const headline =
    partnerTrustedByAudiences[headlineIndex] ?? partnerTrustedByAudiences[0]

  return (
    <>
      <div className="row justify-content-center">
        <div className="col-12 col-lg-10 col-xl-8 text-center">
          <div className={layoutStyles.block}>
            <p className={layoutStyles.eyebrow}>{partnerTrustedByLabel}</p>
            <h2
              className={layoutStyles.title}
              style={{
                color: partnerTrustedByHeadlineColor,
                opacity: headlineVisible ? 1 : 0,
                transition: `opacity ${FADE_MS}ms ease`,
              }}
              aria-live="polite"
            >
              {headline}
            </h2>
          </div>
        </div>
      </div>

      {reduceMotion ? (
        <div
          className={`d-flex flex-wrap align-items-center justify-content-center px-1 ${layoutStyles.logos} ${styles.staticLogosRow}`}
        >
          <LogoGroup instanceId="static" />
        </div>
      ) : (
        <div className={`${styles.viewport} ${layoutStyles.logos}`}>
          <div className={styles.track}>
            <div className={styles.group}>
              <LogoGroup instanceId="a" />
            </div>
            <div className={styles.group} aria-hidden>
              <LogoGroup instanceId="b" />
            </div>
          </div>
        </div>
      )}
    </>
  )
}
