import React from "react";
import FormattedDate from "./FormattedDate";

export default function PostList({ posts, term }: {posts: {
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
}[], term: string}) {
    return <div className="grid grid-cols-2 gap-4">
        {
            posts.filter((value) => {
                return value.data.title.toLowerCase().includes(term.toLowerCase());
            }).map((post) => (
                <div key={post.id}>
                    <a href={`/blog/${post.slug}/`}>
                        <img width={720} height={360} src={post.data.heroImage} alt="" />
                        <h4 className="title">{post.data.title}</h4>
                        <p className="date">
                            <FormattedDate date={post.data.pubDate} />
                        </p>
                    </a>
                </div>
            ))
        }
    </div>;
}