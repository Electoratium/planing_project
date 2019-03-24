import { call, put, takeEvery } from 'redux-saga/effects';
import Api from '../utils/api';
import { cookies } from '../utils/manageCookies';

import {FETCH_DAY_REQUEST} from "../actions/planing";

export const FETCH_DAY = 'FETCH_DAY';

export function* fetchDayRequest(payload) {

	// TOKEN МОЖНА БРАТЬ ИЗ storage!!!

	try {
		const {userId} = payload,
			token = cookies.get('token');

		const dayTasks = yield call(Api.fetchDay, token, userId);

		yield put({type: FETCH_DAY, payload: dayTasks.data})

	}
	catch (err) {
		//ДОБАВЬ СЮДА ТИПА FETCH_DAY_ERROR
		console.log(err);
	}
}


export function* watchFetchDay() {
	yield takeEvery(FETCH_DAY_REQUEST, fetchDayRequest);
}