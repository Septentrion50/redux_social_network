import Post from "./Post";

const PostList = ({ posts }) => {
  return (
    <div className="post-list">
      {posts.map((post, index) => (
        <Post post={post} key={index} />
      ))}
    </div>
  )
}

export default PostList;