/* eslint-disable no-case-declarations */
/* eslint-disable no-fallthrough */
import * as types from '../../constants';

const defaultState = {
  isLoading: false,
  data: [],
  err: false,
  messageError: null,
  totalPage: 1,
  pageIndex: 1,
  keySearch: '',
};
export default (state = defaultState, action : any) => {
  switch (action.type) {
    case types.CART_ADD_PRODUCT_REQUEST:
    case types.CART_GET_PRODUCT_REQUEST:
    case types.CART_DELETE_PRODUCT_REQUEST:
    case types.CART_SAVE_PAYMENT_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.CART_ADD_PRODUCT_SUCCESS:
      const product = action.payload;
      const existProduct = state.data.find(
        (item:any) => item.product === product.product
      );
      if (existProduct) {
        return {
          ...state,
          isLoading: false,
          data: action.payload,
          err: false,
          messageError: null,
          pageIndex: action.payload.pageIndex,
          totalPage: action.payload.totalPage,
          keySearch: action.payload.keySearch,
        };
      }

    default:
      return state;
  }
};
