import {CHECK_TOKEN, LOGIN, LOGIN_ERROR, LOGOUT} from '../sagas/login';
import { cookies } from '../utils/manageCookies';

const initialState = {};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case CHECK_TOKEN:

      return {
        ...state,
        ...action.payload,
      };
    case LOGIN:
      if (action.payload.userData.isChecked) {
        cookies.set('token', action.payload.token, 5);
        cookies.set('user_id', action.payload.userData.id, 5);
        cookies.set('email', action.payload.userData.email, 5);
      }
      return {
        ...state,
        ...action.payload.userData,
        authToken: action.payload.token,
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload.errorText,
      };
    case LOGOUT:
      cookies.delete('user_id', '/');
      cookies.delete('email', '/');
      cookies.delete('token', '/');

      return {
        ...state,
        email: null,
        authToken: null,
      };
    default:
      return {
        ...state,
      };
  }
}
