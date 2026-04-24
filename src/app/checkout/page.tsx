'use client'
import React from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'

const Select = dynamic(()=>import('react-select'),{ssr:false})

import { city, country } from '../data/select-option'

import NavBgBlack from '../components/navbar/nav-bg-black'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

export default function Checkout() {
  return (
    <>
        <NavBgBlack/>

        <section className="bg-cover bg-main" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title text-light">Checkout</h2>
                        <span className="ipn-subtitle text-light opacity-75">Complete your checkout and proceed</span>
                    </div>
                </div>
            </div>
        </section>

        <section>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="alert alert-success text-center" role="alert">
                            Hi Dear, Have you already an account? <Link href="/login">Please Login</Link>
                        </div>
                    </div>
                    
                    <div className="col-lg-12 col-md-12">	
                        <div id="login-frm" className="collapse mb-5">
                            <div className="row">
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control border" placeholder="Username"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-6">
                                    <div className="form-group">
                                        <input type="text" className="form-control border" placeholder="*******"/>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-4 col-sm-12">
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-main full-width">Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row form-submit">
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="row m-0">
                            <div className="submit-page">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <h3>Billing Detail</h3>
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Name<i className="req">*</i></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Email<i className="req">*</i></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Company Name</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Country<i className="req">*</i></label>
                                            <Select options={country} placeholder="United State" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Street<i className="req">*</i></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Apartment</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Town/City<i className="req">*</i></label>
                                            <Select options={city} placeholder="Lucknow" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>State<i className="req">*</i></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Postcode/Zip<i className="req">*</i></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Phone<i className="req">*</i></label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <label>Landline</label>
                                            <input type="text" className="form-control"/>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12 col-md-12 col-sm-12">
                                        <div className="form-group">
                                            <label>Additional Information</label>
                                            <textarea className="form-control ht-50"></textarea>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-6 col-md-6 col-sm-12">
                                        <div className="form-group">
                                            <input id="al-2" className="form-check-input" name="al-2" type="checkbox"/>
                                            <label htmlFor="al-2" className="form-check-label">Create An Account</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="panel-group pay_opy980" id="payaccordion">
                            <div className="panel panel-default">
                                <div className="panel-heading" id="pay">
                                    <h4 className="panel-title">
                                        <Link data-bs-toggle="collapse" role="button" data-bs-parent="#payaccordion" href="#payPal"  aria-controls="payPal" aria-expanded="true" className="">PayPal</Link>
                                    </h4>
                                </div>
                                <div id="payPal" className="panel-collapse collapse show" aria-labelledby="pay" data-bs-parent="#payaccordion">
                                    <div className="panel-body">
                                        <form>
                                            <div className="form-group">
                                                <label>PayPal Email</label>
                                                <input type="text" className="form-control simple" placeholder="paypal@gmail.com"/>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-main full-width">Pay 400.00 USD</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="panel panel-default">
                                <div className="panel-heading" id="stripes">
                                    <h4 className="panel-title">
                                        <Link data-bs-toggle="collapse" role="button" data-bs-parent="#payaccordion" href="#stripePay"  aria-controls="stripePay" className="">Stripe</Link>
                                    </h4>
                                </div>
                                <div id="stripePay" className="zcollapse" aria-labelledby="stripes" data-bs-parent="#payaccordion">
                                    <div className="panel-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Card Holder Name</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Card Number</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>									
                                            
                                                <div className="col-lg-5 col-md-5 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Expire Month</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-5 col-md-5 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Expire Year</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-2 col-md-2 col-sm-12">
                                                    <div className="form-group">
                                                        <label>CVC</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>										
                                                
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input id="am-2" className="form-check-input" name="am-2" type="checkbox"/>
                                                        <label htmlFor="am-2" className="form-check-label">By Continuing, you ar'e agree to conditions</label>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group text-center">
                                                        <Link href="#" className="btn btn-main full-width">Pay 202.00 USD</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="panel panel-default">
                                <div className="panel-heading" id="dabit">
                                    <h4 className="panel-title">
                                        <Link data-bs-toggle="collapse" role="button" href="#payaccordion" data-bs-target="#debitPay"  aria-controls="debitPay" className="">Debit Or Credit</Link>
                                    </h4>
                                </div>
                                <div id="debitPay" className="panel-collapse collapse" aria-labelledby="dabit" data-bs-parent="#payaccordion">
                                    <div className="panel-body">
                                        <form>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Card Holder Name</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <label>Card Number</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>									
                                                <div className="col-lg-5 col-md-5 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Expire Month</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-5 col-md-5 col-sm-6">
                                                    <div className="form-group">
                                                        <label>Expire Year</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-2 col-md-2 col-sm-12">
                                                    <div className="form-group">
                                                        <label>CVC</label>
                                                        <input type="text" className="form-control"/>
                                                    </div>
                                                </div>										
                                                
                                                <div className="col-lg-6 col-md-6 col-sm-12">
                                                    <div className="form-group">
                                                        <input id="aj-2" className="form-check-input" name="aj-2" type="checkbox"/>
                                                        <label htmlFor="aj-2" className="form-check-label">By Continuing, you ar'e agree to conditions</label>
                                                    </div>
                                                </div>
                                                
                                                <div className="col-lg-12 col-md-12 col-sm-12">
                                                    <div className="form-group text-center">
                                                        <Link href="#" className="btn btn-main full-width">Pay 202.00 USD</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        <div className="check-ourio-wrap bg-light border-0 p-3">
                            <div className="check-ourio-head border-0 pb-0"><h5>Order Summary</h5></div>
                            <div className="check-ourio-caption">
                                <div className="booking-info-try rounded p-0 mb-3">
                                    <ul>
                                        <li><h6>#125469</h6><span>$87,000</span></li>
                                        <li><h6>#125492</h6><span>$95,000</span></li>
                                        <li><h6>GST</h6><span>$12,417</span></li>
                                        <li><h6>Tax</h6><span>$72,000</span></li>
                                        <li><h6 className="total-title">Total</h6><span className="total-price">$$2,14570</span></li>
                                    </ul>
                                </div>
                                <button className="btn btn-dark fw-medium full-width">Confirm Payment</button>
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
