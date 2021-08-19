import { Route, Redirect } from "react-router-dom";
import Cookies from 'js-cookie';

const PrivateRoute = ({ component: Component, ...rest }) => {

  const checkAuth = () => {
    return Cookies.get('token');
  }
  return (
    <Route {...rest} render={props => (
      checkAuth() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: '/login' }} />
      )
    )} />
  )
};

export default PrivateRoute;