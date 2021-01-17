import React from "react";
import { HashLink as Link } from "react-router-hash-link";

import "./Footer.css";

const Footer = () => {
	return (
		<footer>
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="copyright-box">
							<p className="copyright">
								&copy; Copyright <strong>Alen Vlahovljak</strong>. All Rights Reserved
							</p>
							<div className="credits">
								Designed by <a href="https://www.linkedin.com/in/alenvlahovljak/">Alen Vlahovljak</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Link className="back-to-top" smooth to="/#home">
				<i className="fa fa-chevron-up"></i>
			</Link>
		</footer>
	);
};

export default Footer;
