'use client'
import { usePathname } from 'next/navigation';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function AdminSidebarTwo() {
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
                            <Link href="/candidate-detail"><figure><Image src='/img/l-12.png' width={100} height={100} className="img-fluid circle" alt=""/></figure></Link>
                        </div>
                    </div>
                    <div className="jbs-grid-usrs-caption mb-3">
                        <div className="jbs-kioyer">
                            <span className="label text-light bg-main">05 Openings</span>
                        </div>
                        <div className="jbs-tiosk">
                            <h4 className="jbs-tiosk-title"><Link href="/candidate-detail">Instagram App</Link></h4>
                            <div className="jbs-tiosk-subtitle"><span><i className="fa-solid fa-location-dot me-2"></i>Canada</span></div>
                        </div>
                    </div>
                </div>
                <div className="dashboard-inner">
                    <ul data-submenu-title="Main Navigation">
                        <li className={current === '/employer-dashboard' ? 'active' : ''}><Link href="/employer-dashboard"><i className="fa-solid fa-gauge-high me-2"></i>User Dashboard</Link></li>
                        <li className={current === '/employer-profile' ? 'active' : ''}><Link href="/employer-profile"><i className="fa-regular fa-user me-2"></i>User Profile </Link></li>
                        <li className={current === '/employer-jobs' ? 'active' : ''}><Link href="/employer-jobs"><i className="fa-solid fa-business-time me-2"></i>My Jobs</Link></li>
                        <li className={current === '/employer-submit-job' ? 'active' : ''}><Link href="/employer-submit-job"><i className="fa-solid fa-pen-ruler me-2"></i>Submit Jobs</Link></li>
                        <li className={current === '/employer-applicants-jobs' ? 'active' : ''}><Link href="/employer-applicants-jobs"><i className="fa-solid fa-user-group me-2"></i>Applicants Jobs</Link></li>
                        <li className={current === '/employer-shortlist-candidates' ? 'active' : ''}><Link href="/employer-shortlist-candidates"><i className="fa-solid fa-user-clock me-2"></i>Shortlisted Candidates</Link></li>
                        <li className={current === '/employer-package' ? 'active' : ''}><Link href="/employer-package"><i className="fa-solid fa-wallet me-2"></i>Package</Link></li>
                        <li className={current === '/employer-messages' ? 'active' : ''}><Link href="/employer-messages"><i className="fa-solid fa-comments me-2"></i>Messages</Link></li>
                        <li className={current === '/employer-change-password' ? 'active' : ''}><Link href="/employer-change-password"><i className="fa-solid fa-unlock-keyhole me-2"></i>Change Password</Link></li>
                        <li className={current === '/employer-delete-account' ? 'active' : ''}><Link href="/employer-delete-account"><i className="fa-solid fa-trash-can me-2"></i>Delete Account</Link></li>
                        <li><Link href="/"><i className="fa-solid fa-power-off me-2"></i>Log Out</Link></li>
                    </ul>
                </div>					
            </div>
        </div>   
    </>
  )
}
