import React from 'react'
import Link from 'next/link'

export default function Notification() {
  return (
    <div className="ground-list ground-list-hove">
        <div className="ground ground-single-list">
            <Link href="#">
                <div className="btn-circle-40 text-warning bg-warning bg-opacity-05"><i className="fas fa-home"></i></div>
            </Link>

            <div className="ground-content">
                <h6><Link href="#"><strong>Kr. Shaury Preet</strong> Replied your message</Link></h6>
                <span className="small">Just Now</span>
            </div>
        </div>
        
        <div className="ground ground-single-list">
            <Link href="#">
                <div className="btn-circle-40 text-danger bg-danger bg-opacity-05"><i className="fa-solid fa-comments"></i></div>
            </Link>

            <div className="ground-content">
                <h6><Link href="#">Mortin Denver accepted your resume on <strong>NRI Suvidha</strong></Link></h6>
                <span className="small">20 min ago</span>
            </div>
        </div>
        
        <div className="ground ground-single-list">
            <Link href="#">
                <div className="btn-circle-40 text-info bg-info bg-opacity-05"><i className="fa-solid fa-heart"></i></div>
            </Link>

            <div className="ground-content">
                <h6><Link href="#">Your job #456256 expired yesterday <strong>View More</strong></Link></h6>
                <span className="small">1 day ago</span>
            </div>
        </div>
        
        <div className="ground ground-single-list">
            <Link href="#">
                <div className="btn-circle-40 text-danger bg-danger bg-opacity-05"><i className="fa-solid fa-thumbs-up"></i></div>
            </Link>

            <div className="ground-content">
                <h6><Link href="#"><strong>Daniel Kurwa</strong> has been approved your resume!.</Link></h6>
                <span className="small">10 days ago</span>
            </div>
        </div>
        
        <div className="ground ground-single-list">
            <Link href="#">
                <div className="btn-circle-40 text-success bg-success bg-opacity-05"><i className="fa-solid fa-comment-dots"></i></div>
            </Link>

            <div className="ground-content">
                <h6><Link href="#">Khushi Verma left a review on <strong>Your Message</strong></Link></h6>
                <span className="small">Just Now</span>
            </div>
        </div>
    </div>
  )
}
