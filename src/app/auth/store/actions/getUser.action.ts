import { createAction, props } from '@ngrx/store'

import { ActionTypes } from 'src/app/auth/store/actionTypes'
import { UserInterface } from 'src/app/shared/types/user.interface'

export const getUserAction = createAction(ActionTypes.GET_USER)

export const getUserSuccessAction = createAction(
  ActionTypes.GET_USER_SUCCESS,
  props<{ user: UserInterface }>()
)

export const getUserFailureAction = createAction(ActionTypes.GET_USER_FAILURE)
