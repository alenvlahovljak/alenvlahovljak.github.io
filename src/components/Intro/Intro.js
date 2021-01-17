import React from "react";
import VisibilitySensor from "react-visibility-sensor";
import Typed from "react-typed";

import "./Intro.css";

import background from "../../public/images/intro-bg.jpg";

const Intro = ({ isComponentVisible }) => {
	return (
		<VisibilitySensor onChange={(isVisible) => isVisible && isComponentVisible("home")}>
			<div id="home" className="intro route bg-image" style={{ backgroundImage: `url(${background})` }}>
				<div className="overlay-itro"/>
				<div className="intro-content display-table">
					<div className="table-cell">
						<div className="container">
							<h1 className="intro-title mb-4">I am Alen Vlahovljak</h1>
							<p className="intro-subtitle">
								<Typed
									style={{ fontWeight: "bolder" }}
									strings={[
										"Software Engineer",
										"Content Writer",
										"Tech Enthusiast"

									]}
									typeSpeed={80}
									backSpeed={30}
									backDelay={1100}
									loop
								/>
							</p>
							<p className="pt-3">
								<a className="btn btn-primary btn js-scroll px-4" href="#portfolio" role="button">
									Learn More
								</a>
							</p>
						</div>
					</div>
				</div>
			</div>
		</VisibilitySensor>
	);
};

export default Intro;
