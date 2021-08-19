import { logOut } from "store/actions/auth.action";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

const Logout = () => {

  const dispatch = useDispatch();
  const history = useHistory()

  const logMeOut = async() => {
    await dispatch(logOut())
    history.push('/');
  }

  return (
    <button onClick={logMeOut}>Logout</button>
  )
}

export default Logout;