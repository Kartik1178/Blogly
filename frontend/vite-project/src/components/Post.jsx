import React from 'react';

const Post = ({ post }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-5 w-1/4 min-h-72 mt-4 mr-4 border border-gray-200">
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{post.title}</h3>
      <p className="text-gray-600 mb-5">{post.description}</p>
      <small className="text-gray-500">
        By {post.author.firstname} {post.author.lastname}
      </small>
    </div>
  );
};

export default Post;

