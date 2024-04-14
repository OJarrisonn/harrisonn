import React, { useState } from "react";
import { Input } from "./ui/input";
import PostList from "./PostList";

export default function Blog({posts}) {
    const [term, setTerm] = useState("");

    function handleOnSearch({ target = {} }) {
        const { value } = target;
        setTerm(value);
    }

    return <>
            <div style={{marginBottom: 16}}>
                <Input
                    type="text"
                    value={term}
                    onChange={handleOnSearch}
                    placeholder="Search posts"
                    style={{borderRadius: 8}}
                    />
                
            </div>
			<PostList posts={posts} term={term}/>
    </>;
}