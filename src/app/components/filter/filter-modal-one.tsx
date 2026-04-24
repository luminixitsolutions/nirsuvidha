import React from 'react'
import RangeSlider from '../range-slider'

export default function FilterModalOne() {
  return (
    <>
        <div className={`modal fade `} id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true" style={{backgroundColor:'#0000007d'}}>
            <div className="modal-dialog modal-dialog-centered filter-popup">
                <div className="modal-content">
                    <span className="mod-close" data-bs-dismiss="modal"><i className="fas fa-close"></i></span>
                    <div className="modal-header">
                        <h4 className="modal-header-sub-title text-dark">Start Your Filter</h4>
                    </div>
                    <div className="modal-body p-0">
                        <div className="filter-content">
                            <div className="full-tabs-group">
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>Job Match Score</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="d-flex flex-wrap">
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="msix"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="msix">6.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="msixfive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="msixfive">6.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="mseven"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="mseven">7.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="msevenfive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="msevenfive">7.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="meight"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="meight">8.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="meightfive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="meightfive">8.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="mnine"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="mnine">9.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="mninefive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="mninefive">9.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="mten"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="mten">10</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>Job Value Score</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="d-flex flex-wrap">
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="vsix"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="vsix">6.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="vsixfive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="vsixfive">6.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="vseven"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="vseven">7.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="vsevenfive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="vsevenfive">7.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="veight"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="veight">8.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="veightfive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="veightfive">8.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="vnine"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="vnine">9.0</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="vninefive"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="vninefive">9.5</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="vten"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="vten">10</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>Place Of Work</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="d-flex flex-wrap">
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="anywhere"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="anywhere">Anywhere</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="onsite"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="onsite">On Site</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="remote"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="remote">Fully Remote</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>Type Of Contract</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="d-flex flex-wrap">
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="employee1"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="employee1">Employee</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="frelancers1"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="frelancers1">Freelancer</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="contractor1"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="contractor1">Contractor</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="internship1"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="internship1">Internship</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>Type Of Employment</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="d-flex flex-wrap">
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="fulltime"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="fulltime">Full Time</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="parttime"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="parttime">Part Time</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="freelance2"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="freelance2">Freelance</label>
                                            </div>
                                            <div className="sing-btn-groups">
                                                <input type="checkbox" className="btn-check" id="internship2"/>
                                                <label className="btn btn-md btn-outline-main font--bold rounded-5" htmlFor="internship2">Internship</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>Radius In Miles</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                    <RangeSlider/>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>All-in-One NRI Services</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <ul className="row p-0 m-0">
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-1" className="form-check-input" name="s-1" type="checkbox"/>
                                                    <label htmlFor="s-1" className="form-check-label">IT Computers</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-2" className="form-check-input" name="s-2" type="checkbox"/>
                                                    <label htmlFor="s-2" className="form-check-label">Web Design</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-3" className="form-check-input" name="s-3" type="checkbox"/>
                                                    <label htmlFor="s-3" className="form-check-label">Web development</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-4" className="form-check-input" name="s-4" type="checkbox"/>
                                                    <label htmlFor="s-4" className="form-check-label">SEO Services</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-5" className="form-check-input" name="s-5" type="checkbox"/>
                                                    <label htmlFor="s-5" className="form-check-label">Financial Service</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-6" className="form-check-input" name="s-6" type="checkbox"/>
                                                    <label htmlFor="s-6" className="form-check-label">Art, Design, Media</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-7" className="form-check-input" name="s-7" type="checkbox"/>
                                                    <label htmlFor="s-7" className="form-check-label">Coach & Education</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-8" className="form-check-input" name="s-8" type="checkbox"/>
                                                    <label htmlFor="s-8" className="form-check-label">Apps Developements</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-9" className="form-check-input" name="s-9" type="checkbox"/>
                                                    <label htmlFor="s-9" className="form-check-label">IOS Development</label>
                                                </div>
                                            </li>
                                            <li className="col-lg-6 col-md-6 p-0">
                                                <div className="form-check form-check-inline">
                                                    <input id="s-10" className="form-check-input" name="s-10" type="checkbox"/>
                                                    <label htmlFor="s-10" className="form-check-label">Android Development</label>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                
                                <div className="single-tabs-group">
                                    <div className="single-tabs-group-header text-dark h6"><span>Keywords</span></div>
                                    
                                    <div className="single-tabs-group-content">
                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Design, Java, Python, WordPress etc..."/>
                                        </div>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <div className="filt-buttons-updates">
                            <button type="button" className="btn btn-dark">Clear Filter</button>
                            <button type="button" className="btn btn-main">Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>   
    </>
  )
}
