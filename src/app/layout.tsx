import { Plus_Jakarta_Sans } from 'next/font/google'
import Script from 'next/script'
import 'bootstrap/dist/css/bootstrap.min.css'
import './assets/css/styles.css'
import './assets/css/colors.css'
import './tailwind-base.css'
import { Metadata } from 'next'
import HelpWidget from './components/help/HelpWidget'

const JakartaSans = Plus_Jakarta_Sans({
  weight: ['200','300','400','500','600','700','800'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
   variable: '--font-JakartaSans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: "NRI SUVIDHA – Financial Super-App for NRIs & OCIs",
  description:
    "NRI Suvidha is a financial super-app designed for NRIs and OCIs to manage legal, banking, investment, tax, and property services in India from anywhere in the world.",
  icons: {
    icon: [{ url: "/img/favicon.png", type: "image/png" }],
    apple: "/img/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en" className={`${JakartaSans.variable}`}>
      <body>
        <div id="nri-app">
          {children}
          <HelpWidget />
        </div>
        <Script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
