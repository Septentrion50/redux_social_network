import { useSelector } from "react-redux";

const Post = ({ post }) => {
  const currentUser = useSelector((state) => state.auth) || {};

  return (
    <div className="post">
          <h4>
            {currentUser.isAuthenticated
              ? post.user.username
              : "A fantastic user"}
          </h4>
          <p>{post.text}</p>
    </div>
  );
};

export default Post;
