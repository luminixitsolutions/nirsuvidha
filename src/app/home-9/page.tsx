import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import CounterOne from '../components/counter/counter-one'
import CategoryTwo from '../components/category/category-two'
import FeatureJobTwo from '../components/job/feature-job-two'
import ClientTwo from '../components/client/client-two'
import CtaOne from '../components/cta/cta-one'
import PricingTwo from '../components/pricing/pricing-two'
import SubscribeOne from '../components/subscribe/subscribe-one'
import FooterBlackTwo from '../components/footer/footer-black-two'
import ScrollToTop from '../components/scroll-to-top'

let images = ['/img/c1.png','/img/brand/mailchimp-primary.svg','/img/brand/fitbit-primary.svg','/img/brand/capsule-primary.svg','/img/brand/vidados-primary.svg']

export default function HomeNine() {
  return (
    <>
        <NavBgWhite/>

        <div className="image-cover hero-header bg-second pb-lg-5 pb-0" data-overlay="0">
            <div className="container d-flex flex-column justify-content-center position-relative zindex-2 pt-sm-3 pt-md-4 pt-xl-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 pe-xl-4 pe-lg-3">
                        <h6 className="bg-transparent rounded-pill text-light py-2 pe-3 ps-2 rounded-5 fw-medium d-inline-flex align-items-center mb-3"><span className="label rounded-pill bg-main me-2">New</span>Collaborate with team</h6>
                        <h1 className="mb-4">Financial Super-App for Global Indians</h1>
                        <p className="fs-5">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                        <div className="d-flex align-items-center mt-5">
                            <div className="position-relative">
                                <Link href="/half-map" className="btn btn-main fw-medium px-4">Explore All Jobs</Link>
                            </div>
                            <div className="position-relative ms-4">
                                <Link href="/half-map" className="fw-medium text-light"><span className="square--50 circle d-inline-flex align-items-center justify-content-center bg-warning text-light me-2"><i className="fa-solid fa-play"></i></span>Watch Videos</Link>
                            </div>
                        </div>
                        
                        <div className="d-block mt-5 mb-5">
                            <div className="exs-los mb-4">
                                <h6 className="fw-medium">Sponserd by Populars:</h6>
                            </div>
                            <div className="row align-items-center justify-content-start row-cols-xl-5 row-cols-lg-5 row-cols-md-3 row-cols-3 gx-4 gy-3">
                                {images.map((item:string,index:number)=>( 
                                    <div className="col ps-0" key={index}>
                                        <figure className="single-brand thumb-figure">
                                            <Image src={item} width={0} height={0} sizes='100vw' style={{width:'auto', height:'50px'}} className="img-fluid" alt=""/>
                                        </figure>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12 d-xl-none">
                        <img src='/img/author-2.png' className="img-fluid" alt=""/>
                    </div>
                </div>
            </div>
            <div className="d-none d-xl-block position-absolute end-0 bottom-0 pe-5">
                <div className="square--80 circle bg-white shadow position-absolute start-0 top-0 mt-5 ms-5 animate-bounce"><Image src='/img/l-4.png' className="img-fluid" width={40} height={40} alt=""/></div>
                <div className="square--80 circle bg-white shadow position-absolute end-0 top-0 mt-5 me-5 animate-bounce"><Image src='/img/l-7.png' className="img-fluid" width={40} height={40} alt=""/></div>
                <div className="position-absolute end-0 bottom-0 mb-5 me-5">
                    <div className="d-inline-flex align-items-center bg-white shadow py-3 px-3 rounded-2 animate-leftright">
                        <div className="pls-thumb"><Image src='/img/team-1.jpg' className="img-fluid circle" width={50} height={50} alt=""/></div>
                        <div className="pled ps-3">
                            <h5 className="fw-semibold text-muted m-0">Adam Kilworn</h5>
                            <p className="m-0 text-muted">Web Designer, Canada</p>
                        </div>
                    </div>
                </div>
                <img src='/img/author-2.png' className="img-fluid" width="650" alt=""/>
            </div> 
        </div>   

        <CounterOne/>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>All-in-One NRI Services</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <CategoryTwo border={true}/>
            </div>
        </section>

        <section className="gray-simple">
            <div className="container">
                
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Featured Services</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <FeatureJobTwo/>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10">
                        <div className="sec-heading center">
                            <h2>What Our Clients Says</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <ClientTwo/>
            </div>
        </section>
        <CtaOne/>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore our Prices</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <PricingTwo/>
            </div>	
        </section>

        <SubscribeOne/>

        <FooterBlackTwo/>

        <ScrollToTop/>
    </>
  )
}
