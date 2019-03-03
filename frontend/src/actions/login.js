import Axios from 'axios';
import { cookies } from '../modules/manageCookies';
import constants from '../modules/constants';
import history from '../history/history';

const checkToken = () => (dispatch) => {
  const token = cookies.get('token');
  // if this.props.errors отображать компоненнт danger bar
  if (token) {
    return Axios.post(`${constants.baseApiUrl}/check-token`, { token })
      .then((response) => {
        dispatch({
          type: constants.loginActions.checkToken,
          payload: {
            ...response.data,
          },
        });
      })
      .catch(() => {
        cookies.delete('token', '/');
        cookies.delete('id', '/');
        cookies.delete('email', '/');
      });
  }
  // return dispatch ( {
  //     type: constants.loginActions.checkToken,
  //     payload: {
  //         status: checkStatus.not_set
  //     }
  // });
};

const login = loginData => (dispatch) => {
  if (loginData) {
    return Axios.post(`${constants.baseApiUrl}/api-token-auth`, loginData)
      .then((response) => {

        dispatch({
          type: constants.loginActions.login,
          payload: {
            userData: {
              userId: response.data.user_id,
              email: loginData.email,
              isChecked: loginData.isChecked,
            },
            token: response.data.token,
          },
        });
      })
      .catch((err) => {
        if (err.response) {
          if (err.response.status === 404) {
            return dispatch({
              type: constants.loginActions.loginError,
              payload: {
                errorText: constants.loginErrors.invalidData,
              },
            });
          }
        }
        dispatch({
          type: constants.loginActions.loginError,
          payload: {
            errorText: constants.loginErrors.serverError,
          },
        });
      });
  }
  dispatch({
    type: constants.loginActions.loginError,
    payload: {
      errorText: constants.loginErrors.emptyData,
    },
  });
};

const logout = () => {
  history.push('/');

  return (dispatch) => {
    dispatch({
      type: constants.loginActions.logout,
    });
  };
};


export default {
  checkToken,
  login,
  logout,
};
