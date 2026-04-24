import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import SubscribeTwo from '../components/subscribe/subscribe-two'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'

export default function Error() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title text-light">Error Page</h2>
                        <span className="ipn-subtitle text-light opacity-75">No Any Result Found!</span>
                    </div>
                </div>
            </div>
        </section>   

        <section className="error-wrap">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="text-center">
                            <Image src='/img/404.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                            <p className="fs-6">Maecenas quis consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi ultricies laoreet ullamcorper phasellus semper</p>
                            <Link className="btn btn-main px-5" href="/">Back To Home</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <SubscribeTwo/>

        <FooterLight/>

        <ScrollToTop/>
    </>
  )
}
