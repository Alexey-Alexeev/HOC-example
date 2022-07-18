import React, {useEffect, useState} from 'react';
import {getRecentPosts} from "../../api/api";
import PostList from "../PostList";

export const RecentPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getRecentPosts());
    }, []);

    return <PostList posts={posts} {...props} />;
};

export default RecentPosts;