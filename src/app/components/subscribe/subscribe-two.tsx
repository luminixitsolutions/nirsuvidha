import React from 'react'
import Link from 'next/link'
import {
  ctaBannerSubtitle,
  ctaBannerTitle,
  ctaPrimaryButton,
  ctaSecondaryButton,
} from '../../data/site-content'

export default function SubscribeTwo() {
  return (
    <section id="contact" className="bg-cover call-action-container dark bg-main" style={{backgroundImage:`url('/img/footer-bg-dark.png')`, backgroundRepeat:'no-repeat', backgroundColor:'#016551'}}>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
                    
                    <div className="call-action-wrap">
                        <div className="call-action-caption">
                            <h2 className="text-light">{ctaBannerTitle}</h2>
                            <p className="fs-6 text-light">{ctaBannerSubtitle}</p>
                        </div>
                        <div className="call-action-form">
                            <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start">
                                <Link href="/#services" className="btn btn-light px-4">{ctaPrimaryButton}</Link>
                                <Link href="/#contact" className="btn btn-outline-light px-4">{ctaSecondaryButton}</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}
