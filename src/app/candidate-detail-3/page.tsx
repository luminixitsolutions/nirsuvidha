import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

import { blogData, candidateData, companyReview, serviceData } from '../data/data'

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
}

interface Candidate{
    id: number;
    image: string;
    name: string;
    position: string;
    review: string;
    rate: string[];
    amount: string;
    exp: string;
    loction: string;
}

interface Review{
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

export default function CandidateDetailThree() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-second py-0">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="ht-200"></div>
                </div>
            </div>
        </section>

        <section className="bg-light pt-5">
            <div className="container">
                <div className="row g-4">
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="card rounded-4">
                            <div className="card-body py-5">
                                <div className="user-thumb text-center mb-4">
                                    <div className="square--100 mx-auto circle mb-3"><Image src='/img/avatar.jpg' width={100} height={100} className="img-fluid circle" alt="Avatar"/></div>
                                    <div className="caps text-center">
                                        <h5 className="mb-0">Karun M. David</h5>
                                        <p className="text-muted m-0">UI/UX Designer</p>
                                    </div>
                                </div>
                                
                                <div className="d-block short-caps text-center mb-4">
                                    <p>I'm a UI/UX Designer passionate about creating intuitive and engaging digital experiences. I blend design thinking with user research to craft clean, responsive interfaces that solve real problems and delight users.</p>
                                </div>
                                
                                <div className="d-block skills-block text-center mb-5">
                                    <h5>Skills</h5>
                                    <div className="cndts-all-skills-list justify-content-center">
                                        <span className="rounded-pill">Figma Expert</span>
                                        <span className="rounded-pill">Canva</span>
                                        <span className="rounded-pill">Bootstrap</span>
                                        <span className="rounded-pill">Front-end Design</span>
                                        <span className="rounded-pill">UI/UX Design</span>
                                        <span className="rounded-pill">Brand Design</span>
                                        <span className="rounded-pill">WordPress</span>
                                    </div>
                                </div>
                                
                                <div className="d-block contact-block text-center">
                                    <div className="d-flex align-items-center justify-content-center flex-column gap-3">
                                        <button type="button" className="btn btn-md btn-outline-dark fw-medium rounded-pill w-100">Download profile<i className="bi bi-download ms-2"></i></button>
                                        <button type="button" className="btn btn-md btn-light-main fw-medium rounded-pill w-100" data-bs-toggle="modal" data-bs-target="#usermessage">Send Message<i className="bi bi-send ms-2"></i></button>
                                    </div>
                                </div>
                            
                            </div>
                            <div className="card-footer px-4 py-3 pt-4 bg-white position-relative">
                                <div className="position-absolute top-0 start-50 translate-middle"><span className="px-3 py-2 bg-white">Share profile</span></div>
                                <div className="profile-share-links my-2">
                                    <ul className="p-0 d-flex align-items-center justify-content-center flex-wrap gap-3">
                                        <li><Link href="#" className="square--30 circle btn-light-second"><i className="bi bi-facebook"></i></Link></li>
                                        <li><Link href="#" className="square--30 circle btn-light-second"><i className="bi bi-twitter"></i></Link></li>
                                        <li><Link href="#" className="square--30 circle btn-light-second"><i className="bi bi-behance"></i></Link></li>
                                        <li><Link href="#" className="square--30 circle btn-light-second"><i className="bi bi-whatsapp"></i></Link></li>
                                        <li><Link href="#" className="square--30 circle btn-light-second"><i className="bi bi-linkedin"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="cdtsr-groups-block">
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>About Candidate</h5></div>
                                <div className="single-cdtsr-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>All Information</h5></div>
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
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Resumes</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="resumes-groups-blox">
                                        
                                        <div className="single-resumes-blocks">
                                            <div className="single-resumes-left">
                                                <div className="single-resumes-icons"><i className="fa-solid fa-file-word"></i></div>
                                                <div className="single-resumes-captions"><h5>Daniel-Resume.doc-2022<span>1 Year ago</span></h5></div>
                                            </div>
                                            <div className="single-resumes-right">
                                                <button type="button" className="btn btn-md btn-light-green">Download<i className="fa-solid fa-circle-down ms-1"></i></button>
                                            </div>
                                        </div>
                                        
