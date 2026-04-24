import React from 'react'
import NavBgWhite from '../components/navbar/nav-bg-white'
import FormFive from '../components/form/form-five'
import PartnerTwo from '../components/partner/partner-two'
import CategoryOne from '../components/category/category-one'
import ProcessTwo from '../components/process/process-two'
import FeatureJob from '../components/job/feature-job'
import TopCompany from '../components/job/top-company'
import CandidateOne from '../components/candidate/candidate-one'
import AboutOne from '../components/about/about-one'
import ClientOne from '../components/client/client-one'
import FooterTop from '../components/footer/footer-top'
import FooterBlackTwo from '../components/footer/footer-black-two'
import ScrollToTop from '../components/scroll-to-top'

export default function HomeTen() {
  return (
    <>
        <div className='head-shadow'>
            <NavBgWhite/>
        </div>

        <div className="image-cover hero-header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 pe-xl-5 pe-lg-4">
                        <h6 className="text-main bg-light-main py-2 pe-3 ps-2 rounded-5 fw-medium d-inline-flex align-items-center mb-3"><span className="bg-main label rounded-pill me-2">New</span>Expert-led support</h6>
                        <h1 className="mb-4">Financial Super-App for Global Indians</h1>
                        <p className="fs-5">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                        <div className="position-relative mt-4">
                            <div className="bg-dot light w-100 h-2 position-relative"><span className="escolls square--30 circle d-inline-flex align-items-center justify-content-center bg-white fw-medium text-main position-absolute start-50 top-5">OR</span></div>
                        </div>
                        <div className="upload-boxs">
                            <div className="filedrop_box">
                                <header>
                                    <h4>Select File here</h4>
                                </header>
                                <p>Files Supported: PDF, TEXT, DOC , DOCX</p>
                                <input type="file" hidden accept=".doc,.docx,.pdf" id="fileID" style={{display:'none'}}/>
                                <button className="btn btn-md btn-main fw-medium rounded-1">Choose Your File</button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="exluo-bg bg-cover p-xl-5 p-3 rounded-5 position-relative mt-lg-0 mt-4" style={{backgroundImage:`url('/img/form-bg-2.png')`, backgroundRepeat:'no-repeat'}}>
                            <div className="hero-search-wrap shadow">
                                <div className="hero-search">
                                    <h1>Explore your next service</h1>
                                    <p>Browse specialists for tax, banking, property, and legal needs—start online in minutes.</p>
                                </div>
                                <FormFive/>
                            </div>
                            
                            <div className="position-absolute start-0 top-0"><div className="square--50 bg-white shadow circle text-info fs-4 animate-bounce"><i className="fa-brands fa-algolia"></i></div></div>
                            <div className="position-absolute start-0 bottom-0 pb-4 ps-4"><div className="square--50 shadow circle bg-white text-danger fs-4 animate-leftright"><i className="fa-solid fa-fire"></i></div></div>
                            <div className="position-absolute end-0 top-0 pt-5 pe-4"><div className="square--50 shadow circle bg-white text-warning fs-4 animate-leftright"><i className="fa-solid fa-business-time"></i></div></div>
                            <div className="position-absolute end-0 bottom-0"><div className="square--50 shadow circle bg-white text-main fs-4 animate-bounce"><i className="fa-solid fa-layer-group"></i></div></div>
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
                            <h2>Explore Best Categories</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <CategoryOne light={false}/>
            </div>	
        </section>

        <ProcessTwo/>

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
                            <h2>Explore Top Companies</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <TopCompany border={false}/>
            </div>		
        </section>

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

        <div className="position-relative">
            <AboutOne/>
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

        <FooterTop/>

        <FooterBlackTwo/>

        <ScrollToTop/>
    </>
  )
}
