import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

import { postedJobList } from '../data/admin'

import AdminNavbarTwo from '../components/navbar/admin-navbar-two'
import AdminSidebarTwo from '../components/admin/admin-sidebar-two'
import ScrollToTop from '../components/scroll-to-top'
import Shorting from '../components/shorting';

interface JobList{
    image: string;
    name: string;
    title: string;
    applicants: number;
    posted: string;
    expired: string;
}

export default function EmployerJobs() {
  return (
    <>
        <AdminNavbarTwo/>  

        <div className="dashboard-wrap bg-light pt-0">
           <AdminSidebarTwo/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Manage jobs</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">Service Expert</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">My Jobs</Link></li>
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
														<h6 className="mb-0">Upgrade Package - 10 Days Left</h6>
													</div>
													<div className="duster-flex-end">
														<ul className="nav nav-pills nav-fill gap-2 p-1 small gray-simple rounded" id="pillNav2" role="tablist">
															<li className="nav-item" role="presentation">
																<button className="nav-link active rounded" id="alls" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">All: 138</button>
															</li>
															<li className="nav-item" role="presentation">
																<button className="nav-link rounded" id="actives" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Active: 122</button>
															</li>
															<li className="nav-item" role="presentation">
																<button className="nav-link rounded" id="expireds" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Axpired: 16</button>
															</li>
														</ul>
													</div>
												</div>
											</div>
										</div>
                                        
                                        <div className="row justify-content-start gx-3 gy-4">
                                            {postedJobList.map((item:JobList,index:number)=>( 
                                                <div className="col-xl-12 col-lg-12 col-md-12" key={index}>
                                                    <div className="jbs-list-box border">
                                                        <div className="jbs-list-head">
                                                            <div className="jbs-list-head-thunner">
                                                                <div className="jbs-list-emp-thumb jbs-verified"><Link href="/service-detail"><figure><Image src={item.image} width={50} height={50} className="img-fluid" alt=""/></figure></Link></div>
                                                                <div className="jbs-list-job-caption">
                                                                    <div className="jbs-job-employer-wrap"><span>{item.name}</span></div>
                                                                    <div className="jbs-job-title-wrap"><h4><Link href="/service-detail" className="jbs-job-title">{item.title}</Link></h4></div>
                                                                </div>
                                                            </div>
                                                            <div className="jbs-list-applied-users">
                                                                {item.applicants > 0 && 
                                                                    <span className="text-sm-muted text-light bg-main label">{item.applicants} Applicants</span>
                                                                }
                                                                {item.applicants === 0 && 
                                                                    <span className="text-sm-muted text-light bg-red label">Expired</span>
                                                                }
                                                            </div>
                                                            <div className="jbs-list-postedinfo">
                                                                <p className="m-0 text-sm-muted"><strong>Posted:</strong><span className="text-success">{item.posted}</span></p>
                                                                <p className="m-0 text-sm-muted"><strong>Expired:</strong><span className="text-danger">{item.expired}</span></p>
                                                            </div>
                                                            <div className="jbs-list-head-last">
                                                                <Link href="#" className="rounded btn btn-md btn-light-green px-3 me-1"><i className="fa-solid fa-pencil"></i></Link>
                                                                <Link href="#" className="rounded btn btn-md btn-light-red px-3"><i className="fa-solid fa-trash-can"></i></Link>
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
