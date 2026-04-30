import Link from 'next/link'
import { categoryData } from '../../data/data'
import type { PublicService } from '@/lib/public-services'
import styles from './category-two.module.css'

type Category = {
  icon: string
  title: string
  desc: string
  job: string
  href?: string
}

function mapFromApi(s: PublicService): Category {
  return {
    icon: s.icon,
    title: s.title,
    desc: s.short_details,
    job: s.below_short_title ?? '',
    href: s.slug
      ? `/services/${encodeURIComponent(s.slug)}`
      : (s.link_href ?? '/#services'),
  }
}

type Props = {
  border: boolean
  /** When set (from Laravel API), overrides static `categoryData`. */
  items?: PublicService[]
}

/** NRI services grid — used on home and inner landing templates */
export default function CategoryTwo({ border: _border, items }: Props) {
  const data: Category[] =
    items && items.length > 0 ? items.map(mapFromApi) : categoryData

  return (
    <div
      className={`row justify-content-center gx-2 gy-2 gx-sm-2 gy-sm-2 gx-lg-3 gy-lg-3 ${styles.grid}`}
    >
      {data.map((item: Category, index: number) => (
        <div
          className={`col-6 col-md-4 col-lg-3 col-xl-3 ${styles.serviceCol}`}
          key={item.href ? `${item.title}-${item.href}` : `cat-${index}`}
        >
          <Link
            className={styles.serviceCard}
            href={item.href ?? '/#services'}
          >
            <span className={styles.iconWrap} aria-hidden>
              <i className={item.icon} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.desc}</p>
            <p className={styles.kicker}>{item.job}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
