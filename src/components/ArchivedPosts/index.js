import React, {useEffect, useState} from 'react';
import {getArchivedPosts} from "../../api/api";
import PostList from "../PostList";

export const ArchivedPosts = (props) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        setPosts(getArchivedPosts());
    }, []);

    return <PostList posts={posts} {...props} />;
};

export default ArchivedPosts;