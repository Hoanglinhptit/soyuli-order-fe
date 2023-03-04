/* eslint-disable @typescript-eslint/no-explicit-any */
import { put, takeLatest, select } from 'redux-saga/effects'
import *as actions from '../actions'
import *as callAPI from '../../apis/apiClients'

interface CartPayload {
    payload:{
        userID: string,
        productId : string, 
        listProduct : Array<any>
    }

}
function* addCartSaga(action: any) : any{
    try {
        const response = yield callAPI.addCartRequest(action.payload)
        if (response.message !== "success") {
            yield put(actions.cardAddProductFailure(response.data))
        } else {
            yield put(actions.cardAddProductSuccess(response.data))
        }
    } catch (error) {
        yield put(actions.cardAddProductFailure(error))
    }
}
function* findProductCartSaga(action: any): any {
    try {
        const res = yield callAPI.getCartProductRequest(action.payload)
        if (res.message === "success") {
            yield put(actions.getCardProductSuccess(res.data))
        } else {
            yield put(actions.getCardProductFailure(res.data))
        }

    } catch (error) {
        yield put(actions.getCardProductFailure(error))

    }
}

const CartSaga = [
    takeLatest(actions.cardAddProductRequest, addCartSaga),
    takeLatest(actions.getCardProductFailure, findProductCartSaga)
]
export default CartSaga