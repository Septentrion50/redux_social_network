import PostList from "components/PostList";
import { useSelector } from "react-redux";
import { useState } from "react";
const Home = () => {
  const user = useSelector((state) => state.auth) || {};
  const [text, setText] = useState('');

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
        <form className="new-post">
          <textarea
            id="new-post-text"
            value={text}
            placeholder="Your magnificent thoughts"
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <input type="submit" value='Post' className='btn' />
        </form>
      )}
      <PostList />
    </div>
  );
};

export default Home;
