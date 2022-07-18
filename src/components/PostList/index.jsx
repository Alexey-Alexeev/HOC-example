import React from "react";
import withPosts from '../../HOC/PostList/withPosts'
import { getPopularPosts, getRecentPosts, getArchivedPosts } from '../../api/api'

const PostList = ({ posts }) => (
    <ol>
        {posts.map((post) => (
            <li key={post.id}>
                <a href={post.href}>{post.title}</a>
                <p>{post.description}</p>
            </li>
        ))}
    </ol>
);

export default PostList;

export const RecentPosts = withPosts(PostList, getRecentPosts);
export const PopularPosts = withPosts(PostList, getPopularPosts);
export const ArchivedPosts = withPosts(PostList, getArchivedPosts);