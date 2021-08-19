import PostList from "components/PostList";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
const Home = () => {
  const user = useSelector((state) => state.auth) || {};
  const [text, setText] = useState('');
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
  }, [posts])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      text,
      user: user.user.id
    }
    const config = {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${user.token}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }
    const res = await fetch('http://localhost:1337/posts', config);
    const post = await res.json();
    if (post.text){
      setPosts([...posts] )
    }
  }

  return (
    <div className="home">
      <h1>
        Welcome to <strong>My Social Network</strong>
        {user.username ? " " + user.username + "!" : "!"}
      </h1>
      <p>
        This website is a training for redux and react, we use auth and routing
        to create a small social media website.
      </p>
      {user.isAuthenticated && (
        <form className="new-post" onSubmit={handleSubmit}>
          <textarea
            id="new-post-text"
            value={text}
            placeholder="Your magnificent thoughts"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <input type="submit" value='Post' className='btn' />
        </form>
      )}
      <PostList posts={posts} />
    </div>
  );
};

export default Home;
