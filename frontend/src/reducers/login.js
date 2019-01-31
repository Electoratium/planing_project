import constants from '../modules/constants';
import { cookies } from '../modules/manageCookies';

const initialState = {};

export default function loginReducer(state, action) {
  switch (action.type) {
    case constants.loginActions.checkToken:


      return {
        ...state,
        ...action.payload,

      };
    case constants.loginActions.login:

      if (action.payload.userData.isChecked) {
        cookies.set('token', action.payload.token, 5);
        cookies.set('email', action.payload.userData.email, 5);
      }

      return {
        ...state,
        email: action.payload.userData.email,
        authToken: action.payload.token,
      };

    case constants.loginActions.loginError:
      return {
        ...state,
        error: action.payload.errorText,
      };
    case constants.loginActions.logout:
      cookies.delete('email', '/');
      cookies.delete('token', '/');

      return {
        ...state,
        email: null,
        authToken: null,
      };
    default:
      return initialState;
  }
}
