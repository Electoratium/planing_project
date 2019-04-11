import { all } from 'redux-saga/effects';

import * as loginSagas from './login';
import * as planingSagas from './planing';




// ПОСМОТРИ МОЖНО ЛИ СДЕЛАТЬ ПОД loginSagas.map(.....);

export default function* rootSaga() {
	yield all([
		loginSagas.watchSignUp(),
		loginSagas.watchCheckToken(),
		loginSagas.watchLogin(),
		loginSagas.watchLogout(),
		planingSagas.watchFetchDay()
	])
};
