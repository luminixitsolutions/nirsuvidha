import Link from 'next/link'
import type { ReactNode } from 'react'
import dense from './service-dense.module.css'

type SvcLinkProps = {
  href: string
  children: ReactNode
  variant?: 'primary' | 'outline'
  size?: 'sm' | 'md'
  fullWidth?: boolean
  className?: string
}

/** Pill links — default medium (balanced); use size="sm" for dense rows */
export function SvcLink({ href, children, variant = 'primary', size = 'md', fullWidth, className = '' }: SvcLinkProps) {
  const sz = size === 'sm' ? 'btn-sm' : ''
  const v = variant === 'primary' ? 'btn-main' : 'btn-outline-main'
  const w = fullWidth ? 'w-100' : ''
  return (
    <Link href={href} className={`btn ${sz} ${v} rounded-pill ${w} ${className}`.trim()}>
      {children}
    </Link>
  )
}

type PageHeaderProps = {
  title: string
  subtitle: string
  iconClass?: string
}

export function ServicePageHeader({ title, subtitle, iconClass }: PageHeaderProps) {
  return (
    <header className={`${dense.pageIntro} d-flex gap-3 align-items-start ${dense.mbSection}`}>
      {iconClass ? (
        <span className={dense.iconHeader} aria-hidden>
          <i className={iconClass} />
        </span>
      ) : null}
      <div className="min-w-0 flex-grow-1">
        <h1 className={dense.pageTitle}>{title}</h1>
        <p className={`${dense.pageSubtitle} mb-0 mt-1`}>{subtitle}</p>
      </div>
    </header>
  )
}

type SectionHeadProps = {
  kicker: string
  title: string
  sub?: string
  iconClass?: string
  className?: string
}

export function ServiceSectionHead({ kicker, title, sub, iconClass, className = '' }: SectionHeadProps) {
  return (
    <div className={`${dense.sectionHead} ${className}`}>
      <span className={dense.sectionKicker}>{kicker}</span>
      <h2 className={`${dense.sectionTitle} ${iconClass ? dense.sectionTitleInline : ''}`}>
        {iconClass ? (
          <>
            <span className={dense.iconBubbleSm} aria-hidden>
              <i className={iconClass} />
            </span>
            <span>{title}</span>
          </>
        ) : (
          title
        )}
      </h2>
      {sub ? <p className={`${dense.sectionSub} mt-1`}>{sub}</p> : null}
    </div>
  )
}

export function ServiceFeatureList({ items }: { items: readonly string[] }) {
  return (
    <ul className={dense.featureList}>
      {items.map((item) => (
        <li key={item}>
          <i className="fa-solid fa-check" aria-hidden />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  )
}

export { dense as serviceDense }
