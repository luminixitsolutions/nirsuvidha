'use client'
import React from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Select = dynamic(()=>import('react-select'),{ssr:false})

import AdminNavbarTwo from '../components/navbar/admin-navbar-two'
import AdminSidebarTwo from '../components/admin/admin-sidebar-two'
import ScrollToTop from '../components/scroll-to-top'

import { category, country, city } from '../data/select-option';

export default function EmployerProfile() {
  return (
    <>
        <AdminNavbarTwo/>  

        <div className="dashboard-wrap bg-light pt-0">
           <AdminSidebarTwo/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Update Profile</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">Service Expert</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">My Profile</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    <div className="dashboard-profle-wrapper mb-4">
                        <div className="dash-prf-start">
                            <div className="profile-avatar position-ralative mb-3">
                                <svg>
                                    <circle className="bg" cx="70" cy="70" r="60"></circle>
                                    <circle className="progress" cx="70" cy="70" r="60" strokeDasharray="326.72" strokeDashoffset="326.72"></circle>
                                </svg>
                                <Image className="avatar" src='/img/l-12.png' width={100} height={100} alt="Avatar"/>
                                <div className="position-absolute bottom-0 start-50 translate-middle-x">
                                    <span className="badge badge-md bg-white text-main rounded-pill fw-medium shadow-sm px-3 py-2">85%</span>
                                </div>
                            </div>
                            <div className="dash-prf-start-bottom">
                                <div className="upload-btn-wrapper small">
                                    <button className="btn">Change Profile</button>
                                    <input type="file" name="myfile"/>
                                </div>
                            </div>
                        </div>
                        <div className="dash-prf-end">
                            <div className="row gx-xl-5 g-4">
                                <div className="col-xl-8 col-lg-8">
                                    <div className="dash-prfs-caption mb-4">
                                        <div className="dash-prfs-title d-flex align-items-center justify-content-between">
                                            <div className="avatar-title"><h4>Adobe Eluctorious</h4></div>
                                            <div className="update-status"><span className="text-sm opacity-75">Last Update: Just now</span></div>
                                        </div>
                                        <div className="dash-prfs-subtitle">
                                            <div className="jbs-job-mrch-lists mb-2">
                                                <div className="single-mrch-lists">
                                                    <span>Software & Application <Link href="#" className="text-main">@2010</Link></span>
                                                </div>
                                                <div className="jbs-kioyer mt-1">
                                                    <div className="jbs-kioyer-groups justify-content-start">
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star active"></span>
                                                        <span className="fa-solid fa-star"></span>
                                                        <span className="aal-reveis">4.8</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="short-description">
                                                <p>Creative and detail-oriented Web Designer with a strong foundation in responsive design, HTML, CSS, and modern UI/UX principles. Experienced in designing visually appealing, user-friendly websites.</p>
                                            </div>
                                        </div>
                                        <div className="jbs-grid-job-edrs-group mt-1">
                                            <span>Software Develipment</span>
                                            <span>App Development</span>
                                            <span>SEO / SMO</span>
                                            <span>Digital Marketing</span>
                                        </div>
                                    </div>
                                    <div className="dash-prf-caption-end">
                                        <div className="row gx-lg-5 g-4">
                                            
                                            <div className="col-xl-4 col-lg-5 col-md-6">
                                                <div className="d-flex flex-column gap-3">
                                                    
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="info-icon">
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="#4f5e64"/>
                                                                <path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="#4f5e64"/>
                                                            </svg>	
                                                        </div>
                                                        <div className="info-caps">
                                                            <span>New Orleans, USA</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="info-icon">
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M21 22H3C2.4 22 2 21.6 2 21V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5V21C22 21.6 21.6 22 21 22Z" fill="#4f5e64"/>
                                                                <path d="M6 6C5.4 6 5 5.6 5 5V3C5 2.4 5.4 2 6 2C6.6 2 7 2.4 7 3V5C7 5.6 6.6 6 6 6ZM11 5V3C11 2.4 10.6 2 10 2C9.4 2 9 2.4 9 3V5C9 5.6 9.4 6 10 6C10.6 6 11 5.6 11 5ZM15 5V3C15 2.4 14.6 2 14 2C13.4 2 13 2.4 13 3V5C13 5.6 13.4 6 14 6C14.6 6 15 5.6 15 5ZM19 5V3C19 2.4 18.6 2 18 2C17.4 2 17 2.4 17 3V5C17 5.6 17.4 6 18 6C18.6 6 19 5.6 19 5Z" fill="#4f5e64"/>
                                                                <path d="M8.8 13.1C9.2 13.1 9.5 13 9.7 12.8C9.9 12.6 10.1 12.3 10.1 11.9C10.1 11.6 10 11.3 9.8 11.1C9.6 10.9 9.3 10.8 9 10.8C8.8 10.8 8.59999 10.8 8.39999 10.9C8.19999 11 8.1 11.1 8 11.2C7.9 11.3 7.8 11.4 7.7 11.6C7.6 11.8 7.5 11.9 7.5 12.1C7.5 12.2 7.4 12.2 7.3 12.3C7.2 12.4 7.09999 12.4 6.89999 12.4C6.69999 12.4 6.6 12.3 6.5 12.2C6.4 12.1 6.3 11.9 6.3 11.7C6.3 11.5 6.4 11.3 6.5 11.1C6.6 10.9 6.8 10.7 7 10.5C7.2 10.3 7.49999 10.1 7.89999 10C8.29999 9.90003 8.60001 9.80003 9.10001 9.80003C9.50001 9.80003 9.80001 9.90003 10.1 10C10.4 10.1 10.7 10.3 10.9 10.4C11.1 10.5 11.3 10.8 11.4 11.1C11.5 11.4 11.6 11.6 11.6 11.9C11.6 12.3 11.5 12.6 11.3 12.9C11.1 13.2 10.9 13.5 10.6 13.7C10.9 13.9 11.2 14.1 11.4 14.3C11.6 14.5 11.8 14.7 11.9 15C12 15.3 12.1 15.5 12.1 15.8C12.1 16.2 12 16.5 11.9 16.8C11.8 17.1 11.5 17.4 11.3 17.7C11.1 18 10.7 18.2 10.3 18.3C9.9 18.4 9.5 18.5 9 18.5C8.5 18.5 8.1 18.4 7.7 18.2C7.3 18 7 17.8 6.8 17.6C6.6 17.4 6.4 17.1 6.3 16.8C6.2 16.5 6.10001 16.3 6.10001 16.1C6.10001 15.9 6.2 15.7 6.3 15.6C6.4 15.5 6.6 15.4 6.8 15.4C6.9 15.4 7.00001 15.4 7.10001 15.5C7.20001 15.6 7.3 15.6 7.3 15.7C7.5 16.2 7.7 16.6 8 16.9C8.3 17.2 8.6 17.3 9 17.3C9.2 17.3 9.5 17.2 9.7 17.1C9.9 17 10.1 16.8 10.3 16.6C10.5 16.4 10.5 16.1 10.5 15.8C10.5 15.3 10.4 15 10.1 14.7C9.80001 14.4 9.50001 14.3 9.10001 14.3C9.00001 14.3 8.9 14.3 8.7 14.3C8.5 14.3 8.39999 14.3 8.39999 14.3C8.19999 14.3 7.99999 14.2 7.89999 14.1C7.79999 14 7.7 13.8 7.7 13.7C7.7 13.5 7.79999 13.4 7.89999 13.2C7.99999 13 8.2 13 8.5 13H8.8V13.1ZM15.3 17.5V12.2C14.3 13 13.6 13.3 13.3 13.3C13.1 13.3 13 13.2 12.9 13.1C12.8 13 12.7 12.8 12.7 12.6C12.7 12.4 12.8 12.3 12.9 12.2C13 12.1 13.2 12 13.6 11.8C14.1 11.6 14.5 11.3 14.7 11.1C14.9 10.9 15.2 10.6 15.5 10.3C15.8 10 15.9 9.80003 15.9 9.70003C15.9 9.60003 16.1 9.60004 16.3 9.60004C16.5 9.60004 16.7 9.70003 16.8 9.80003C16.9 9.90003 17 10.2 17 10.5V17.2C17 18 16.7 18.4 16.2 18.4C16 18.4 15.8 18.3 15.6 18.2C15.4 18.1 15.3 17.8 15.3 17.5Z" fill="#4f5e64"/>
                                                            </svg>
        
                                                        </div>
                                                        <div className="info-caps">
                                                            <span>Established: 2010</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="info-icon">
                                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M3.20001 5.91897L16.9 3.01895C17.4 2.91895 18 3.219 18.1 3.819L19.2 9.01895L3.20001 5.91897Z" fill="#4f5e64"/>
                                                                <path opacity="0.3" d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21C21.6 10.9189 22 11.3189 22 11.9189V15.9189C22 16.5189 21.6 16.9189 21 16.9189H16C14.3 16.9189 13 15.6189 13 13.9189ZM16 12.4189C15.2 12.4189 14.5 13.1189 14.5 13.9189C14.5 14.7189 15.2 15.4189 16 15.4189C16.8 15.4189 17.5 14.7189 17.5 13.9189C17.5 13.1189 16.8 12.4189 16 12.4189Z" fill="#4f5e64"/>
                                                                <path d="M13 13.9189C13 12.2189 14.3 10.9189 16 10.9189H21V7.91895C21 6.81895 20.1 5.91895 19 5.91895H3C2.4 5.91895 2 6.31895 2 6.91895V20.9189C2 21.5189 2.4 21.9189 3 21.9189H19C20.1 21.9189 21 21.0189 21 19.9189V16.9189H16C14.3 16.9189 13 15.6189 13 13.9189Z" fill="#4f5e64"/>
                                                            </svg>	
                                                        </div>
                                                        <div className="info-caps">
                                                            <span>Revenue INR. 520.5k</span>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                            
                                            <div className="col-xl-6 col-lg-7 col-md-6">
                                                <div className="d-flex flex-column gap-3">
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="info-icon">
                                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="#4f5e64"/>
                                                                <path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="#4f5e64"/>
                                                            </svg>	
                                                        </div>
                                                        <div className="info-caps">
                                                            <span>Emp. 500-700</span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="d-flex align-items-center justify-content-between gap-2 w-100">
                                                            <div className="verify-content d-flex align-items-center gap-2">
                                                                <div className="info-icon">
                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M21 18H3C2.4 18 2 17.6 2 17V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V17C22 17.6 21.6 18 21 18Z" fill="#4f5e64"/>
                                                                        <path d="M11.4 13.5C11.8 13.8 12.3 13.8 12.6 13.5L21.6 6.30005C21.4 6.10005 21.2 6 20.9 6H2.99998C2.69998 6 2.49999 6.10005 2.29999 6.30005L11.4 13.5Z" fill="#4f5e64"/>
                                                                    </svg>	
                                                                </div>
                                                                <div className="info-caps">
                                                                    <span>shreethemes@gmail.com</span>
                                                                </div>
                                                            </div>
                                                            <div className="verify-status unverified"><a href="#"  data-bs-toggle="modal" data-bs-target="#verifyemail" className="text-danger">Verify</a></div>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="d-flex align-items-center gap-2">
                                                        <div className="d-flex align-items-center justify-content-between gap-2 w-100">
                                                            <div className="verify-content d-flex align-items-center gap-2">
                                                                <div className="info-icon">
                                                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                        <path opacity="0.3" d="M14 3V20H2V3C2 2.4 2.4 2 3 2H13C13.6 2 14 2.4 14 3ZM11 13V11C11 9.7 10.2 8.59995 9 8.19995V7C9 6.4 8.6 6 8 6C7.4 6 7 6.4 7 7V8.19995C5.8 8.59995 5 9.7 5 11V13C5 13.6 4.6 14 4 14V15C4 15.6 4.4 16 5 16H11C11.6 16 12 15.6 12 15V14C11.4 14 11 13.6 11 13Z" fill="#4f5e64"/>
                                                                        <path d="M2 20H14V21C14 21.6 13.6 22 13 22H3C2.4 22 2 21.6 2 21V20ZM9 3V2H7V3C7 3.6 7.4 4 8 4C8.6 4 9 3.6 9 3ZM6.5 16C6.5 16.8 7.2 17.5 8 17.5C8.8 17.5 9.5 16.8 9.5 16H6.5ZM21.7 12C21.7 11.4 21.3 11 20.7 11H17.6C17 11 16.6 11.4 16.6 12C16.6 12.6 17 13 17.6 13H20.7C21.2 13 21.7 12.6 21.7 12ZM17 8C16.6 8 16.2 7.80002 16.1 7.40002C15.9 6.90002 16.1 6.29998 16.6 6.09998L19.1 5C19.6 4.8 20.2 5 20.4 5.5C20.6 6 20.4 6.60005 19.9 6.80005L17.4 7.90002C17.3 8.00002 17.1 8 17 8ZM19.5 19.1C19.4 19.1 19.2 19.1 19.1 19L16.6 17.9C16.1 17.7 15.9 17.1 16.1 16.6C16.3 16.1 16.9 15.9 17.4 16.1L19.9 17.2C20.4 17.4 20.6 18 20.4 18.5C20.2 18.9 19.9 19.1 19.5 19.1Z" fill="#4f5e64"/>
                                                                    </svg>
                                                                </div>
                                                                <div className="info-caps">
                                                                    <span>8556068407</span>
                                                                </div>
                                                            </div>
                                                            <div className="verify-status unverified"><a href="#"  data-bs-toggle="modal" data-bs-target="#verifyphone" className="text-danger">Verify</a></div>
                                                        </div>
                                                    </div>
                                                
                                                </div>
                                            </div>
                                        
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="col-xl-4 col-lg-4">
                                    <div className="card rpunded-3 p-4" style={{backgroundColor:'#fff5ee'}}>
                                    
                                        <div className="completion-group d-flex flex-column gap-3 mb-3">
                                            
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="task-icon square--40 circle bg-white">
                                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3" d="M21 18H3C2.4 18 2 17.6 2 17V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V17C22 17.6 21.6 18 21 18Z" fill="#0b8260"/>
                                                            <path d="M11.4 13.5C11.8 13.8 12.3 13.8 12.6 13.5L21.6 6.30005C21.4 6.10005 21.2 6 20.9 6H2.99998C2.69998 6 2.49999 6.10005 2.29999 6.30005L11.4 13.5Z" fill="#0b8260"/>
                                                        </svg>
                                                    </div>
                                                    <div className="task-title"><span>Verify Email</span></div>
                                                </div>
                                                <div className="complete-status">
                                                    <span className="badge badge-md bg-white text-dark fw-medium rounded-pill"><i className="bi bi-arrow-up-short me-1"></i>10%</span>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="task-icon square--40 circle bg-white">
                                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3" d="M19 22H5C4.4 22 4 21.6 4 21V3C4 2.4 4.4 2 5 2H14L20 8V21C20 21.6 19.6 22 19 22ZM15.5 14C15.5 13.4 14.6 13.5 14 13.5H9.5C8.9 13.5 8.5 13.4 8.5 14C8.5 14.6 8.9 14.5 9.5 14.5H14C14.6 14.5 15.5 14.6 15.5 14Z" fill="#0b8260"/>
                                                            <path d="M15 8H20L14 2V7C14 7.6 14.4 8 15 8Z" fill="#0b8260"/>
                                                            <rect x="8" y="13" width="8" height="2" rx="1" fill="#0b8260"/>
                                                        </svg>
                                                    </div>
                                                    <div className="task-title"><span>Company registration</span></div>
                                                </div>
                                                <div className="complete-status">
                                                    <span className="badge badge-md bg-white text-dark fw-medium rounded-pill"><i className="bi bi-arrow-up-short me-1"></i>10%</span>
                                                </div>
                                            </div>
                                            
                                            <div className="d-flex align-items-center justify-content-between gap-2">
                                                <div className="d-flex align-items-center gap-2">
                                                    <div className="task-icon square--40 circle bg-white">
                                                        <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path opacity="0.3" d="M22 5V19C22 19.6 21.6 20 21 20H19.5L11.9 12.4C11.5 12 10.9 12 10.5 12.4L3 20C2.5 20 2 19.5 2 19V5C2 4.4 2.4 4 3 4H21C21.6 4 22 4.4 22 5ZM7.5 7C6.7 7 6 7.7 6 8.5C6 9.3 6.7 10 7.5 10C8.3 10 9 9.3 9 8.5C9 7.7 8.3 7 7.5 7Z" fill="#0b8260"/>
                                                            <path d="M19.1 10C18.7 9.60001 18.1 9.60001 17.7 10L10.7 17H2V19C2 19.6 2.4 20 3 20H21C21.6 20 22 19.6 22 19V12.9L19.1 10Z" fill="#0b8260"/>
                                                        </svg>
                                                    </div>
                                                    <div className="task-title"><span>Upload Profile Image</span></div>
                                                </div>
                                                <div className="complete-status">
                                                    <span className="badge badge-md bg-white text-dark fw-medium rounded-pill"><i className="bi bi-arrow-up-short me-1"></i>5%</span>
                                                </div>
                                            </div>
                                        
                                        </div>
                                        
                                        <div className="completion-button">
                                            <a href="#" className="btn btn-md btn-main rounded-pill w-100">Complete Your Profile</a>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                        </div>
                    
                    </div>
                    
                    <div className="card">
                        <div className="card-header">
                            <h4>Basic Detail</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Employer Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Email ID</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Phone No.</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Website</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Founded Year</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Company Category</label>
                                            <div className="select-ops">
                                                <Select options={category}  className="form-control" placeholder="Web & Application"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Company Size</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Video</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>About Company</label>
                                            <textarea className="form-control ht-80"></textarea>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </form>
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
                                        <Link className="btn btn-collapse" data-bs-toggle="collapse" href="#BCPIL" role="button" aria-expanded="false" aria-controls="BCPIL">BCPIL Award</Link>
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
                                        <Link className="btn btn-collapse" data-bs-toggle="collapse" href="#RIZZA" role="button" aria-expanded="false" aria-controls="RIZZA">RIZZA Award</Link>
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
                                        <Link className="btn btn-collapse" data-bs-toggle="collapse" href="#FIFFA" role="button" aria-expanded="false" aria-controls="FIFFA">FIFFA Award</Link>
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
                    
                    <div className="card">
                        <div className="card-header">
                            <h4>Contact Detail</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Your Email</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Phone no.</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Temporary Address</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Address</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Address 2</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Country</label>
                                            <div className="select-ops">
                                                <Select options={country}  className="form-control" placeholder="India"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>State/City</label>
                                            <div className="select-ops">
                                               <Select options={city}  className="form-control" placeholder="California"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Zip Code</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Latitude</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>longitude</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </form>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-header">
                            <h4>Social Login</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Facebook</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Twitter</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Instagram</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Linked In</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Twitter</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Google Plus</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                </div> 
                            </form>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="btn ft--medium btn-main px-5">Save Profile</button>
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
