export const CHECK_TOKEN_REQUEST = 'CHECK_TOKEN_REQUEST';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';

const checkToken = () => ({type: CHECK_TOKEN_REQUEST});

const login = (loginData) => ({type: LOGIN_REQUEST, loginData});

const logout = () => ({type: LOGOUT_REQUEST});

export default {
	checkToken,
	login,
	logout,
};
