import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { editProfile, getUser } from "store/actions/auth.action";
import Cookies from 'js-cookie';

const Profile = () => {

  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.user) || {};

  const [username, setUsername] = useState(auth.username || '');
  const [description, setDescription] = useState('');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const dis = async() => await dispatch(getUser());
    dis()
  }, [dispatch, isEditing]);

  const handleSubmit = async(e) => {
    e.preventDefault();
    const data = {
      username,
      description,
    }
    await dispatch(editProfile(data, auth.id, Cookies.get('token')));
    setIsEditing(!isEditing);
  }

  return (
    <div className="profile">
      {isEditing ? (
        <form className="editInfos" onSubmit={handleSubmit}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <textarea
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <input type="submit" value="Edit" />
        </form>
      ) : (
        <div className="infos">
          <h1>Welcome {auth.username}</h1>
          <p>{auth.description}</p>
          <button onClick={() => setIsEditing(!isEditing)}>Edit infos</button>
        </div>
      )}
    </div>
  );
};

export default Profile;
