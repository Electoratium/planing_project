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



        // if this.props.errors отображать компоненнт danget bar
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

const logout = () => {
  return dispatch => {
      dispatch({
        type: 'LOGOUT'
      });
  };
};


export const loginActions = {
    checkToken: checkToken,
    logout: logout
};