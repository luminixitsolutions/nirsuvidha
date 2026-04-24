import type { ReactNode } from 'react'
import NavBgWhite from '../navbar/nav-bg-white'
import FooterTopTwo from '../footer/footer-top-two'
import FooterLightTwo from '../footer/footer-light-two'
import ScrollToTop from '../scroll-to-top'

type Props = {
  children: ReactNode
}

/** Standard layout for NRI Suvidha service hubs — matches /legal-services shell */
export default function ServicePageShell({ children }: Props) {
  return (
    <>
      <NavBgWhite />
      <section className="gray-simple py-3 py-lg-4 min">
        <div className="container">{children}</div>
      </section>
      <FooterTopTwo />
      <FooterLightTwo />
      <ScrollToTop />
    </>
  )
}
