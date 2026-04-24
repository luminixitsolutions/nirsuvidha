'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import CountUp from 'react-countup'

import AdminNavbar from '../components/navbar/admin-navbar'
import AdminSidebar from '../components/admin/admin-sidebar'
import ChartBox from '../components/admin/chart'
import Notification from '../components/admin/notification'
import ScrollToTop from '../components/scroll-to-top'

import { serviceData } from '../data/data'
import { adminCount } from '../data/admin'

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

interface Counter{
    icon: string;
    iconBg: string;
    value: number;
    title: string;
}

export default function CandidateDashboard() {
    
  return (
    <>
        <AdminNavbar/> 

        <div className="dashboard-wrap bg-light pt-0">
            <AdminSidebar/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-5">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Client dashboard</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Candidate Statistics</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    <div className="row align-items-center gx-4 gy-4 mb-4">
                        {adminCount.map((item:Counter,index:number)=>( 
                            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-6" key={index}>
                                <div className="dash-wrap-bloud">
                                    <div className="dash-wrap-bloud-icon">
                                        <div className={`bloud-icon bg-opacity-05 ${item.iconBg}`}>
                                            <i className={item.icon}></i>	
                                        </div>
                                    </div>
                                    <div className="dash-wrap-bloud-caption">
                                        <div className="dash-wrap-bloud-content">
                                            <h5 className="ctr"><CountUp end={item.value}/></h5>
                                            <p>{item.title}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="row gx-4 gy-4 mb-4">
                        <div className="col-xl-8 col-lg-12 col-md-12 col-sm-12">
                            <div className="card d-none d-lg-block">
                                <div className="card-header">
                                    <h4 className="mb-0">Extra Area Chart</h4>
                                </div>
                                <div className="card-body">
                                    <div className="chart full-width" id="line-chart" style={{height:'400px'}}>
                                        <ChartBox/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-xl-4 col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4>Notifications</h4>
                                </div>
                                <Notification/>
                            </div>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                            <div className="card">
                                <div className="card-header">
                                    <h4 className="mb-0">Shortlisted Jobs</h4>
                                </div>
                                <div className="card-body px-4 py-4">
                                    <div className="row justify-content-start gx-3 gy-4">
                                        {serviceData.slice(0,8).map((item:ServiceListing,index:number)=>( 
                                            <div className="col-xl-12 col-lg-12 col-md-12" key={index}>
                                                <div className="jbs-list-box border">
                                                    <div className="jbs-list-head">
                                                        <div className="jbs-list-head-thunner">
                                                            <div className="jbs-list-emp-thumb jbs-verified"><Link href="/service-detail"><figure><Image src={item.image} width={50} height={50} className="img-fluid" alt=""/></figure></Link></div>
                                                            <div className="jbs-list-job-caption">
                                                                <div className="jbs-job-types-wrap"><span className="label text-success bg-success bg-opacity-05">{item.jobtype}</span></div>
                                                                <div className="jbs-job-title-wrap"><h4><Link href="/service-detail" className="jbs-job-title">{item.title}</Link></h4></div>
                                                                <div className="jbs-job-mrch-lists">
                                                                    <div className="single-mrch-lists">
                                                                        <span>{item.name}</span>.<span><i className="fa-solid fa-location-dot me-1"></i>{item.location}</span>.<span>07 Apr 2023</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="jbs-list-head-middle">
                                                            <div className="elsocrio-jbs"><div className="ilop-tr"><i className="fa-solid fa-sack-dollar"></i></div><h5 className="jbs-list-pack">{item.value}<span className="patype">\PA</span></h5></div>
                                                        </div>
                                                        <div className="jbs-list-head-last">
                                                            <Link href="/service-detail" className="btn btn-md btn-outline-secondary px-3 me-2">View Detail</Link>
                                                            <Link href="#" className="btn btn-md btn-main px-3">Get Started</Link>
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
