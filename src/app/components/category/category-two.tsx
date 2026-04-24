import Link from 'next/link'
import { categoryData } from '../../data/data'
import styles from './category-two.module.css'

interface Category {
  icon: string
  title: string
  desc: string
  job: string
  href?: string
}

/** NRI services grid — used on home and inner landing templates */
export default function CategoryTwo({ border: _border }: { border: boolean }) {
  return (
    <div
      className={`row justify-content-center gx-2 gy-2 gx-sm-2 gy-sm-2 gx-lg-3 gy-lg-3 ${styles.grid}`}
    >
      {categoryData.map((item: Category, index: number) => (
        <div
          className={`col-xl-3 col-lg-3 col-md-4 col-sm-6 ${styles.serviceCol}`}
          key={item.href ?? `cat-${index}`}
        >
          <Link
            className={styles.serviceCard}
            href={item.href ?? '/advance-search'}
          >
            <span className={styles.iconWrap} aria-hidden>
              <i className={item.icon} />
            </span>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.desc}</p>
            <p className={styles.kicker}>{item.job}</p>
            {/* <span className={styles.learn}>
              Explore
              <span className={styles.learnArrow} aria-hidden>→</span>
            </span> */}
          </Link>
        </div>
      ))}
    </div>
  )
}
