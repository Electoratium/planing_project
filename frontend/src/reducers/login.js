import * as loginActions from '../actions/login';


const initialState = {
    token: '9fe39cbbd98e790c715b304d14b3bc506dfa8e3b',
    isValidToken: false
};

export default function loginReducer(state, action) {
    switch (action.type) {
        case loginActions.CHECK_TOKEN:
            return {
                ...state,
                isValidToken: action.isValidToken
            };
        default:
            return initialState;
    }

}