import { createAction } from '@ngrx/store'
import { ActionTypes } from 'src/app/editCourse/store/actionTypes'

export const clearStateAction = createAction(
    ActionTypes.CLEAR_STATE
)