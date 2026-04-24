import React from 'react'
import Link from 'next/link'

export default function FooterTop() {
  return (
        <section className="bg-cover bg-second" style={{backgroundImage:`url('/img/footer-bg-dark.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-xl-7 col-lg-10 col-md-12 col-sm-12">
                        
                        <div className="call-action-wrap">
                            <div className="sec-heading center">
                                <h2 className="mb-3 lh-base text-light">Find the right service<br/>on NRI Suvidha That is Superb For You</h2>
                                <p className="text-light fs-6">Transparent guidance for NRIs and OCIs — secure processes and specialists who understand India regulations. et quas molestias</p>
                            </div>
                            <div className="call-action-buttons mt-3">
                                <Link href="#" className="btn btn-lg btn-main fw-medium px-xl-5 px-lg-4 me-2">Upload documents</Link>
                                <Link href="#" className="btn btn-lg btn-whites fw-medium px-xl-5 px-lg-4 text-main">Join Our Team</Link>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </section>
  )
}
