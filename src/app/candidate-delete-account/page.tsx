import React from 'react'
import Link from 'next/link';

import AdminNavbar from '../components/navbar/admin-navbar'
import AdminSidebar from '../components/admin/admin-sidebar'
import ScrollToTop from '../components/scroll-to-top';

export default function CandidateDeleteAccount() {
  return (
    <>
        <AdminNavbar/>

        <div className="dashboard-wrap pt-0 bg-light">
            <AdminSidebar/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Delete Account</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Delete Account</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    <div className="card">
                        <div className="card-header">
                            <h4>Delete Account</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row mb-3">
                                    <label className="col-xl-12 col-md-12 col-form-label">Enter your password To Delete Account</label>
                                    <div className="col-xl-9 col-md-12">
                                        <input type="text" className="form-control" placeholder="*******"/>
                                    </div>
                                </div> 
                                <div className="row mb-3">
                                    <div className="col-xl-12 col-md-12">
                                        <button type="button" className="btn btn-danger">Delete Account</button>
                                    </div>
                                </div>
                            </form>
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
