import Axios from 'axios';
import { cookies } from '../modules/manageCookies';
import constants from '../modules/constants';

import history from '../history/history';

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
            return Axios.post(`${constants.baseApiUrl}/check-token`, {'token': token})
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
    return dispatch => {

        if(loginData) {


            return Axios.post(`${constants.baseApiUrl}/api-token-auth`, loginData)
                .then( response => {
                    console.log(response);
                })
                .catch( err => {
                    console.log(err);
                })
        }



    };
};

const logout = () => {
    history.push('/');

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