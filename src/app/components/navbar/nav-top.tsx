import React from 'react'
import Link from 'next/link'
export default function NavTop() {
  return (
    <div className="topbar d-flex align-items-center">
        <div className="container d-flex justify-content-center justify-content-md-between">
            <div className="contact-info d-flex align-items-center gap-2">
                <div className="d-flex align-items-center gap-2 text-light"><i className="bi bi-envelope"></i><Link href="mailto:hello@nrisuvidha.com" className="text-light">hello@nrisuvidha.com</Link></div>
                <div className="d-flex align-items-center gap-2 text-light"><i className="bi bi-telephone ms-4"></i><span>+233551196764</span></div>
            </div>
            <div className="social-links d-none d-md-flex align-items-center">
                <ul className="d-flex align-items-center justify-content-end gap-3">
                    <li><Link href="#" className="social-link"><i className="bi bi-facebook"></i></Link></li>
                    <li><Link href="#" className="social-link"><i className="bi bi-twitter"></i></Link></li>
                    <li><Link href="#" className="social-link"><i className="bi bi-behance"></i></Link></li>
                    <li><Link href="#" className="social-link"><i className="bi bi-instagram"></i></Link></li>
                    <li><Link href="#" className="social-link"><i className="bi bi-dribbble"></i></Link></li>
                </ul>
            </div>
        </div>
    </div>
  )
}
