import {actionCookies} from '../modules/manageCookies';


const initialState = {
    token: '9b2a50805819972f208b73b9620c5025da0e6348',
    isValidToken: false
};




const storageUserName = actionCookies.get('userName');

if(storageUserName) {
    initialState.userName = storageUserName;
}

export default function loginReducer(state, action) {
    switch (action.type) {
        case 'LOGIN':
             actionCookies.set('userName', action.payload.userName, 5);

            return {
                ...state,
                ...action.payload
            };

            break;
        case 'LOGOUT':
            actionCookies.delete('userName', '/');

            return {};
            break;
        case 'CHECK_TOKEN':
            return {
                ...state,
                isValidToken: action.isValidToken
            };
        default:
            return initialState;
    }

}