import { AnyAction } from '@reduxjs/toolkit';
import { createAction, Action } from 'redux-actions'
import *as constants from '../../constants'

// eslint-disable-next-line @typescript-eslint/naming-convention
type account ={
    email:string, 
    passWord: string
}

// export const loginRequest: (account: account) => void= createAction(constants.LOGIN_REQUEST);

export const loginRequest = createAction(constants.LOGIN_REQUEST)
export const loginSuccess = createAction(constants.LOGIN_SUCCESS)
export const loginFailure = createAction(constants.LOGIN_FAILURE)

