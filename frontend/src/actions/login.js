import Axios from 'axios';

export const CHECK_TOKEN = 'CHECK_TOKEN';

export function checkToken() {
    return Axios.get('/api/check-token/')
        .then( response => response.data)
        .then( data => ({
            type: 'GET_QUESTIONS',
            isValidToken: data.isValid
        }))
}