import Cookies from 'js-cookie';
import jwt_decode from 'jwt-decode';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_FAILURE = 'AUTH_FAILURE';
export const USER_FOUND = 'USER_FOUND';


export const login = (url, creds) => async(dispatch) => {
  const config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(creds),
  }
  const res = await fetch(`http://localhost:1337${url}`, config);
  const data = await res.json();
  console.log(data);
  if (data.user) {
    dispatch({
      type: AUTH_SUCCESS,
      payload: data,
    })
  } else {
    dispatch({
      type: AUTH_FAILURE,
      payload: data.message,
    })
  }
};

export const getUser = () => async(dispatch) => {
  const token = Cookies.get('token');
  const decoded = jwt_decode(token);
  const config = {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
      }
  }
  const res = await fetch(`http://localhost:1337/users`, config);
  const data = await res.json();
  console.log(data)
  if (data[0].id) {
    const user = data.filter(user => user.id === decoded.id);
    console.log(user[0])
    dispatch({
      type: USER_FOUND,
      payload: user[0],
    })
  } else {
    dispatch({
      type: AUTH_FAILURE,
      payload: data.message,
    })
  }
};