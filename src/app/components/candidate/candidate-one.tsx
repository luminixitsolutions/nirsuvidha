import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { candidateData } from '../../data/data'

interface Candidate{
    id: number;
    image: string;
    name: string;
    position: string;
    review: string;
    rate: string[];
    amount: string;
    exp: string;
    loction: string;
}

export default function CandidateOne({border}:{border:boolean}) {
  return (
        <div className="row justify-content-center gx-4 gy-4">
            {candidateData.slice(0,8).map((item:Candidate,index:number)=>( 
                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                    <div className={`jbs-grid-usrs-block ${border ? 'border' : ''}`}>
                        <div className="jbs-grid-usrs-thumb">
                            <div className="jbs-grid-yuo">
                                <Link href={`/candidate-detail/${item.id}`}><figure><Image src={item.image} width={0} height={0} sizes='100vw' style={{width:'100%', height:'auto'}} className="img-fluid circle" alt=""/></figure></Link>
                            </div>
                        </div>
                        <div className="jbs-grid-usrs-caption">
                            <div className="jbs-kioyer">
                                <div className="jbs-kioyer-groups">
                                    {item.rate.map((el,index)=>( 
                                        <span className={el} key={index}></span>
                                    ))}
                                    <span className="aal-reveis">{item.review}</span>
                                </div>
                            </div>
                            <div className="jbs-tiosk">
                                <h4 className="jbs-tiosk-title"><Link href={`/candidate-detail/${item.id}`}>{item.name}</Link></h4>
                                <div className="jbs-tiosk-subtitle"><span>{item.position}</span></div>
                            </div>
                        </div>
                        <div className="jbs-grid-usrs-info">
                            <div className="jbs-info-ico-style bold">
                                <div className="jbs-single-y1 style-2"><span><i className="fa-solid fa-sack-dollar"></i></span>{item.amount}</div>
                                <div className="jbs-single-y1 style-3"><span><i className="fa-solid fa-coins"></i></span>{item.exp}</div>
                            </div>
                        </div>
                        <div className="jbs-grid-usrs-contact">
                            <div className="jbs-btn-groups">
                                <Link href="#" className="btn btn-md btn-gray px-4">Message</Link>
                                <Link href={`/candidate-detail/${item.id}`} className={`btn btn-md px-4 ${border ? 'btn-light-main' :'btn-main'}`}>View Detail</Link>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
            
        </div>
  )
}
