'use client'
import Image from 'next/image'
import Link from 'next/link'
import { siteName } from '../../data/site-content'

/* Intrinsic 1224×374 — displayed via .nav-brand img { max-width: 160px } */
const LOGO_W = 306
const LOGO_H = 94

type NavBrandTheme = 'transparent' | 'light' | 'dark'

function BrandLogo() {
  return (
    <Image
      src="/img/logo.png"
      alt={siteName}
      width={LOGO_W}
      height={LOGO_H}
      className="d-block"
      style={{ maxWidth: '100%', width: 'auto', height: 'auto' }}
      sizes="(max-width: 380px) 120px, (max-width: 500px) 140px, 160px"
      priority
    />
  )
}

export default function NavBrand({ theme }: { theme: NavBrandTheme }) {
  if (theme === 'transparent') {
    return (
      <>
        <Link
          className="nav-brand static-logo text-decoration-none"
          href="/"
          aria-label={`${siteName} — Home`}
        >
          <BrandLogo />
        </Link>
        <Link
          className="nav-brand fixed-logo text-decoration-none"
          href="/"
          aria-label={`${siteName} — Home`}
        >
          <BrandLogo />
        </Link>
      </>
    )
  }
  return (
    <Link
      className="nav-brand text-decoration-none"
      href="/"
      aria-label={`${siteName} — Home`}
    >
      <BrandLogo />
    </Link>
  )
}
