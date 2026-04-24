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

export default function CandidateSaveJobs() {
  return (
    <>
        <AdminNavbar/>

        <div className="dashboard-wrap pt-0 bg-light">
            <AdminSidebar/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Saved services</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Saved services</Link></li>
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
                                            <div className="col-xl-12 col-lg-12 col-md-12" key={index}>
                                                <div className="jbs-list-box border">
                                                    <div className="jbs-list-head">
                                                        <div className="jbs-list-head-thunner">
                                                            <div className="jbs-list-emp-thumb jbs-verified"><Link href="/service-detail"><figure><Image width={50} height={50} src={item.image} className="img-fluid" alt=""/></figure></Link></div>
                                                            <div className="jbs-list-job-caption">
                                                                <div className="jbs-job-types-wrap">
                                                                    {item.jobtype === 'Enternship' && <span className="label text-danger bg-danger bg-opacity-05">Enternship</span>}
                                                                    {item.jobtype === 'Freelancer' && <span className="label text-info bg-info bg-opacity-05">Freelancer</span>}
                                                                    {item.jobtype === 'Part Time' && <span className="label text-warning bg-warning bg-opacity-05">Part Time</span>}
                                                                    {item.jobtype === 'Full Time' && <span className="label text-success bg-success bg-opacity-05">Full Time</span>}
                                                                </div>
                                                                <div className="jbs-job-title-wrap"><h4><Link href="/service-detail" className="jbs-job-title">{item.title}</Link></h4></div>
                                                                <div className="jbs-job-mrch-lists">
                                                                    <div className="single-mrch-lists">
                                                                        <span>{item.name}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.<span>{item.date}</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbs-list-head-middle">
                                                            <div className="elsocrio-jbs"><span className="text-sm-muted">{item.applied}</span></div>
                                                        </div>
                                                        <div className="jbs-list-head-middle">
                                                            {item.status === 'Approved' && 
                                                                <div className="elsocrio-jbs"><span className="text-sm-muted text-light bg-success py-2 px-3 rounded">Active</span></div>
                                                            }
                                                            {item.status === 'Pending' && 
                                                                <div className="elsocrio-jbs"><span className="text-sm-muted text-light bg-danger py-2 px-3 rounded">Expired</span></div>
                                                            }
                                                        </div>
                                                        <div className="jbs-list-head-last">
                                                            <Link href="#" className="btn btn-md btn-light-red px-3 me-2"><i className="fa-solid fa-xmark"></i></Link>
                                                            <Link href="/service-detail" className="btn btn-md btn-light-main px-3">View Detail</Link>
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
