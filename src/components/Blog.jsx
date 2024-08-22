import React, { useState } from "react";
import PostList from "./PostList";
import { Input } from "./ui/input";

export default function Blog({ posts, base_url }) {
	const [term, setTerm] = useState("");

	function handleOnSearch({ target = {} }) {
		const { value } = target;
		setTerm(value);
	}

	return (
		<>
			<div style={{ marginBottom: 16 }}>
				<Input
					type="text"
					value={term}
					onChange={handleOnSearch}
					placeholder="Search posts"
					style={{ borderRadius: 8 }}
				/>
			</div>
			<PostList posts={posts} term={term} base_url={base_url} />
		</>
	);
}
