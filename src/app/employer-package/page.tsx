import React from 'react'
import Link from 'next/link';

import AdminNavbarTwo from '../components/navbar/admin-navbar-two'
import AdminSidebarTwo from '../components/admin/admin-sidebar-two'
import ScrollToTop from '../components/scroll-to-top'

import { packageData } from '../data/admin';

import Shorting from '../components/shorting';

interface Package{
    no: string;
    id: number;
    name: string;
    type: string;
    featured: string;
    urgent: string;
    posted: string;
    limit: string;
    duration: string;
    status: string;
}

export default function EmployerPackage() {
   return (
    <>
        <AdminNavbarTwo/>  

        <div className="dashboard-wrap bg-light pt-0">
           <AdminSidebarTwo/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">My Package</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">Service Expert</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">My Package</Link></li>
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
										<div className="table-responsive">
											<table className="table">
												<thead>
													<tr>
													  <th scope="col">#</th>
													  <th scope="col">ID</th>
													  <th scope="col">Package Name</th>
													  <th scope="col">Package type</th>
													  <th scope="col">Description</th>
													  <th scope="col">Status</th>
													</tr>
												</thead>
												<tbody>
                                                    {packageData.map((item:Package,index:number)=>( 
                                                        <tr key={index}>
                                                            <td>{item.no}</td>
                                                            <td>{item.id}</td>
                                                            <td>{item.name}</td>
                                                            <td>{item.type}</td>
                                                            <td>
                                                                <div className="package-descr">
                                                                    <p className="text-sm-muted mb-1">Featured: {item.featured}</p>
                                                                    <p className="text-sm-muted mb-1">Urgent: {item.urgent}</p>
                                                                    <p className="text-sm-muted mb-1">Posted:{item.posted}</p>
                                                                    <p className="text-sm-muted mb-1">Post Limit: {item.limit}</p>
                                                                    <p className="text-sm-muted mb-1">Post Duration: {item.duration}</p>
                                                                </div>
                                                            </td>
                                                            <td>
                                                                {item.status === 'Active' && <span className="label text-light bg-success">Active</span> }
                                                                {item.status === 'Expired' && <span className="label text-light bg-danger">Expired</span> }
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
