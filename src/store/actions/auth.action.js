import Cookies from "js-cookie";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAILURE = "AUTH_FAILURE";
export const USER_FOUND = "USER_FOUND";
export const LOGOUT = "LOGOUT";
export const EDIT = "EDIT";

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

export const editProfile = (data, id, token) => async (dispatch) => {
  const config = {
    method: 'PUT',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
  const res = await fetch(`http://localhost:1337/users/${id}`, config);
  const editedData = await res.json();

  dispatch({
    type: EDIT,
    payload: editedData,
  })
}

export const logOut = (id) => async (dispatch) => {
  dispatch({
    type: LOGOUT,
    payload: id,
  });
}

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
