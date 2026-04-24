import React from 'react'
import Link from 'next/link';

import RangeSlider from '../range-slider';

export default function JobFilterOne() {
  return (
    <>
        <div className="bg-white rounded mb-3">							
        
            <div className="sidebar_header d-flex align-items-center justify-content-between px-4 py-3 br-bottom">
                <h4 className="fs-bold fs-5 mb-0">Search Filter</h4>
                <div className="ssh-header">
                    <Link href="#" className="clear_all ft-medium text-muted">Clear All</Link>
                    <Link href="#search_open" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed _filter-ico ml-2"><i className="fa-solid fa-filter"></i></Link>
                </div>
            </div>
            
            <div className="sidebar-widgets collapse miz_show" id="search_open" data-bs-parent="#search_open">
                
                <div className="search-inner">
                    
                    <div className="filter-search-box px-4 pt-3">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Search by keywords..."/>
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="Location, Zip.."/>
                        </div>
                    </div>
                    
                    <div className="filter_wraps">
                        
                        <div className="single_search_boxed px-4 pt-0 br-bottom">
                            <div className="widget-boxed-header">
                                <h4>
                                    <a href="#categories" className="ft-medium fs-md" data-bs-toggle="collapse" aria-expanded="true" role="button">Job Categories</a>
                                </h4>
                                
                            </div>
                            <div className="widget-boxed-body collapse show" id="categories" data-bs-parent="#categories">
                                <div className="side-list no-border">
                                    <div className="single_filter_card">
                                        <div className="card-body p-0">
                                            <div className="inner_widget_link">
                                                <ul className="no-ul-list filter-list">
                                                    <li>
                                                        <input id="a1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="a1" className="form-check-label">IT Computers (62)</label>
                                                    </li>
                                                    <li>
                                                        <input id="aa1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="aa1" className="form-check-label">Web Design (31)</label>
                                                    </li>
                                                    <li>
                                                        <input id="aa2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="aa2" className="form-check-label">Web development (20)</label>
                                                    </li>
                                                    <li>
                                                        <input id="aa3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="aa3" className="form-check-label">SEO Services (43)</label>
                                                    </li>
                                                    <li>
                                                        <input id="a2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="a2" className="form-check-label">Financial Service (16)</label>
                                                    </li>
                                                    <li>
                                                        <input id="a3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="a3" className="form-check-label">Art, Design, Media (22)</label>
                                                    </li>
                                                    <li>
                                                        <input id="a4" className="form-check-input me-2" name="Mother" type="checkbox"/>
                                                        <label htmlFor="a4" className="form-check-label">Coach & Education (21)</label>
                                                    </li>
                                                    <li>
                                                        <input id="a5" className="form-check-input me-2" name="Outdoor" type="checkbox"/>
                                                        <label htmlFor="a5" className="form-check-label">Apps Developements (17)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ab1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="ab1" className="form-check-label">IOS Development (12)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ab2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="ab2" className="form-check-label">Android Development (04)</label>
                                                    </li>
                                                    <li>
                                                        <input id="a6" className="form-check-input me-2" name="Pet" type="checkbox"/>
                                                        <label htmlFor="a6" className="form-check-label">Writing & Translation (04)</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                 
                        <div className="single_search_boxed px-4 pt-0 br-bottom">
                            <div className="widget-boxed-header">
                                <h4>
                                    <a href="#locations" data-bs-toggle="collapse" aria-expanded="false" role="button" className="ft-medium fs-md collapsed">Job Locations</a>
                                </h4>
                                
                            </div>
                            <div className="widget-boxed-body collapse" id="locations" data-bs-parent="#locations">
                                <div className="side-list no-border">
                                    <div className="single_filter_card">
                                        <div className="card-body p-0">
                                            <div className="inner_widget_link">
                                                <ul className="no-ul-list filter-list">
                                                    <li>
                                                        <input id="b1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="b1" className="form-check-label">Australia (21)</label>
                                                    </li>
                                                    <li>
                                                        <input id="b2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="b2" className="form-check-label">New Zeland (12)</label>
                                                    </li>
                                                    <li>
                                                        <input id="b3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="b3" className="form-check-label">United Kingdom (21)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ac1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="ac1" className="form-check-label">London (06)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ac2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="ac2" className="form-check-label">Manchester (07)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ac3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="ac3" className="form-check-label">Birmingham (08)</label>
                                                    </li>
                                                    <li>
                                                        <input id="b4" className="form-check-input me-2" name="Mother" type="checkbox"/>
                                                        <label htmlFor="b4" className="form-check-label">United State (04)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ad1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="ad1" className="form-check-label">New York (32)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ad2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="ad2" className="form-check-label">Washington (42)</label>
                                                    </li>
                                                    <li>
                                                        <input id="ad3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="ad3" className="form-check-label">Los Angeles (22)</label>
                                                    </li>
                                                    <li>
                                                        <input id="b5" className="form-check-input me-2" name="Outdoor" type="checkbox"/>
                                                        <label htmlFor="b5" className="form-check-label">India (15)</label>
                                                    </li>
                                                    <li>
                                                        <input id="b6" className="form-check-input me-2" name="Pet" type="checkbox"/>
                                                        <label htmlFor="b6" className="form-check-label">Singapore (09)</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_search_boxed px-4 pt-0 br-bottom">
                            <div className="widget-boxed-header">
                                <h4>
                                    <a href="#skills" data-bs-toggle="collapse" aria-expanded="false" role="button" className="ft-medium fs-md collapsed">Skills</a>
                                </h4>
                                
                            </div>
                            <div className="widget-boxed-body collapse" id="skills" data-bs-parent="#skills">
                                <div className="side-list no-border">
                                    <div className="single_filter_card">
                                        <div className="card-body p-0">
                                            <div className="inner_widget_link">
                                                <ul className="no-ul-list filter-list">
                                                    <li>
                                                        <input id="c1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="c1" className="form-check-label">Administrative (15)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="c2" className="form-check-label">iPhone & Android (33)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="c3" className="form-check-label">Java & AJAX (32)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c4" className="form-check-input me-2" name="Mother" type="checkbox"/>
                                                        <label htmlFor="c4" className="form-check-label">Account Manager (21)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c5" className="form-check-input me-2" name="Outdoor" type="checkbox"/>
                                                        <label htmlFor="c5" className="form-check-label">WordPress (32)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c6" className="form-check-input me-2" name="Pet" type="checkbox"/>
                                                        <label htmlFor="c6" className="form-check-label">Magento (42)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c7" className="form-check-input me-2" name="Beauty" type="checkbox"/>
                                                        <label htmlFor="c7" className="form-check-label">Shopify (12)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c8" className="form-check-input me-2" name="Bike" type="checkbox"/>
                                                        <label htmlFor="c8" className="form-check-label">PHP Script (08)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c9" className="form-check-input me-2" name="Phone" type="checkbox"/>
                                                        <label htmlFor="c9" className="form-check-label">Drupal (32)</label>
                                                    </li>
                                                    <li>
                                                        <input id="c11" className="form-check-input me-2" name="Private" type="checkbox"/>
                                                        <label htmlFor="c11" className="form-check-label">Joomla (50)</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_search_boxed px-4 pt-0">
                            <div className="widget-boxed-header">
                                <h4>
                                    <a href="#radiusmiles" data-bs-toggle="collapse" aria-expanded="false" role="button" className="ft-medium fs-md collapsed">Radius in Miles</a>
                                </h4>
                                
                            </div>
                            <div className="widget-boxed-body collapse show" id="radiusmiles" data-bs-parent="#radiusmiles">
                                <div className="side-list no-border">
                                    <div className="single_filter_card">
                                        <div className="card-body p-0">
                                            <RangeSlider/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_search_boxed px-4 pt-0 br-bottom">
                            <div className="widget-boxed-header">
                                <h4>
                                    <a href="#experience" data-bs-toggle="collapse" aria-expanded="false" role="button" className="ft-medium fs-md collapsed">Experience</a>
                                </h4>
                                
                            </div>
                            <div className="widget-boxed-body collapse" id="experience" data-bs-parent="#experience">
                                <div className="side-list no-border">
                                    <div className="single_filter_card">
                                        <div className="card-body p-0">
                                            <div className="inner_widget_link">
                                                <ul className="no-ul-list filter-list">
                                                    <li>
                                                        <input id="d1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="d1" className="form-check-label">Beginner (54)</label>
                                                    </li>
                                                    <li>
                                                        <input id="d2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="d2" className="form-check-label">1+ Year (32)</label>
                                                    </li>
                                                    <li>
                                                        <input id="d3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="d3" className="form-check-label">2 Year (09)</label>
                                                    </li>
                                                    <li>
                                                        <input id="d4" className="form-check-input me-2" name="Mother" type="checkbox"/>
                                                        <label htmlFor="d4" className="form-check-label">3+ Year (16)</label>
                                                    </li>
                                                    <li>
                                                        <input id="d5" className="form-check-input me-2" name="Outdoor" type="checkbox"/>
                                                        <label htmlFor="d5" className="form-check-label">4+ Year (17)</label>
                                                    </li>
                                                    <li>
                                                        <input id="d6" className="form-check-input me-2" name="Pet" type="checkbox"/>
                                                        <label htmlFor="d6" className="form-check-label">5+ Year (22)</label>
                                                    </li>
                                                    <li>
                                                        <input id="d7" className="form-check-input me-2" name="Beauty" type="checkbox"/>
                                                        <label htmlFor="d7" className="form-check-label">10+ Year (32)</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_search_boxed px-4 pt-0 br-bottom">
                            <div className="widget-boxed-header">
                                <h4>
                                    <a href="#jbtypes" data-bs-toggle="collapse" aria-expanded="false" role="button" className="ft-medium fs-md collapsed">Service Type</a>
                                </h4>
                                
                            </div>
                            <div className="widget-boxed-body collapse" id="jbtypes" data-bs-parent="#jbtypes">
                                <div className="side-list no-border">
                                    <div className="single_filter_card">
                                        <div className="card-body p-0">
                                            <div className="inner_widget_link">
                                                <ul className="no-ul-list filter-list">
                                                    <li>
                                                        <input id="e2" className="form-check-input me-2" name="jtype" type="radio"/>
                                                        <label htmlFor="e2" className="form-check-label">Full time</label>
                                                    </li>
                                                    <li>
                                                        <input id="e3" className="form-check-input me-2" name="jtype" type="radio"/>
                                                        <label htmlFor="e3" className="form-check-label">Part Time</label>
                                                    </li>
                                                    <li>
                                                        <input id="e4" className="form-check-input me-2" name="jtype" type="radio"/>
                                                        <label htmlFor="e4" className="form-check-label">Contract Base</label>
                                                    </li>
                                                    <li>
                                                        <input id="e5" className="form-check-input me-2" name="jtype" type="radio"/>
                                                        <label htmlFor="e5" className="form-check-label">Internship</label>
                                                    </li>
                                                    <li>
                                                        <input id="e6" className="form-check-input me-2" name="jtype" type="radio"/>
                                                        <label htmlFor="e6" className="form-check-label">Regular</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="single_search_boxed px-4 pt-0 br-bottom">
                            <div className="widget-boxed-header">
                                <h4>
                                    <a href="#jblevel" data-bs-toggle="collapse" aria-expanded="false" role="button" className="ft-medium fs-md collapsed">Job Level</a>
                                </h4>
                                
                            </div>
                            <div className="widget-boxed-body collapse" id="jblevel" data-bs-parent="#jblevel">
                                <div className="side-list no-border">
                                    <div className="single_filter_card">
                                        <div className="card-body p-0">
                                            <div className="inner_widget_link">
                                                <ul className="no-ul-list filter-list">
                                                    <li>
                                                        <input id="f1" className="form-check-input me-2" name="ADA" type="checkbox"/>
                                                        <label htmlFor="f1" className="form-check-label">Team Leader</label>
                                                    </li>
                                                    <li>
                                                        <input id="f2" className="form-check-input me-2" name="Parking" type="checkbox"/>
                                                        <label htmlFor="f2" className="form-check-label">Manager</label>
                                                    </li>
                                                    <li>
                                                        <input id="f3" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="f3" className="form-check-label">Junior</label>
                                                    </li>
                                                    <li>
                                                        <input id="f4" className="form-check-input me-2" name="Coffee" type="checkbox"/>
                                                        <label htmlFor="f4" className="form-check-label">Senior</label>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
                    <div className="form-group filter_button pt-3 pb-3 px-4">
                        <button type="submit" className="btn btn-main full-width">Search job</button>
                    </div>
                </div>							
            </div>
        </div>
        
        <div className="alert-jbemail-box bg-cover" style={{backgroundImage:`url('/img/alert-bg.png')`, backgroundColor:'#016551'}} data-overlay={0}>
            <div className="alert-bxr-wrap">
                <div className="alert-bxr-captions mb-3">
                    <h4 className="text-light">Get The Latest Jobs Right Into Your Inbox!</h4>
                    <p className="text-light opacity-75">We just want your email address!</p>
                </div>
                <div className="alert-bxr-forms">
                    <form>
                        <div className="newsltr-form">
                            <input type="text" className="form-control" placeholder="Enter Your email"/>
                            <button type="button" className="btn btn-subscribe bg-dark">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>   
    </>
  )
}
