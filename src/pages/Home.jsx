import PostList from "components/PostList";
import { useSelector } from "react-redux";
// import { useEffect } from "react";
// import { loadUser } from './store/actions/auth.action'
const Home = () => {

  // useEffect(() => {
  //   store.dispatch(loadUser());
  // }, [loadUser]);

  const user = useSelector((state) => state.auth.user)

  return (
    <div className="home">
      <h1>Welcome to <strong>My Social Network</strong></h1>
      <p>This website is a training for redux and react, we use auth and routing to create a small social media website.</p>
      <PostList />
    </div>
  )
};

export default Home;