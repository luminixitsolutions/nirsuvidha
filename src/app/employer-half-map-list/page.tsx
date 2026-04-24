import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { serviceData } from '../data/data';

import NavBgBlackTwo from '../components/navbar/nav-bg-black-two';
import JobFilterThree from '../components/filter/job-filter-three'
import HomeMap from '../components/home-map';
import Shorting from '../components/shorting';
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

 
export default function EmployerHalfMapList() {
  return (
    <>
        <NavBgBlackTwo/>

        <div className="map-banner-wrap half-map" style={{top:'0'}}>
            <div className="map-left-box">
                <div className="map-home flt-wrap">
                    <HomeMap/>
                </div>
            </div>
            
            <div className="map-content-wrap">
                <div className="map-content-bxo">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12">
                            <JobFilterThree/>
                            <div className="_mp-inner-content elior">
                                <div className="item-shorting clearfix">
                                    <div className="left-column"><h4 className="m-sm-0 mb-2">Showing 1 - 10 of 20 Results</h4></div>
                                </div>
                                <Shorting/>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                
                <div className="map-content-list">
                    <div className="row justify-content-center gx-xl-3 gx-3 gy-4">
                        {serviceData.map((item:ServiceListing,index:number)=>( 
                            <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
								<div className="emplors-list-box border">
									<div className="emplors-list-head">
										<div className="emplors-list-head-thunner">
											<div className="emplors-list-emp-thumb"><Link href={`/employer-detail/${item.id}`}><figure><Image src={item.image} width={70} height={70} className="img-fluid" alt=""/></figure></Link></div>
											<div className="emplors-list-job-caption">
												<div className="emplors-job-types-wrap mb-2"><span className="label text-light bg-success">{item.open.slice(0,2)} Openings</span></div>
												<div className="emplors-job-title-wrap mb-1"><h4><Link href={`/employer-detail/${item.id}`} className="emplors-job-title">{item.name}</Link></h4></div>
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
        <div className="clearfix"></div>  

        <FilterModalOne/>
    </>
  )
}
