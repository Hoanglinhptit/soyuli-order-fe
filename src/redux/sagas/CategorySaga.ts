import { put, takeLatest, select } from 'redux-saga/effects';
import * as actions from '../actions';
import * as callAPI from '../../apis/apiClients';

function* getCategorySaga(payload: any): any {
  console.log(payload);
  try {
    const response = yield callAPI.getCategoryRequest(payload.payload);
    console.log(response);

    if (response.message !== 'success') {
      yield put(actions.getCategoryFailure(response.data));
    }
    const { keySearch, totalPage } = yield select(
      (state) => state.CategoryReducer
    );

    //     if(totalPage===response.data.totalPage && keySearch!==""){

    //     yield put(actions.getCategorySuccess({
    //         data: response.data.data,
    //         totalPage: response.data.totalPage,
    //         pageIndex: response.data.pageIndex,
    //         keySearch: response.data.keySearch
    //     }))
    //     console.log("totalPage response", response.data.totalPage);
    //     console.log("pageIndex response", response.data.pageIndex);
    //     console.log("keySearch response", response.data.keySearch);
    //     console.log("data response", response.data.data)

    // }else{
    //         yield put(actions.getCategorySuccess({
    //             data: response.data.data,
    //             totalPage: response.data.totalPage,
    //             pageIndex: response.data.pageIndex,

    //     }))}

    yield put(
      actions.getCategorySuccess({
        data: response.data.data,
        totalPage: response.data.totalPage,
        pageIndex: response.data.pageIndex,
        keySearch: response.data.keySearch,
      })
    );
  } catch (error) {
    yield put(actions.getCategoryFailure(error));
  }
}
// function* addCategorySaga(payload) {
//     try {

//         let { keySearch, totalPage1 } = yield select((state) => state.CategoryReducer)
//         const dataMethod = { ...payload.payload, keySearch: keySearch }
//         const response = yield callAPI.addCategoryRequest(dataMethod)

//         if (response.message !== "success") {
//             yield put(actions.addCategoryFailure(response.data))
//         }
//         yield put(actions.addCategorySuccess(response.data))

//         console.log("keySearch", keySearch)
//         if (keySearch !== '') {
//             yield put(actions.getCategoryRequest({
//                 pageIndex: response.data.pageIndex,
//                 limit: response.data.limit,
//                 keySearch: response.data.keySearch,
//                 totalPage: response.data.totalPage
//             }))
//         }
//         else {

//             yield put(actions.getCategoryRequest({
//                 pageIndex: response.data.pageIndex,
//                 limit: response.data.limit,
//                 totalPage: response.data.totalPage,

//             }))
//         }

//         console.log("keySearch: ", response.data.keySearch)

//     } catch (error) {
//         yield put(actions.addCategoryFailure(error))
//     }
// }
// function* deleteCategorySaga(payload) {
//     try {
//         const response = yield callAPI.deleteCategoryRequest(payload.payload)
//         if (response.message !== 'success') {

//             yield put(actions.deleteCategoryFailure(response.data))
//         }
//         yield put(actions.deleteCategorySuccess(response.data))
//         const { pageIndex, totalPage, data, keySearch } = yield select((state) => { return state.CategoryReducer })
//         console.log(pageIndex);
//         console.log("keySearch ", keySearch);
//         if (totalPage > 1 && totalPage === pageIndex && data.length === 1) {
//             yield put(actions.getCategoryRequest({ keySearch: keySearch || "", pageIndex: pageIndex - 1, limit: constants.LIMIT }))
//         }
//         else if (totalPage === 1 && totalPage === pageIndex && data.length === 1) {
//             yield put(actions.getCategoryRequest({ pageIndex: pageIndex, limit: constants.LIMIT }))
//         }
//         else {
//             yield put(actions.getCategoryRequest({ keySearch: keySearch || "", pageIndex: pageIndex, limit: constants.LIMIT }))
//         }

//     } catch (error) {
//         yield put(actions.deleteCategoryFailure(error))

//     }
// }
// function* updateCategorySaga(payload) {
//     try {
//         const res = yield callAPI.updateCategoryRequest(payload.payload)
//         if (res.message !== "success") {
//             yield put(actions.updateCategoryFailure)
//         }
//         yield put(actions.updateCategorySuccess(res.data))
//         const { pageIndex, keySearch } = yield select(state => state.CategoryReducer)
//         if (keySearch !== "") {

//             yield put(actions.getCategoryRequest({ keySearch, pageIndex, limit: constants.LIMIT }))
//         } else {
//             yield put(actions.getCategoryRequest({ pageIndex, limit: constants.LIMIT }))
//         }

//     } catch (error) {

//     }
// }
// function* getDetailCategorySaga(payload) {
//     try {
//         const res = yield callAPI.getDetailCategoryRequest(payload.payload)
//         if (res.message !== "success") {
//             yield put(actions.detailCategoryAction.get.fail(res.data))
//         }
//         yield put(actions.detailCategoryAction.get.success(res.data))

//     } catch (error) {
//         yield put(actions.detailCategoryAction.get.fail(error))
//     }
// }

const CategorySaga = [
  takeLatest(actions.getCategoryRequest, getCategorySaga),
  // takeLatest(actions.deleteCategoryRequest, deleteCategorySaga),
  // takeLatest(actions.addCategoryRequest, addCategorySaga),
  // takeLatest(actions.updateCategoryRequest, updateCategorySaga),
  // takeLatest(actions.detailCategoryAction.get.request, getDetailCategorySaga)
];
export default CategorySaga;
