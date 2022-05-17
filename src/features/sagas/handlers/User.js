import { call, put } from 'redux-saga/effects';
import { requestGetUSer } from '../requests/User';
import { setUser } from '../../ducks/user';

export function* handleGetUser() {
	try {
		const response = yield call(requestGetUSer);
		// const { data } = response;
		yield put(setUser(response.data));
	} catch (err) {
		console.error(err);
	}
}
