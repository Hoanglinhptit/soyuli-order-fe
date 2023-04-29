import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import *as callAPI from '../../apis/apiClients';

interface LoginPayload {
  payload: {
    email: string;
    password: string;
  };
  type: string;
}
function* loginSaga(action: LoginPayload): any {
  try {
    const res = yield callAPI.loginRequest(action.payload);
    if (res) {
      yield put(actions.loginSuccess(res.data.data));
      yield localStorage.setItem('token', res.data.data.token);
    }
  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}
const UserSaga = [takeLatest(actions.loginRequest, loginSaga)];
export default UserSaga;
