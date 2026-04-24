import React from 'react'

export default function PricingTwo() {
  return (
    <div className="row justify-content-center gx-4 gy-4">
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="card border rounded-4 p-4 mb-0">
                <div className="card-headers">
                    <div className="head-title-wroop mb-2">
                        <h6 className="text-main fw-bold mb-0">Free</h6>
                        <h4><sup className="fw-bold">$</sup><span className="fs-1">0</span><sub className="text-sm-muted">\month</sub></h4>
                    </div>
                    <div className="head-btn-wroop">
                        <button type="button" className="btn btn-md full-width btn-light-main fw-medium rounded-3">Get Started</button>
                    </div>
                </div>
                <hr/>
                <div className="card-body pb-0">
                    <ul className="row gy-4 p-0 pb-0">
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>3 Job Posting</li>
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>2 Featured jobs</li>
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Job Post For 30 Days</li>
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Lifetime Support</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="card border rounded-4 p-4 bg-main mb-0">
                <div className="card-headers">
                    <div className="head-title-wroop mb-2">
                        <h6 className="text-warning fw-bold mb-0">STANDARD</h6>
                        <h4 className="text-light"><sup className="fw-bold opacity-75">$</sup><span className="fs-1">29</span><sub className="text-sm-muted text-light opacity-75">\month</sub></h4>
                    </div>
                    <div className="head-btn-wroop">
                        <button type="button" className="btn btn-md full-width btn-warning fw-medium rounded-3">Get Started</button>
                    </div>
                </div>
                <hr/>
                <div className="card-body pb-0">
                    <ul className="row gy-4 p-0 pb-0">
                        <li className="fw-medium col-12 ps-0 text-light"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-light bg-transparent me-2"><i className="fa-solid fa-check"></i></span>10 Job Posting</li>
                        <li className="fw-medium col-12 ps-0 text-light"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-light bg-transparent me-2"><i className="fa-solid fa-check"></i></span>12+ service lines</li>
                        <li className="fw-medium col-12 ps-0 text-light"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-light bg-transparent me-2"><i className="fa-solid fa-check"></i></span>Job Post For 60 Days</li>
                        <li className="fw-medium col-12 ps-0 text-light"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-light bg-transparent me-2"><i className="fa-solid fa-check"></i></span>Lifetime Support</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="col-xl-4 col-lg-4 col-md-6">
            <div className="card border rounded-4 p-4 mb-0">
                <div className="card-headers">
                    <div className="head-title-wroop mb-2">
                        <h6 className="text-main fw-bold mb-0">EXTENDED</h6>
                        <h4><sup className="fw-bold">$</sup><span className="fs-1">79</span><sub className="text-sm-muted">\month</sub></h4>
                    </div>
                    <div className="head-btn-wroop">
                        <button type="button" className="btn btn-md full-width btn-light-main fw-medium rounded-3">Get Started</button>
                    </div>
                </div>
                <hr/>
                <div className="card-body pb-0">
                    <ul className="row gy-4 p-0 pb-0">
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>20 Job Posting</li>
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>25 Featured jobs</li>
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Job Post For 90 Days</li>
                        <li className="fw-medium col-12 ps-0"><span className="square--30 circle d-inline-flex align-items-center justify-content-center text-success bg-light-success me-2"><i className="fa-solid fa-check"></i></span>Lifetime Support</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}
