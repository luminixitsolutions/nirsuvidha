'use client'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Select = dynamic(()=>import('react-select'),{ssr:false})

import { alerts, alerts2, avtarData, badges, buttonData } from '../data/help-data'
import { category } from '../data/select-option'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

interface Alert{
    title: string;
    style: string;
}

interface Avtar{
    image: string;
    style: string;
}

interface Badges{
    name: string;
    style: string;
}

interface Button{
    name: string;
    style: string;
}

export default function Help() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title text-light">Help & Component</h2>
                        <span className="ipn-subtitle text-light opacity-75">Check all elements and components</span>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className="container">
                <div className="row mb-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Headings</h3>
                            <h1>h1. Bootstrap heading</h1>
                            <h2>h2. Bootstrap heading</h2>
                            <h3>h3. Bootstrap heading</h3>
                            <h4>h4. Bootstrap heading</h4>
                            <h5>h5. Bootstrap heading</h5>
                            <h6>h6. Bootstrap heading</h6>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Buttons</h3>
                            <div className="d-flex flex-wrap gap-2">
                                {buttonData.map((item:Button,index:number)=>( 
                                    <button type="button" className={item.style} key={index}>{item.name}</button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="row mb-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Alerts</h3>
                            {alerts.map((item:Alert,index:number)=>( 
                                <div className={item.style} role="alert" key={index}>
                                    {item.title}
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Alert Links</h3>
                            {alerts2.map((item:Alert,index:number)=>( 
                                <div className={item.style} role="alert" key={index}>
                                    {item.title} <Link href="#" className="alert-link">an example link</Link>. Give it a click if you like.
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Badges</h3>
                            <div className="d-flex flex-wrap gap-2 mb-4">
                                {badges.map((item:Badges,index:number)=>( 
                                    <span className={item.style} key={index}>{item.name}</span>
                                ))}
                            </div>
                            
                            <h3>Avatar</h3>
                            <div className="d-flex align-items-center flex-wrap gap-3 mb-4">
                                {avtarData.map((item:Avtar,index:number)=>( 
                                    <div className={item.style} key={index}><img src={item.image} className="img-fluid circle" alt=""/></div>
                                ))}
                            </div>
                            
                            <h3>Pagination</h3>
                            <div className="pagination-wrap">
                                <nav aria-label="...">
                                    <ul className="pagination">
                                        <li className="page-item"><Link href="#" className="page-link">Previous</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">1</Link></li>
                                        <li className="page-item active">
                                            <Link className="page-link" href="#" aria-current="page">2</Link>
                                        </li>
                                        <li className="page-item"><Link className="page-link" href="#">3</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">4</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">5</Link></li>
                                        <li className="page-item"><Link className="page-link" href="#">Next</Link></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Form Elements</h3>
                            
                            <div className="form-froup mb-3">	
                                <label>Simple input Field</label>
                                <input type="text" className="form-control" placeholder="Your Name"/>
                            </div>
                            
                            <div className="form-froup mb-3">	
                                <label>Field with Icon</label>
                                <div className="position-relative">
                                    <input type="text" className="form-control ps-5" placeholder="Your Name"/>
                                    <span className="position-absolute top-50 start-0 translate-middle ms-4"><i className="bi bi-search text-muted"></i></span>
                                </div>
                            </div>
                            
                            <div className="form-froup mb-3">
                                <label>Floating Field</label>
                                <div className="form-floating">
                                    <input type="email" className="form-control" placeholder="Your email"/>
                                    <label>Email</label>
                                </div>
                            </div>
                            
                            <div className="form-froup mb-3">
                                <label>Select Box</label>
                                <div className="select-ops">
                                    <Select options={category} placeholder="Banking" className="form-control"/>
                                </div>
                            </div>
                            
                            <div className="form-froup mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="checkbox" id="fields"/>
                                    <label className="form-check-label" htmlFor="fields">Check Box Design</label>
                                </div>
                            </div>
                            
                            <div className="form-froup mb-3">
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gen" id="male" defaultChecked/>
                                    <label className="form-check-label" htmlFor="fields">Male</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input className="form-check-input" type="radio" name="gen" id="Female"/>
                                    <label className="form-check-label" htmlFor="fields">Female</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-5">
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Accordion</h3>
                            <div className="accordion" id="accordionExample">
                                <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    Accordion Item #1
                                    </button>
                                </h2>
                                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <strong>This is the first item’s accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    Accordion Item #2
                                    </button>
                                </h2>
                                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <strong>This is the second item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                                </div>
                                <div className="accordion-item">
                                <h2 className="accordion-header">
                                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    Accordion Item #3
                                    </button>
                                </h2>
                                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                    <div className="accordion-body">
                                    <strong>This is the third item’s accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It’s also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-xl-6 col-lg-6 col-md-12 col-12">
                        <div className="elements-wrap">
                            <h3>Navs and tabs</h3>
                            <div className="d-block mb-4">
                                <ul className="nav nav-tabs mb-3" id="myTab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Home</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Profile</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                        <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Contact</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabIndex={0}>
                                        Lorem ipsum dolor sit amet, copiosae temporibus ea quo, cum clita gloriatur consetetur ad. In munere nostrud repudiare vim, vix diam integre pertinax in. At his modo iracundia sententiae. Sea ex nulla deterruisset, id deleniti repudiandae pro. Rebum inermis et nam. Nec rebum solet te.
                                    </div>
                                    <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabIndex={0}>
                                        Lorem ipsum dolor sit amet, copiosae temporibus ea quo, cum clita gloriatur consetetur ad. In munere nostrud repudiare vim, vix diam integre pertinax in. At his modo iracundia sententiae. Sea ex nulla deterruisset, id deleniti repudiandae pro. Rebum inermis et nam. Nec rebum solet te.
                                    </div>
                                    <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabIndex={0}>
                                        Lorem ipsum dolor sit amet, copiosae temporibus ea quo, cum clita gloriatur consetetur ad. In munere nostrud repudiare vim, vix diam integre pertinax in. At his modo iracundia sententiae. Sea ex nulla deterruisset, id deleniti repudiandae pro. Rebum inermis et nam. Nec rebum solet te.
                                    </div>
                                </div>
                            </div>
                            
                            <div className="d-block mb-4">
                                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Home</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                                    </li>
                                    <li className="nav-item" role="presentation">
                                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                                    </li>
                                </ul>
                                <div className="tab-content" id="pills-tabContent">
                                    <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabIndex={0}>
                                        Lorem ipsum dolor sit amet, copiosae temporibus ea quo, cum clita gloriatur consetetur ad. In munere nostrud repudiare vim, vix diam integre pertinax in. At his modo iracundia sententiae. Sea ex nulla deterruisset, id deleniti repudiandae pro. Rebum inermis et nam. Nec rebum solet te.
                                    </div>
                                    <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabIndex={0}>
                                        Lorem ipsum dolor sit amet, copiosae temporibus ea quo, cum clita gloriatur consetetur ad. In munere nostrud repudiare vim, vix diam integre pertinax in. At his modo iracundia sententiae. Sea ex nulla deterruisset, id deleniti repudiandae pro. Rebum inermis et nam. Nec rebum solet te.
                                    </div>
                                    <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabIndex={0}>
                                        Lorem ipsum dolor sit amet, copiosae temporibus ea quo, cum clita gloriatur consetetur ad. In munere nostrud repudiare vim, vix diam integre pertinax in. At his modo iracundia sententiae. Sea ex nulla deterruisset, id deleniti repudiandae pro. Rebum inermis et nam. Nec rebum solet te.
                                    </div>
                                </div>
                            </div>
                        </div>
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
