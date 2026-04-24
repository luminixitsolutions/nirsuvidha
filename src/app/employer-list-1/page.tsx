import React from 'react'
import Link from 'next/link';

import { serviceData } from '../data/data'

import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'
import JobFilterTwo from '../components/filter/job-filter-two';
import NavBgWhite from '../components/navbar/nav-bg-white';
import Shorting from '../components/shorting';

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

export default function EmployerListOne() {
  return (
    <>
        <NavBgWhite/> 

        <div className="page-title bg-second" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title">Employer List Style 01</h2>
                        <div className="breadcrumbs light">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link href="#">Home</Link></li>
                                    <li className="breadcrumb-item"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">Employer List 01</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-xxl-3 col-xl-4 col-lg-4 col-md-12 col-sm-12">
                        <JobFilterTwo/>
                    </div>
                    
                    <div className="col-xxl-9 col-xl-8 col-lg-8 col-md-12 col-sm-12">
                        <div className="row justify-content-center mb-4">
                            <div className="col-lg-12 col-md-12">
                                <div className="item-shorting-box">
                                    <div className="item-shorting clearfix">
                                        <div className="left-column"><h4 className="m-sm-0 mb-2">Showing 1 - 10 of 20 Results</h4></div>
                                    </div>
                                    <Shorting/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row justify-content-start gx-3 gy-4">
                            {serviceData.map((item:ServiceListing,index:number)=>( 
                                <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
									<div className="emplors-list-box border">
										<div className="emplors-list-head mb-0">
											<div className="emplors-list-head-thunner">
												<div className="emplors-list-emp-thumb"><Link href={`/employer-detail/${item.id}`}><figure><img src={item.image} className="img-fluid" alt=""/></figure></Link></div>
												<div className="emplors-list-job-caption">
													<div className="emplors-job-types-wrap mb-1"><span className="label text-light bg-success">{item.open.slice(0,2)} Openings</span></div>
													<div className="emplors-job-title-wrap my-1"><h4><Link href={`/employer-detail/${item.id}`} className="emplors-job-title">{item.name}</Link></h4></div>
													<div className="emplors-job-mrch-lists">
														<div className="single-mrch-lists">
															<span>{item.name2}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.<span>Est: 1992</span>
														</div>
													</div>
												</div>
											</div>
											<div className="emplors-list-head-last">
												<Link href={`/employer-detail/${item.id}`} className="btn btn-md btn-light-main px-3">View Company</Link>
											</div>
										</div>
									</div>
								</div>
                            ))}
                            
                        </div>
                        
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12">
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination">
                                        <li className="page-item">
                                            <Link className="page-link" href="#" aria-label="Previous">
                                                <span aria-hidden="true">&laquo;</span>
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
                                                <span aria-hidden="true">&raquo;</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </nav>
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
