import Cookies from "js-cookie";
import { AUTH_SUCCESS, AUTH_FAILURE, USER_FOUND, LOGOUT, EDIT } from "store/actions/auth.action";

const initialState = {
  user: null,
  token: Cookies.get('token'),
  isAuthenticated: false,
}

export const authReducer = (state = initialState, action) => {
  switch(action.type) {
    case AUTH_SUCCESS:
      Cookies.set("token", action.payload.jwt);
      Cookies.set('id', action.payload.user.id);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.jwt,
        isAuthenticated: true,
      };
    case AUTH_FAILURE:
      return {
        ...state,
        message: action.payload.message,
      };
    case EDIT:
      return {
        ...state,
        user: action.payload.editedData
      }
    case LOGOUT:
      Cookies.remove("token")
      Cookies.remove("id")
      return {
        initialState
      }
    case USER_FOUND:
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
      };
    default:
      return state;
  }
};