import React from 'react'
import Link from 'next/link'
import Image from 'next/image';

import AdminNavbar from '../components/navbar/admin-navbar'
import AdminSidebar from '../components/admin/admin-sidebar'
import ScrollToTop from '../components/scroll-to-top';

import { messageData } from '../data/admin';

interface Message{
    image: string;
    name: string;
    time: string;
    message: string;
    status: string;
}

export default function CandidateMessages() {
  return (
    <>
        <AdminNavbar/>

        <div className="dashboard-wrap pt-0 bg-light">
            <AdminSidebar/>
            
            <div className="dashboard-content">
                <div className="dashboard-tlbar d-block mb-4">
                    <div className="row">
                        <div className="colxl-12 col-lg-12 col-md-12">
                            <h1 className="mb-1 fs-3 fw-medium">Message Inbox</h1>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item text-muted"><Link href="#">NRI Client</Link></li>
                                    <li className="breadcrumb-item text-muted"><Link href="#">Dashboard</Link></li>
                                    <li className="breadcrumb-item"><Link href="#" className="text-main">Chat & Messages</Link></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
                
                <div className="dashboard-widg-bar d-block">
                    
                    <div className="messages-container margin-top-0">
                        <div className="messages-headline">
                            <h4>Connor Griffin</h4>
                            <Link href="#" className="message-action"><i className="ti-trash"></i> Delete Conversation</Link>
                        </div>

                        <div className="messages-container-inner">

                            <div className="dash-msg-inbox">
                                <ul>
                                    {messageData.map((item:Message,index:number)=>( 
                                        <li key={index}>
                                            <Link href="#">
                                                <div className="dash-msg-avatar"><Image src={item.image} width={40} height={40} alt=""/>
                                                    {item.status === 'online' && <span className="_user_status online"></span>}
                                                    {item.status === 'offline' && <span className="_user_status offline"></span>}
                                                    {item.status === 'busy' && <span className="_user_status busy"></span>}
                                                </div>

                                                <div className="message-by">
                                                    <div className="message-by-headline">
                                                        <h5>{item.name}</h5>
                                                        <span>{item.time}</span>
                                                    </div>
                                                    <p>{item.message}</p>
                                                </div>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="dash-msg-content">
                                <div className="message-plunch">
                                    <div className="dash-msg-avatar"><Image src='/img/user-5.png' width={50} height={50} alt=""/></div>
                                    <div className="dash-msg-text"><p>Hello, Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin</p></div>
                                </div>

                                <div className="message-plunch me">
                                    <div className="dash-msg-avatar"><Image src='/img/user-6.png' width={50} height={50} alt=""/></div>
                                    <div className="dash-msg-text"><p>looked up one of the more obscure Latin words, consectetur, from a Lorem</p></div>
                                </div>

                                <div className="message-plunch">
                                    <div className="dash-msg-avatar"><Image src='/img/user-5.png' width={50} height={50} alt=""/></div>
                                    <div className="dash-msg-text"><p>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing</p></div>
                                </div>

                                <div className="message-plunch me">
                                    <div className="dash-msg-avatar"><Image src='/img/user-6.png' width={50} height={50} alt=""/></div>
                                    <div className="dash-msg-text"><p>please consider donating a small sum to help pay for the hosting and bandwidth bill.</p></div>
                                </div>

                                <div className="message-plunch">
                                    <div className="dash-msg-avatar"><Image src='/img/user-5.png' width={50} height={50} alt=""/></div>
                                    <div className="dash-msg-text"><p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p></div>
                                </div>

                                <div className="message-plunch me">
                                    <div className="dash-msg-avatar"><Image src='/img/user-6.png' width={50} height={50} alt=""/></div>
                                    <div className="dash-msg-text"><p>numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p></div>
                                </div>

                                <div className="message-plunch">
                                    <div className="dash-msg-avatar"><Image src='/img/user-5.png' width={50} height={50} alt=""/></div>
                                    <div className="dash-msg-text"><p>But I must explain to you how all this mistaken idea of denouncing pleasure</p></div>
                                </div>
                                
                                <div className="clearfix"></div>
                                <div className="message-reply">
                                    <textarea cols={40} rows={3} className="form-control with-light" placeholder="Your Message"></textarea>
                                    <button type="submit" className="btn btn-main">Send Message</button>
                                </div>
                                
                            </div>

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
