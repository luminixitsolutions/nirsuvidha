import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { blogData } from '../data/data'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

interface BlogData{
    id: number;
    image: string;
    title: string;
    desc: string;
    date: string;
}

export default function Blog() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title text-light">Our Latest Updates</h2>
                        <span className="ipn-subtitle text-light opacity-75">Get all latest news and updates</span>
                    </div>
                </div>
            </div>
        </section>   

        <section className="gray-simple">
            <div className="container">
                <div className="row gx-4 gy-4">
                    <div className="col-lg-6 col-md-12">
                        <div className="blog-list-block">
                            <div className="blog-list-thumber">
                                <Link href="/blog-detail"><Image src='/img/blog-1.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/></Link>
                            </div>
                            <div className="blog-list-caption">
                                <div className="blog-info">
                                    <span className="label text-success bg-success bg-opacity-05">Education</span>
                                    <h4 className="bl-title"><Link href="/blog-detail">14 Newsletters You’ll Want in Your Inbox in 2023</Link></h4>
                                </div>
                                
                                <div className="blog-body">
                                    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                                </div>
                                
                                <div className="blg-authr d-flex align-items-center">
                                    <div className="blg-authr-thumb"><Image src='/img/team-1.jpg' className="img-fluid circle" width={45} height={45} alt=""/></div>
                                    <div className="blg-authr-caption ps-2">
                                        <h6 className="mb-0">Tamilore Oladipo</h6>
                                        <span className="text-mid">3 Days Ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 col-md-12">
                        <div className="blog-list-block">
                            <div className="blog-list-thumber">
                                <Link href="/blog-detail"><Image src='/img/blog-2.jpg' width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid rounded" alt=""/></Link>
                            </div>
                            <div className="blog-list-caption">
                                <div className="blog-info">
                                    <span className="label text-warning bg-warning bg-opacity-05">Resources</span>
                                    <h4 className="bl-title"><Link href="/blog-detail">How a Change in My Role Inspired Six Impactful Habits</Link></h4>
                                </div>
                                
                                <div className="blog-body">
                                    <p>These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled</p>
                                </div>
                                
                                <div className="blg-authr d-flex align-items-center">
                                    <div className="blg-authr-thumb"><Image src='/img/team-2.jpg' className="img-fluid circle" width={45} height={45} alt=""/></div>
                                    <div className="blg-authr-caption ps-2">
                                        <h6 className="mb-0">Angel J. Erickson</h6>
                                        <span className="text-mid">4 Days Ago</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {blogData.map((item:BlogData,index:number)=>( 
                        <div className="col-xl-4 col-lg-4 col-md-12 col-sm-12" key={index}>
                            <div className="jobstock-grid-blog">
                                <div className="jobstock-grid-blog-thumb">
                                    <Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid" alt=""/>
                                </div>
                                <div className="jobstock-grid-blog-body">
                                    <div className="jobstock-grid-body-header">
                                        <div className="jobstock-grid-posted bg-main mb-3"><span>{item.date}</span></div>
                                        <div className="jobstock-grid-title"><h4><Link href={`/blog-detail/${item.id}`}>{item.title}</Link></h4></div>
                                    </div>
                                    <div className="jobstock-grid-body-middle">
                                        <p>{item.desc}</p>
                                    </div>
                                    <div className="jobstock-grid-body-footer">
                                        <Link href={`/blog-detail/${item.id}`} className="btn btn-blog-link">Continue Reading</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <nav aria-label="Page navigation example">
                            <ul className="pagination">
                                <li className="page-item">
                                    <Link className="page-link" href="#" aria-label="Previous">
                                        <span aria-hidden="true">&laquo;</span>
                                    </Link>
                                </li>
                                <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">2</Link></li>
                                <li className="page-item active"><Link className="page-link" href="#">3</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                <li className="page-item"><Link className="page-link" href="#">6</Link></li>
                                <li className="page-item">
                                    <Link className="page-link" href="#" aria-label="Next">
                                        <span aria-hidden="true">&raquo;</span>
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>					
            </div>	
        </section>

        <FooterTopTwo/>

        <FooterLightTwo/>

        <ScrollToTop/>
    </>
  )
}
