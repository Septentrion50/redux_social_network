import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../store/actions/auth.action"

const Register = () => {
  const [state, setState] = useState({
    username: '',
    email: '',
    password: '',
  })

  const dispatch = useDispatch();
  
  const handleSubmit = async(e) =>  {
    e.preventDefault();
    console.log('registerSubmit')
    await dispatch(login('/auth/local/register', state))
  }

  return (
    <form className="form-register" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        id="name"
        placeholder="Username"
        value={state.username}
        onChange={(e) => setState({
          ...state,
          username: e.target.value,
        })}
      />
      <input
        type="email"
        id="email"
        placeholder="Email"
        value={state.email}
        onChange={(e) => setState({
          ...state,
          email: e.target.value,
        })}
      />
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={state.password}
        onChange={(e) => setState({
          ...state,
          password: e.target.value,
        })}
      />
      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;