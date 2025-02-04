
import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="post">
      <h3 >{post.title}</h3>
      <p>{post.content}</p>
      <small>By {post.author.firstname} {post.author.lastname}</small>
    </div>
  );
};

export default Post;
