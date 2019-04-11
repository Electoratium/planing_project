import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../utils/api';
import { cookies } from '../utils/manageCookies';

import {SIGN_UP_REQUEST, CHECK_TOKEN_REQUEST, LOGIN_REQUEST, LOGOUT_REQUEST} from '../actions/auth';
import {loginErrors} from "../utils/constants";
import history from "../history/history";


export const SIGN_UP = 'SIGN_UP';
export const CHECK_TOKEN = 'CHECK_TOKEN';
export const LOGIN = 'LOGIN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const LOGOUT = 'LOGOUT';




export function* signUpRequest(payload) {
	yield put({
		type: SIGN_UP,
		payload: payload
	});
}

export function* checkTokenRequest() {
	const token = cookies.get('token');
		if (token) {
			try {
				const response = yield call(Api.checkToken, token);

				yield put({type: CHECK_TOKEN, payload: {...response.data, authToken: token}});
			}
			catch (err) {
				cookies.delete('token', '/');
				cookies.delete('id', '/');
				cookies.delete('email', '/');
			}
	}
}

export function* loginRequest(payload) {
	const {loginData} = payload;
	if (loginData) {
		try {
			const login = yield call(Api.userAuth, loginData),
				{token, user_id} = login.data;

			history.push('/planing/day');

			yield put({
				type: LOGIN,
			    payload: {
					userData: {
						userId: user_id,
						email: loginData.email,
						isChecked: loginData.isChecked,
					},
					token: token
				}
			});
		}
		catch (err) {
			if (err.response) {
				if (err.response.status === 404) {
					yield put({
						type: LOGIN_ERROR,
						payload: {
							errorText: loginErrors.invalidData,
						},
					});
				}
			}
			else {
				yield put({
					type: LOGIN_ERROR,
					payload: {
						errorText: loginErrors.serverError,
					}
				});
			}
		}
	}
	else {
		yield put({type: LOGIN_ERROR, payload: {errorText: loginErrors.emptyData}});
	}

}

export function* logoutRequested() {
	history.push('/');

	yield put({type: LOGOUT});
}



export function* watchSignUp() {
	yield takeEvery(SIGN_UP_REQUEST, signUpRequest);
}

export function* watchCheckToken() {
	yield takeEvery(CHECK_TOKEN_REQUEST, checkTokenRequest);
}

export function* watchLogin () {
	yield takeEvery(LOGIN_REQUEST, loginRequest);
}

export function* watchLogout() {
	yield takeEvery(LOGOUT_REQUEST, logoutRequested);
}
