import { createAction } from '@ngrx/store'

import { ActionTypes } from 'src/app/course/store/actionTypes'

export const clearStateAction = createAction(
    ActionTypes.CLEAR_STATE
)