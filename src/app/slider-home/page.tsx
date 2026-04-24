'use client'

import React from 'react'
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,EffectFade} from 'swiper/modules';
import 'swiper/css';

import { serviceData } from '../data/data'

import CtaOne from '../components/cta/cta-one'
import ClientOne from '../components/client/client-one'
import PricingTwo from '../components/pricing/pricing-two'
import SubscribeOne from '../components/subscribe/subscribe-one'
import ScrollToTop from '../components/scroll-to-top'
import FooterLight from '../components/footer/footer-light'
import NavBgWhite from '../components/navbar/nav-bg-white'
import CategoryTwo from '../components/category/category-two'
import FeatureJob from '../components/job/feature-job'
import { serviceEngagementLabel } from '@/lib/service-display'
import NavTop from '../components/navbar/nav-top'

interface ServiceListing{
    id: number;
    image: string;
    name: string;
    tag: string[];
    jobtype: string;
    title: string;
    skills: string;
    value: string;
    open: string;
    location: string;
    name2: string;
    rate: string[];
    review: string;
}

export default function SliderHome() {
  return (
    <>
        <NavTop/>

        <NavBgWhite/>  

        <div className="slider-home">
            <Swiper className="slider-banner" modules={[Autoplay,EffectFade]} loop={true}  autoplay={{ delay: 2000, disableOnInteraction: false, }} effect={'fade'} speed={300}>
                <SwiperSlide className="bg-cover d-flex align-items-center" style={{backgroundImage:`url('/img/slide-banner-1.jpg')`, minHeight:'540px'}} data-overlay="5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                                <div className="slider-caption">
                                    <h1 className="text-light">Financial Super-App for Global Indians</h1>
                                    <p className="fs-5 text-light">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="bg-cover d-flex align-items-center" style={{backgroundImage:`url('/img/slide-banner-3.jpg')`, minHeight:'540px'}} data-overlay="5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                                <div className="slider-caption">
                                    <h1 className="text-light">Legal, tax & banking — unified for NRIs</h1>
                                    <p className="fs-5 text-light">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="bg-cover d-flex align-items-center" style={{backgroundImage:`url('/img/slide-banner-4.jpg')`, minHeight:'540px'}} data-overlay="5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                                <div className="slider-caption">
                                    <h1 className="text-light">Invest & comply in India with confidence</h1>
                                    <p className="fs-5 text-light">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide className="bg-cover d-flex align-items-center" style={{backgroundImage:`url('/img/slide-banner-2.jpg')`, minHeight:'540px'}} data-overlay="5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xxl-12 col-xl-12 col-lg-12 col-12">
                                <div className="slider-caption">
                                    <h1 className="text-light">Expert assistance for every India milestone</h1>
                                    <p className="fs-5 text-light">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div> 

        <section className="py-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xxl-9 col-xl-10 col-lg-12 col-md-12">
                        <div className="card rounded-4 shadow-sm w-100 px-4 px-xl-5 py-5 ovr-top">
                            
                            <form className="slider-search-form mb-4">
                                <div className="inner-form-block rounded-pill border p-2">
                                    <div className="d-flex align-items-center justify-content-between gap-2 w-100">
                                        <div className="form-group flex-fill m-0">
                                            <div className="input-with-icon">
                                                <input type="text" className="form-control fs-6 bg-transparent" id="trendingSearch" placeholder="Search services — tax, legal, NRE/NRO…"/>
                                                <i className="bi bi-search text-main fs-5"></i>
                                            </div>
                                        </div>
                                        <div className="submit-block"><button type="submit" className="square--60 btn-main border-0 fs-5 circle"><i className="bi bi-search"></i></button></div>
                                    </div>
                                </div>
                            </form>
                            
                            <div id="tagContainer">
                                <ul className="p-0 m-0 d-flex align-items-center justify-content-center gap-2 flex-wrap">
                                    <li><span className="badge badge-md badge-maintag rounded-pill">Tax & DTAA</span></li>
                                    <li><span className="badge badge-md badge-maintag rounded-pill">NRE / NRO</span></li>
                                    <li><span className="badge badge-md badge-maintag rounded-pill">Legal & POA</span></li>
                                    <li><span className="badge badge-md badge-maintag rounded-pill">Investments</span></li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>

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

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Trending services</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                
                <div className="row justify-content-center gx-3 gy-4 mb-5">
                    {serviceData.slice(0,5).map((item:ServiceListing,index:number)=>( 
                        <div className="col-xxl-10 col-xl-12 col-lg-12 col-md-12" key={index}>
                            <div className="jbs-list-box border">
                                <div className="jbs-list-head">
                                    <div className="jbs-list-head-thunner">
                                        <div className="jbs-list-emp-thumb jbs-verified"><Link href="/service-detail"><figure><img src={item.image} className="img-fluid" alt=""/></figure></Link></div>
                                        <div className="jbs-list-job-caption">
                                            <div className="jbs-job-types-wrap"><span className="label text-green bg-light-green">{serviceEngagementLabel(item.jobtype)}</span></div>
                                            <div className="jbs-job-title-wrap"><h4><Link href="/service-detail" className="jbs-job-title">{item.title}</Link></h4></div>
                                            <div className="jbs-job-mrch-lists">
                                                <div className="single-mrch-lists">
                                                    <span>{item.name}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.<span>07 Apr 2023</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jbs-list-head-middle">
                                        <div className="elsocrio-jbs"><div className="ilop-tr"><i className="fa-solid fa-sack-dollar"></i></div><h5 className="jbs-list-pack">{item.value}<span className="patype">\PA</span></h5></div>
                                    </div>
                                    <div className="jbs-list-head-last">
                                        <Link href="/service-detail" className="btn btn-md btn-gray px-3 me-2">View Detail</Link>
                                        <Link href="#" className="btn btn-md btn-main px-3">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="d-flex align-items-center justify-content-center">
                            <Link href="#" className="btn btn-dark px-5 rounded-pill">Explore Services</Link>
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
