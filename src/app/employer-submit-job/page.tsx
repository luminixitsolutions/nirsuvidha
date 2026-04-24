'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';
import Image from 'next/image';

const Select = dynamic(()=>import('react-select'),{ssr:false})

import Editor from 'react-simple-wysiwyg';

import AdminNavbarTwo from '../components/navbar/admin-navbar-two'
import AdminSidebarTwo from '../components/admin/admin-sidebar-two'
import ScrollToTop from '../components/scroll-to-top'

import { category, jobType, lavel,experience, qualification, gender, openings, jobFree, country, city } from '../data/select-option';

export default function EmployerSubmitJob() {
    const [html, setHtml] = useState<string>('Type Something');
    const [html2, setHtml2] = useState<string>('Type Something');
    const [html3, setHtml3] = useState<string>('Type Something');

    function onChange(e:any) {
        setHtml(e.target.value);
    }
    function onChange2(e:any) {
        setHtml2(e.target.value);
    }
    function onChange3(e:any) {
        setHtml3(e.target.value);
    }
  return (
    <>
        <AdminNavbarTwo/>  

        <div className="dashboard-wrap bg-light pt-0">
           <AdminSidebarTwo/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Request a service</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">Service Expert</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Request a service</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>

                <div className="dashboard-widg-bar d-block">
                    <div className="card">
                        <div className="card-header">
                            <h4>Basic Detail</h4>
                        </div>
                        <div className="card-body">
                            <form>
                                <div className="row">
                                
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="dash-prf-start justify-content-start align-items-start mb-2">
                                            <div className="dash-prf-start-upper mb-2">
                                                <div className="dash-prf-start-thumb">
                                                    <figure className="mb-0 square--100"><Image src='/img/l-5.png' width={100} height={100} className="img-fluid rounded" alt=""/></figure>
                                                </div>
                                            </div>
                                            <div className="dash-prf-start-bottom">
                                                <div className="upload-btn-wrapper small">
                                                    <button className="btn">Company Logo</button>
                                                    <input type="file" name="myfile"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Service title</label>
                                            <input type="text" className="form-control" placeholder="ex. Senior UI/UX Designer"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Service summary</label>
                                            <Editor value={html} onChange={onChange} />
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Responsibilities</label>
                                            <Editor value={html2} onChange={onChange2} />
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Qualifications</label>
                                            <Editor value={html3} onChange={onChange3} />
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Service Category</label>
                                            <div className="select-ops">
                                                <Select options={category}  className="form-control" placeholder="Web & Application"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Service Type</label>
                                            <div className="select-ops">
                                                <Select options={jobType}  className="form-control" placeholder="Full Time"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Priority</label>
                                            <div className="select-ops">
                                                <Select options={lavel}  className="form-control" placeholder="Team Leader"/>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Experience</label>
                                            <div className="select-ops">
                                                <Select options={experience}  className="form-control" placeholder="Fresher"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Qualification</label>
                                            <div className="select-ops">
                                                <Select options={qualification}  className="form-control" placeholder="10th Class"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Gender</label>
                                            <div className="select-ops">
                                                <Select options={gender}  className="form-control" placeholder="Male"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Min. Sallary</label>
                                            <input type="text" className="form-control" placeholder="ex. $5000"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Max. Sallary</label>
                                            <input type="text" className="form-control" placeholder="ex. $10000"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Start Date</label>
                                            <input type="text" className="form-control selectdate" placeholder="Choose Date"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Deadline</label>
                                            <input type="text" className="form-control selectdate" placeholder="Choose Date"/>
                                        </div>
                                    </div> 
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Service capacity</label>
                                            <div className="opening">
                                                <Select options={openings}  className="form-control" placeholder="01"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-6 col-lg-6 col-md-12">
                                        <div className="form-group">
                                            <label>Fee type</label>
                                            <div className="select-ops">
                                                <Select options={jobFree}  className="form-control" placeholder="Free"/>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Skills, Use Commas for saperate</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Permanent Address</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-xl-12 col-lg-12 col-md-12">
                                        <div className="form-group">
                                            <label>Temporary Address</label>
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
                                            <label>Video URL</label>
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
                                    
                                    <div className="col-xl-12 col-lg-12">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.383810516784!2d80.8789037751729!3d26.827742176697985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfe8bc34b51bb%3A0xa3ca86eec63f6f8!2sINFOSYS%20DIGITAL%20COMPUTER%20(Prabhat%20Computer%20Classes)!5e0!3m2!1sen!2sin!4v1681402268551!5m2!1sen!2sin" width="100%" height="450" style={{border:'0'}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                    
                                </div> 
                            </form>
                        </div>
                    </div>
                    
                    <div className="row">
                        <div className="col-lg-12 col-md-12">
                            <button type="submit" className="btn ft--medium btn-main px-5">Save & Preview</button>
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
