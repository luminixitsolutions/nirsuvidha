'use client'

import CountUp from 'react-countup'
import styles from './home-banner-counter.module.css'

export type CountStat = {
  kind: 'count'
  title: string
  end: number
  suffix: string
  separator?: string
}

export type TextStat = {
  kind: 'text'
  title: string
  value: string
}

type HomeBannerCounterProps = {
  variant?: 'default' | 'light'
  /** From Laravel CMS; when empty, block is hidden. */
  items: (CountStat | TextStat)[]
}

export default function HomeBannerCounter({
  variant = 'default',
  items,
}: HomeBannerCounterProps) {
  if (items.length === 0) {
    return null
  }
  const itemClass =
    variant === 'light' ? styles.statsItemLight : styles.statsItem
  return (
    <ul className={styles.statsGrid}>
      {items.map((item, index) => (
        <li key={index} className={itemClass}>
          <div className={styles.statValue}>
            {item.kind === 'count' ? (
              <>
                <span className={styles.ctr}>
                  <CountUp
                    end={item.end}
                    duration={2.2}
                    separator={item.separator ?? ''}
                  />
                </span>
                <span className={styles.suffix}>{item.suffix}</span>
              </>
            ) : (
              <span className={styles.valueAllGold}>{item.value}</span>
            )}
          </div>
          <p className={styles.statLabel}>{item.title}</p>
        </li>
      ))}
    </ul>
  )
}
