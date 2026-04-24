import React from 'react'
import Link from 'next/link'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FormThree from '../components/form/form-three'
import CategoryOne from '../components/category/category-one'
import HireBox from '../components/cta/hire-box'
import FeatureJobThree from '../components/job/feature-job-three'
import CandidateOne from '../components/candidate/candidate-one'
import ProcessThree from '../components/process/process-three'
import CtaOne from '../components/cta/cta-one'
import ClientOne from '../components/client/client-one'
import FooterDarkTwo from '../components/footer/footer-dark-two'
import ScrollToTop from '../components/scroll-to-top'
import FilterModalOne from '../components/filter/filter-modal-one'

export default function HomeThree() {
  return (
    <>
        <NavBgWhite/>

        <div className="image-cover hero-header p-150" style={{backgroundColor:'#016551', backgroundImage:`url('/img/new-banner.jpg')`, backgroundRepeat:'no-repeat'}} data-overlay="5">
            <div className="container">
                <div className="inner-banner-text text-center">
                    <h1 className="text-capitalize">Find the great exciting &<br/>remote-friendly jobs</h1>
                    <p className="fs-5">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
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

        <HireBox/>

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
				<FeatureJobThree/>
			</div>
		</section>

        <section className="gray-simple">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-6 col-lg-7 col-md-10 text-center">
                        <div className="sec-heading center">
                            <h2>Hire Talents & Experts</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <CandidateOne border={false}/>
            </div>		
        </section>

		<ProcessThree/>

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

		<section className="bg-cover" style={{backgroundColor:'#ffffff', backgroundImage:`url('/img/form-bg-2.png')`, backgroundRepeat:'no-repeat'}}>
			<div className="container">
				<div className="row justify-content-center">
					<div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
						<div className="call-action-wrap">
							<div className="sec-heading center">
								<h2 className="lh-base mb-3">Find the right service<br/>on NRI Suvidha That is Superb For You</h2>
								<p className="fs-6">Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias</p>
							</div>
							<div className="call-action-buttons mt-3">
								<Link href="#" className="btn btn-lg btn-main fw-medium px-xl-5 px-lg-4 me-2">Upload documents</Link>
								<Link href="#" className="btn btn-lg btn-main fw-medium px-xl-5 px-lg-4">Join Our Team</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>

		<FooterDarkTwo/>

		<ScrollToTop/>

		<FilterModalOne/>
    </>
  )
}