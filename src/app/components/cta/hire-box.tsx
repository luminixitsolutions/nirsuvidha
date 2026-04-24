import React from 'react'
import Link from 'next/link'

export default function HireBox() {
  return (
        <section className="p-0">
            <div className="container-fluid px-0">
                <div className="row gx-0">
                
                    <div className="col-xl-6 col-lg-6 col-md-12 bg-dark">
                        <div className="hired-box-slack">
                            <div className="hired-box-caption">
                                <h2 className="text-light">Hire talents & experts for your web development</h2>
                                <p className="text-light fw-light opacity-75">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                            </div>
                            <div className="hired-box-btns">
                                <Link href="#" className="btn btn-lg btn-main font--bold px-5">Hire Talents</Link>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 bg-main">
                        <div className="hired-box-slack">
                            <div className="hired-box-caption">
                                <h2 className="text-light">We Are Expert In Web design and development</h2>
                                <p className="text-light fw-light opacity-75">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo</p>
                            </div>
                            <div className="hired-box-btns">
                                <Link href="#" className="btn btn-lg btn-dark font--bold px-5">Hire Our Team</Link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
  )
}
