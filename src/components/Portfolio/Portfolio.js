import React from "react";
import { NavLink } from "react-router-dom";
import VisibilitySensor from "react-visibility-sensor";

import "./Portfolio.css";

import work1 from "../../public/images/work-1.png";

const Portfolio = ({ isComponentVisible }) => {
	return (
		<VisibilitySensor onChange={(isVisible) => isVisible && isComponentVisible("work")}>
			<section id="work" className="portfolio-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Portfolio</h3>
								<p className="subtitle-a">I'm looking to expand my portfolio while I'm young.</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="work-box">
								<a href="/work/work-1" data-gall="portfolioGallery" className="venobox">
									<div className="work-img">
										<img src={work1} alt="" className="img-fluid" />
									</div>
								</a>
								<div className="work-content">
									<div className="row">
										<div className="col-sm-8">
											<h2 className="w-title">Go Crypto</h2>
											<div className="w-more">
												<span className="w-ctegory">Web Development</span> /
												<span className="w-date">Still Going</span>
											</div>
										</div>
										<div className="col-sm-4">
											<div className="w-like">
												<NavLink to="/work/distance-learning-platform">
													<span className="ion-ios-plus-outline"></span>
												</NavLink>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</VisibilitySensor>
	);
};

export default Portfolio;
