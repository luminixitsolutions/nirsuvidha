'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import type { PublicService } from '@/lib/public-services'
import NavBrand from './nav-brand'
import MainNavMenu from './main-nav-menu'
import './navlight-light-override.css'
import './pricing-header.css'
import './nav-solid-light.css'

type Props = {
  /** Pass from server (Laravel) so the Services menu matches the home grid. */
  serviceItems?: PublicService[] | null
  /** Solid gold bar + white nav links (optional legacy style). */
  variant?: 'default' | 'pricing'
  /** White bar, dark links + Login / Get Started (same as home marketing header). */
  solidBar?: boolean
}

export default function Navlight({ serviceItems, variant = 'default', solidBar = false }: Props) {
    let [toggle, setToggle] = useState<boolean>(false);
    let [scroll,setScroll] = useState<boolean>(false);
    let [menu, setMenu] = useState<string>('');
    let [windowWidth, setWindowWidth] = useState<number>(0);

    const loction = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // set initial values
            setWindowWidth(window.innerWidth);
            window.scrollTo(0, 0);
            setMenu(loction);

            const handlerScroll = () => {
                setScroll(window.scrollY > 50);
            };

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('scroll', handlerScroll);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('scroll', handlerScroll);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [loction]);
  const pricingBar = variant === 'pricing' && !solidBar

  const navSurfaceClass = solidBar
    ? 'nav-on-light-hero nav-solid-light'
    : pricingBar
      ? 'pricing-header'
      : 'nav-on-light-hero'

  return (
    <>
        <div
          className={`header header-transparent change-logo ${navSurfaceClass} ${scroll ? 'header-fixed' : ''}`}
        >
            <div className="container">
                <nav id="navigation" className={windowWidth > 991 ? "navigation navigation-landscape" : "navigation navigation-portrait"}>
                    <div className="nav-header">
                        <NavBrand theme="transparent" />
                        <div className="nav-toggle" onClick={()=>setToggle(!toggle)}></div>
                        <div className="mobile_nav">
                            <ul>
                                <li className="list-buttons">
                                    <Link href="/#services">
                                        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" className="fill-main"/>
                                            <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" className="fill-main"/>
                                        </svg>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={`nav-menus-wrapper ${toggle ? 'nav-menus-wrapper-open' : ''}`}>
                        <span className="nav-menus-wrapper-close-button" onClick={()=>setToggle(!toggle)}>✕</span>
                        <MainNavMenu
                          menu={menu}
                          serviceItems={serviceItems}
                          variant={pricingBar ? 'pricing' : 'default'}
                        />
                    </div>
                </nav>
            </div>
        </div>
    </>
  )
}
