import React, {useState} from "react";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha"

import VisibilitySensor from "react-visibility-sensor";

import background from "../../public/images/overlay-bg.jpg";

const Contact = ({ isComponentVisible }) => {
	const [disabled, setDisabled] = useState(false);
	const [success, setSuccess] = useState("");
	const [error, setError] = useState('');

	function verifyCaptcha(value) {
		console.log("Captcha value:", value)
	}

	const handleSubmit = async(e)=>{
		const { REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, REACT_APP_USER_ID } = process.env;

		e.preventDefault();
		setDisabled(true);

		emailjs.sendForm(REACT_APP_SERVICE_ID, REACT_APP_TEMPLATE_ID, e.target, REACT_APP_USER_ID)
			.then((result)=>{
			if(result.status === 200) {
				setDisabled(false);
				setSuccess("Your message has been sent. Thank you!");
			}
		}).catch((err)=> {
			if(err.status !== 200){
				console.log('err', err)
				setError("Unable to send message. Try again later!");
			}
		});
	}

	return (
		<VisibilitySensor partialVisibility onChange={(isVisible) => isVisible && isComponentVisible("contact")}>
			<section
				className="paralax-mf footer-paralax bg-image sect-mt4 route"
				style={{ backgroundImage: `url(${background})` }}
			>
				<div className="overlay-mf"></div>
				<div className="container">
					<div className="row">
						<div className="col-sm-12">
							<div className="contact-mf">
								<div id="contact" className="box-shadow-full">
									<div className="row">
										<div className="col-md-6">
											<div className="title-box-2">
												<h5 className="title-left">Send Message Us</h5>
											</div>
											<div>
												<form
													onSubmit={handleSubmit}
													role="form"
													className="email-form"
												>
													<div className="row">
														<div className="col-md-12 mb-3">
															<div className="form-group">
																<input
																	required
																	disabled={disabled}
																	type="text"
																	name="name"
																	className="form-control"
																	id="name"
																	placeholder="Your Name"
																	data-rule="minlen:4"
																	data-msg="Please enter at least 4 chars"
																/>
																<div className="validate"></div>
															</div>
														</div>
														<div className="col-md-12 mb-3">
															<div className="form-group">
																<input
																	required
																	disabled={disabled}
																	type="email"
																	className="form-control"
																	name="email"
																	id="email"
																	placeholder="Your Email"
																	data-rule="email"
																	data-msg="Please enter a valid email"
																/>
																<div className="validate"></div>
															</div>
														</div>
														<div className="col-md-12 mb-3">
															<div className="form-group">
																<input
																	required
																	disabled={disabled}
																	type="text"
																	className="form-control"
																	name="subject"
																	id="subject"
																	placeholder="Subject"
																	data-rule="minlen:4"
																	data-msg="Please enter at least 8 chars of subject"
																/>
																<div className="validate"></div>
															</div>
														</div>
														<div className="col-md-12">
															<div className="form-group">
																<textarea
																	required
																	disabled={disabled}
																	className="form-control"
																	name="message"
																	rows="5"
																	data-rule="required"
																	data-msg="Please write something for us"
																	placeholder="Message"
																/>
																<div className="validate"/>
															</div>
														</div>
														<div className="col-md-12 text-center mb-3">
															{disabled && success &&
															<div className="spinner-border text-primary" role="status">
																<span className="sr-only">Loading...</span>
															</div>}
															{success ?
																<div className="sent-message">Your message has been sent. Thank you!</div> :
																<div className="error-message">{error.text}</div>
															}
														</div>
														<div className="col-md-12 text-center">
															<button disabled={disabled} type="submit" className="button button-a button-big button-rouded">
																Send Message
															</button>
														</div>
													</div>
												</form>
											</div>
										</div>
										<div className="col-md-6">
											<div className="title-box-2 pt-4 pt-md-0">
												<h5 className="title-left">Get in Touch</h5>
											</div>
											<div className="more-info">
												<p className="lead">Any questions? Feel free to ask.</p>
												<ul className="list-ico">
													<li>
														<span className="ion-ios-location"></span> 71000 Sarajevo, Bosnia and
														Herzegovina
													</li>

													<li>
														<span className="ion-email"></span> alen.vlahovljak@evolt.dev
													</li>
												</ul>
											</div>
											<div className="socials">
												<ul>
													<li>
														<a href="">
															<span className="ico-circle">
																<i className="ion-social-linkedin"></i>
															</span>
														</a>
													</li>
													<li>
														<a href="">
															<span className="ico-circle">
																<i className="ion-social-facebook"></i>
															</span>
														</a>
													</li>
													<li>
														<a href="">
															<span className="ico-circle">
																<i className="ion-social-instagram"></i>
															</span>
														</a>
													</li>
												</ul>
											</div>
											<ReCAPTCHA
												sitekey={process.env.REACT_APP_SITE_KEY}
												onChange={verifyCaptcha}
											/>
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

export default Contact;
