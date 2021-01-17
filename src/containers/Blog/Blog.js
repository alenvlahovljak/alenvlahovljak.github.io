import React from "react";
import { LazyLoadImage, trackWindowScroll } from "react-lazy-load-image-component";
import moment from "moment";

const Blog = ({ blog, state, scrollPosition }) => {
	return (
		<div className="col-md-4 mt-5">
			<div className="card card-blog h-100">
				<div className="card-img">
					<a href={blog.link} target="_blank">
						<LazyLoadImage
							className="img-fluid"
							src={blog.thumbnail}
							alt={`${blog.title} thumbnail`}
							scrollPosition={scrollPosition}
							style={{ objectFit: "cover", height: "200px", width: "100%" }}
						/>
					</a>
				</div>
				<div className="card-body">
					<div className="card-category-box">
						<div className="card-category">
							<h6 className="category">{moment(blog.pubDate).format("LL")}</h6>
						</div>
					</div>
					<h3 className="card-title">
						<a href={blog.link} target="_blank">
							{blog.title}
						</a>
					</h3>

					{blog.categories.map((category) => (
						<span className="badge badge-primary ml-1 mr-1 mt-auto">{category}</span>
					))}
				</div>
				<div className="card-footer">
					<div className="post-author">
						<a href={blog.link} target="_blank">
							<img src={state.data.feed.image} alt="" className="avatar rounded-circle" />
							<span className="author">Alen Vlahovljak</span>
						</a>
					</div>
					<div className="post-date">
						{/*<span className="ion-ios-clock-outline"></span> 10 min*/}
					</div>
				</div>
			</div>
		</div>
	);
};

export default trackWindowScroll(Blog);
