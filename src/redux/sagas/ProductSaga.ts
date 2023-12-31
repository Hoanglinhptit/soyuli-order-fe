import { put, takeLatest, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as constants from '../../constants';
import * as callAPI from '../../apis/apiClients';

interface ProductPayload {
  payload: {
    limit: number;
    pageIndex: number;
    type: string;
  };
  type: string;
}
interface ProductDetail {
  payload: {
    id: string;
  };
  type: string;
}

function* getProductSaga(action: ProductPayload): any {
  try {
    const response = yield callAPI.getProductRequest(action.payload);
    if (response.message !== 'success') {
      yield put(actions.getProductFailure(response.data));
    }

    yield put(
      actions.getProductSuccess({
        data: response.data.data.data,
        totalPage: response.data.data.totalPage,
        pageIndex: response.data.data.pageIndex,
        keySearch: response.data.data.keySearch,
      })
    );
  } catch (error) {
    yield put(actions.getProductFailure(error));
  }
}
function* getDetailProductSaga(action: ProductDetail): any {
  console.log(action);

  try {
    const res = yield callAPI.getDetailProductRequest(action.payload);
    console.log('response saga', res);

    if (res.message !== 'success') {
      yield put(actions.getDetailProductFailure(res.data));
    }
    yield put(actions.getDetailProductSuccess(res.data.data));
  } catch (error) {
    yield put(actions.getDetailProductFailure(error));
  }
}
const ProductSaga = [
  takeLatest(actions.getProductRequest, getProductSaga),
  takeLatest(actions.getDetailProductRequest, getDetailProductSaga),
];
export default ProductSaga;
