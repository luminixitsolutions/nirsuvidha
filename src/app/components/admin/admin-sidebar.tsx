'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function AdminSidebar() {
    let current =  usePathname();
    
  return (
    <>
        <Link className="mobNavigation" data-bs-toggle="collapse" href="#MobNav" role="button" aria-expanded="false" aria-controls="MobNav">
            <i className="fas fa-bars mr-2"></i>Dashboard Navigation
        </Link>
        <div className="collapse" id="MobNav">
            <div className="dashboard-nav">
                <div className="dash-user-blocks pt-5">
                    <div className="jbs-grid-usrs-thumb">
                        <div className="jbs-grid-yuo">
                            <Link href="/candidate-detail"><figure><Image src='/img/user-5.png' width={100} height={100} className="img-fluid circle" alt=""/></figure></Link>
                        </div>
                    </div>
                    <div className="jbs-grid-usrs-caption mb-3">
                        <div className="jbs-kioyer">
                            <div className="jbs-kioyer-groups">
                                <span className="fa-solid fa-star active"></span>
                                <span className="fa-solid fa-star active"></span>
                                <span className="fa-solid fa-star active"></span>
                                <span className="fa-solid fa-star active"></span>
                                <span className="fa-solid fa-star"></span>
                                <span className="aal-reveis">4.7</span>
                            </div>
                        </div>
                        <div className="jbs-tiosk">
                            <h4 className="jbs-tiosk-title"><Link href="/candidate-detail">Linda D. Strong</Link></h4>
                            <div className="jbs-tiosk-subtitle"><span>Front-End Developer</span></div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-inner">
                    <ul data-submenu-title="Main Navigation">
                        <li className={current === '/candidate-dashboard' ? 'active' : ''}><Link href="/candidate-dashboard"><i className="fa-solid fa-gauge-high me-2"></i>User Dashboard</Link></li>
                        <li className={current === '/candidate-profile' ? 'active' : ''}><Link href="/candidate-profile"><i className="fa-regular fa-user me-2"></i>My Profile </Link></li>
                        <li className={current === '/candidate-resume' ? 'active' : ''}><Link href="/candidate-resume"><i className="fa-solid fa-file-pdf me-2"></i>My profiles</Link></li>
                        <li className={current === '/candidate-applied-jobs' ? 'active' : ''}><Link href="/candidate-applied-jobs"><i className="fa-regular fa-paper-plane me-2"></i>Applied jobs</Link></li>
                        <li className={current === '/candidate-alert-job' ? 'active' : ''}><Link href="/candidate-alert-job"><i className="fa-solid fa-bell me-2"></i>Service alerts<span className="count-tag bg-warning">4</span></Link></li>
                        <li className={current === '/candidate-saved-jobs' ? 'active' : ''}><Link href="/candidate-saved-jobs"><i className="fa-solid fa-bookmark me-2"></i>Shortlist Jobs</Link></li>
                        <li className={current === '/candidate-follow-employers' ? 'active' : ''}><Link href="/candidate-follow-employers"><i className="fa-solid fa-user-clock me-2"></i>Following experts</Link></li>
                        <li className={current === '/candidate-messages' ? 'active' : ''}><Link href="/candidate-messages"><i className="fa-solid fa-comments me-2"></i>Messages<span className="count-tag">4</span></Link></li>
                        <li className={current === '/candidate-change-password' ? 'active' : ''}><Link href="/candidate-change-password"><i className="fa-solid fa-unlock-keyhole me-2"></i>Change Password</Link></li>
                        <li className={current === '/candidate-delete-account' ? 'active' : ''}><Link href="/candidate-delete-account"><i className="fa-solid fa-trash-can me-2"></i>Delete Account</Link></li>
                        <li><Link href="/"><i className="fa-solid fa-power-off me-2"></i>Log Out</Link></li>
                    </ul>
                </div>					
            </div>
        </div>   
    </>
  )
}
