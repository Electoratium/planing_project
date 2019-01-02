import {cookies} from '../modules/manageCookies';

const initialState = {};

export default function loginReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
             cookies.set('userName', action.payload.userName, 5);

            return {
                ...state,
                ...action.payload
            };

            break;
        case 'LOGOUT':
            cookies.delete('token', '/');

            return {};
            break;
        case 'CHECK_TOKEN':
            return {
                ...state,
                ...action.payload

            };

        //    Я ДОБАВИЛ
            break;
        default:
            return initialState;
    }
}