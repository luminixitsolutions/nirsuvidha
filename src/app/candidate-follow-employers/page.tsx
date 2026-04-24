import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import AdminNavbar from '../components/navbar/admin-navbar'
import AdminSidebar from '../components/admin/admin-sidebar'
import ScrollToTop from '../components/scroll-to-top';
import Shorting from '../components/shorting';

import { jobApplyData } from '../data/admin';

interface JobApply{
    id: number;
    image: string;
    name: string;
    tag: string[];
    jobtype: string;
    title: string;
    value: string;
    status: string;
    location: string;
    date: string;
    applied: string;
}

export default function CandidateFollowEmployers() {
  return (
    <>
        <AdminNavbar/>

        <div className="dashboard-wrap pt-0 bg-light">
            <AdminSidebar/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Following experts</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Following experts</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <div className="_mp-inner-content elior">
                                        <div className="_mp-inner-first">
                                            <div className="search-inline">
                                                <input type="text" className="form-control" placeholder="Service title, Keywords etc."/>
                                                <button type="button" className="btn btn-main">Search</button>
                                            </div>
                                        </div>
                                        <div className="_mp_inner-last">
                                            <Shorting/>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row justify-content-start gx-3 gy-4">
                                        {jobApplyData.map((item:JobApply,index:number)=>( 
                                            <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
												<div className="emplors-list-box border">
													<div className="emplors-list-head">
														<div className="emplors-list-head-thunner">
															<div className="emplors-list-emp-thumb"><Link href="/employer-detail"><figure><Image src={item.image} width={70} height={70} className="img-fluid" alt=""/></figure></Link></div>
															<div className="emplors-list-job-caption">
																<div className="emplors-job-types-wrap mb-1"><span className="label text-light bg-success">{item.applied.slice(0,2)} active</span></div>
																<div className="emplors-job-title-wrap my-1"><h4><Link href="/employer-detail" className="emplors-job-title">{item.name}</Link></h4></div>
																<div className="emplors-job-mrch-lists">
																	<div className="single-mrch-lists">
																		<span>{item.title}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.<span>Est: 2003</span>
																	</div>
																</div>
															</div>
														</div>
														<div className="emplors-list-head-last">
															<Link href="/employer-detail" className="btn btn-md btn-light-main px-3">View Company</Link>
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
                
                <div className="row">
                    <div className="col-md-12">
                        <div className="py-3 text-center"><p className="mb-0">© {new Date().getFullYear()}  NRI Suvidha Design & Develop By <i className="fa-solid fa-heart text-red"></i> <Link href="https://shreethemes.in/" target='blank' className='text-dark'>Shreethemes</Link>.</p></div>
                    </div>
                </div>
    
            </div>				
            
        </div>   

        <ScrollToTop/>
    </>
  )
}
