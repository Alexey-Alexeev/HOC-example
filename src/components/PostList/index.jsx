import React from "react";

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