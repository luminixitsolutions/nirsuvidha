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
  /** When set (e.g. from admin CMS), overrides the built-in stats */
  items?: (CountStat | TextStat)[]
}

const defaultStats: (CountStat | TextStat)[] = [
  {
    kind: 'count',
    title: 'Global Indians served',
    end: 50,
    suffix: 'K+',
  },
  {
    kind: 'text',
    title: 'India remittances',
    value: '₹2500Cr+',
  },
  {
    kind: 'count',
    title: 'Countries supported',
    end: 100,
    suffix: '+',
  },
  {
    kind: 'text',
    title: 'User rating',
    value: '4.9★',
  },
]

export default function HomeBannerCounter({
  variant = 'default',
  items,
}: HomeBannerCounterProps) {
  const stats = items && items.length > 0 ? items : defaultStats
  const itemClass =
    variant === 'light' ? styles.statsItemLight : styles.statsItem
  return (
    <ul className={styles.statsGrid}>
      {stats.map((item, index) => (
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
