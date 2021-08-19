import PostList from "components/PostList";
import { useSelector } from "react-redux";
const Home = () => {

  const user = useSelector((state) => state.auth.user) || {}

  return (
    <div className="home">
      <h1>Welcome to <strong>My Social Network</strong>{user.username ? ' ' + user.username + '!' : '!'}</h1>
      <p>This website is a training for redux and react, we use auth and routing to create a small social media website.</p>
      <PostList />
    </div>
  )
};

export default Home;