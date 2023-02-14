import { createAction } from 'redux-actions'
import *as constants from '../../constants'

export const loginRequest = createAction(constants.LOGIN_REQUEST)
export const loginSuccess = createAction(constants.LOGIN_SUCCESS)
export const loginFailure = createAction(constants.LOGIN_FAILURE)

