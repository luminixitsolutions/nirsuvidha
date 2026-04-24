import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import AdminNavbarTwo from '../components/navbar/admin-navbar-two'
import AdminSidebarTwo from '../components/admin/admin-sidebar-two'
import ScrollToTop from '../components/scroll-to-top'
import Shorting from '../components/shorting';

import { candidateData } from '../data/data';

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

export default function EmployerApplicantJobs() {
  return (
    <>
        <AdminNavbarTwo/>  

        <div className="dashboard-wrap bg-light pt-0">
           <AdminSidebarTwo/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Manage Applicants</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">Service Expert</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">All Applicants</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
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
												<div className="item-shorting-box-right">
													<Shorting/>
												</div>
											</div>
										</div>
									</div>
                                    <div className="card-body">
                                        <div className="row mb-3">
											<div className="col-xl-12 col-lg-12 col-md-12">
												<div className="duster-flex-row align-items-center d-flex justify-content-between">
													<div className="duster-flex-first">
														<h6 className="mb-0">Sr. Magento Developer</h6>
													</div>
													<div className="duster-flex-end">
														<ul className="nav nav-pills nav-fill gap-2 p-1 small gray-simple rounded" id="pillNav2" role="tablist">
															<li className="nav-item" role="presentation">
																<button className="nav-link active rounded" id="alls" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">All: 194</button>
															</li>
															<li className="nav-item" role="presentation">
																<button className="nav-link rounded" id="actives" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Approved: 66</button>
															</li>
															<li className="nav-item" role="presentation">
																<button className="nav-link rounded" id="expireds" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">rejected: 128</button>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
                                        
                                        <div className="row justify-content-start gx-3 gy-4">
                                            {candidateData.map((item:Candidate,index:number)=>( 
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
                                                    <div className="jbs-list-box border">
                                                        <div className="jbs-list-head m-0">
                                                            <div className="jbs-list-head-thunner center">
                                                                <div className="jbs-list-usrs-thumb jbs-verified"><Link href="/candidate-detail"><figure><Image src={item.image} width={80} height={80} className="img-fluid circle" alt=""/></figure></Link></div>
                                                                <div className="jbs-list-job-caption">
                                                                    <div className="jbs-job-title-wrap"><h4><Link href="/candidate-detail" className="jbs-job-title">{item.name}</Link></h4></div>
                                                                    <div className="jbs-job-mrch-lists">
                                                                        <div className="single-mrch-lists">
                                                                            <span>{item.position}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.loction}</span><span>Applied: 10 March 2022</span>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jbs-list-head-last">
                                                                <Link href="#" className="rounded btn-md btn-main px-3 me-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Approve client"><i className="fa-solid fa-check-double"></i></Link>
                                                                <Link href="#" className="rounded btn-md btn-dark px-3 me-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Reload"><i className="fa-solid fa-arrow-rotate-right"></i></Link>
                                                                <Link href="#" className="rounded btn-md btn-dark px-3 me-2" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Download profile"><i className="fa-solid fa-download"></i></Link>
                                                                <Link href="#" className="rounded btn-md btn-red px-3" data-bs-toggle="tooltip" data-bs-placement="top" data-bs-title="Remove"><i className="fa-solid fa-trash-can"></i></Link>
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
