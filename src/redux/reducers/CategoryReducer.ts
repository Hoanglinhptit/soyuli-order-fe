import * as types from '../../constants';

const defaultState = {
  isLoading: false,
  data: [],
  err: false,
  dataDetail: {},
  messageError: null,
  totalPage: 1,
  pageIndex: 1,
  keySearch: '',
};
// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action: any) => {
  switch (action.type) {
    case types.GET_CATEGORY_REQUEST:
    case types.ADD_CATEGORY_REQUEST:
    case types.UPDATE_CATEGORY_REQUEST:
    case types.DELETE_CATEGORY_REQUEST:
    case types.GET_DETAIL_CATEGORY_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload.data.data,
        dataDetail: {},
        totalPage: action.payload.data.totalPage,
        pageIndex: action.payload.data.pageIndex,
        keySearch: action.payload.data.keySearch,
        err: false,
        messageError: null,
      };
    case types.GET_DETAIL_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
        dataDetail: action.payload,
      };
    case types.ADD_CATEGORY_SUCCESS:
    case types.UPDATE_CATEGORY_SUCCESS:
    case types.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isLoading: false,
      };
    case types.GET_CATEGORY_FAILURE:
    case types.ADD_CATEGORY_FAILURE:
    case types.UPDATE_CATEGORY_FAILURE:
    case types.DELETE_CATEGORY_FAILURE:
    case types.GET_DETAIL_CATEGORY_FAILURE:
      return {
        ...state,
        isLoading: false,
        err: true,
        messageError: action.payload,
      };

    default:
      return state;
  }
};
