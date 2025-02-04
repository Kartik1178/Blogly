import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [error, setError] = useState(""); 
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleCreatePost = async (e) => {
    e.preventDefault();

   
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }
    setError(""); 
    setLoading(true); 

    
    try {
      await axios.post("http://localhost:5000/posts/create", { title, content }, {
       withCredentials:true,
      });
      navigate("/my-posts"); 
    } catch (error) {
      setError("Failed to create post. Please try again.");
      console.error("Error creating post:", error);
    } finally {
      setLoading(false); 
    }
  };

  return (
    <div>
      <h2>Create Post</h2>
      <form onSubmit={handleCreatePost}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Write your post..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" disabled={loading}>
          {loading ? "Creating..." : "Create Post"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>} 
    </div>
  );
};

export default CreatePost;