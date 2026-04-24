import React from 'react'
import Link from 'next/link';

import { serviceData } from '../data/data'

import NavBgBlack from '../components/navbar/nav-bg-black'
import FormThree from '../components/form/form-three'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'
import Shorting from '../components/shorting';
import Image from 'next/image';
import FilterModalOne from '../components/filter/filter-modal-one';

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

export default function FullJobListOne() {
  return (
    <>
        <NavBgBlack/> 

        <div className="page-title bg-main" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="full-search-2">
                            <FormThree/>
                        </div>
                    </div>
                </div>
            </div>
        </div>  

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row justify-content-center mb-5">
                            <div className="col-lg-12 col-md-12">
                                <div className="item-shorting-box">
                                    <div className="item-shorting clearfix">
                                        <div className="left-column"><h4 className="m-sm-0 mb-2">Showing 1 - 10 of 20 Results</h4></div>
                                    </div>
                                    <Shorting/>
                                </div>
                            </div>
                        </div>
                        
                        <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
                            {serviceData.map((item:ServiceListing,index:number)=>( 
                                <div className="col-xl-6 col-lg-12 col-md-12" key={index}>
									<div className="jbs-list-box border">
										<div className="jbs-list-head">
											<div className="jbs-list-head-thunner">
												<div className="jbs-list-emp-thumb jbs-verified"><Link href={`/service-detail/${item.id}`}><figure><Image src={item.image} width={50} height={50} className="img-fluid" alt=""/></figure></Link></div>
												<div className="jbs-list-job-caption">
													<div className="jbs-job-employer-wrap"><span>{item.name}</span></div>
													<div className="jbs-job-title-wrap"><h4><Link href={`/service-detail/${item.id}`} className="jbs-job-title">{item.title}</Link></h4></div>
												</div>
											</div>
											<div className="jbs-list-head-last">
												<Link href="#" className="btn btn-md btn-main px-4">Get Started</Link>
											</div>
										</div>
										<div className="jbs-list-caption">
											<div className="jbs-info-ico-style">
												<div className="jbs-single-y1 style-1"><span><i className="fa-solid fa-location-dot"></i></span>{item.location}</div>
												<div className="jbs-single-y1 style-2"><span><i className="fa-solid fa-clock"></i></span>{item.jobtype}</div>
												<div className="jbs-single-y1 style-3"><span><i className="fa-solid fa-coins"></i></span>5 Years exp.</div>
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
        
        <FilterModalOne/>
    </>
  )
}
