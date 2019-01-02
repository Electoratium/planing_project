import Axios from 'axios';
import {cookies} from '../modules/manageCookies';


const checkStatus = {
    acceptable: 'ACCEPTABLE',
    invalid: 'INVALID',
    not_set: 'NOT_SET'
};

const checkToken = () => {
    return dispatch => {
        const token = cookies.get('token');
        // if this.props.errors отображать компоненнт danger bar
        if(token) {
            return Axios.post('http://127.0.0.1:8000/api/v1/check-token', {'token': token})
                .then(response => {

                    // cookies.set('token', token, 5);
                    dispatch ({
                        type: 'CHECK_TOKEN',
                        payload: {
                            status: checkStatus.acceptable,
                            ...response.data
                        }
                    });
                })
                .catch( err => {
                    console.log(err);

                    dispatch ( {
                        type: 'CHECK_TOKEN',
                        payload: {
                            status: checkStatus.invalid
                        }
                    });
                })
            }
            dispatch ( {
                type: 'CHECK_TOKEN',
                payload: {
                    status: checkStatus.not_set
                }
            });
    }

};

const login = (loginData) => {
    // return dispatch => {
        const errors = {
            'invalidEmail': 'Невірний email',
            'InvalidPassword': 'Невірний пароль',
            'blockedUser': 'Ваш аккаунт заблоковано',
            'unhandledError': 'Виникла помилка, на сервері, спробуйте ще раз'
        };

        if(loginData) {
            if(loginData.email) {
                if(loginData.password) {

                }
                else {

                }


            }
            else {

            }

        }



    // };
};

const logout = () => {
  return dispatch => {
      dispatch({
        type: 'LOGOUT'
      });
  };

};


export const loginActions = {
    checkToken: checkToken,
    login: login,
    logout: logout
};