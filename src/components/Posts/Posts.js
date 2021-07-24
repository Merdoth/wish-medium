import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";

import "./Posts.scss";

function Posts({ id, data }) {
	return (
		<Link to={`/post/${id}`} style={{ textDecoration: "none" }}>
			<div className="posts">
				<div className="posts__text">
					<h2>{data.title}</h2>
					<p>{data.paragraph}</p>

					<div className="posts__timestamps">
						<div className="posts__timestamps__paragraph">
							<span>
								{moment(new Date(data?.timestamp?.toDate()), "YYYYMMDD").format(
									"LL"
								)}
							</span>
							&nbsp;-&nbsp;
							<span style={{ display: "flex", alignItems: "center" }}>
								{moment(
									new Date(data?.timestamp?.toDate()),
									"YYYYMMDD"
								).fromNow()}
								<StarIcon />
							</span>
						</div>
						<BookmarkBorderIcon className="posts__bookmark" />
					</div>
				</div>

				{data.image && (
					<div
						className="posts__img"
						style={{ backgroundImage: `url(${data.image})` }}
					/>
				)}
			</div>
		</Link>
	);
}

export default Posts;
