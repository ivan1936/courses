import { createAction, props } from '@ngrx/store'

import { ActionTypes } from 'src/app/courses/store/actionTypes'

export const clearStateAction = createAction(
  ActionTypes.CLEAR_STATE
)