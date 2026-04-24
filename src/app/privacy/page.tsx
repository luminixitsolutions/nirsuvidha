import React from 'react'
import { privacyData } from '../data/data'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'

interface PrivacyData{
    title: string;
    desc1: string;
    desc2: string;
    desc3: string;
}

export default function Privacy() {
  return (
    <>
        <NavBgWhite/>

        <section className="bg-cover bg-second" style={{backgroundImage:`url('/img/bg2.png')`, backgroundRepeat:'no-repeat'}}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <h2 className="ipt-title text-light">Privacy Policy</h2>
                        <span className="ipn-subtitle text-light opacity-75">Check our Privacy and Policies</span>
                    </div>
                </div>
            </div>
        </section>

        <section className="gray-simple">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12">
                        <div className="box-block-wrap-group">
                            {privacyData.map((item:PrivacyData,index:number)=>( 
                                <div className="box-block-wrap" key={index}>
                                    <div className="box-block-wrap_header">
                                        <h4 className="box-block-wrap_title">{item.title}</h4>
                                    </div>
                                    
                                    <div className="box-block-wrap-body">
                                        <p>{item.desc1}</p>
                                        <p>{item.desc2}</p>
                                        <p>{item.desc3}</p>
                                    </div>
                                </div>
                            ))}
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
