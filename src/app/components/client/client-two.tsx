import Image from 'next/image'
import React from 'react'

export default function ClientTwo() {
  return (
        <div className="row justify-content-center">
            <div className="col-xl-9 col-lg-12 col-md-12">
                <div className="tab-content py-5" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-track-1" role="tabpanel" aria-labelledby="pills-track-1-tab" tabIndex={0}>
                        <div className="text-center">
                            <div className="mb-3">
                                <p className="m-0 fw-light fs-5">The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                            </div>
                            <div className="position-relative">
                                <h5 className="fw-semibold mb-0 lh-base">Chad B. Werner</h5>
                                <p className="fw-medium text-main m-0">Web Designer</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="pills-track-2" role="tabpanel" aria-labelledby="pills-track-2-tab" tabIndex={0}>
                        <div className="text-center">
                            <div className="mb-3">
                                <p className="m-0 fw-light fs-5">The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                            </div>
                            <div className="position-relative">
                                <h5 className="fw-semibold mb-0 lh-base">Melvin D. Fowler</h5>
                                <p className="fw-medium text-main m-0">Team Manager</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="pills-track-3" role="tabpanel" aria-labelledby="pills-track-3-tab" tabIndex={0}>
                        <div className="text-center">
                            <div className="mb-3">
                                <p className="m-0 fw-light fs-5">The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                            </div>
                            <div className="position-relative">
                                <h5 className="fw-semibold mb-0 lh-base">Chad B. Werner</h5>
                                <p className="fw-medium text-main m-0">Web Designer</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="tab-pane fade" id="pills-track-4" role="tabpanel" aria-labelledby="pills-track-4-tab" tabIndex={0}>
                        <div className="text-center">
                            <div className="mb-3">
                                <p className="m-0 fw-light fs-5">The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                            </div>
                            <div className="position-relative">
                                <h5 className="fw-semibold mb-0 lh-base">Sylvester B. Blevins</h5>
                                <p className="fw-medium text-main m-0">WordPress Developer</p>
                            </div>
                        </div>
                    </div>
                    
                    
                    <div className="tab-pane fade" id="pills-track-5" role="tabpanel" aria-labelledby="pills-track-5-tab" tabIndex={0}>
                        <div className="text-center">
                            <div className="mb-3">
                                <p className="m-0 fw-light fs-5">The wise man therefore always circumstances and owing to the claims of duty or the obligations holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains.</p>
                            </div>
                            <div className="position-relative">
                                <h5 className="fw-semibold mb-0 lh-base">Jacob R. Haynes</h5>
                                <p className="fw-medium text-main m-0">Sr. PHP Developer</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <ul className="nav nav-pills mt-3 text-center align-items-center justify-content-center" id="pills-tab" role="tablist">
                    <li className="nav-item p-2" role="presentation">
                        <a className="m-0 active" href="#" id="pills-track-1-tab" data-bs-toggle="pill" data-bs-target="#pills-track-1" type="button" role="tab" aria-controls="pills-track-1" aria-selected="true"><div className="p-2 border border-3 circle licroobr"><Image src='/img/team-1.jpg' className="img-fluid circle" width={80} height={80} alt=""/></div></a>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <a className="m-0" href="#" id="pills-track-2-tab" data-bs-toggle="pill" data-bs-target="#pills-track-2" type="button" role="tab" aria-controls="pills-track-2" aria-selected="false"><div className="p-2 border border-3 circle licroobr"><Image src='/img/team-2.jpg' className="img-fluid circle" width={80} height={80} alt=""/></div></a>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <a className="m-0" href="#" id="pills-track-3-tab" data-bs-toggle="pill" data-bs-target="#pills-track-3" type="button" role="tab" aria-controls="pills-track-3" aria-selected="false"><div className="p-2 border border-3 circle licroobr"><Image src='/img/team-3.jpg' className="img-fluid circle" width={80} height={80} alt=""/></div></a>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <a className="m-0" href="#" id="pills-track-4-tab" data-bs-toggle="pill" data-bs-target="#pills-track-4" type="button" role="tab" aria-controls="pills-track-4" aria-selected="false"><div className="p-2 border border-3 circle licroobr"><Image src='/img/team-4.jpg' className="img-fluid circle" width={80} height={80} alt=""/></div></a>
                    </li>
                    <li className="nav-item p-2" role="presentation">
                        <a className="m-0" href="#" id="pills-track-5-tab" data-bs-toggle="pill" data-bs-target="#pills-track-5" type="button" role="tab" aria-controls="pills-track-5" aria-selected="false"><div className="p-2 border border-3 circle licroobr"><Image src='/img/team-5.jpg' className="img-fluid circle" width={80} height={80} alt=""/></div></a>
                    </li>
                </ul>
                
            </div>
        </div>
  )
}
