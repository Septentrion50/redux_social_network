import { useSelector } from "react-redux";

const Profile = () => {

  const user = useSelector((state) => state.auth.user);

  return (
    <div className="profile">
      <h1>Welcome {user.username}</h1>
    </div>
  )
};

export default Profile;