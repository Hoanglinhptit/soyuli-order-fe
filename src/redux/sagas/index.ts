import { all } from 'redux-saga/effects';
import LoginSaga from './LoginSaga';
import ProductSaga from './ProductSaga';
import CategorySaga from './CategorySaga';

export default function* rootSaga() {
  yield all([...LoginSaga, ...ProductSaga, ...CategorySaga]);
}
