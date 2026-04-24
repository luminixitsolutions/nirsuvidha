import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

import { companyReview, requirements, responsibilities } from '../data/data'

interface Review{
    icon: string;
    title: string;
    desc: string;
}

export default function SingleLayoutOne() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="ht-110"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12"></div>
                </div>
            </div>
            <div className="ht-110"></div>
        </section>

        <section className="gray-simple over-lg-top pt-0 pb-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-11 col-lg-12 col-md-12">
                        
                        <div className="jbs-dts-block styl-01">
                            <div className="jbs-dts-header">
                                <div className="jbs-dts-header-thumbs">
                                    <div className="jbs-dts-hgiu mb-2">
                                        <figure><Image src='/img/l-12.png' width={120} height={120} className="img-fluid rounded" alt=""/></figure>
                                    </div>
                                    <div className="jbs-dts-iop">
                                        <span>04 More Openings</span>
                                    </div>
                                </div>
                                <div className="jbs-dts-header-caption">
                                    <div className="jbs-dts-topper-block mb-4">
                                        <div className="jbs-urt"><span className="label text-success bg-success bg-opacity-05">Full Time</span></div>
                                        <div className="jbs-title-iop"><h2 className="m-0">Sr. Front-end Designer</h2></div>
                                        <div className="jbs-locat-oiu text-sm-muted"><span><i className="fa-solid fa-location-dot me-1"></i>California, USA</span></div>
                                    </div>
                                    <div className="jbs-dts-mid-block mb-4">
                                        <div className="jbs-mid-groups">
                                            <div className="jbs-single-iou">
                                                <span className="jhu-subtitle">Role</span>
                                                <h4 className="jhu-title">Developer</h4>
                                            </div>
                                            <div className="jbs-single-iou">
                                                <span className="jhu-subtitle">Experience</span>
                                                <h4 className="jhu-title">07 Years</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="jbs-dts-foot-block">
                                        <span className="jhu-subtitle">Supperpower Skills</span>
                                        <div className="sprpower-skills">
                                            <span><i className="fa-regular fa-star"></i>HTML5</span>
                                            <span><i className="fa-regular fa-star"></i>CSS3</span>
                                            <span><i className="fa-regular fa-star"></i>WordPress</span>
                                            <span><i className="fa-regular fa-star"></i>JavaScript</span>
                                            <span><i className="fa-regular fa-star"></i>Bootstrap</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="jbs-dts-body bg-white rounded full-width px-lg-4 px-3 py-4">
                                <div className="jbs-dts-body-content">
                                    <ul className="nav nav-pills small-jbs-tab d-inline-flex gap-2 mb-3" id="pills-tab" role="tablist">
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link active" id="job-description-tab" data-bs-toggle="pill" data-bs-target="#job-description" type="button" role="tab" aria-controls="job-description" aria-selected="true">Service description</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="job-requirements-tab" data-bs-toggle="pill" data-bs-target="#job-requirements" type="button" role="tab" aria-controls="job-requirements" aria-selected="false">Requirements</button>
                                        </li>
                                        <li className="nav-item" role="presentation">
                                            <button className="nav-link" id="company-review-tab" data-bs-toggle="pill" data-bs-target="#company-review" type="button" role="tab" aria-controls="company-review" aria-selected="false">Company Review</button>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="pills-tabContent">
                                        <div className="tab-pane fade show active" id="job-description" role="tabpanel" aria-labelledby="job-description-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-xl-9 col-lg-10 col-md-12">
                                                    <div className="jbs-content">
                                                        <p>Shreethemes Web provides equal employment opportunities to all qualified individuals without regard to race, color, religion, sex, gender identity, sexual orientation, pregnancy, age, national origin, physical or mental disability, military or veteran status, genetic information, or any other protected classification. Equal employment opportunity includes, but is not limited to, Engagement, training, promotion, demotion, transfer, leaves of absence, and termination. Thynk Web takes allegations of discrimination, harassment, and retaliation seriously, and will promptly investigate when such behavior is reported.</p>
                                                        <p>Our company is seeking to hire a skilled Web Developer to help with the development of our current projects. Your duties will primarily revolve around building software by writing code, as well as modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces. You will also be involved in directing system testing and validation procedures, and also working with customers or departments on technical issues including software system design and maintenance.</p>
                                                        <p className="m-0">We are looking for a Senior Web Developer to build and maintain functional web pages and applications. Senior Web Developer will be leading junior developers, refining website specifications, and resolving technical issues. He/She should have extensive experience building web pages from scratch and in-depth knowledge of at least one of the following programming languages: Javascript, Ruby, or PHP. He/She will ensure our web pages are up and running and cover both internal and customer needs.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="tab-pane fade" id="job-requirements" role="tabpanel" aria-labelledby="job-requirements-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-xl-12 col-lg-12 col-md-12">
                                                    <div className="jbs-content mb-4">
                                                        <h6>Requirements:</h6>
                                                        <ul className="simple-list">
                                                            {requirements.map((item:string,index:number)=>( 
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    
                                                    <div className="jbs-content mb-4">
                                                        <h6>Responsibilities:</h6>
                                                        <ul className="simple-list">
                                                            {responsibilities.map((item:string,index:number)=>( 
                                                                <li key={index}>{item}</li>
                                                            ))}
                                                        </ul>
                                                    </div>
                                                    
                                                    <div className="jbs-content">
                                                        <h6>Qualifications and Skills</h6>
                                                        <ul className="colored-list">
                                                            <li>Bachelor's degree</li>
                                                            <li>BCA/MCA</li>
                                                            <li>BSC IT/Msc IT</li>
                                                            <li>Or any other equivalent degree</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>	
                                        </div>
                                        
                                        <div className="tab-pane fade" id="company-review" role="tabpanel" aria-labelledby="company-review-tab" tabIndex={0}>
                                            <div className="row">
                                                <div className="col-xl-9 col-lg-12 col-md-12">
                                                    
                                                    <div className="single-cdtsr-block pt-4 pb-2">
                                                        <div className="single-cdtsr-body">
                                                            <div className="row align-items-center justify-content-between gy-4">
                                                                {companyReview.map((item:Review,index:number)=>( 
                                                                    <div className="col-xl-6 col-lg-6 col-md-6" key={index}>
                                                                        <div className="cdtx-infr-box">
                                                                            <div className="cdtx-infr-icon"><i className={item.icon}></i></div>
                                                                            <div className="cdtx-infr-captions">
                                                                                <h5>{item.title}</h5>
                                                                                <p>{item.desc}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="my-4 position-relative">
                                        <button type="button" className="btn btn-md btn-main fw-medium me-3" data-bs-toggle="modal" data-bs-target="#applyService">Get Started</button>
                                        <button type="button" className="btn btn-md btn-gray fw-medium"><i className="fa-solid fa-heart me-2"></i>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <FooterTopTwo/>

        <FooterLightTwo/>

        <ScrollToTop/>

        <div className="modal fade" id="applyService" tabIndex={-1} role="dialog" aria-labelledby="applyServiceHeading" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered apply-service-pop-form" role="document">
                <div className="modal-content" id="applyServiceContent">
                    <span className="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i className="fas fa-close"></i></span>
                    <div className="modal-body">
                        <div className="detail-side-heads mb-4 mt-4">
                            <h3>Ready To Apply?</h3>
                            <p>Complete the eligibities checklist now and get started with your online application</p>
                        </div>
                        <div className="detail-side-middle">
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder=""/>
                                <label>Name:</label>
                            </div>
                            <div className="form-floating mb-3">
                                <input type="text" className="form-control" placeholder=""/>
                                <label>Email:</label>
                            </div>
                            <div className="form-group">
                                <div className="upload-btn-wrapper full-width">
                                    <button className="btn full-width">Upload documents</button>
                                    <input type="file" name="myfile"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="elsoci"><label>Are you authorised to work in India?</label></div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="workindia" id="wyes" value="option1"/>
                                    <label className="form-check-label" htmlFor="wyes">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="workindia" id="wno" value="option1"/>
                                    <label className="form-check-label" htmlFor="wno">No</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="elsoci"><label>Do you have master degree?</label></div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="degree" id="dyed" value="option1"/>
                                    <label className="form-check-label" htmlFor="dyed">Yes</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="degree" id="dno" value="option1"/>
                                    <label className="form-check-label" htmlFor="dno">No</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="svc-alert-main" value="option1"/>
                                    <label className="form-check-label" htmlFor="svc-alert-main">Create service alert</label>
                                </div>
                            </div>
                            <div className="form-group">
                                <button type="button" className="btn btn-main full-width fw-medium font-sm">Submit Application</button>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <p>New to NRI Suvidha?<Link href="/signup" className="text-main font--bold ms-1">Get Started</Link></p>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
