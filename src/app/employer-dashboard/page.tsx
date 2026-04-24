'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import AdminNavbarTwo from '../components/navbar/admin-navbar-two'
import AdminSidebarTwo from '../components/admin/admin-sidebar-two'
import ChartBox from '../components/admin/chart'
import Notification from '../components/admin/notification'
import ScrollToTop from '../components/scroll-to-top'

import { adminCount, postedJobList } from '../data/admin'
import CountUp from 'react-countup'

interface Counter{
    icon: string;
    iconBg: string;
    value: number;
    title: string;
}

interface JobList{
    image: string;
    name: string;
    title: string;
    applicants: number;
    posted: string;
    expired: string;
}

export default function EmployerDashboard() {
  return (
    <>
        <AdminNavbarTwo/>  

        <div className="dashboard-wrap bg-light pt-0">
           <AdminSidebarTwo/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Expert dashboard</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">Service Expert</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Expert dashboard</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
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
                                    <h6 className="mb-0">Recent Posted Jobs</h6>
                                </div>
                                <div className="card-body">
                                    
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
                                                                <span className="text-sm-muted text-light bg-green label">{item.applicants} Applicants</span>
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
                                                            <Link href="#" className="rounded btn-md text-success bg-light-green px-3 me-1"><i className="fa-solid fa-pencil"></i></Link>
                                                            <Link href="#" className="rounded btn-md text-danger bg-light-red px-3"><i className="fa-solid fa-trash-can"></i></Link>
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
