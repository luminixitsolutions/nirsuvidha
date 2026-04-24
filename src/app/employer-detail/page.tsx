import React from 'react'
import Link from 'next/link'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

import { awardList, comapnyServices, companyDetail, reviewData } from '../data/admin'
import { blogData, serviceData } from '../data/data'
import Image from 'next/image'

interface Award{
    image: string;
    name: string;
    time: string;
}

interface Detail{
    icon: string;
    title: string;
    desc: string;
}

interface Review{
    title: string;
    position: string;
    location: string;
    date: string;
    desc: {
        que: string;
        ans: string;
    }[];
    rating: string[];
    review: string;
}

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
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

export default function EmployerDetail() {
  return (
    <>  
        <div className="head-shadow">
            <NavBgWhite/>
        </div>

        <section className="gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-xl-12 col-lg-12 col-md-12">
                        <div className="emplr-head-block">
                            
                            <div className="emplr-head-left">
                                <div className="emplr-head-thumb">
                                    <figure><Image src='/img/l-1.png' width={120} height={120} className="img-fluid rounded" alt=""/></figure>
                                </div>
                                <div className="emplr-head-caption">
                                    <div className="emplr-head-caption-top">
                                        <div className="emplr-yior-1"><span className="label text-sm-muted text-success bg-light-success">10 Openings</span></div>
                                        <div className="emplr-yior-2"><h4 className="emplr-title">Tripadvisor Inc.</h4></div>
                                        <div className="emplr-yior-3">
                                            <span><i className="fa-solid fa-building-shield me-1"></i>Software</span>
                                            <span><i className="fa-solid fa-location-dot me-1"></i>Canada, USA</span>
                                            <span className="text-light opacity-75"><i className="fa-solid fa-star me-1"></i>4.2 (412 Reviews)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="emplr-head-right">
                                <button type="button" className="btn btn-main">Follow Now</button>
                                <button type="button" className="btn btn-outline-main ms-2" data-bs-toggle="modal" data-bs-target="#review"><i className="fa-solid fa-star me-2"></i>Write Review</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>   

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xl-8 col-lg-8 col-md-12">
                        <div className="cdtsr-groups-block">
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>About Company</h5></div>
                                <div className="single-cdtsr-body">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Our Award</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="row gx-3 gy-4">
                                        {awardList.map((item:Award,index:number)=>( 
                                            <div className="col-xl-3 col-lg-3 col-md-3" key={index}>
                                                <div className="escort-award-wrap">
                                                    <div className="escort-award-thumb">
                                                        <figure><Image src={item.image} width={120} height={120} className="img-fluid" alt=""/></figure>
                                                    </div>
                                                    <div className="escort-award-caption">
                                                        <h6>{item.name}</h6>
                                                        <label>{item.time}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>Company Services</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="cndts-all-skills-list">
                                        {comapnyServices.map((item:string,index:number)=>( 
                                            <span key={index}>{item}</span>
                                        ))}
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
                                <div className="single-cdtsr-header"><h5>10 Openings</h5></div>
                                <div className="single-cdtsr-body">
                                    <div className="row justify-content-start gx-3 gy-4">
                                        {serviceData.slice(0,6).map((item:ServiceListing,index:number)=>( 
                                            <div className="col-xl-12 col-lg-12 col-md-12" key={index}>
                                                <div className="jbs-list-box border">
                                                    <div className="jbs-list-head">
                                                        <div className="jbs-list-head-thunner">
                                                            <div className="jbs-list-emp-thumb jbs-verified"><Link href={`/service-detail/${item.id}`}><figure><Image src={item.image} width={50} height={50} className="img-fluid" alt=""/></figure></Link></div>
                                                            <div className="jbs-list-job-caption">
                                                                <div className="jbs-job-types-wrap">
                                                                    {item.jobtype === 'Enternship' && <span className="label text-danger bg-danger bg-opacity-05">Enternship</span>}
                                                                    {item.jobtype === 'Freelancer' && <span className="label text-info bg-info bg-opacity-05">Freelancer</span>}
                                                                    {item.jobtype === 'Part Time' && <span className="label text-warning bg-warning bg-opacity-05">Part Time</span>}
                                                                    {item.jobtype === 'Full Time' && <span className="label text-success bg-success bg-opacity-05">Full Time</span>}
                                                                </div>
                                                                <div className="jbs-job-title-wrap"><h4><Link href={`/service-detail/${item.id}`} className="jbs-job-title">{item.title}</Link></h4></div>
                                                                <div className="jbs-job-mrch-lists">
                                                                    <div className="single-mrch-lists">
                                                                        <span>{item.name}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.name}</span>.<span>07 Apr 2023</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbs-list-head-middle">
                                                            <div className="elsocrio-jbs"><div className="ilop-tr"><i className="fa-solid fa-sack-dollar"></i></div><h5 className="jbs-list-pack">{item.value}<span className="patype">\PA</span></h5></div>
                                                        </div>
                                                        <div className="jbs-list-head-last">
                                                            <Link href={`/service-detail/${item.id}`} className="btn btn-md btn-gray px-3 me-2">View Detail</Link>
                                                            <Link href="#" className="btn btn-md btn-main px-3">Get Started</Link>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-cdtsr-block">
                                <div className="single-cdtsr-header"><h5>412 Reviews</h5></div>
                                <div className="single-cdtsr-body">
                                    {reviewData.map((item:Review,index:number)=>( 
                                        <div className="singleReviews border-bottom py-4" key={index}>
                                            <div className="singlerev d-flex align-items-start justify-content-start gap-3">
                                                <div className="singlratebox bg-light rounded-3">
                                                    <div className="px-3 py-4 text-center">
                                                        <h3 className="text-main m-0">{item.review}</h3>
                                                        <div className="d-flex align-items-center justify-content-center gap-1 text-xs">
                                                            {item.rating.map((el:string,index:number)=>( 
                                                                <i className={el} key={index}></i>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="reviewsCaption">
                                                    <div className="reviewsHeader mb-3">
                                                        <h5>{item.title}</h5>
                                                        <div className="d-flex align-items-center justify-content-start flex-wrap gap-2">
                                                            <div className="text-muted text-md"><Link href="#" className="text-main">{item.position}</Link>(Current Employee).</div>
                                                            <div className="text-muted text-md"><Link href="#" className="text-main">{item.location}</Link>.</div>
                                                            <div className="text-muted text-md">{item.date}</div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="reviewsDescription">
                                                        {item.desc.map((desc, index)=>( 
                                                            <p key={index}>
                                                                <span className="d-block">{desc.que}</span>
                                                                <span>{desc.ans}</span>
                                                            </p>
                                                        ))}
                                                    </div>
                                                    
                                                    <div className="d-block mt-4">
                                                        <div className="text-muted text-md mb-1">Was this review helpful?</div>
                                                        <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                                                            <div className="d-first">
                                                                <div className="btn-group" role="group" aria-label="Basic outlined example">
                                                                    <button type="button" className="btn btn-md btn-outline-main">Yes</button>
                                                                    <button type="button" className="btn btn-md btn-outline-main">No</button>
                                                                </div>
                                                            </div>
                                                            <div className="d-last d-flex align-items-center justify-content-end gap-3">
                                                                <Link href="#" className="text-dark fw-medium"><i className="fa-regular fa-flag me-2"></i>Report</Link>
                                                                <Link href="#" className="text-dark fw-medium"><i className="fa-solid fa-up-right-from-square me-2"></i>Share</Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                
                                <div className="pagfooter mx-auto mb-3">
                                    <nav aria-label="Page navigation example" className="justify-content-center align-items-center">
                                        <ul className="pagination">
                                            <li className="page-item">
                                                <Link className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">«</span>
                                                </Link>
                                            </li>
                                            <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                            <li className="page-item active"><Link className="page-link" href="#">3</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                            <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                            <li className="page-item">
                                                <Link className="page-link" href="#" aria-label="Next">
                                                    <span aria-hidden="true">»</span>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-4 col-lg-4 col-md-12">
                        <div className="eflorio-wrap-block mb-4">
                            <div className="eflorio-wrap-group">
                                <div className="eflorio-wrap-body">
                                    <div className="eflorio-list-groups">
                                        {companyDetail.map((item:Detail,index:number)=>( 
                                            <div className="single-eflorio-list" key={index}>
                                                <div className="eflorio-list-icons"><i className={item.icon}></i></div>
                                                <div className="eflorio-list-captions">
                                                    <label>{item.title}</label>
                                                    <h6>{item.desc}</h6>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="eflorio-wrap-footer">
                                    <div className="eflorio-footer-body">
                                        <button type="button" className="btn btn-main fw-medium full-width">View Website</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="sidefr-usr-block">
                            <div className="cndts-share-block">
                                <div className="cndts-share-title">
                                    <h5>Share Profile</h5>
                                </div>
                                <div className="cndts-share-list">
                                    <ul>
                                        <li><Link href="#"><i className="fa-brands fa-facebook-f"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-twitter"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-google-plus-g"></i></Link></li>
                                        <li><Link href="#"><i className="fa-brands fa-instagram"></i></Link></li>
                                    </ul>
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

        <div className="modal fade" id="review" tabIndex={-1} role="dialog" aria-labelledby="reviewmodal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered filter-popup" role="document">
                <div className="modal-content" id="reviewmodal">
                    <span className="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i className="fas fa-close"></i></span>
                    <div className="modal-header">
                        <h4 className="modal-header-sub-title">Share Your Feedback for Tripadvisor Inc.</h4>
                    </div>
                    <div className="modal-body p-0">
                        <div className="filter-content">
                            <div className="full-tabs-group">
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>Do you approve of Fox Corporation's CEO?</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="d-flex flex-wrap">
                                            <div className="btn-group full-width">
                                                <button type="button" className="btn btn-md btn-outline-main">Yes</button>
                                                <button type="button" className="btn btn-md btn-outline-main">No</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>Overall, I am completely satisfied with my job.</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="btn-group full-width">
                                            <button type="button" className="btn btn-md btn-outline-main">1</button>
                                            <button type="button" className="btn btn-md btn-outline-main">2</button>
                                            <button type="button" className="btn btn-md btn-outline-main">3</button>
                                            <button type="button" className="btn btn-md btn-outline-main">4</button>
                                            <button type="button" className="btn btn-md btn-outline-main">5</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>My work has a clear sense of purpose.</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="btn-group full-width">
                                            <button type="button" className="btn btn-md btn-outline-main">1</button>
                                            <button type="button" className="btn btn-md btn-outline-main">2</button>
                                            <button type="button" className="btn btn-md btn-outline-main">3</button>
                                            <button type="button" className="btn btn-md btn-outline-main">4</button>
                                            <button type="button" className="btn btn-md btn-outline-main">5</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>I feel happy at work most of the time.</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="btn-group full-width">
                                            <button type="button" className="btn btn-md btn-outline-main">1</button>
                                            <button type="button" className="btn btn-md btn-outline-main">2</button>
                                            <button type="button" className="btn btn-md btn-outline-main">3</button>
                                            <button type="button" className="btn btn-md btn-outline-main">4</button>
                                            <button type="button" className="btn btn-md btn-outline-main">5</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>I am paid fairly for my work.</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="btn-group full-width">
                                            <button type="button" className="btn btn-md btn-outline-main">1</button>
                                            <button type="button" className="btn btn-md btn-outline-main">2</button>
                                            <button type="button" className="btn btn-md btn-outline-main">3</button>
                                            <button type="button" className="btn btn-md btn-outline-main">4</button>
                                            <button type="button" className="btn btn-md btn-outline-main">5</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>I can trust people in my company.</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="btn-group full-width">
                                            <button type="button" className="btn btn-md btn-outline-main">1</button>
                                            <button type="button" className="btn btn-md btn-outline-main">2</button>
                                            <button type="button" className="btn btn-md btn-outline-main">3</button>
                                            <button type="button" className="btn btn-md btn-outline-main">4</button>
                                            <button type="button" className="btn btn-md btn-outline-main">5</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>My manager helps me succeed.</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="btn-group full-width">
                                            <button type="button" className="btn btn-md btn-outline-main">1</button>
                                            <button type="button" className="btn btn-md btn-outline-main">2</button>
                                            <button type="button" className="btn btn-md btn-outline-main">3</button>
                                            <button type="button" className="btn btn-md btn-outline-main">4</button>
                                            <button type="button" className="btn btn-md btn-outline-main">5</button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header"><h5>Write your feedback</h5></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="d-flex flex-wrap">
                                            <textarea className="form-control ht-150" placeholder='Explain your review'/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="filt-buttons-updates">
                            <button type="button" className="btn btn-dark">Close Review</button>
                            <button type="button" className="btn btn-main">Submit Review</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
