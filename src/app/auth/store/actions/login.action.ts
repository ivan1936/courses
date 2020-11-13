import { createAction, props } from '@ngrx/store'

import { ActionTypes } from 'src/app/auth/store/actionTypes'
import { AuthRequestInterface } from 'src/app/auth/types/authRequest.interface'
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export const loginAction = createAction(
  ActionTypes.LOGIN,
  props<{ request: AuthRequestInterface }>()
)

export const loginSuccessAction = createAction(
  ActionTypes.LOGIN_SUCCESS,
  props<{ user: AuthResponseInterface }>()
)

export const loginFailureAction = createAction(
  ActionTypes.LOGIN_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
