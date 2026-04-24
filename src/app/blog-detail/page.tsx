import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import NavBgWhite from '../components/navbar/nav-bg-white'
import FooterTopTwo from '../components/footer/footer-top-two'
import FooterLightTwo from '../components/footer/footer-light-two'
import ScrollToTop from '../components/scroll-to-top'


export default function BlogDetail() {
  return (
    <>
        <NavBgWhite/>

        <div className="page-bg">
            <div className="blog-thumb"><Image src='/img/slider-5.jpg' className="" alt="" width={0} height={0} sizes='100vw' style={{height:'100vh', width:'100%', objectFit:'cover'}}/></div>
        </div>   

            <section className="gray-simple">
				<div className="container">
					<div className="row">
						<div className="col-lg-8 col-md-12 col-sm-12 col-12">
							<div className="blog-details single-post-item format-standard mb-4">
								<div className="post-details">
									<div className="post-top-meta mb-2">
										<span className="pst-cats label text-success bg-success bg-opacity-05 me-2">Updates</span>
										<span className="pst-date label text-danger bg-danger bg-opacity-05">17 Feb 2023</span>
									</div>
									<h3 className="post-title lh-base">Why People Like NRI Suvidha & It's Team Managing?</h3>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br/><br/> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
									<div className="alert alert-success">
										<span className="icon"><i className="fas fa-quote-left"></i></span>
										<p className="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tem ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris nisi ut aliquip ex ea commodo onsequat.</p>
										<h5 className="name">- Rosalina Pong</h5>
									</div>
									<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error si voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem. <br/><br/>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem.</p>
									<div className="post-bottom-meta">
										<div className="post-tags">
											<h4 className="pbm-title">Related Tags</h4>
											<ul className="list">
												<li><Link href="#">organic</Link></li>
												<li><Link href="#">Foods</Link></li>
												<li><Link href="#">tasty</Link></li>
											</ul>
										</div>
									</div>
								</div>
								
								<div className="pst-foot-roiu">								
									<div className="post-share">
										<ul className="list">
											<li><i className="fa-solid fa-share-nodes"></i></li>
											<li><Link href="#"><i className="fab fa-facebook-f"></i></Link></li>
											<li><Link href="#"><i className="fab fa-twitter"></i></Link></li>
											<li><Link href="#"><i className="fab fa-linkedin-in"></i></Link></li>
											<li><Link href="#"><i className="fab fa-vk"></i></Link></li>
											<li><Link href="#"><i className="fab fa-tumblr"></i></Link></li>
										</ul>
									</div>
								</div>
							</div>
							
							<div className="blog-details single-post-item format-standard">
								<div className="post-details">
									<div className="comment-area">
										<div className="all-comments">
											<h3 className="comments-title">05 Comments</h3>
											<div className="comment-list">
												<ul>
													<li className="single-comment">
														<article>
															<div className="comment-author">
																<Image src='/img/user-1.png' width={80} height={80} className="img-fluid circle" alt=""/>
															</div>
															<div className="comment-details">
																<div className="comment-meta">
																	<div className="comment-left-meta">
																		<h4 className="author-name">Rosalina Kelian <span className="selected"><i className="fas fa-bookmark"></i></span></h4>
																		<div className="comment-date">19th May 2018</div>
																	</div>
																	<div className="comment-reply">
																		<Link href="#" className="reply"><span className="icona"><i className="ti-back-left"></i></span> Reply</Link>
																	</div>
																</div>
																<div className="comment-text">
																	<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
																</div>
															</div>
														</article>
														<ul className="children">
															<li className="single-comment">
																<article>
																	<div className="comment-author">
																		<Image src='/img/user-2.png' width={80} height={80} className="img-fluid circle" alt=""/>
																	</div>
																	<div className="comment-details">
																		<div className="comment-meta">
																			<div className="comment-left-meta">
																				<h4 className="author-name">Rosalina Kelian</h4>
																				<div className="comment-date">19th May 2018</div>
																			</div>
																			<div className="comment-reply">
																				<Link href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
																			</div>
																		</div>
																		<div className="comment-text">
																			<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab.perspiciatis unde omnis iste natus error.</p>
																		</div>
																	</div>
																</article>
																<ul className="children">
																	<li className="single-comment">
																		<article>
																			<div className="comment-author">
																				<Image src='/img/user-3.png' width={80} height={80} className="img-fluid circle" alt=""/>
																			</div>
																			<div className="comment-details">
																				<div className="comment-meta">
																					<div className="comment-left-meta">
																						<h4 className="author-name">Rosalina Kelian</h4>
																						<div className="comment-date">19th May 2018</div>
																					</div>
																					<div className="comment-reply">
																						<Link href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
																					</div>
																				</div>
																				<div className="comment-text">
																					<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
																				</div>
																			</div>
																		</article>
																	</li>
																</ul>
															</li>
														</ul>
													</li>
													<li className="single-comment">
														<article>
															<div className="comment-author">
																<img src='/img/user-4.png' className="img-fluid circle" alt=""/>
															</div>
															<div className="comment-details">
																<div className="comment-meta">
																	<div className="comment-left-meta">
																		<h4 className="author-name">Rosalina Kelian</h4>
																		<div className="comment-date">19th May 2018</div>
																	</div>
																	<div className="comment-reply">
																		<Link href="#" className="reply"><span className="icons"><i className="ti-back-left"></i></span> Reply</Link>
																	</div>
																</div>
																<div className="comment-text">
																	<p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim laborumab. perspiciatis unde omnis iste natus error.</p>
																</div>
															</div>
														</article>
													</li>
												</ul>
											</div>
										</div>
										<div className="comment-box submit-form">
											<h3 className="reply-title">Post Comment</h3>
											<div className="comment-form">
												<form action="#">
													<div className="row">
														<div className="col-lg-6 col-md-6 col-sm-12">
															<div className="form-group">
																<input type="text" className="form-control" placeholder="Your Name"/>
															</div>
														</div>
														<div className="col-lg-6 col-md-6 col-sm-12">
															<div className="form-group">
																<input type="text" className="form-control" placeholder="Your Email"/>
															</div>
														</div>
														<div className="col-lg-12 col-md-12 col-sm-12">
															<div className="form-group">
																<textarea name="comment" className="form-control" cols={30} rows={6} placeholder="Type your comments...."></textarea>
															</div>
														</div>
														<div className="col-lg-12 col-md-12 col-sm-12">
															<div className="form-group">
																<Link href="#" className="btn btn-main px-5">Submit Now</Link>
															</div>
														</div>
													</div>
												</form>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-4 col-md-12 col-sm-12 col-12">
							<div className="pg-side-groups">
								<div className="pg-side-block">
									<div className="pg-side-block-head">
										<div className="pg-side-left">
											<div className="pg-side-thumb"><Image src='/img/team-6.jpg' width={57} height={57} className="img-fluid circle" alt=""/></div>
										</div>
										<div className="pg-side-right">
											<div className="pg-side-right-caption">
												<h4>Ht. Mickle Hussy</h4>
												<span><i className="fa-solid fa-location-dot me-2"></i>New York, UK</span>
											</div>
										</div>
									</div>
									<div className="pg-side-block-body">
										<div className="pg-side-block-info">
											<div className="vl-elfo-group">
												<div className="vl-elfo-icon"><i className="fa-solid fa-phone-volume"></i></div>
												<div className="vl-elfo-caption"><h6>Call Us</h6><p>+91 586 847 5213</p></div>
											</div>
											<div className="vl-elfo-group">
												<div className="vl-elfo-icon"><i className="fa-regular fa-envelope"></i></div>
												<div className="vl-elfo-caption"><h6>Drop A Mail</h6><p>shreethemes@gmail.com</p></div>
											</div>
											<div className="vl-elfo-group">
												<div className="vl-elfo-icon"><i className="fa-solid fa-globe"></i></div>
												<div className="vl-elfo-caption"><h6>Website</h6><p>Https://shreethemes.com</p></div>
											</div>
										</div>
										<div className="pg-side-block-buttons">
											<div className="single-button"><Link href="#" className="btn fw-medium btn-main full-width"><i className="fa-solid fa-comments me-2"></i>Send A Message</Link></div>
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
