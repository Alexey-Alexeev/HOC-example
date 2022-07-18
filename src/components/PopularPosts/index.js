import React, {useEffect, useState} from 'react';
import {getPopularPosts} from "../../api/api";
import PostList from "../PostList";

export const PopularPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getPopularPosts());
    }, []);

    return <PostList posts={posts} {...props} />;
};

export default PopularPosts;