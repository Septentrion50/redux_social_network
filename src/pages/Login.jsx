import { useState } from "react";
import { login } from "store/actions/auth.action";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
import { Cookies } from 'js-cookie';

const Login = () => {

  const [state, setState] = useState({
    identifier: "",
    password: "",
  })

  const dispatch = useDispatch();
  const history = useHistory();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log('handle submit')
    await dispatch(login('/auth/local', state));
    if (Cookies.get('token')){
      history.push('/')
    }
  };

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <input
        type="email"
        id="login-email"
        value={state.identifier}
        placeholder="Email"
        onChange={(e) => setState({
          ...state,
          identifier: e.target.value,
        })}
      />
      <input
        type="password"
        id="login-password"
        value={state.password}
        placeholder="Password"
        onChange={(e) => setState({
          ...state,
          password: e.target.value,
        })}
      />
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;