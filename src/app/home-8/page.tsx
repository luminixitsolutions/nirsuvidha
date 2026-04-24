import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FormFour from '../components/form/form-four'
import PartnerTwo from '../components/partner/partner-two'
import FeatureJob from '../components/job/feature-job'
import CategoryTwo from '../components/category/category-two'
import CtaOne from '../components/cta/cta-one'
import ClientOne from '../components/client/client-one'
import FooterBlackTwo from '../components/footer/footer-black-two'
import SubscribeOne from '../components/subscribe/subscribe-one'
import ScrollToTop from '../components/scroll-to-top'

import { aboutData } from '../data/data'

interface About{
    title: string;
    desc: string;
}

export default function HomeEight() {
  return (
    <>
        <div className='border-bottom'>
            <NavBgWhite/>
        </div>

        <div className="image-cover hero-header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 pe-xl-5 pe-lg-4">
                        <h6 className="text-main bg-light-main py-2 pe-3 ps-2 rounded-5 fw-medium d-inline-flex align-items-center mb-3"><span className="bg-main label rounded-pill me-2">New</span>Expert-led support</h6>
                        <h1 className="mb-4">Financial Super-App for Global Indians</h1>
                        <p className="fs-5">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                        <div className="features-groupss my-4">
                            <ul className="row gx-3 gy-4 p-0">
                                <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Legal & Documentation Services</li>
                                <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Banking & Remittance Solutions</li>
                                <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Investment & Wealth Management</li>
                                <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Tax & Compliance Support</li>
                                <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Business Setup in India</li>
                                <li className="fw-medium col-xl-6 col-lg-6 col-6"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Real Estate Assistance</li>
                            </ul>
                        </div>
                        <div className="simple-search-wrap mb-5">
                            <div className="hero-search-2">
                                <div className="full-search-2 mt-5 border rounded">
                                    <FormFour/>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="row g-4 position-relative">
                            <div className="position-absolute bg-dot main start-0 top-0 w-25 h-25 opacity-50"></div>
                            <div className="col-6">
                                <div className="mb-4 position-relative z-1">
                                    <Image src='/img/bn-4.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid circle" alt=""/>
                                </div>
                                <div className="position-relative z-1">
                                    <Image src='/img/bn-2.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-5" alt=""/>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className="mb-4 position-relative z-1">
                                    <Image src='/img/bns-1.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded-5" alt=""/>
                                </div>
                                <div className="position-relative z-1">
                                    <Image src='/img/bn-3.png' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid circle" alt=""/>
                                </div>
                            </div>
                            <div className="position-absolute bg-dot yellow end-0 bottom-0 w-25 h-25 opacity-50"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <PartnerTwo/>
        <div className="clearfix"></div>

        

        <section className="gray-simple">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>All-in-One NRI Services Platform</h2>
                            <p>Manage your financial, legal, and investment needs in India from anywhere in the world with a single trusted platform.</p>
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
                                <h2 className="mt-2 lh-base">From inquiry to closure</h2>
                                <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
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
                                <figure><img src='/img/pay-2.png' className="img-fluid rounded" alt=""/></figure>
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

        <SubscribeOne/>

        <FooterBlackTwo/>
        <ScrollToTop/>
    </>
  )
}
