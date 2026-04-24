'use client'
import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function AdminNavbar() {
    let [toggle, setToggle] = useState<boolean>(false);
    let [scroll,setScroll] = useState<boolean>(false);
    let [menu, setMenu] = useState<string>('');
    let [windowWidth, setWindowWidth] = useState<number>(0);

    const loction = usePathname();

    useEffect(() => {
        if (typeof window !== 'undefined') {
            // set initial values
            setWindowWidth(window.innerWidth);
            window.scrollTo(0, 0);
            setMenu(loction);

            const handlerScroll = () => {
                setScroll(window.scrollY > 50);
            };

            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };

            window.addEventListener('scroll', handlerScroll);
            window.addEventListener('resize', handleResize);

            return () => {
                window.removeEventListener('scroll', handlerScroll);
                window.removeEventListener('resize', handleResize);
            };
        }
    }, [loction]);

  return (
    <>
        <div className={`header header-dark ${scroll ? 'header-fixed' : ''}`}>
            <div className="container-fluid">
                <nav id="navigation" className={windowWidth > 991 ? "navigation navigation-landscape" : "navigation navigation-portrait"}>
                    <div className="nav-header">
                        <Link className="nav-brand" href="#"><img src='/img/logo-light.png' className="logo" alt=""/></Link>
                        <div className="nav-toggle" onClick={()=>setToggle(!toggle)}></div>
                        <ul className="mobile_nav dhsbrd">
                            <li>
                                <div className="btn-group account-drop">
                                    <button type="button" className="btn btn-order-by-filt" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa-regular fa-comments"></i><span className="noti-status"></span>
                                    </button>
                                    <div className="dropdown-menu pull-right animated flipInX">
                                        <div className="drp_menu_headr bg-main">
                                            <h4>Notifications</h4>
                                        </div>
                                        <div className="ntf-list-groups">
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-purple"><i className="fa-solid fa-house-medical-circle-check"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small"><strong>Kr. Shaury Preet</strong> Replied Your Message</p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-warning"><i className="fa-solid fa-envelope"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small">Mortin Denver Accepted Your Resume <strong className="text-success">On NRI Suvidha</strong></p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-success"><i className="fa-solid fa-sack-dollar"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small">Your Job #456256 Expired Yesterday <strong>View job</strong></p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-danger"><i className="fa-solid fa-comments"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small"><strong>Daniel kurwa</strong> Has Been Approved Your Resume!.</p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-info"><i className="fa-solid fa-circle-dollar-to-slot"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small">Khushi Verma Left A Review On <strong className="text-danger">Your Message</strong></p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <Link href="#" className="ntf-more">View All Notifications</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="btn-group account-drop">
                                    <button type="button" className="btn btn-order-by-filt" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src='/img/avatar.jpg' className="img-fluid circle" alt=""/>
                                    </button>
                                    <div className="dropdown-menu pull-right animated flipInX">
                                        <div className="drp_menu_headr bg-main">
                                            <h4>Hi, Dhananjay</h4>
                                            <div className="drp_menu_headr-right"><button type="button" className="btn btn-whites">Logout</button></div>
                                        </div>
                                        <ul>
                                            <li><Link href="/candidate-dashboard"><i className="fa fa-tachometer-alt"></i>Dashboard<span className="notti_coun style-1">4</span></Link></li>                                  
                                            <li><Link href="/candidate-profile"><i className="fa fa-user-tie"></i>My Profile</Link></li>                                 
                                            <li><Link href="/candidate-resume"><i className="fa fa-file"></i>My profile<span className="notti_coun style-2">7</span></Link></li>
                                            <li><Link href="/candidate-saved-jobs"><i className="fa-solid fa-bookmark"></i>Saved Resume</Link></li>
                                            <li><Link href="/candidate-messages"><i className="fa fa-envelope"></i>Messages<span className="notti_coun style-3">3</span></Link></li>
                                            <li><Link href="/candidate-change-password"><i className="fa fa-unlock-alt"></i>Change Password</Link></li>
                                            <li><Link href="/candidate-delete-account"><i className="fa-solid fa-trash-can"></i>Delete Account</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className={`nav-menus-wrapper ${toggle ? 'nav-menus-wrapper-open' : ''}`}>
                        <span className="nav-menus-wrapper-close-button" onClick={()=>setToggle(!toggle)}>✕</span>
                        <ul className="nav-menu">
                        
                            <li className={`nav-submenu-open ${['/','/home-2','/home-3','/home-4','/home-5','/home-6','/home-7','/home-8','/home-9','/home-10','/home-11','/home-12'].includes(menu) ? 'active' : ''}`}><Link href="#">Home<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`${menu === '/' ? 'active' : ''}`}><Link href="/">Home Layout 1</Link></li>
                                    <li className={`${menu === '/home-2' ? 'active' : ''}`}><Link href="/home-2">Home Layout 2</Link></li>
                                    <li className={`${menu === '/home-3' ? 'active' : ''}`}><Link href="/home-3">Home Layout 3</Link></li>
                                    <li className={`${menu === '/home-4' ? 'active' : ''}`}><Link href="/home-4">Home Layout 4</Link></li>
                                    <li className={`${menu === '/home-5' ? 'active' : ''}`}><Link href="/home-5">Home Layout 5</Link></li>
                                    <li className={`${menu === '/home-6' ? 'active' : ''}`}><Link href="/home-6">Home Layout 6</Link></li>
                                    <li className={`${menu === '/home-7' ? 'active' : ''}`}><Link href="/home-7">Home Layout 7</Link></li>
                                    <li className={`${menu === '/home-8' ? 'active' : ''}`}><Link href="/home-8">Home Layout 8</Link></li>                                    
                                    <li className={`${menu === '/home-9' ? 'active' : ''}`}><Link href="/home-9">Home Layout 9</Link></li>                                    
                                    <li className={`${menu === '/home-10' ? 'active' : ''}`}><Link href="/home-10">Home Layout 10</Link></li>
                                    <li className={`${menu === '/home-11' ? 'active' : ''}`}><Link href="/home-11">Home Layout 11</Link></li>
                                    <li className={`${menu === '/home-12' ? 'active' : ''}`}><Link href="/home-12">Home Layout 12</Link></li>	
                                </ul>
                            </li>
                            
                            <li className={`nav-submenu-open ${['/grid-style-1','/grid-style-2','/grid-style-3','/grid-style-4','/grid-style-5','/full-job-grid-1','/full-job-grid-2','/list-style-1','/list-style-2','/list-style-3','/full-job-list-1','/full-job-list-2','/half-map','/half-map-2','/half-map-3','/half-map-list-1','/half-map-list-2','/candidate-grid-1','/candidate-grid-2','/candidate-list-1','/candidate-list-2','/candidate-half-map','/candidate-half-map-list','/single-layout-1','/single-layout-2','/single-layout-3','/single-layout-4','/service-detail','/single-layout-6','/candidate-detail','/candidate-detail-2','/candidate-detail-3','/advance-search',].includes(menu) ? 'active' : ''}`}><Link href="#">For Candidate<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`nav-submenu-open ${['/grid-style-1','/grid-style-2','/grid-style-3','/grid-style-4','/grid-style-5','/full-job-grid-1','/full-job-grid-2','/list-style-1','/list-style-2','/list-style-3','/full-job-list-1','/full-job-list-2'].includes(menu) ? 'active' : ''}`}><Link href="#">Browse Jobs<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={`${menu === '/grid-style-1' ? 'active' : ''}`}><Link href="/grid-style-1">Service grid Style 1</Link></li>                                    
                                            <li className={`${menu === '/grid-style-2' ? 'active' : ''}`}><Link href="/grid-style-2">Service grid Stle 2</Link></li>                                    
                                            <li className={`${menu === '/grid-style-3' ? 'active' : ''}`}><Link href="/grid-style-3">Service grid Style 3</Link></li>
                                            <li className={`${menu === '/grid-style-4' ? 'active' : ''}`}><Link href="/grid-style-4">Service grid Style 4</Link></li>
                                            <li className={`${menu === '/grid-style-5' ? 'active' : ''}`}><Link href="/grid-style-5">Service grid Style 5</Link></li>												
                                            <li className={`${menu === '/full-job-grid-1' ? 'active' : ''}`}><Link href="/full-job-grid-1">Grid Full Style 1</Link></li>
                                            <li className={`${menu === '/full-job-grid-2' ? 'active' : ''}`}><Link href="/full-job-grid-2">Grid Full Style 2</Link></li>
                                            <li className={`${menu === '/list-style-1' ? 'active' : ''}`}><Link href="/list-style-1">Service list Style 1</Link></li>
                                            <li className={`${menu === '/list-style-2' ? 'active' : ''}`}><Link href="/list-style-2">Service list Style 2</Link></li>
                                            <li className={`${menu === '/list-style-3' ? 'active' : ''}`}><Link href="/list-style-3">Service list Style 3</Link></li>
                                            <li className={`${menu === '/full-job-list-1' ? 'active' : ''}`}><Link href="/full-job-list-1">List Full Style 1</Link></li>
                                            <li className={`${menu === '/full-job-list-2' ? 'active' : ''}`}><Link href="/full-job-list-2">List Full Style 2</Link></li>												
                                        </ul>
                                    </li>
                                    <li className={`nav-submenu-open ${['/half-map','/half-map-2','/half-map-3','/half-map-list-1','/half-map-list-2'].includes(menu) ? 'active' : ''}`}><Link href="#">Browse map services<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={`${menu === '/half-map' ? 'active' : ''}`}><Link href="/half-map">Service map 01</Link></li>                                    
                                            <li className={`${menu === '/half-map-2' ? 'active' : ''}`}><Link href="/half-map-2">Service map 02</Link></li>                                    
                                            <li className={`${menu === '/half-map-3' ? 'active' : ''}`}><Link href="/half-map-3">Service map 03</Link></li>
                                            <li className={`${menu === '/half-map-list-1' ? 'active' : ''}`}><Link href="/half-map-list-1">Service map 04</Link></li>
                                            <li className={`${menu === '/half-map-list-2' ? 'active' : ''}`}><Link href="/half-map-list-2">Service map 05</Link></li>
                                        </ul>
                                    </li>
                                    <li className={`nav-submenu-open ${['/candidate-grid-1','/candidate-grid-2','/candidate-list-1','/candidate-list-2','/candidate-half-map','/candidate-half-map-list'].includes(menu) ? 'active' : ''}`}><Link href="#">Browse Candidate<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={`${menu === '/candidate-grid-1' ? 'active' : ''}`}><Link href="/candidate-grid-1">NRI client grid 01</Link></li>                                    
                                            <li className={`${menu === '/candidate-grid-2' ? 'active' : ''}`}><Link href="/candidate-grid-2">NRI client grid 02</Link></li>                                    
                                            <li className={`${menu === '/candidate-list-1' ? 'active' : ''}`}><Link href="/candidate-list-1">NRI client list 01</Link></li>                                    
                                            <li className={`${menu === '/candidate-list-2' ? 'active' : ''}`}><Link href="/candidate-list-2">NRI client list 02</Link></li>
                                            <li className={`${menu === '/candidate-half-map' ? 'active' : ''}`}><Link href="/candidate-half-map">Candidate Half Map 01</Link></li>
                                            <li className={`${menu === '/candidate-half-map-list' ? 'active' : ''}`}><Link href="/candidate-half-map-list">Candidate Half Map 02</Link></li>												
                                        </ul>
                                    </li>
                                    <li className={`nav-submenu-open ${['/single-layout-1','/single-layout-2','/single-layout-3','/single-layout-4','/service-detail','/single-layout-6',].includes(menu) ? 'active' : ''}`}><Link href="#">Service detail<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={`${menu === '/single-layout-1' ? 'active' : ''}`}><Link href="/single-layout-1">Single Layout 01</Link></li>                                    
                                            <li className={`${menu === '/single-layout-2' ? 'active' : ''}`}><Link href="/single-layout-2">Single Layout 02</Link></li>                                    
                                            <li className={`${menu === '/single-layout-3' ? 'active' : ''}`}><Link href="/single-layout-3">Single Layout 03</Link></li>                                    
                                            <li className={`${menu === '/single-layout-4' ? 'active' : ''}`}><Link href="/single-layout-4">Single Layout 04</Link></li>												
                                            <li className={`${menu === '/service-detail' ? 'active' : ''}`}><Link href="/service-detail">Single Layout 05</Link></li>												
                                            <li className={`${menu === '/single-layout-6' ? 'active' : ''}`}><Link href="/single-layout-6">Single Layout 06</Link></li>												
                                        </ul>
                                    </li>
                                    <li className={`nav-submenu-open ${['/candidate-detail','/candidate-detail-2','/candidate-detail-3'].includes(menu) ? 'active' : ''}`}><Link href="#">Client profile<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={`${menu === '/candidate-detail' ? 'active' : ''}`}><Link href="/candidate-detail">Client profile 01</Link></li>                                    
                                            <li className={`${menu === '/candidate-detail-2' ? 'active' : ''}`}><Link href="/candidate-detail-2">Client profile 02</Link></li>                                    
                                            <li className={`${menu === '/candidate-detail-3' ? 'active' : ''}`}><Link href="/candidate-detail-3">Client profile 03</Link></li>                                    												
                                        </ul>
                                    </li>
                                    <li><Link href="/advance-search">Advance Search</Link></li>
                                    <li>
                                        <Link href="/candidate-dashboard">Client dashboard</Link>                                
                                    </li>
                                </ul>
                            </li>
                            
                            <li className={`nav-submenu-open ${['/employer-grid-1','/employer-grid-2','/employer-list-1','/employer-half-map','/employer-half-map-list','/employer-detail','/employer-detail-2','/employer-dashboard'].includes(menu) ? 'active' : ''}`}><Link href="#">For Employer<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`nav-submenu-open ${['/employer-grid-1','/employer-grid-2','/employer-list-1','/employer-half-map','/employer-half-map-list'].includes(menu) ? 'active' : ''}`}><Link href="#">Explore Employers<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={`${menu === '/employer-grid-1' ? 'active' : ''}`}><Link href="/employer-grid-1">Browse experts 01</Link></li>                                    
                                            <li className={`${menu === '/employer-grid-2' ? 'active' : ''}`}><Link href="/employer-grid-2">Browse experts 02</Link></li>                                    
                                            <li className={`${menu === '/employer-list-1' ? 'active' : ''}`}><Link href="/employer-list-1">Search List Employers 01</Link></li>
                                            <li className={`${menu === '/employer-half-map' ? 'active' : ''}`}><Link href="/employer-half-map">Browse experts Map</Link></li>
                                            <li className={`${menu === '/employer-half-map-list' ? 'active' : ''}`}><Link href="/employer-half-map-list">Search List Employers Map</Link></li>												
                                        </ul>
                                    </li>
                                    <li className={`nav-submenu-open ${['/employer-detail','/employer-detail-2'].includes(menu) ? 'active' : ''}`}><Link href="#">Expert profile<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                        <ul className="nav-dropdown nav-submenu">
                                            <li className={`${menu === '/employer-detail' ? 'active' : ''}`}><Link href="/employer-detail">Expert profile 01</Link></li>                                    
                                            <li className={`${menu === '/employer-detail-2' ? 'active' : ''}`}><Link href="/employer-detail-2">Expert profile 02</Link></li>                                    											
                                        </ul>
                                    </li>
                                    <li className={`${menu === '/employer-dashboard' ? 'active' : ''}`}><Link href="/employer-dashboard">Expert dashboard</Link></li>
                                </ul>
                            </li>
                            
                            <li className={`nav-submenu-open ${['/about-us','/404','/checkout','/blog','/blog-detail','/privacy','/pricing','/faq','/contact'].includes(menu) ? 'active' : ''}`}><Link href="#">Pages<span className="submenu-indicator"><span className='submenu-indicator-chevron'></span></span></Link>
                                <ul className="nav-dropdown nav-submenu">
                                    <li className={`${menu === '/about-us' ? 'active' : ''}`}><Link href="/about-us">About Us</Link></li> 
                                    <li className={`${menu === '/404' ? 'active' : ''}`}><Link href="/404">Error Page</Link></li>
                                    <li className={`${menu === '/checkout' ? 'active' : ''}`}><Link href="/checkout">Checkout</Link></li>										
                                    <li className={`${menu === '/blog' ? 'active' : ''}`}><Link href="/blog">Blogs Page</Link></li>                                    
                                    <li className={`${menu === '/blog-detail' ? 'active' : ''}`}><Link href="/blog-detail">Blog Detail</Link></li>                                    
                                    <li className={`${menu === '/privacy' ? 'active' : ''}`}><Link href="/privacy">Terms & Privacy</Link></li> 
                                    <li className={`${menu === '/pricing' ? 'active' : ''}`}><Link href="/pricing">Pricing</Link></li>  
                                    <li className={`${menu === '/faq' ? 'active' : ''}`}><Link href="/faq">FAQ's</Link></li>
                                    <li className={`${menu === '/contact' ? 'active' : ''}`}><Link href="/contact">Contacts</Link></li>
                                </ul>
                            </li>
                            
                            <li className={`${menu === '/help' ? 'active' : ''}`}><Link href="/help">Help</Link></li>
                            
                        </ul>
                        
                        <ul className="nav-menu nav-menu-social align-to-right dhsbrd">
                            <li>
                                <div className="btn-group account-drop">
                                    <button type="button" className="btn btn-order-by-filt" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fa-regular fa-comments"></i><span className="noti-status"></span>
                                    </button>
                                    <div className="dropdown-menu pull-right animated flipInX">
                                        <div className="drp_menu_headr bg-main">
                                            <h4>Notifications</h4>
                                        </div>
                                        <div className="ntf-list-groups">
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-purple"><i className="fa-solid fa-house-medical-circle-check"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small"><strong>Kr. Shaury Preet</strong> Replied Your Message</p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-warning"><i className="fa-solid fa-envelope"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small">Mortin Denver Accepted Your Resume <strong className="text-success">On NRI Suvidha</strong></p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-success"><i className="fa-solid fa-sack-dollar"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small">Your Job #456256 Expired Yesterday <strong>View job</strong></p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-danger"><i className="fa-solid fa-comments"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small"><strong>Daniel kurwa</strong> Has Been Approved Your Resume!.</p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <div className="ntf-list-groups-icon text-info"><i className="fa-solid fa-circle-dollar-to-slot"></i></div>
                                                <div className="ntf-list-groups-caption"><p className="small">Khushi Verma Left A Review On <strong className="text-danger">Your Message</strong></p></div>
                                            </div>
                                            <div className="ntf-list-groups-single">
                                                <Link href="#" className="ntf-more">View All Notifications</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div className="btn-group account-drop">
                                    <button type="button" className="btn btn-order-by-filt" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <img src='/img/avatar.jpg' className="img-fluid circle" alt=""/>
                                    </button>
                                    <div className="dropdown-menu pull-right animated flipInX">
                                        <div className="drp_menu_headr bg-main">
                                            <h4>Hi, Dhananjay</h4>
                                            <div className="drp_menu_headr-right"><button type="button" className="btn btn-whites">Logout</button></div>
                                        </div>
                                        <ul>
                                            <li><Link href="/candidate-dashboard"><i className="fa fa-tachometer-alt"></i>Dashboard<span className="notti_coun style-1">4</span></Link></li>                                  
                                            <li><Link href="/candidate-profile"><i className="fa fa-user-tie"></i>My Profile</Link></li>                                 
                                            <li><Link href="/candidate-resume"><i className="fa fa-file"></i>My profile<span className="notti_coun style-2">7</span></Link></li>
                                            <li><Link href="/candidate-saved-jobs"><i className="fa-solid fa-bookmark"></i>Saved Resume</Link></li>
                                            <li><Link href="/candidate-messages"><i className="fa fa-envelope"></i>Messages<span className="notti_coun style-3">3</span></Link></li>
                                            <li><Link href="/candidate-change-password"><i className="fa fa-unlock-alt"></i>Change Password</Link></li>
                                            <li><Link href="/candidate-delete-account"><i className="fa-solid fa-trash-can"></i>Delete Account</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </li>
                            <li className="list-buttons ms-2">
                                <Link href="#" data-bs-toggle="modal" data-bs-target="#uploadresume"><i className="bi bi-plus-circle-dotted me-2"></i>Upload documents</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>  

        <div className="modal fade" id="uploadresume" tabIndex={-1} role="dialog" aria-labelledby="uploadresumemodal" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content" id="uploadresumemodal">
                    <span className="mod-close" data-bs-dismiss="modal" aria-hidden="true"><i className="fas fa-close"></i></span>
                    <div className="modal-body">
                        
                        <div className="head-caps mb-4">
                            <h4 className="mb-0">Upload Files</h4>
                            <p className="text-muted">Select and upload the files as your chocie</p>
                        </div>
                        
                        <div className="modal-uploadresume-form">
                            <form className="upload-container" action="#" method="post" encType="multipart/form-data">

                                <label className="upload-box">
                                    <i className="bi bi-cloud-plus"></i>
                                    <p className="text-secondcolor fw-medium fs-6 mb-0">Drag & Drop your resume here or click to upload</p>
                                    <p className="text-sm text-muted">JPEG, PNG, PDG, and MP4 Format, up to 50MB</p>
                                    <input type="file" name="resume" accept=".pdf,.doc,.docx" required/>
                                </label>

                                <div className="skills-section mb-5">
                                    <label htmlFor="skills">Highlight Your Skills</label>
                                    <textarea id="skills" className="form-control" name="skills" placeholder="Write a few key skills..."></textarea>

                                    <div className="tags-container">
                                    <span className="tag">HTML</span>
                                    <span className="tag">CSS</span>
                                    <span className="tag">JavaScript</span>
                                    <span className="tag">React</span>
                                    <span className="tag">Bootstrap</span>
                                    <span className="tag">Figma</span>
                                    <span className="tag">Git</span>
                                    <span className="tag">UI/UX</span>
                                    </div>
                                </div>

                                <div className="d-flex align-items-center justify-content-between">
                                    <button type="submit" className="btn btn-md btn-outline-dark px-4">Save as Draft</button>
                                    <button type="submit" className="btn btn-md btn-main px-4">Upload Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
