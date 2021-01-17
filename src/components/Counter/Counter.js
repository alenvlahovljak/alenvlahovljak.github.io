import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import counterUp from "counterup2";

import "./Counter.css";

import background from "../../public/images/counters-bg.jpg";

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = { once: true };
	}
	startCounting = () => {
		document.querySelectorAll(".counter").forEach((counter) => {
			counterUp(counter, {
				duration: 1700,
				delay: 100
			});
		});
		this.setState({ once: false });
	};
	render() {
		return (
			<VisibilitySensor active={this.state.once} partialVisibility onChange={(isVisible) => isVisible && this.startCounting()}>
				<div className="section-counter paralax-mf bg-image" style={{ backgroundImage: `url(${background})` }}>
					<div className="overlay-mf"></div>
					<div className="container">
						<div className="row">
							<div className="col-sm-3 col-lg-3">
								<div className="counter-box counter-box pt-4 pt-md-0">
									<div className="counter-ico">
										<span className="ico-circle">
											<i className="ion-checkmark-round"></i>
										</span>
									</div>
									<div className="counter-num">
										<p className="counter">10</p>
										<span className="counter-text">BLOGS</span>
									</div>
								</div>
							</div>
							<div className="col-sm-3 col-lg-3">
								<div className="counter-box pt-4 pt-md-0">
									<div className="counter-ico">
										<span className="ico-circle">
											<i className="ion-ios-calendar-outline"></i>
										</span>
									</div>
									<div className="counter-num">
										<p className="counter">3</p>
										<span className="counter-text">YEARS OF EXPERIENCE</span>
									</div>
								</div>
							</div>
							<div className="col-sm-3 col-lg-3">
								<div className="counter-box pt-4 pt-md-0">
									<div className="counter-ico">
										<span className="ico-circle">
											<i className="ion-ios-people"></i>
										</span>
									</div>
									<div className="counter-num">
										<p className="counter">5</p>
										<span className="counter-text">RECOMMENDATIONS</span>
									</div>
								</div>
							</div>
							<div className="col-sm-3 col-lg-3">
								<div className="counter-box pt-4 pt-md-0">
									<div className="counter-ico">
										<span className="ico-circle">
											<i className="ion-ribbon-a"></i>
										</span>
									</div>
									<div className="counter-num">
										<p className="counter">5</p>
										<span className="counter-text">AWARD WON</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</VisibilitySensor>
		);
	}
}

export default Counter;
