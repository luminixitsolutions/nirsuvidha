'use client'
import Link from 'next/link'
import { categoryData } from '../../data/data'
import { homePaths } from '../../data/site-content'
import navSvcStyles from './nav-services-dropdown.module.css'

type Props = {
  menu: string
}

export default function MainNavMenu({ menu }: Props) {
  const homeActive = homePaths.includes(menu)

  return (
    <>
      <ul className="nav-menu">
        <li className={homeActive ? 'active' : ''}>
          <Link href="/">Home</Link>
        </li>
        <li className="nav-submenu-open">
          <Link href="/#services">
            Services
            <span className="submenu-indicator">
              <span className="submenu-indicator-chevron" />
            </span>
          </Link>
          <ul
            className={`nav-dropdown nav-submenu ${navSvcStyles.servicesList}`}
          >
            {categoryData.map((item) => (
              <li key={item.title}>
                <Link
                  href={item.href ?? '/#services'}
                  className={navSvcStyles.svcLink}
                >
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
        <li>
          <Link href="/#partners">Partners</Link>
        </li>
        <li>
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>

      <ul className="nav-menu nav-menu-social align-to-right">
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
      </ul>
    </>
  )
}
