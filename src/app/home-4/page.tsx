import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import NavBgWhite from '../components/navbar/nav-bg-white'
import PartnerOne from '../components/partner/partner-one'
import TopCompany from '../components/job/top-company'
import CategoryOne from '../components/category/category-one'
import FeatureJobFour from '../components/job/feature-job-four'
import ClientOne from '../components/client/client-one'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export default function HomeFour() {
  return (
    <>
        <NavBgWhite/>

        <div className="hero-header bg-light-main py-6">
            <div className="container">
                <div className="row gx-xl-3 gx-lg-2 align-items-center">
                    <div className="col-xl-6 col-lg-7 col-md-12 col-sm-12">
                        <h3 className="m-0 px-1 py-2 text-success">Trusted services here</h3>
                        <h1 className="mb-4">Discover trusted<br/>partners for India</h1>
                        <div className="search-from-clasic mt-5 mb-5">
                            <div className="hero-search-content b-all search-shadow-color">
                                <div className="row">
                                
                                    <div className="col-xl-9 col-lg-10 col-md-9 col-sm-12">
                                        <div className="classic-search-box">
                                            <div className="form-group full">
                                                <div className="input-with-icon">
                                                    <input type="text" className="form-control" placeholder="Skills, Designations, Keyword"/>
                                                    <Image src='/img/pin.svg' height={20} width={20} alt=""/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-3 col-lg-2 col-md-3 col-sm-12">
                                        <div className="form-group">
                                            <Link href="#" className="btn btn-main full-width fw-medium">Explore Services</Link>
                                        </div>
                                    </div>
                                            
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
                    <div className="col-xl-6 col-lg-5 col-md-12 col-sm-12">
                        <div className="hero-side-thumb">
                            <figure>
                                <img src='/img/side-banner.png' className="img-fluid" alt=""/>
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        <section className="min">
            <div className="container">
                <div className="row justify-content-center mb-2">
                    <div className="col-xl-4 col-lg-7 col-md-10 text-center">
                        <div className="center mb-4">
                            <h5 className="fw-medium lh-lg">Join over 2,000 companies around the world that trust the <span className="text-main">NRI Suvidha</span> platforms</h5>
                        </div>
                    </div>
                </div>
                <PartnerOne/>
            </div>
        </section>
        <div className="clearfix"></div>

        <section className="pt-2">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Broswe Top Companies</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <TopCompany border={true}/>
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
                <CategoryOne light={false}/>
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
                <FeatureJobFour/>
            </div>
        </section>

        <div className="position-relative">
            <div className="container">
                <div className="row justify-content-end align-items-md-center">
                    <div className="d-none d-lg-block col-lg-6 position-absolute top-0 start-0 bg-cover h-100 rounded-end" style={{backgroundImage:`url('/img/banner-1.jpg')`}}></div>
                    <div className="d-lg-none mb-5 mb-md-0">
                        <Image className="img-fluid rounded" src='/img/banner-1.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} alt="Image Description"/>
                    </div>

                    <div className="col-lg-6 align-self-center">
                        <div className="p-lg-5 p-md-0 pt-md-5">
                            <div className="row mb-sm-4">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <div className="choose-us-head">
                                        <div className="choose-us-wriops mb-2"><span className="font--bold label-light-warning px-3 py-2 rounded">Advanced Features</span></div>
                                        <div className="choose-title">
                                            <h2>Our Trusted NRI<br/>service platform</h2>
                                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                                        </div>
                                        <div className="jobstock-icon-box-list mt-4">
                                            <ul>
                                                <li>
                                                    <div className="vib-list-wrap21">
                                                        <div className="vib-list-icon">
                                                            <i className="fa-solid fa-check"></i>
                                                        </div>
                                                        <div className="vib-list-caption">
                                                            <h5>#1 Quality service</h5>
                                                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="vib-list-wrap21">
                                                        <div className="vib-list-icon">
                                                            <i className="fa-solid fa-check"></i>
                                                        </div>
                                                        <div className="vib-list-caption">
                                                            <h5>Top Companies</h5>
                                                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="vib-list-wrap21">
                                                        <div className="vib-list-icon">
                                                            <i className="fa-solid fa-check"></i>
                                                        </div>
                                                        <div className="vib-list-caption">
                                                            <h5>Global coverage</h5>
                                                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="vib-list-wrap21">
                                                        <div className="vib-list-icon">
                                                            <i className="fa-solid fa-check"></i>
                                                        </div>
                                                        <div className="vib-list-caption">
                                                            <h5>No Extra Charges</h5>
                                                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        
                            <div className="row">
                                <div className="col-sm-12 col-md-12 col-lg-12">
                                    <Link className="btn btn-main fw-medium px-4" href="#">Get Started</Link>
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

        <section className="bg-cover bg-main" style={{backgroundImage:`url('/img/footer-bg-dark.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
                        
                        <div className="call-action-wrap">
                            <div className="sec-heading center">
                                <h2 className="lh-base mb-3 text-light">Find the right service<br/>on NRI Suvidha That is Superb For You</h2>
                                <p className="fs-6 text-light">Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias</p>
                            </div>
                            <div className="call-action-buttons mt-3">
                                <Link href="#" className="btn btn-lg btn-dark fw-medium px-xl-5 px-lg-4 me-2">Upload documents</Link>
                                <Link href="#" className="btn btn-lg btn-whites fw-medium px-xl-5 px-lg-4 text-main">Join Our Team</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>

        <FooterLightTwo/>

        <ScrollToTop/>
    </>
  )
}
