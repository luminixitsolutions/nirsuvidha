import React from 'react'
import Image from 'next/image'

import NavDark from '../components/navbar/nav-dark'
import FormFour from '../components/form/form-four'
import PartnerTwo from '../components/partner/partner-two'
import CandidateOne from '../components/candidate/candidate-one'
import ExploreJob from '../components/job/explore-job'
import FeatureJobTwo from '../components/job/feature-job-two'
import HireBox from '../components/cta/hire-box'
import BlogOne from '../components/blog-one'
import FooterTop from '../components/footer/footer-top'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export default function HomeSeven() {
  return (
    <>
        <NavDark/>

        <div className="image-cover hero-header pb-0 p-150" style={{backgroundColor:'#ecf3f1', backgroundRepeat:'no-repeat'}}>
            <div className="bnnr-slack-elior-thumb d-none d-xl-block z-1"><Image src='/img/author-1.png' width={0} height={0} sizes='100vw' style={{width:'550px', height:'auto'}} className="img-fluid" alt=""/></div>

            <div className="position-absolute top-0 end-0 z-0">
                <Image src='/img/shape-3-soft-light-gray.svg' alt="SVG" width={0} height={0} sizes='100vw' style={{width:'450px', height:'auto'}}/>
            </div>

            <div className="position-absolute top-0 start-0 me-10 z-0">
                <Image src='/img/shape-1-soft-light-gray.svg' alt="SVG" width={0} height={0} sizes='100vw' style={{width:'350px', height:'auto'}}/>
            </div>

            <div className="container position-relative z-2">
                <div className="row">
                    <div className="col-xl-7 col-lg-8 col-md-12">
                        <div className="simple-search-wrap mb-5">
                            <div className="hero-search-2">
                                <h2 className="text-xl text-main">Find</h2>
                                <h1 className="mb-4">Great service opportunity<br/>You Deserve</h1>
                                <div className="full-search-2 mt-5">
                                   <FormFour/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="estrio-plocks-wraps">
                            <div className="estrio-plocks-single">
                                <div className="estrio-single-icon">
                                    <Image src='/img/trustpilot.png' width={20} height={20} className="img-fluid" alt=""/>	
                                </div>
                                <div className="estrio-single-caption">
                                    <div className="estrio-caption-title"><p>Trustpilot<span>4.9</span></p></div>
                                    <div className="estrio-caption-stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="estrio-plocks-single">
                                <div className="estrio-single-icon">
                                    <Image src='/img/google-plus.png' width={20} height={20} className="img-fluid" alt=""/>	
                                </div>
                                <div className="estrio-single-caption">
                                    <div className="estrio-caption-title"><p>Google Plus<span>4.8</span></p></div>
                                    <div className="estrio-caption-stars">
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                        <i className="fa-solid fa-star"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-4 col-md-12">
                        <div className="bnnr-slack-thumb d-block d-xl-none mt-sm-5">
                            <img src='/img/author-11.png' className="img-fluid" alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </div>   

        <PartnerTwo/>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Hire Talents & Experts</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <CandidateOne border={true}/>
            </div>		
        </section>

        <section className="gray-simple">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Explore Job in NewYork</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <ExploreJob/>
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
                <FeatureJobTwo/>
            </div>
        </section>

        <HireBox/>

        <section>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Trending News By NRI Suvidha</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <BlogOne/>
            </div>		
        </section>

        <FooterTop/>

        <FooterLightTwo/>

        <ScrollToTop/>
    </>
  )
}
