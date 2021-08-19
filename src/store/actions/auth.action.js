import Cookies from "js-cookie";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const USER_FOUND = "USER_FOUND";

export const login = (url, creds) => async (dispatch) => {
  const config = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(creds),
  };
  const res = await fetch(`http://localhost:1337${url}`, config);
  const data = await res.json();
  console.log(data);
  if (data.user) {
    dispatch({
      type: AUTH_SUCCESS,
      payload: data,
    });
  } else {
    dispatch({
      type: AUTH_FAILURE,
      payload: data.message,
    });
  }
};

export const getUser = () => async (dispatch) => {
  const id = Cookies.get("id");
  const token = Cookies.get("token");
  if (id) {
    const config = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const res = await fetch(`http://localhost:1337/users/${id}`, config);
    const data = await res.json();
    console.log(data);
    if (data.id) {
      dispatch({
        type: USER_FOUND,
        payload: data,
      });
    } else {
      dispatch({
        type: AUTH_FAILURE,
        payload: data.message,
      });
    }
  }
};
