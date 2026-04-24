import React from 'react'
import Link from 'next/link'

export default function CtaOne() {
  return (
    <section className="bg-cover" style={{backgroundImage:`url('/img/video-bg.jpg')`, backgroundRepeat:'no-repeat'}} data-overlay="4">
        <div className="ht-200"></div>
        <div className="container">
            <div className="row align-items-center justify-content-center">
                <div className="col-xl-12 col-lg-12">
                    <div className="overlio-vedio-box">
                        <Link href="#" className="play-video-btn text-main"><i className="fa-solid fa-play"></i></Link>
                    </div>
                </div>
            </div>
        </div>
        <div className="ht-200"></div>
    </section>
  )
}
