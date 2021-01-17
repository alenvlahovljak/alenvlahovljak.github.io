import React from "react";
import OwlCarousel from "react-owl-carousel";

import "./PortfolioDetails.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import work1 from "../../public/images/work-1.png";
import work2 from "../../public/images/work-2.png";
import work3 from "../../public/images/work-3.png";

const PortfolioDetails = () => {
	return (
		<main id="main">
			<section className="portfolio-details">
				<div className="container">
					<div className="portfolio-details-container">
						<OwlCarousel items={1} className="owl-carousel portfolio-details-carousel" loop mouseDrag autoplay>
							<img src={work1} className="img-fluid" alt="" />
							<img src={work2} className="img-fluid" alt="" />
							<img src={work3} className="img-fluid" alt="" />
						</OwlCarousel>
						<div className="portfolio-info">
							<h3>Project information</h3>
							<ul>
								<li>
									<strong>Category</strong>: Web Development
								</li>
								<li>
									<strong>Client</strong>: Eligma d.o.o.
								</li>
								<li>
									<strong>Project date</strong>: Still Going
								</li>
								<li>
									<strong>Project URL</strong>: <a href="https://gocrypto.com/en/" target='_blank'>Go!</a>
								</li>
							</ul>
						</div>
					</div>

					<div className="portfolio-description">
						<h2>What is GoCrypto?</h2>
						<p>
							GoCrypto operates as a global payment scheme
							connecting all the stakeholders interested in crypto
							– crypto users, crypto wallets, crypto exchanges,
							cashier system providers, payment solution providers and merchants.
						</p>
					</div>
				</div>
			</section>
		</main>
	);
};

export default PortfolioDetails;
