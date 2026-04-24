import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { companyReview, serviceData, requirements, responsibilities } from '../data/data'
import { serviceEngagementLabel } from '@/lib/service-display'

import NavBgBlack from '../components/navbar/nav-bg-black'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

interface ReviewData{
    icon: string;
    title: string;
    desc: string;
}

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

export default function SingleLayoutThree() {
  return (
    <>
        <NavBgBlack/>

        <section className="bg-cover bg-main" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="jbs-head-bodys-top">
                            <div className="jbs-roots-y1">
                                <div className="jbs-roots-y1-first"><div className="jbs-roots-thumb"><figure><Image src='/img/l-4.png' width={80} height={80} className="img-fluid" alt=""/></figure></div></div>
                                <div className="jbs-roots-y1-last ps-3">
                                    <div className="jbs-urt mb-2"><span className="label text-secondcolor bg-white">Full Time</span></div>
                                    <div className="jbs-title-iop"><h2 className="m-0 text-light">Sr. Front-end Designer</h2></div>
                                    <div className="jbs-locat-oiu text-sm-muted text-light d-flex align-items-center">
                                        <span><i className="fa-solid fa-location-dot opacity-75 me-1"></i>California, USA</span>
                                        <div className="jbs-kioyer-groups ms-3">
                                            <span className="fa-solid fa-star active"></span>
                                            <span className="fa-solid fa-star active"></span>
                                            <span className="fa-solid fa-star active"></span>
                                            <span className="fa-solid fa-star active"></span>
                                            <span className="fa-solid fa-star"></span>
                                            <span className="aal-reveis text-light opacity-75">4.6</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jbs-roots-y2">
                                <div className="jbs-roots-action-groups">
                                    <div className="jbs-roots-action-btns">
                                        <button type="button" className="btn btn-md btn-whites text-main fw-medium" data-bs-toggle="modal" data-bs-target="#applyService">Get Started</button>
                                        <button type="button" className="btn btn-md btn-dark ms-2 fw-medium">Save</button>
                                    </div>
                                    <div className="jbs-roots-action-info">
                                        <span className="text-light opacity-75 me-2">74 applicants</span>.<span className="text-sm fw-medium text-light opacity-75 ms-2">Posted 54 min ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="jbs-blocs style_03">
                            <div className="jbs-blox-head">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="job-description-tab" data-bs-toggle="tab" data-bs-target="#job-description-tab-pane" type="button" role="tab" aria-controls="job-description-tab-pane" aria-selected="true">Service description</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="job-requirements-tab" data-bs-toggle="tab" data-bs-target="#job-requirements-tab-pane" type="button" role="tab" aria-controls="job-requirements-tab-pane" aria-selected="false">Requirements</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="company-review-tab" data-bs-toggle="tab" data-bs-target="#company-review-tab-pane" type="button" role="tab" aria-controls="company-review-tab-pane" aria-selected="false">Company Review</button>
                                    </li>
                                </ul>
                                <div className="tab-content py-4 px-4" id="myTabContent">
                                    <div className="tab-pane fade show active" id="job-description-tab-pane" role="tabpanel" aria-labelledby="job-description-tab" tabIndex={0}>
                                        <div className="row">
                                            <div className="col-xl-12 col-lg-12 col-md-12">
                                                <div className="jbs-content">
                                                    <p>Shreethemes Web provides equal employment opportunities to all qualified individuals without regard to race, color, religion, sex, gender identity, sexual orientation, pregnancy, age, national origin, physical or mental disability, military or veteran status, genetic information, or any other protected classification. Equal employment opportunity includes, but is not limited to, Engagement, training, promotion, demotion, transfer, leaves of absence, and termination. Thynk Web takes allegations of discrimination, harassment, and retaliation seriously, and will promptly investigate when such behavior is reported.</p>
                                                    <p>Our company is seeking to hire a skilled Web Developer to help with the development of our current projects. Your duties will primarily revolve around building software by writing code, as well as modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces. You will also be involved in directing system testing and validation procedures, and also working with customers or departments on technical issues including software system design and maintenance.</p>
                                                    <p className="m-0">We are looking for a Senior Web Developer to build and maintain functional web pages and applications. Senior Web Developer will be leading junior developers, refining website specifications, and resolving technical issues. He/She should have extensive experience building web pages from scratch and in-depth knowledge of at least one of the following programming languages: Javascript, Ruby, or PHP. He/She will ensure our web pages are up and running and cover both internal and customer needs.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="tab-pane fade" id="job-requirements-tab-pane" role="tabpanel" aria-labelledby="job-requirements-tab" tabIndex={0}>
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
                                    
                                    <div className="tab-pane fade" id="company-review-tab-pane" role="tabpanel" aria-labelledby="company-review-tab" tabIndex={0}>
                                        <div className="row">
                                            <div className="col-xl-11 col-lg-12 col-md-12">
                                                <div className="single-cdtsr-block pt-4 pb-2">
                                                    <div className="single-cdtsr-body">
                                                        <div className="row align-items-center justify-content-between gy-4">
                                                            {companyReview.map((item:ReviewData,index:number)=>( 
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
                            </div>
                            <div className="jbs-blox-footer">
                                <div className="blox-first-footer">
                                    <div className="ftr-share-block">
                                        <ul>
                                            <li><strong>Share this service:</strong></li>
                                            <li><Link href="#"><i className="fa-brands fa-facebook"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-linkedin"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-google-plus"></i></Link></li>
                                            <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="blox-last-footer">
                                    <div className="jbs-roots-action-btns">
                                        <button type="button" className="btn btn-md btn-main" data-bs-toggle="modal" data-bs-target="#applyService">Get Started</button>
                                        <button type="button" className="btn btn-md btn-gray ms-2"><i className="fa-solid fa-heart me-2"></i>Save</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <div className="detail-side-block brd mb-4">
                            <div className="detail-side-head">
                                <div className="side-flex-thumb">
                                    <Image src='/img/l-4.png' width={48} height={48} className="img-fluid" alt=""/>
                                </div>
                                <div className="side-flex-caption">
                                    <div className="jbs-title-iop"><h4 className="m-0">Sr. Front-end Designer</h4></div>
                                    <div className="jbs-locat-oiu text-sm-muted">
                                        <span><i className="fa-solid fa-location-dot me-1"></i>California, USA</span>
                                    </div>
                                </div>
                            </div>
                            <div className="detail-side-middle">
                                <div className="form-group">
                                    <label>Name:</label>
                                    <input type="text" className="form-control" placeholder=""/>
                                </div>
                                <div className="form-group">
                                    <label>Email:</label>
                                    <input type="text" className="form-control" placeholder=""/>
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
                                        <input className="form-check-input" type="checkbox" id="svc-alert-side" value="option1"/>
                                        <label className="form-check-label" htmlFor="svc-alert-side">Create service alert</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-main full-width font-sm">Get Started</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="side-rtl-jbs-block brd">
                            <div className="side-rtl-jbs-head">
                                <h5 className="side-jbs-titles">Related Services</h5>
                            </div>
                            <div className="side-rtl-jbs-body">
                                <div className="side-rtl-jbs-groups">

                                    {serviceData.slice(0,5).map((item:ServiceListing,index:number)=>( 
                                        <div className="single-side-rtl-jbs" key={index}>
                                            <div className="single-fliox">
                                                <div className="single-rtl-jbs-thumb">
                                                    <Link href={`/service-detail/${item.id}`}><figure><Image src={item.image} width={70} height={70} className="img-fluid" alt=""/></figure></Link>
                                                </div>
                                                <div className="single-rtl-jbs-caption ms-2">
                                                    <div className="hjs-rtls-titles">
                                                        <div className="jbs-types mb-1">
                                                            <span className="label text-success bg-success bg-opacity-05">{serviceEngagementLabel(item.jobtype)}</span>
                                                        </div>
                                                        <h5 className="rtls-title py-2"><Link href={`/service-detail/${item.id}`}>{item.title}</Link></h5>
                                                        <div className="jbs-locat-oiu text-sm-muted">
                                                            <span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="single-rtl-jbs-hot">
                                                <div className="single-tag-rtls"><span className="label text-warning bg-warning bg-opacity-05"><i className="fa-brands fa-hotjar me-1"></i>New</span></div>
                                                <div className="single-tag-rtls"><span className="label text-success bg-success bg-opacity-05"><i className="fa-solid fa-star me-1"></i>Featured</span></div>
                                            </div>
                                        </div>
                                    ))}
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
                                    <input className="form-check-input" type="checkbox" id="svc-alert-modal" value="option1"/>
                                    <label className="form-check-label" htmlFor="svc-alert-modal">Create service alert</label>
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
