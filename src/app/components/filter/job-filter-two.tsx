'use client'
import React from 'react'
import Link from 'next/link';
import dynamic from 'next/dynamic';

const Select = dynamic(()=>import('react-select'),{ssr:false})

import { category } from '../../data/select-option';
import RangeSlider from '../range-slider';

export default function JobFilterTwo() {
  return (
    <div className="side-widget-blocks">							
        <div className="sidebar_header d-flex align-items-center justify-content-between px-4 py-3 br-bottom">
            <h4 className="fs-bold fs-5 mb-0">Search Filter</h4>
            <div className="ssh-header">
                <Link href="#" className="clear_all ft-medium text-muted">Clear All</Link>
                <a href="#search_open" data-bs-toggle="collapse" aria-expanded="false" role="button" className="collapsed _filter-ico ml-2"><i className="fa-solid fa-filter"></i></a>
            </div>
        </div>
        
        <div className="sidebar-widgets collapse miz_show" id="search_open" data-bs-parent="#search_open">
            <div className="search-inner">
                <div className="side-widget-inner">
                
                    <div className="form-group">
                        <label>Search By Keyword</label>
                        <div className="form-group-inner">
                            <input type="text" className="form-control" placeholder="Search by keywords..."/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Service Category</label>
                        <div className="form-group-inner">
                            <Select options={category}  className="form-control" placeholder="Choose category"/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Radius in Miles</label>
                        <div className="form-group-inner">
                            <RangeSlider/>
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Experience Level</label>
                        <div className="form-group-inner">
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
                    
                    <div className="form-group">
                        <label>Service Type</label>
                        <div className="form-group-inner">
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
                                        <input id="e4" className="form-check-input me-2" name="jtype" type="radio" />
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
                    
                    <div className="form-group">
                        <label>Priority</label>
                        <div className="form-group-inner">
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
                    
                    <div className="form-group">
                        <label>Posted Date</label>
                        <div className="form-group-inner">
                            <div className="inner_widget_link">
                                <ul className="no-ul-list filter-list">
                                    <li>
                                        <input id="l1" className="form-check-input me-2" name="hour" type="checkbox"/>
                                        <label htmlFor="l1" className="form-check-label">Last Hour</label>
                                    </li>
                                    <li>
                                        <input id="l2" className="form-check-input me-2" name="days" type="checkbox"/>
                                        <label htmlFor="l2" className="form-check-label">Last 24 hour</label>
                                    </li>
                                    <li>
                                        <input id="l3" className="form-check-input me-2" name="week" type="checkbox"/>
                                        <label htmlFor="l3" className="form-check-label">Last Week</label>
                                    </li>
                                    <li>
                                        <input id="l4" className="form-check-input me-2" name="month" type="checkbox"/>
                                        <label htmlFor="l4" className="form-check-label">Last 30 Days</label>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    
                    <div className="form-group mb-1">
                        <button type="button" className="btn btn-lg btn-main fs-6 fw-medium full-width">Search job</button>
                    </div>
                </div>
            </div>							
        </div>
    </div>
  )
}
