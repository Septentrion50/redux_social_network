import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from 'components/Logout'

const Navbar = () => {

  const user = useSelector((state) => state.auth) || {};

  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/register">Register</Link>
      <Link to="/login">Login</Link>
      <Link to="/profile">Profile</Link>
      {user.isAuthenticated ? <Logout/> : ''}
    </nav>
  )
};

export default Navbar;