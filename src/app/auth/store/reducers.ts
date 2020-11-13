import { createReducer, on, Action } from '@ngrx/store'

import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action'
import { logoutAction } from 'src/app/auth/store/actions/logout.action'
import {
  getUserAction,
  getUserSuccessAction,
  getUserFailureAction,
} from 'src/app/auth/store/actions/getUser.action'

const initialState: AuthStateInterface = {
  isSubmitting: false,
  isLoading: false,
  user: null,
  validationErrors: null,
  isLoggedIn: null,
}

const authReducer = createReducer(
  initialState,
  on(
    loginAction,
    (state): AuthStateInterface => ({
      ...state,
      isSubmitting: true,
      validationErrors: null,
    })
  ),
  on(
    loginSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      isLoggedIn: true,
      user: action.user,
    })
  ),
  on(
    loginFailureAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getUserAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getUserSuccessAction,
    (state, action): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: true,
      user: action.user,
    })
  ),
  on(
    getUserFailureAction,
    (state): AuthStateInterface => ({
      ...state,
      isLoading: false,
      isLoggedIn: false,
      user: null,
    })
  ),
  on(
    logoutAction,
    (state): AuthStateInterface => ({
      ...state,
      ...initialState,
      isLoggedIn: false,
    })
  )
)

export function reducers(state: AuthStateInterface, action: Action) {
  return authReducer(state, action)
}
