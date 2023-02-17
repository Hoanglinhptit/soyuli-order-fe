import { call, put, takeLatest } from 'redux-saga/effects';
import * as actions from '../actions';
import loginRequest from '../../apis/apiClients';

interface LoginPayload {
  payload: {
    email: string;
    password: string;
  };
  type: string;
}
function* loginSaga(action: LoginPayload): any {
    console.log("saga working")
  try {
    const res = yield loginRequest(action.payload);
    if (res) {
        console.log("res" , res.data.data)
      yield put(actions.loginSuccess(res.data.data.user));
      yield localStorage.setItem('token', res.data.data.token);
    }
  } catch (error) {
    yield put(actions.loginFailure(error));
  }
}
const UserSaga = [takeLatest(actions.loginRequest, loginSaga)];
export default UserSaga;
