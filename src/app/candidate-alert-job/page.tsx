import React from 'react'
import Link from 'next/link';

import AdminNavbar from '../components/navbar/admin-navbar'
import AdminSidebar from '../components/admin/admin-sidebar'
import ScrollToTop from '../components/scroll-to-top';
import Shorting from '../components/shorting';

import { jobAlertData } from '../data/admin';

interface AlertData{
    title: string;
    category: string;
    matches: string;
}

export default function CandidateAlertJob() {
  return (
    <>
        <AdminNavbar/>

        <div className="dashboard-wrap pt-0 bg-light">
            <AdminSidebar/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Service alerts</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Service alerts</Link></li>
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
                                    <div className="table-responsive">
                                        <table className="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Title</th>
                                                    <th scope="col">Category</th>
                                                    <th scope="col">Matches</th>
                                                    <th scope="col" style={{textAlign:'end'}}>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {jobAlertData.map((item:AlertData,index:number)=>( 
                                                    <tr key={index}>
                                                        <td>{item.title}</td>
                                                        <td>{item.category}</td>
                                                        <td>{item.matches}</td>
                                                        <td style={{textAlign:'end'}}>
                                                            <Link href="#" className="btn btn-md btn-light-red px-3 me-2"><i className="fa-solid fa-xmark"></i></Link>
                                                            <Link href="#" className="btn btn-md btn-light-green px-3"><i className="fa-solid fa-eye"></i></Link>
                                                        </td>
                                                    </tr>
                                                ))}												
                                            </tbody>
                                        </table>
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
