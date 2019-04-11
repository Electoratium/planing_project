export const CHECK_TOKEN_REQUEST = 'CHECK_TOKEN_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const SIGN_UP_REQUEST = 'SIGN_UP_REQUEST';


const signUp = (userData) => ({type: SIGN_UP_REQUEST, userData});

const checkToken = () => ({type: CHECK_TOKEN_REQUEST});

const auth = (loginData) => ({type: LOGIN_REQUEST, loginData});

const logout = () => ({type: LOGOUT_REQUEST});

export default {
	login: auth,
	signUp,
	checkToken,
	logout,
};
