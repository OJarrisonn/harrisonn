import React from "react";
import FormattedDate from "./FormattedDate";

export default function PostList({
	posts,
	term,
}: {
	posts: {
		id: string;
		slug: string;
		body: string;
		collection: string;
		data: {
			title: string;
			description: string;
			pubDate: Date;
			updatedDate?: Date | undefined;
			heroImage?: string | undefined;
		};
	}[];
	term: string;
}) {
	return (
		<div className="grid grid-cols-2 gap-4">
			{posts
				.filter((value) => {
					return value.data.title.toLowerCase().includes(term.toLowerCase());
				})
				.sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime())
				.map((post) => (
					<div key={post.id}>
						<a href={`/blog/${post.slug}/`}>
							<img
								width={720}
								height={360}
								src={post.data.heroImage}
								alt=""
								style={{ marginBottom: "1rem" }}
							/>
							<div style={{ color: "rgb(var(--gray-light))" }}>
								<h4 className="title">{post.data.title}</h4>
								<p>{post.data.description}</p>
								<p className="date" style={{ color: "rgb(var(--gray))" }}>
									<FormattedDate date={post.data.pubDate} />
								</p>
							</div>
						</a>
					</div>
				))}
		</div>
	);
}
