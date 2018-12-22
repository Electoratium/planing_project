import Axios from 'axios';

export const CHECK_TOKEN = 'CHECK_TOKEN';

export function checkToken() {
    const token = '9fe39cbbd98e790c715b304d14b3bc506dfa8e3b';



    return Axios.get('http://127.0.0.1:8000/api/v1/test',{headers: { 'Authorization': `Token ${token}`}})
        .then(response => {
            console.log(response);

            return response.data;
        })
        .then(data => ({
            type: 'GET_QUESTIONS',
            isValidToken: data.isValid
        }))
}