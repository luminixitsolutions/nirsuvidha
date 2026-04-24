import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import SubscribeTwo from '../components/subscribe/subscribe-two'
import FooterBlackTwo from '../components/footer/footer-black-two'
import ScrollToTop from '../components/scroll-to-top'

import { serviceData, requirements, responsibilities } from '../data/data'
import { serviceEngagementLabel } from '@/lib/service-display'

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

export default function SingleLayoutSix() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second position-relative py-4">
            <div className="position-absolute top-0 end-0 z-0">
                <img src='/img/shape-3-soft-light.svg' alt="SVG" width="100"/>
            </div>
            <div className="position-absolute top-0 start-0 me-10 z-0">
                <img src='/img/shape-1-soft-light.svg' alt="SVG" width="150"/>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-xl-6 col-lg-9 col-md-12">
                        <div className="bread-wraps breadcrumbs light">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="/">Home</Link></li>
                                    <li className="breadcrumb-item"><Link href="/grid-style-1">Career</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Sr. Front-end Designer</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section className="gray-simple position-relative">
            <div className="position-absolute top-0 start-0 main-bg-dark ht-200 end-0"></div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-12">
                        <div className="jbs-blocs style_03 border-0 b-0 mb-md-4 mb-sm-4">
                            <div className="jbs-blocs-body">
                                <div className="jbs-content px-4 py-4 border-bottom">
                                    <div className="jbs-head-bodys-top">
                                        <div className="jbs-roots-y1 flex-column justify-content-start align-items-start">
                                            <div className="jbs-roots-y1-last">
                                                <div className="jbs-urt mb-2"><span className="label text-light main-2-bg">Full Time</span></div>
                                                <div className="jbs-title-iop mb-1"><h2 className="m-0 fs-2">Sr. Front-end Designer</h2></div>
                                                <div className="jbs-locat-oiu text-sm-muted text-light d-flex align-items-center">
                                                    <span className="text-muted"><i className="fa-solid fa-location-dot me-1"></i>California, USA</span>
                                                    <div className="jbs-kioyer-groups ms-3">
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star"></span>
                                                        <span className="aal-reveis">4.6</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="jbs-roots-y6 py-3">
                                                <p className="m-0">We are looking for a experienced Senior Front-End Developer with an advanced level of english to design UI/UX interface for web and mobile apps.</p>
                                            </div>
                                            <div className="jbs-roots-y6 py-1 d-flex align-items-start flex-wrap">
                                                <div className="exloip-wraps me-4 my-2">
                                                    <div className="drixko-box d-flex align-items-center">
                                                        <div className="drixko-box-ico me-2">
                                                            <span className="square--30 rounded-2 bg-light-main text-main"><i className="fa-solid fa-briefcase"></i></span>
                                                        </div>
                                                        <div className="drixko-box-caps"><span className="text-medium fw-medium">Software</span></div>
                                                    </div>
                                                </div>
                                                <div className="exloip-wraps me-4 my-2">
                                                    <div className="drixko-box d-flex align-items-center">
                                                        <div className="drixko-box-ico me-2">
                                                            <span className="square--30 rounded-2 bg-light-main text-main"><i className="fa-brands fa-wordpress"></i></span>
                                                        </div>
                                                        <div className="drixko-box-caps"><span className="text-medium fw-medium">3Yrs Exp.</span></div>
                                                    </div>
                                                </div>
                                                <div className="exloip-wraps my-2 mb-0">
                                                    <div className="drixko-box d-flex align-items-center">
                                                        <div className="drixko-box-ico me-2">
                                                            <span className="square--30 rounded-2 bg-light-main text-main"><i className="fa-solid fa-sack-dollar"></i></span>
                                                        </div>
                                                        <div className="drixko-box-caps"><span className="text-medium fw-medium">$5000 - $10,000 PA</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="jbs-content px-4 py-4 border-bottom">
                                    <h5>Service description</h5>
                                    <p>Shreethemes Web provides equal employment opportunities to all qualified individuals without regard to race, color, religion, sex, gender identity, sexual orientation, pregnancy, age, national origin, physical or mental disability, military or veteran status, genetic information, or any other protected classification. Equal employment opportunity includes, but is not limited to, Engagement, training, promotion, demotion, transfer, leaves of absence, and termination. Thynk Web takes allegations of discrimination, harassment, and retaliation seriously, and will promptly investigate when such behavior is reported.</p>
                                    <p>Our company is seeking to hire a skilled Web Developer to help with the development of our current projects. Your duties will primarily revolve around building software by writing code, as well as modifying software to fix errors, adapt it to new hardware, improve its performance, or upgrade interfaces. You will also be involved in directing system testing and validation procedures, and also working with customers or departments on technical issues including software system design and maintenance.</p>
                                    <p className="m-0">We are looking for a Senior Web Developer to build and maintain functional web pages and applications. Senior Web Developer will be leading junior developers, refining website specifications, and resolving technical issues. He/She should have extensive experience building web pages from scratch and in-depth knowledge of at least one of the following programming languages: Javascript, Ruby, or PHP. He/She will ensure our web pages are up and running and cover both internal and customer needs.</p>
                                </div>
                                <div className="jbs-content-body px-4 py-4">
                                    <h5 className="mb-3">Requirements</h5>
                                    <div className="jbs-content mb-3">
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
                                    
                                    <div className="jbs-content mb-4">
                                        <h6>Qualifications and Educations</h6>
                                        <ul className="colored-list">
                                            <li>Bachelor's degree</li>
                                            <li>BCA/MCA</li>
                                            <li>BSC IT/Msc IT</li>
                                            <li>Or any other equivalent degree</li>
                                        </ul>
                                    </div>
                                    
                                    <div className="jbs-content">
                                        <h6>Required Skills</h6>
                                        <ul className="p-0 m-0 d-flex align-items-center flex-wrap">
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">HTML5</span></li>
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">CSS3</span></li>
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">WordPress</span></li>
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">Photoshop</span></li>
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">Shopify</span></li>
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">Figma</span></li>
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">Coral Draw</span></li>
                                            <li className="me-1 mb-1"><span className="label bg-light-success text-success fw-medium">Github</span></li>
                                        </ul>
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
                                        <p className="m-0"><span className="text-muted me-1">235 Applications</span>|<span className="text-muted ms-1">10:07:2024</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-4 col-md-12">
                        <div className="detail-side-block bg-white mb-4">
                            <div className="detail-side-head">
                                <div className="side-flex-thumb">
                                    <Image src='/img/l-12.png' width={48} height={48} className="img-fluid" alt=""/>
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
                                        <input className="form-check-input" type="checkbox" id="svc-alert-main" value="option1"/>
                                        <label className="form-check-label" htmlFor="svc-alert-main">Create service alert</label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <button type="button" className="btn btn-main full-width font-sm">Get Started</button>
                                </div>
                            </div>
                        </div>

                        <div className="side-jbs-info-blox bg-white mb-4">
                            <div className="side-jbs-info-header">
                                <div className="side-jbs-info-thumbs">
                                    <figure><Image src='/img/l-12.png' width={70} height={70} className="img-fluid" alt=""/></figure>
                                </div>
                                <div className="side-jbs-info-captionyo ps-3">
                                    <div className="sld-info-title">
                                        <h5 className="rtls-title mb-1">Google Inc.</h5>
                                        <div className="jbs-locat-oiu text-sm-muted">
                                            <span className="me-1"><i className="fa-solid fa-location-dot me-1"></i>California, USA</span>.<span className="ms-1">Software & Consultancy</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="side-jbs-info-middle">
                                <div className="side-full-info-groups">
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Company Founder:</span>
                                        <h6 className="sld-title">Mr. Daniel Mark</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Industry:</span>
                                        <h6 className="sld-title">Technology</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Founded:</span>
                                        <h6 className="sld-title">1997</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Head Office:</span>
                                        <h6 className="sld-title">London, UK</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Revenue</span>
                                        <h6 className="sld-title">$70B+</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Company Size:</span>
                                        <h6 className="sld-title">20,000+ Emp.</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Min Exp.</span>
                                        <h6 className="sld-title">02 Years</h6>
                                    </div>
                                    <div className="single-side-info">
                                        <span className="text-sm-muted sld-subtitle">Openings</span>
                                        <h6 className="sld-title">06 Openings</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="side-rtl-jbs-block bg-white ">
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

        <SubscribeTwo/>

        <FooterBlackTwo/>

        <ScrollToTop/>
    </>
  )
}
