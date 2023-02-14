import * as actions from '../../constants';

const DEFAULT_STATE = {
  isLoading: false,
  data: null,
  err: false,
  errMsg: null,
};
export default (action: any, state = DEFAULT_STATE) => {
  switch (action.type) {
    case actions.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case actions.LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        data: action.payload,
      };
    case actions.LOGIN_FAILURE:
      return {
        ...state,
        err: true,
        errMsg: action.payload,
      };

    // eslint-disable-next-line no-fallthrough
    default:
      return state;
  }
};
