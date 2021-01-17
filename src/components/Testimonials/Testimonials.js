import React from "react";
import OwlCarousel from "react-owl-carousel";

import "./Testimonials.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import background from "../../public/images/overlay-bg.jpg";
import testimonial_1 from "../../public/images/testimonial-1.jpg";
import testimonial_2 from "../../public/images/testimonial-2.jpg";
import testimonial_3 from "../../public/images/testimonial-3.jpg";

const Testimonials = () => {
	return (
		<div className="testimonials paralax-mf bg-image" style={{ backgroundImage: `url(${background})` }}>
			<div className="overlay-mf"></div>
			<div className="container">
				<div className="row">
					<div className="col-md-12">
						<OwlCarousel items={1} className="owl-carousel owl-theme" loop mouseDrag autoplay>
							<div className="testimonial-box">
								<div className="author-test">
									<img src={testimonial_1} alt="" className="rounded-circle b-shadow-a" />
									<span className="author">Maja Muftić Dedović</span>
								</div>
								<div className="content-test">
									<p className="description lead">
										Alen is a true team player, a pleasant and affable person who can carry out everyday tasks
										with incredible ease and you can always rely on him. Alen is a capable, independent person
										with outstanding communication skills and successfully completes demanding business tasks.
										In addition, he is professional and committed to his job.
									</p>
									<span className="comit">
										<i className="fa fa-quote-right"></i>
									</span>
								</div>
							</div>
							<div className="testimonial-box">
								<div className="author-test">
									<img src={testimonial_2} alt="" className="rounded-circle b-shadow-a" />
									<span className="author">Admir Hadžić</span>
								</div>
								<div className="content-test">
									<p className="description lead">
										Alen is very hard working young man. Every challenge he met with upmost curiosity and
										professionalism. He will benefit any organization that is lucky to hire him.
									</p>
									<span className="comit">
										<i className="fa fa-quote-right"></i>
									</span>
								</div>
							</div>
							<div className="testimonial-box">
								<div className="author-test">
									<img src={testimonial_3} alt="" className="rounded-circle b-shadow-a" />
									<span className="author">Almir Vuk</span>
								</div>
								<div className="content-test">
									<p className="description lead">
										I met Alen while we were communicating and planning for my webinar session at "Platforma
										za progress - Academy". During the promotional-marketing phase of the webinar, he showed a
										quick response to all the questions and help that I needed in order to promote a webinar
										even better. Alen proved that he has a great set of soft-skills besides his developer
										career.
									</p>
									<span className="comit">
										<i className="fa fa-quote-right"></i>
									</span>
								</div>
							</div>
						</OwlCarousel>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonials;
