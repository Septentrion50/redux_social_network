import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Logout from 'components/Logout'

const Navbar = () => {

  const user = useSelector((state) => state.auth) || {};

  return (
    <nav>
      <Link to="/">Home</Link>
      {!user.isAuthenticated && <Link to="/register">Register</Link>}
      {!user.isAuthenticated && <Link to="/login">Login</Link>}
      {user.isAuthenticated && <Link to="/profile">Profile</Link>}
      {user.isAuthenticated ? <Logout/> : ''}
    </nav>
  )
};

export default Navbar;