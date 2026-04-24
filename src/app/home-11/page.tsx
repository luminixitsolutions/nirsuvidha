import React from 'react'
import Link from 'next/link'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FeatureJob from '../components/job/feature-job'
import CategoryTwo from '../components/category/category-two'
import CtaOne from '../components/cta/cta-one'
import ClientOne from '../components/client/client-one'
import PricingTwo from '../components/pricing/pricing-two'
import SubscribeOne from '../components/subscribe/subscribe-one'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'

import { aboutData } from '../data/data'
import Image from 'next/image'

interface About{
    title: string;
    desc: string;
}

export default function HomeEleven() {
  return (
    <>
        <NavBgWhite/>  

        <div className="image-bg py-5 bg-second position-relative" data-overlay="0">
            <div className="container py-5 z-2 position-relative">
                <div className="row justify-content-center">
                    <div className="col-lg-9 col-md-11 col-sm-12">
                        <div className="inner-banner-text text-center">
                            <div className="inner-banner-eclips mb-3"><span className="label p-2 px-4 rounded-5 fw-medium text-light bg-main">Trusted by 100K+ NRIs Worldwide</span></div>
                            <h1>Discover services built for NRIs today</h1>
                            <p className="fs-5">Explore Hundreds of Opportunities!</p>
                        </div>
                        <div className="search-from-clasic mt-5">
                            <div className="hero-search-content shadow-sm">
                                <div className="row">
                                
                                    <div className="col-xl-10 col-lg-10 col-md-9 col-sm-12 pe-xl-0 pe-lg-0 pe-md-0">
                                        <div className="classic-search-box">
                                            <div className="form-group full">
                                                <div className="input-with-icon">
                                                    <input type="text" className="form-control fs-6" placeholder="Skills, Designations, Keyword"/>
                                                    <Image src='/img/pin.svg' width={20} height={20} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-2 col-lg-2 col-md-3 col-sm-12">
                                        <div className="form-group">
                                            <button type="submit" className="btn btn-main full-width">Explore Services</button>
                                        </div>
                                    </div>
                                            
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            <div className="position-absolute start-0 bottom-0 d-none d-lg-block z-1"><Image src='/img/banner-cap-1.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt="Image"/></div>
            <div className="position-absolute end-0 bottom-0 d-none d-lg-block z-1"><Image src='/img/banner-cap-2.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}}  className="img-fluid" alt="Image"/></div>
        </div>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Featured Services</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <FeatureJob/>
            </div>
        </section>

        <section className="gray-simple">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>All-in-One NRI Services</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <CategoryTwo border={false}/>
            </div>
        </section>

        <section className="pb-4">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="side-thumber-wrap mb-md-0 mb-4">
                            <div className="side-effect"></div>
                            <div className="side-thumber-img pe-4 pb-4 position-relative">
                                <div className="bg-dot yellow w-25 h-25 position-absolute start-0 top-0"></div>
                                <div className="bg-dot success w-25 h-25 position-absolute end-0 bottom-0"></div>
                                <figure><img src='/img/slice-1.png' className="img-fluid rounded-top-pill rounded-bottom-4 z-1 position-relative" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-5 col-lg-6 col-md-12 col-12">
                        <div className="choose-us-head">
                            <div className="choose-us-wriops mb-2"><span className="fw-medium label-light-warning px-3 py-2 rounded">Advanced Features</span></div>
                            <div className="choose-title">
                                <h2 className="lh-base">Trusted NRI<br/>service platform</h2>
                                <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                            </div>
                            <div className="jobstock-icon-box-list mt-4">
                                <ul>
                                    {aboutData.map((item:About,index:number)=>( 
                                        <li key={index}>
                                            <div className="vib-list-wrap21">
                                                <div className="vib-list-icon">
                                                    <i className="fa-solid fa-check"></i>
                                                </div>
                                                <div className="vib-list-caption">
                                                    <h5>{item.title}</h5>
                                                    <p>{item.desc}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    
                    </div>
                    
                </div>
                
            </div>
        </section>
        <div className="clearfix"></div>

        <section className="pt-0">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="p-lg-5 p-md-0 pt-md-5">
                            <div className="mb-4 mb-sm-7">
                                <span className="fw-medium label-light-success px-3 py-2 rounded">Our Showcase</span>
                                <h2 className="mt-2 lh-base">All-in-One NRI Services Platform</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div className="features-groupss my-4">
                                <ul className="row gx-3 gy-4 p-0">
                                    <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Corporate & business services</li>
                                    <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Company Showcase</li>
                                    <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Creative Services</li>
                                    <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Easy To Upload documents</li>
                                    <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Online E-commerce</li>
                                    <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Expert advisors</li>
                                </ul>
                            </div>
                        
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-6">
                                    <Link className="btn btn-main fw-medium px-4" href="#">Explore Services</Link>
                                </div>
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="side-thumber-wrap mt-md-0 mt-4">
                            <div className="side-effect"></div>
                            <div className="side-thumber-img position-relative">
                                <div className="square--80 circle bg-white shadow position-absolute start-0 top-0 mt-5 ms-5 animate-bounce"><Image src='/img/l-4.png' className="img-fluid" width={40} height={40} alt=""/></div>
                                <div className="square--80 circle bg-white shadow position-absolute end-0 top-0 mt-5 me-5 animate-bounce"><Image src='/img/l-7.png' className="img-fluid" width={40} height={40} alt=""/></div>
                                <div className="square--80 circle bg-white shadow position-absolute start-50 bottom-0 mb-4 animate-bounce"><Image src='/img/l-10.png' className="img-fluid" width={40} height={40} alt=""/></div>
                                <figure><Image src='/img/pay-2.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="clearfix"></div>

        <CtaOne/>

        <section className="gray">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Good Reviews By Customers</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <ClientOne/>
            </div>	
        </section>

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

        <FooterLight/>

        <ScrollToTop/>
    </>
  )
}
