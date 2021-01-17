import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./PortfolioDetailsIntro.css";

import background from "../../public/images/overlay-bg.jpg";

const PortfolioDetailsIntro = () => {
	return (
		<div class="intro intro-single route bg-image" style={{ backgroundImage: `url(${background})` }}>
			<div class="overlay-mf"></div>
			<div class="intro-content display-table">
				<div class="table-cell">
					<div class="container">
						<h2 class="intro-title mb-4">Portfolio Details</h2>
						<ol class="breadcrumb d-flex justify-content-center">
							<li class="breadcrumb-item">
								<Link to="/#work">Home</Link>
							</li>
							<li class="breadcrumb-item active">GoCrypto</li>
						</ol>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PortfolioDetailsIntro;
