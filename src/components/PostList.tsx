import React from "react";
import FormattedDate from "./FormattedDate.astro";

export default function PostList({ posts, search_term }: {posts: {
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
}[], search_term: string}) {
    return <ul>
        {
            posts.filter((value) => {
                return value.data.title.includes(search_term);
            }).map((post) => (
                <li key={post.id}>
                    <a href={`/blog/${post.slug}/`}>
                        <img width={720} height={360} src={post.data.heroImage} alt="" />
                        <h4 className="title">{post.data.title}</h4>
                        <p className="date">
                            {/*<FormattedDate date={post.data.pubDate} />*/}
                        </p>
                    </a>
                </li>
            ))
        }
    </ul>;
}