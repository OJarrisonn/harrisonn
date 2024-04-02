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
            <Input 
                type="text" 
                value={term} 
                onChange={handleOnSearch} 
                placeholder="Search posts" 
                />
            <div className="h-4"></div>
			<PostList posts={posts} term={term}/>
    </>;
}