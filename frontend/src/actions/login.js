import Axios from 'axios';


function checkToken() {
    const token = '9b2a50805819972f208b73b9620c5025da0e6348';



    // return Axios.get('http://127.0.0.1:8000/api/v1/check-token',{headers: { 'Authorization': `Token ${token}`}})
    return Axios.post('http://127.0.0.1:8000/api/v1/check-token',{headers: { 'Authorization': `Token ${token}`}})
        .then(response => {
            console.log(response);

            return response.data;
        })
        .then(data => ({
            type: 'GET_QUESTIONS',
            isValidToken: data.isValid
        }))
}




const fetchFromApi = {'status': 'CONFIRM'};

const fakeAuth = userData => dispatch => {
    // console.log(userData);

    setTimeout(() => {
        dispatch({
            type: 'LOGIN',
            payload: {
                ...userData,
                ...fetchFromApi
            }
        })
    }, 2000);
};

export const loginActions = {
    fakeAuth: fakeAuth,
    checkToken: checkToken
};