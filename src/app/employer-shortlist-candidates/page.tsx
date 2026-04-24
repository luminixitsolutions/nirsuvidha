import React from 'react'
import Link from 'next/link';

import AdminNavbarTwo from '../components/navbar/admin-navbar-two'
import AdminSidebarTwo from '../components/admin/admin-sidebar-two'
import ScrollToTop from '../components/scroll-to-top'
import Shorting from '../components/shorting';

import { candidateData } from '../data/data';

import Image from 'next/image';

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

export default function EmployerShortListCandidates() {
  return (
    <>
        <AdminNavbarTwo/>  

        <div className="dashboard-wrap bg-light pt-0">
           <AdminSidebarTwo/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Shortlisted Candidates</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">Service Expert</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Shortlisted Candidates</Link></li>
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
                                        <div className="row justify-content-start gx-3 gy-4">
                                            {candidateData.map((item:Candidate,index:number)=>( 
                                                <div className="col-xl-12 col-lg-12 col-md-12 col-12" key={index}>
                                                    <div className="jbs-list-box border">
                                                        <div className="jbs-list-head m-0">
                                                            <div className="jbs-list-head-thunner">
                                                                <div className="jbs-list-usrs-thumb jbs-verified"><Link href="/candidate-detail"><figure><Image src={item.image} width={80} height={80} className="img-fluid circle" alt=""/></figure></Link></div>
                                                                <div className="jbs-list-job-caption">
                                                                    <div className="jbs-job-title-wrap"><h4><Link href="/candidate-detail" className="jbs-job-title">{item.name}</Link></h4></div>
                                                                    <div className="jbs-job-mrch-lists">
                                                                        <div className="single-mrch-lists">
                                                                            <span>{item.position}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.loction}</span>
                                                                        </div>
                                                                    </div>
                                                                    <div className="jbs-grid-job-edrs-group mt-1">
                                                                        <span>HTML</span>
                                                                        <span>CSS3</span>
                                                                        <span>Bootstrap</span>
                                                                        <span>Redux</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="jbs-list-head-middle">
                                                                <div className="elsocrio-jbs sm"><div className="ilop-tr"><i className="fa-solid fa-coins"></i></div><h5 className="jbs-list-pack">{item.exp}</h5></div>
                                                            </div>
                                                            <div className="jbs-list-head-last">
                                                                <Link href="#" className="rounded btn-md btn-dark px-3"><i className="fa-solid fa-eye"></i></Link>
                                                                <Link href="#" className="rounded btn-md btn-green px-3 mx-1"><i className="fa-solid fa-envelope-circle-check"></i></Link>
                                                                <Link href="#" className="rounded btn-md btn-red px-3"><i className="fa-solid fa-trash-can"></i></Link>
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
