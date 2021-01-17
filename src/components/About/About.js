import React from "react";
import portrait from "../../public/images/portrait.jpg";
import VisibilitySensor from "react-visibility-sensor";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";

import "./About.css";

const About = ({ isComponentVisible, scrollPosition }) => {
	return (
		<VisibilitySensor minTopValue="600" partialVisibility onChange={(isVisible) => isVisible && isComponentVisible("about")}>
			<section id="about" className="about-mf sect-pt4 route">
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="box-shadow-full">
								<div className="row">
									<div className="col-md-6">
										<div className="row">
											<div className="col-sm-6 col-md-5">
												<div className="about-img">
													<LazyLoadImage
														className="img-fluid rounded b-shadow-a"
														src={portrait}
														alt="Alen's portrait"
														scrollPosition={scrollPosition}
													/>
												</div>
											</div>
											<div className="col-sm-6 col-md-7">
												<div className="about-info">
													<p>
														<span className="title-s">Name: </span> <span>Alen Vlahovljak</span>
													</p>
													<p>
														<span className="title-s">Profile: </span> <span>Software Engineer</span>
													</p>
													<p>
														<span className="title-s">Company: </span> <a href="http://www.evolt.dev" target="_blank">Evolt d.o.o.</a>
													</p>
													<p>
														<span className="title-s">Email: </span>
														<span>alen.vlahovljak@evolt.dev</span>
													</p>
													<p>
														<span className="title-s">Skype: </span> <span>alen_vlahovljak</span>
													</p>
												</div>
											</div>
										</div>
										<div className="skill-mf">
											<p className="title-s">Skill</p>
											<span>Project Managment</span> <span className="pull-right">(KanBan)</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "40%" }}
													aria-valuenow="40"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
											<span>Front End</span> <span className="pull-right">(React + Redux)</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "70%" }}
													aria-valuenow="70"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
											<span>Back End</span> <span className="pull-right">(NodeJS, Express, MongoDB)</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "90%" }}
													aria-valuenow="90"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
											<span>Quality Assurance (QA)</span> <span className="pull-right">(Postman, Jest)</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "50%" }}
													aria-valuenow="50"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
											<span>DevOps</span> <span className="pull-right">(Heroku)</span>
											<div className="progress">
												<div
													className="progress-bar"
													role="progressbar"
													style={{ width: "30%" }}
													aria-valuenow="30"
													aria-valuemin="0"
													aria-valuemax="100"
												></div>
											</div>
										</div>
									</div>
									<div className="col-md-6">
										<div className="about-me pt-4 pt-md-0">
											<div className="title-box-2">
												<h5 className="title-left">About me</h5>
											</div>
											<p className="lead">
												Fourth year student at Faculty of Information Technologies. Experienced in building
												Front &amp; Back End solution. Preferred stack: MERN.
											</p>
											<p className="lead">
												Interested in learning and getting hands-on experience working with cutting edge
												technology such as: TypeScript, React Native, Flutter, Go, Scala.
											</p>
											<p className="lead">
												Interested in writing stories about JavaScript. Writer of JavaScript in Plain
												English (JSIPE), a Medium-partnered publication. We are one of the fastest-growing
												tech publications, receiving approx 1M hits per month.
											</p>
										</div>
										<a href="https://resume.io/r/09uDStQ3M" target="_blank">
											<button type="button" class="btn btn-lg btn-primary mt-5 btn-block">
												Check out my CV!
											</button>
										</a>
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

export default trackWindowScroll(About);
