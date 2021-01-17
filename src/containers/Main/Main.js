import React from "react";

import About from "../../components/About/About";
import Services from "../../components/Services/Services";
import Counter from "../../components/Counter/Counter";
import Portfolio from "../../components/Portfolio/Portfolio";
import Testimonials from "../../components/Testimonials/Testimonials";
import Blogs from "../Blogs/Blogs";
import Contact from "../../components/Contact/Contact";

const Main = ({ isComponentVisible }) => {
	return (
		<main id="main">
			<About isComponentVisible={isComponentVisible} />
			<Services isComponentVisible={isComponentVisible} />
			<Counter isComponentVisible={isComponentVisible} />
			<Portfolio isComponentVisible={isComponentVisible} />
			<Testimonials isComponentVisible={isComponentVisible} />
			<Blogs isComponentVisible={isComponentVisible} />
			<Contact isComponentVisible={isComponentVisible} />
		</main>
	);
};

export default Main;
