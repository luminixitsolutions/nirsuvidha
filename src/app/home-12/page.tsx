import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgBlack from '../components/navbar/nav-bg-black'
import PartnerTwo from '../components/partner/partner-two'
import FeatureJob from '../components/job/feature-job'
import CategoryTwo from '../components/category/category-two'
import CtaOne from '../components/cta/cta-one'
import PricingTwo from '../components/pricing/pricing-two'
import ClientTwo from '../components/client/client-two'
import SubscribeOne from '../components/subscribe/subscribe-one'
import FooterLight from '../components/footer/footer-light'
import ScrollToTop from '../components/scroll-to-top'

import { aboutData } from '../data/data'

interface About{
    title: string;
    desc: string;
}

export default function HomeTwelve() {
  return (
    <>
        <NavBgBlack/>

        <div className="image-cover hero-header">
            <div className="container">
                <div className="row justify-content-between align-items-center">
                    <div className="col-xl-7 col-lg-7 col-md-12 col-sm-12 pe-xl-5 pe-lg-4 mb-lg-0 mb-4">
                        <h6 className="text-main bg-light-main py-2 pe-3 ps-2 rounded-5 fw-medium d-inline-flex align-items-center mb-3"><span className="bg-main label rounded-pill me-2">New</span>Expert-led support</h6>
                        <h1 className="mb-4">Financial Super-App for Global Indians</h1>
                        <p className="fs-5">From taxes and investments to remittances and compliance — manage everything in one place, built exclusively for NRIs and OCIs.</p>
                        <div className="simple-search-wrap mb-5">
                            <div className="hero-search-2">
                                <div className="full-search-2 mt-5">
                                    <div className="hero-search-content border rounded-3">
                                        
                                        <div className="row classic-search-box m-0 gx-2">
                                                
                                            <div className="col-xl-10 col-lg-9 col-md-9 col-sm-12">
                                                <div className="form-group">
                                                    <div className="input-with-icon">
                                                        <input type="text" className="form-control" placeholder="Skills, Designations, Keyword"/>
                                                        <i className="bi bi-search text-main fs-5"></i>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-xl-2 col-lg-3 col-md-3 col-sm-12 ps-lg-0">
                                                <div className="fliox-search-wiop">
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
                    
                    <div className="col-xl-5 col-lg-5 col-md-12 col-sm-12">
                        <div className="row g-3 position-relative">
                            <div className="col-md-6 col-12">
                                <div className="job-instructor-layout border">
                                    <div className="left-tags-capt">
                                        <span className="featured-text">Featured</span>
                                        <span className="urgent">Urgent</span>
                                    </div>
                                    <div className="brows-job-type"><span className="enternship">Enternship</span></div>
                                    <div className="job-instructor-thumb">
                                        <Link href="/service-detail"><Image src='/img/l-1.png' className="img-fluid" width={65} height={65} alt=""/></Link>
                                    </div>
                                    <div className="job-instructor-content h-auto">
                                        <h4 className="instructor-title"><Link href="/service-detail">Jr. PHP Developer</Link></h4>
                                        <div className="instructor-skills">
                                            <span><i className="fa-solid fa-location-dot me-1"></i>Canada, USA</span>
                                        </div>
                                    </div>
                                    <div className="job-instructor-footer">
                                        <div className="instructor-students">
                                            <h5 className="instructor-scount">$5K - $8K</h5>
                                        </div>
                                        <div className="instructor-corses">
                                            <span className="c-counting">6 Open</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-12">
                                <div className="job-instructor-layout border">
                                    <div className="left-tags-capt">
                                        <span className="urgent">Urgent</span>
                                    </div>
                                    <div className="brows-job-type"><span className="freelanc">Freelancer</span></div>
                                    <div className="job-instructor-thumb">
                                        <Link href="/service-detail"><Image src='/img/l-5.png' className="img-fluid" width={65} height={65} alt=""/></Link>
                                    </div>
                                    <div className="job-instructor-content h-auto">
                                        <h4 className="instructor-title"><Link href="/service-detail">Sr. UI/UX Designer</Link></h4>
                                        <div className="instructor-skills">
                                            <span><i className="fa-solid fa-location-dot me-1"></i>Liverpool, UK</span>
                                        </div>
                                    </div>
                                    <div className="job-instructor-footer">
                                        <div className="instructor-students">
                                            <h5 className="instructor-scount">$4K - $5.5K</h5>
                                        </div>
                                        <div className="instructor-corses">
                                            <span className="c-counting">5 Open</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="col-12">
                                <div className="jbs-list-box border">
                                    <div className="jbs-list-head m-0">
                                        <div className="d-flex align-items-center">
                                            <div className="cnd-thumbr position-relative"><Link href="/candidate-detail"><figure className="m-0"><Image src='/img/team-7.jpg' className="img-fluid circle" width={60} height={60} alt=""/></figure></Link></div>
                                            <div className="jbs-list-job-caption">
                                                <div className="jbs-job-title-wrap"><h4><Link href="/candidate-detail" className="jbs-job-title">Kr. Dhananjay Preet</Link></h4></div>
                                                <div className="jbs-job-mrch-lists mt-1">
                                                    <div className="single-mrch-lists">
                                                        <span>Sr. Web Designer</span>.<span><i className="fa-solid fa-location-dot me-1"></i>London</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="jbs-list-box border p-3">
                                    <div className="jbs-list-head m-0">
                                        <div className="d-flex align-items-center">
                                            <div className="cnd-thumbr position-relative"><Link href="/candidate-detail"><figure className="m-0"><Image src='/img/team-8.jpg' className="img-fluid circle" width={60} height={60} alt=""/></figure></Link></div>
                                            <div className="jbs-list-job-caption">
                                                <div className="jbs-job-title-wrap"><h4><Link href="/candidate-detail" className="jbs-job-title">Donald J. Merrick</Link></h4></div>
                                                <div className="jbs-job-mrch-lists mt-1">
                                                    <div className="single-mrch-lists">
                                                        <span>Laravel Developer</span>.<span><i className="fa-solid fa-location-dot me-1"></i>California, USA</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                            <h2>Explore our Prices</h2>
                            <p>Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations.</p>
                        </div>
                    </div>
                </div>
                <PricingTwo/>
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

        <SubscribeOne/>

        <FooterLight/>

        <ScrollToTop/>
    </>
  )
}
