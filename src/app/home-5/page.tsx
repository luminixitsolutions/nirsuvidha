import React from 'react'
import NavTop from '../components/navbar/nav-top'
import NavBgWhite from '../components/navbar/nav-bg-white'
import FormThree from '../components/form/form-three'
import CategoryOne from '../components/category/category-one'
import ProcessTwo from '../components/process/process-two'
import FeatureJob from '../components/job/feature-job'
import TopCompany from '../components/job/top-company'
import CandidateOne from '../components/candidate/candidate-one'
import AboutOne from '../components/about/about-one'
import ClientOne from '../components/client/client-one'
import FooterTop from '../components/footer/footer-top'
import FooterBlack from '../components/footer/footer-black'
import ScrollToTop from '../components/scroll-to-top'
import FilterModalOne from '../components/filter/filter-modal-one'

export default function HomeFive() {
  return (
    <>
        <NavTop/>
        <NavBgWhite/>

        <div className="image-cover hero-header p-150" style={{backgroundImage:`url('/img/slider-5.jpg')`, backgroundRepeat:'no-repeat'}} data-overlay="6">
            <div className="container">
                <div className="inner-banner-text text-center">
                    <h1>Discover great service offers<br/>With NRI Suvidha</h1>
                    <p className="fs-6">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                </div>
                <div className="full-search-2 mt-5">
                    <FormThree/>
                </div>
            </div>
        </div>

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

        <FooterBlack/>

        <ScrollToTop/>

        <FilterModalOne/>
    </>
  )
}
