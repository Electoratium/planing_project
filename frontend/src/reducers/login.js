import {SIGN_UP, CHECK_TOKEN, LOGIN, LOGIN_ERROR, LOGOUT} from '../sagas/login';
import { cookies } from '../utils/manageCookies';
import { Map, List } from 'immutable';

const initialState = new Map({});

export default function loginReducer(state = initialState, action) {
	switch (action.type) {
		case CHECK_TOKEN:

			return state.merge(action.payload);

			// return {
			// 	...state,
			// 	...action.payload,
			// };

		case SIGN_UP:
			// console.log(action.payload);
			return {
				...state,
				...action.payload
			};
		case LOGIN:
			const userData = action.payload.get('userData'),
				token = action.payload.get('token');

			if (action.payload.get('userData').get('isChecked')) {
				cookies.set('token', token, 5);
				cookies.set('user_id', userData.get('user_id'), 5);
				cookies.set('email', userData.get('email'), 5);
			}

			return state.merge(userData, new Map({authToken: token}));

			// return {
			// 	...state,
			// 	...action.payload.userData,
			// 	authToken: action.payload.token,
			// };

		case LOGIN_ERROR:
			return state.set('error', action.payload.errorText);
			// return {
			// 	...state,
			// 	error: action.payload.errorText,
			// };
		case LOGOUT:
			cookies.delete('user_id', '/');
			cookies.delete('email', '/');
			cookies.delete('token', '/');

			// check for errors change multiplie props
			return state.merge({email: null, authToken: null});


			// return {
			// 	...state,
			// 	email: null,
			// 	authToken: null,
			// };
		default:
			return state;
			// return {
			// 	...state,
			// };
	}
}
