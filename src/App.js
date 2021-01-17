import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";

import "./App.css";

import Header from "./components/Header/Header";
import Intro from "./components/Intro/Intro";
import Main from "./containers/Main/Main";
import PortfolioDetailsIntro from "./containers/PortfolioDetailsIntro/PortfolioDetailsIntro";
import PortfolioDetails from "./containers/PortfolioDetails/PortfolioDetails";
import Footer from "./components/Footer/Footer";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = { isVisible: "" };
	}
	componentDidMount() {
		this.setState({ isVisible: "home" });
	}
	isComponentVisible = (isVisible) => {
		this.setState({ isVisible });
	};
	render() {
		return (
			<div>
				<div id="preloader"></div>
				<Header isVisible={this.state.isVisible} isComponentVisible={this.isComponentVisible} />
				<Switch>
					<Route exact path="/">
						<Intro isComponentVisible={this.isComponentVisible} />
						<Main isComponentVisible={this.isComponentVisible} />
					</Route>
					<Route path="/work/:home">
						<PortfolioDetailsIntro />
						<PortfolioDetails />
					</Route>
				</Switch>

				<Footer />
			</div>
		);
	}
}

export default withRouter(App);