                                        <div className="single-resumes-blocks">
                                            <div className="single-resumes-left">
                                                <div className="single-resumes-icons"><i className="fa-solid fa-file-word"></i></div>
                                                <div className="single-resumes-captions"><h5>Daniel-Resume.doc-2023<span>10 Days ago</span></h5></div>
                                            </div>
                                            <div className="single-resumes-right">
                                                <button type="button" className="btn btn-md btn-light-green">Download<i className="fa-solid fa-circle-down ms-1"></i></button>
                                            </div>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>All Experience</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="experinc-usr-groups">
                                        {serviceData.slice(0,3).map((item:ServiceListing,index:number)=>( 
                                            <div className="single-experinc-block" key={index}>
                                                <div className="single-experinc-lft">
                                                    <div className="experinc-thumbs"><figure><Image src={item.image} width={60} height={60} className="img-fluid" alt=""/></figure></div>
                                                </div>
                                                <div className="single-experinc-rght">
                                                    <div className="experinc-emp-title"><h5>{item.name}</h5><span className="label text-success bg-success bg-opacity-05">{item.jobtype}</span></div>
                                                    <div className="experinc-post-title">
                                                        <h6>{item.title}</h6>
                                                        <div className="experinc-infos-list"><span className="exp-start">5 Years 1 Month</span><span className="work-exp-date">May 2010 - Jun 2015</span></div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Educations</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="educations-usr-groups">
                                    
                                        <div className="single-educations-block">
                                            <div className="single-educations-lft">
                                                <div className="educations-thumbs"><figure><Image src='/img/l-4.png' width={60} height={60} className="img-fluid" alt=""/></figure></div>
                                            </div>
                                            <div className="single-educations-rght">
                                                <div className="educations-emp-title"><h5>Swami Vivekanand University</h5></div>
                                                <div className="educations-post-title">
                                                    <h6>Bachlor Degree in Computer Science</h6>
                                                </div>
                                                <div className="educations-infos-list"><span className="exp-start">Jun 2008</span><span className="work-exp-date">Meeruth, UP</span></div>
                                            </div>
                                        </div>
                                        
                                        <div className="single-educations-block">
                                            <div className="single-educations-lft">
                                                <div className="educations-thumbs"><figure><Image src='/img/l-5.png' width={60} height={60} className="img-fluid" alt=""/></figure></div>
                                            </div>
                                            <div className="single-educations-rght">
                                                <div className="educations-emp-title"><h5>Shatrapati Shiva Ji Maharaja University</h5></div>
                                                <div className="educations-post-title">
                                                    <h6>Master Degree in Computer Science</h6>
                                                </div>
                                                <div className="educations-infos-list"><span className="exp-start">Jun 2013</span><span className="work-exp-date">Faizabad, UP</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Candidate Skills</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="cndts-all-skills-list">
                                        <span>Java</span>
                                        <span>Python</span>
                                        <span>Bootstrap</span>
                                        <span>HTML5</span>
                                        <span>UI/UX</span>
                                        <span>Laravel</span>
                                        <span>WordPress</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Portfolio</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="row gx-3 gy-3">
                                        {blogData.slice(0,3).map((item:BlogData,index:number)=>( 
                                            <div className="col-xl-4 col-lg-4 col-md-6 col-6" key={index}>
                                                <div className="cndts-prt-block">
                                                    <div className="cndts-prt-thumb">
                                                        <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/>
                                                    </div>
                                                    <div className="cndts-prt-link"><Link href="#"><i className="fa-solid fa-arrow-up-right-from-square"></i></Link></div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Language</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="row gy-4">
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                                            <div className="cndts-lgs-blocks">
                                                <div className="cndts-lgs-ico"><h6>JP</h6></div>
                                                <div className="cndts-lgs-captions">
                                                    <h5>Japanies</h5>
                                                    <p>Basic</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                                            <div className="cndts-lgs-blocks">
                                                <div className="cndts-lgs-ico"><h6>EN</h6></div>
                                                <div className="cndts-lgs-captions">
                                                    <h5>English</h5>
                                                    <p>Advance</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="col-xl-4 col-lg-4 col-md-6 col-6">
                                            <div className="cndts-lgs-blocks">
                                                <div className="cndts-lgs-ico"><h6>FR</h6></div>
                                                <div className="cndts-lgs-captions">
                                                    <h5>French</h5>
                                                    <p>Medium</p>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Related Candidate</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="row justify-content-start gx-3 gy-4">
                                        {candidateData.slice(0,4).map((item:Candidate,index:number)=>( 
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
                                                <div className="jbs-list-box border">
                                                    <div className="jbs-list-head m-0">
                                                        <div className="jbs-list-head-thunner center">
                                                            <div className="jbs-list-usrs-thumb jbs-verified"><Link href={`/candidate-detail/${item.id}`}><figure><Image src={item.image} width={80} height={80} className="img-fluid circle" alt=""/></figure></Link></div>
                                                            <div className="jbs-list-job-caption">
                                                                <div className="jbs-job-title-wrap"><h4><Link href={`/candidate-detail/${item.id}`} className="jbs-job-title">{item.name}</Link></h4></div>
                                                                <div className="jbs-job-mrch-lists">
                                                                    <div className="single-mrch-lists">
                                                                        <span>{item.position}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.loction}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbs-list-head-middle">
                                                            <div className="elsocrio-jbs sm"><div className="ilop-tr"><i className="fa-solid fa-coins"></i></div><h5 className="jbs-list-pack">{item.exp}</h5></div>
                                                        </div>
                                                        <div className="jbs-list-head-last">
                                                            <Link href="#" className="btn btn-md btn-main px-3">View Detail</Link>
                                                        </div>
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
        </section>

        <FooterTopTwo/>

        <FooterLightTwo/>

        <ScrollToTop/>
    </>
  )
}
