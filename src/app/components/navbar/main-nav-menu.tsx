'use client'
import Link from 'next/link'
import { categoryData } from '../../data/data'
import { homePaths } from '../../data/site-content'
import type { PublicService } from '@/lib/public-services'
import navSvcStyles from './nav-services-dropdown.module.css'

type NavServiceRow = {
  key: string | number
  icon: string
  title: string
  desc: string
  href: string
}

function buildServiceRows(
  serviceItems: PublicService[] | undefined,
): NavServiceRow[] {
  if (serviceItems && serviceItems.length > 0) {
    return serviceItems.map((s) => ({
      key: s.id,
      icon: s.icon,
      title: s.title,
      desc: s.short_details,
      href: s.slug ? `/services/${encodeURIComponent(s.slug)}` : (s.link_href ?? '/#services'),
    }))
  }
  return categoryData.map((item) => ({
    key: item.title,
    icon: item.icon,
    title: item.title,
    desc: item.desc,
    href: item.href ?? '/#services',
  }))
}

type Props = {
  menu: string
  /** From Laravel `GET /api/public/services` (same as home services grid). */
  serviceItems?: PublicService[] | null
  /** Marketing bar on `/pricing`: Home → Services → Pricing → About → Partners + Contact Us. */
  variant?: 'default' | 'pricing'
}

export default function MainNavMenu({ menu, serviceItems, variant = 'default' }: Props) {
  const homeActive = homePaths.includes(menu)
  const rows = buildServiceRows(serviceItems ?? undefined)

  const servicesDropdown = (
    <li className="nav-submenu-open">
      <Link href="/#services">
        Services
        <span className="submenu-indicator">
          <span className="submenu-indicator-chevron" />
        </span>
      </Link>
      <ul className={`nav-dropdown nav-submenu ${navSvcStyles.servicesList}`}>
        {rows.map((item) => (
          <li key={String(item.key)}>
            <Link href={item.href} className={navSvcStyles.svcLink}>
              <span className={navSvcStyles.svcIcon} aria-hidden>
                <i className={item.icon} />
              </span>
              <span className={navSvcStyles.svcBody}>
                <span className={navSvcStyles.svcTitle}>{item.title}</span>
                <span className={navSvcStyles.svcDesc}>{item.desc}</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </li>
  )

  return (
    <>
      <ul className="nav-menu">
        <li className={homeActive ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        {servicesDropdown}
        {variant === 'pricing' ? (
          <>
            <li className={menu === '/pricing' ? 'active' : ''}>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/#about-india-stack">About</Link>
            </li>
            <li>
              <Link href="/partner-onboarding">Partners</Link>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link href="/partner-onboarding">Partners</Link>
            </li>
            <li className={menu === '/pricing' ? 'active' : ''}>
              <Link href="/pricing">Pricing</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
          </>
        )}
      </ul>

      <ul className="nav-menu nav-menu-social align-to-right">
        {variant === 'pricing' ? (
          <li className="list-buttons ms-2">
            <Link href="/#contact" className="pricing-nav-contact-btn">
              Contact Us
            </Link>
          </li>
        ) : (
          <>
            <li>
              <Link href="/login">
                <i className="fas fa-sign-in-alt me-2"></i>Login
              </Link>
            </li>
            <li className="list-buttons ms-2">
              <Link href="/signup">
                <i className="bi bi-person-circle me-2"></i>Get Started
              </Link>
            </li>
          </>
        )}
      </ul>
    </>
  )
}
