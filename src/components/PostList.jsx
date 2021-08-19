import Post from "./Post";
import { useState, useEffect } from "react";

const PostList = () => {

  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    const config = {
      method: 'GET',
    }
    const res = await fetch('http://localhost:1337/posts', config);
    const data = await res.json();
    setPosts(data);
  }

  useEffect(() => {
    getPosts();
  }, [])

  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  )
}

export default PostList;