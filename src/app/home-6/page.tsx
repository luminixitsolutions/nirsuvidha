import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FormTwo from '../components/form/form-two'
import FeatureJob from '../components/job/feature-job'
import HireBox from '../components/cta/hire-box'
import CtaOne from '../components/cta/cta-one'
import PricingOne from '../components/pricing/pricing-one'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'

import { aboutData } from '../data/data'
import FilterModalOne from '../components/filter/filter-modal-one'

interface About{
    title: string;
    desc: string;
}

export default function HomeSix() {
  return (
    <>
        <NavBgWhite/>   

        <div className="image-cover hero-header p-150" style={{backgroundImage:`url('/img/slider-2.jpg')`, backgroundColor:'#016551', backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-xl-7 col-lg-9 col-md-12">
                        <div className="simple-search-wrap mb-5">
                            <div className="hero-search-2">
                                <h2 className="text-xl text-main">Find</h2>
                                <h1 className="mb-4">Great service opportunity<br/>You Deserve</h1>
                                <div className="search-from-clasic mt-5">
                                    <FormTwo/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="vesm-rsv-box-wrap">
                            <div className="vesm-rsv-box-head">
                                <div className="vesm-rsv-txt"><span>14k reviews on</span></div>
                                <div className="vesm-rsv-star">
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                    <i className="fa-solid fa-star"></i>
                                </div>
                            </div>
                            <div className="vesm-rsv-box-caption">
                                <div className="vesm-rsv-elcox">
                                    <div className="vesm-rsv-elcox-01"><span className="vshm-arrows"><i className="fa-solid fa-share"></i></span><h5 className="reviews-ctr">4.9</h5></div>
                                </div>
                                <div className="vesm-rsv-elcox-02">
                                    <ul>
                                        <li><figure><Image src='/img/user-3.png' width={36} height={36} className="img-fluid" alt=""/></figure></li>
                                        <li><figure><Image src='/img/user-7.png' width={36} height={36} className="img-fluid" alt=""/></figure></li>
                                        <li><figure><Image src='/img/user-5.png' width={36} height={36} className="img-fluid" alt=""/></figure></li>
                                        <li><figure><Image src='/img/user-6.png' width={36} height={36} className="img-fluid" alt=""/></figure></li>
                                        <li><div className="img-coun">12k</div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
        <HireBox/>

        <section className="pb-4">
            <div className="container">
                <div className="row align-items-center justify-content-between">
                    <div className="col-xl-5 col-lg-5 col-md-12 col-12">
                        <div className="side-thumber-wrap">
                            <div className="side-effect"></div>
                            <div className="side-thumber-img">
                                <figure><img src='/img/side-1.png' className="img-fluid" alt=""/></figure>
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
                        <div className="side-thumber-wrap">
                            <div className="side-effect"></div>
                            <div className="side-thumber-img">
                                <figure><img src='/img/side-2.png' className="img-fluid" alt=""/></figure>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <div className="clearfix"></div>

        <CtaOne/>

        <section>
            <div className="container">
                <PricingOne/>
            </div>
        </section>

        <section className="pb-0 bg-cover" style={{backgroundColor:'#01333f', backgroundImage:`url('/img/footer-bg-dark.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 order-2">
                        <div className="position-relative">
                            <div className="footlio-img mt-5 mt-lg-0"><img src='/img/mean.png' width={350} className="img-fluid" alt=""/></div>
                        </div>
                    </div>
                    
                    <div className="col-xl-7 col-lg-6 col-md-12 col-sm-12 align-self-center order-1">
                        <div className="footlio-caalaction-caption">
                            <div className="footlio-caalaction-text">
                                <span className="text-main bg-white rounded py-1 px-3">Get your plan</span>
                                <h2 className="text-light mt-3 mb-4 lh-base">Get your dream outcomes just by<br/>uploading your CV</h2>
                                <p className="text-light fs-6 opacity-75">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                            </div>
                            <div className="footlio-caalaction-link mt-4">
                                <Link href="/upload-cv" className="btn btn-main fw-medium px-4"><i className="fa-solid fa-cloud-arrow-up me-2"></i>Upload CV</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
            </div>		
        </section>

        <FooterLight/>

        <ScrollToTop/>

        <FilterModalOne/>
    </>
  )
}
