import React, { Component } from "react";
import { NavHashLink as NavLink } from "react-router-hash-link";
import $ from "jquery";

import "./Header.css";

class Header extends Component {
	constructor(props) {
		super(props);
	}
	componentDidMount() {
		("use strict");

		var nav = $("nav");
		var navHeight = nav.outerHeight();

		$(".navbar-toggler").on("click", function () {
			if (!$("#mainNav").hasClass("navbar-reduce")) {
				$("#mainNav").addClass("navbar-reduce");
			}
		});

		/*--/ Navbar Menu Reduce /--*/
		$(window).trigger("scroll");
		$(window).on("scroll", function () {
			var pixels = 50;
			var top = 1200;
			if ($(window).scrollTop() > pixels) {
				$(".navbar-expand-md").addClass("navbar-reduce");
				$(".navbar-expand-md").removeClass("navbar-trans");
			} else {
				if (!$("#navbarDefault").hasClass("show")) {
					$(".navbar-expand-md").removeClass("navbar-reduce");
				}
				$(".navbar-expand-md").addClass("navbar-trans");
			}
			if ($(window).scrollTop() > top) {
				$(".scrolltop-mf").fadeIn(1000, "easeInOutExpo");
			} else {
				$(".scrolltop-mf").fadeOut(1000, "easeInOutExpo");
			}
		});
	}
	render() {
		const { isVisible, isComponentVisible } = this.props;
		return (
			<nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
				<div className="container">
					<a className="navbar-brand js-scroll" href="#page-top">
						Alen Vlahovljak
					</a>
					<button
						className="navbar-toggler collapsed"
						type="button"
						data-toggle="collapse"
						data-target="#navbarDefault"
						aria-controls="navbarDefault"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span></span>
						<span></span>
						<span></span>
					</button>
					<div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink
									smooth
									className="nav-link js-scroll"
									activeClassName={isVisible == "home" ? "active" : null}
									to="/#home"
									onClick={() => isComponentVisible("home")}
								>
									Home
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									smooth
									className="nav-link js-scroll"
									activeClassName={isVisible == "about" ? "active" : null}
									to="/#about"
									onClick={() => isComponentVisible("about")}
								>
									About
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									smooth
									className="nav-link js-scroll"
									activeClassName={isVisible == "service" ? "active" : null}
									to="/#service"
									onClick={() => isComponentVisible("service")}
								>
									Services
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									smooth
									className="nav-link js-scroll"
									activeClassName={isVisible == "work" ? "active" : null}
									to="/#work"
									onClick={() => isComponentVisible("work")}
								>
									Work
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									smooth
									className="nav-link js-scroll"
									activeClassName={isVisible == "blog" ? "active" : null}
									to="/#blog"
									onClick={() => isComponentVisible("blog")}
								>
									Blog
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									smooth
									className="nav-link js-scroll"
									activeClassName={isVisible == "contact" ? "active" : null}
									to="/#contact"
									onClick={() => isComponentVisible("contact")}
								>
									Contact
								</NavLink>
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}

export default Header;
