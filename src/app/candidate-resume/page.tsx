import React from 'react'
import Link from 'next/link'

import AdminNavbar from '../components/navbar/admin-navbar'
import AdminSidebar from '../components/admin/admin-sidebar'
import ScrollToTop from '../components/scroll-to-top'

export default function CandidateResume() {
    
  return (
    <>
        <AdminNavbar/> 

        <div className="dashboard-wrap bg-light pt-0">
            <AdminSidebar/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-5">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">My profile</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">My profile</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    <div className="card">
                        <div className="card-header">
                            <h4>My profile</h4>
                        </div>
                        <div className="card-body">
                            <div className="row gx-4 gy-4 mb-3">
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="cd-resume-wraps">
                                        <div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div>
                                        <div className="cd-resume-caption">
                                            <div className="cd-resume-content">
                                                <p>kyc-passport-2024.pdf</p>
                                                <h5>PDF</h5>
                                            </div>
                                            <div className="cd-resume-icon"><i className="fa-solid fa-file-pdf"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="cd-resume-wraps">
                                        <div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div>
                                        <div className="cd-resume-caption">
                                            <div className="cd-resume-content">
                                                <p>poa-draft-v2.docx</p>
                                                <h5>DOCS</h5>
                                            </div>
                                            <div className="cd-resume-icon"><i className="fa-regular fa-file-word"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-4 col-md-6">
                                    <div className="cd-resume-wraps">
                                        <div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div>
                                        <div className="cd-resume-caption">
                                            <div className="cd-resume-content">
                                                <p>tax-worksheet.xlsx</p>
                                                <h5>PDF</h5>
                                            </div>
                                            <div className="cd-resume-icon"><i className="fa-solid fa-file-pdf"></i></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row gx-4 gy-4">
                                <div className="col-xl-12 col-lg-12 col-md-12">
                                    <div className="upload-btn-wrapper">
                                        <button className="btn">Upload a file</button>
                                        <input type="file" name="myfile"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>	
                    <div className="card">
                        <div className="card-header">
                            <h4>Education</h4>
                        </div>
                        <div className="card-body">
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#secondarySchool" role="button" aria-expanded="false" aria-controls="secondarySchool">Secondary School</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="secondarySchool">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Education Title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="High School"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Academy Name</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Awadh main School"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Passing year</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="2008"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#intermediate" role="button" aria-expanded="false" aria-controls="intermediate">Intermediate</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="intermediate">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Education Title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Intermidiate"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Academy Name</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Awadh main School"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Passing year</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="2010"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#bachelorDegree" role="button" aria-expanded="false" aria-controls="bachelorDegree">Bachelor Degree</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="bachelorDegree">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Education Title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Bachelor Appliation Of Computer"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Academy Name</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Swami Vivekanand University"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Passing year</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="2013"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#masterDegree" role="button" aria-expanded="false" aria-controls="masterDegree">Master Degree</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="masterDegree">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Education Title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Master Application Of Computer"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Academy Name</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Awadh University"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Passing year</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="2016"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <Link href="#" data-bs-toggle="modal" data-bs-target="#education" className="add-light-btn">Add More Education</Link>
                            </div>
                            
                        </div>
                    </div>	
                    
                    <div className="card">
                        <div className="card-header">
                            <h4>Experience</h4>
                        </div>
                        <div className="card-body">
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#exp1" role="button" aria-expanded="false" aria-controls="exp1">Front-End Developer</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="exp1">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Service title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Front-End Developer"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Joinin Date</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="10-06-2008"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">End Date</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="15-04-2010"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Company Name</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="shreethemes Technology"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#exp2" role="button" aria-expanded="false" aria-controls="exp2">WordPress Developer</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="exp2">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Service title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="WordPress Developer"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Joinin Date</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="01-12-2011"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">End Date</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="15-05-2015"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Company Name</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Google Inc"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#exp3" role="button" aria-expanded="false" aria-controls="exp3">Magento Developer</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="exp3">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Service title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Sr. magento Developer"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Joinin Date</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="01-12-2016"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">End Date</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="15-05-2022"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Company Name</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="Google Inc"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <Link href="#" data-bs-toggle="modal" data-bs-target="#experience" className="add-light-btn">Add More Experience</Link>
                            </div>
                        </div>
                    </div>	
                    
                    <div className="card">
                        <div className="card-header">
                            <h4>Award</h4>
                        </div>
                        <div className="card-body">
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#BCPIL" role="button" aria-expanded="false" aria-controls="BCPIL">BCPIL Award</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="BCPIL">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Award Title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="BCPIL Award"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Award Year</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="01-12-2012"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#RIZZA" role="button" aria-expanded="false" aria-controls="RIZZA">RIZZA Award</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="RIZZA">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Award Title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="RIZZA Award"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Award Year</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="01-12-2016"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <div className="single-edc-box">
                                    <div className="single-edc-remove-box"><div className="cd-resume-cancel"><Link href="#" className="cancel-link"><i className="fa-solid fa-xmark"></i></Link></div></div>
                                    <div className="single-edc-title-box">
                                        <a className="btn btn-collapse" data-bs-toggle="collapse" href="#FIFFA" role="button" aria-expanded="false" aria-controls="FIFFA">FIFFA Award</a>
                                    </div>
                                </div>
                                <div className="single-edc-caption">
                                    <div className="collapse" id="FIFFA">
                                        <div className="card card-body">
                                            <form>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Award Title</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="FIFFA ICL"/>
                                                    </div>
                                                </div> 
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Award Year</label>
                                                    <div className="col-md-10">
                                                        <input type="text" className="form-control" placeholder="01-12-2022"/>
                                                    </div>
                                                </div>
                                                <div className="row mb-3">
                                                    <label className="col-md-2 col-form-label">Description</label>
                                                    <div className="col-md-10">
                                                        <textarea className="form-control ht-80" placeholder="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries"/>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="single-edc-wrap">
                                <Link href="#" data-bs-toggle="modal" data-bs-target="#award" className="add-light-btn">Add More Award</Link>
                            </div>
                        </div>
                    </div>	
                    
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="btn ft--medium btn-main">Save profile</button>
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
