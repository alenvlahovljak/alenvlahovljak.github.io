import React, { Component } from "react";
import VisibilitySensor from "react-visibility-sensor";
import axios from "axios";

import Blog from "../Blog/Blog";

import "./Blogs.css";

class Blogs extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: "",
			blogs: []
		};
	}
	async componentDidMount() {
		const url = "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@AlenVlahovljak";
		const getData = await axios.get(url);
		const { data } = getData;
		const blogs = data.items.filter((item) => item.categories.length > 0);
		this.setState({ data, blogs });
	}
	render() {
		const { isComponentVisible } = this.props;
		const blogs = this.state.blogs.map((blog) => <Blog key={blog.pubDate} blog={blog} state={this.state} />);
		return (
			<VisibilitySensor minTopValue="200" partialVisibility onChange={(isVisible) => isVisible && isComponentVisible("blog")}>
				<section id="blog" className="blog-mf sect-pt4 route">
					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="title-box text-center">
									<h3 className="title-a">Medium's Stories</h3>
									<p className="subtitle-a">Getting smarter every day...</p>
									<div className="line-mf"></div>
								</div>
							</div>
						</div>
						<div className="row">{blogs}</div>
					</div>
				</section>
			</VisibilitySensor>
		);
	}
}

export default Blogs;
