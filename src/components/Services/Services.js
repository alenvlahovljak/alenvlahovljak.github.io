import React from "react";
import VisibilitySensor from "react-visibility-sensor";

import "./Services.css";

const Services = ({ isComponentVisible }) => {
	return (
		<VisibilitySensor onChange={(isVisible) => isVisible && isComponentVisible("service")}>
			<section id="service" className="services-mf pt-5 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="title-box text-center">
								<h3 className="title-a">Services</h3>
								<p className="subtitle-a">Here's a list of things I can do for your.</p>
								<div className="line-mf"></div>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-monitor"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Design</h2>
									<p className="s-description text-center">Doing some UX/UI Design</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-code-working"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Web Development</h2>
									<p className="s-description text-center">Develop web applications from scratch!</p>
								</div>
							</div>
						</div>
						<div className="col-md-4">
							<div className="service-box">
								<div className="service-ico">
									<span className="ico-circle">
										<i className="ion-stats-bars"></i>
									</span>
								</div>
								<div className="service-content">
									<h2 className="s-title">Marketing Services</h2>
									<p className="s-description text-center">Content Writing</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</VisibilitySensor>
	);
};

export default Services;
