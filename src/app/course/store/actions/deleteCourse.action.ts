import { createAction, props } from '@ngrx/store'

import { ActionTypes } from 'src/app/course/store/actionTypes'

export const deleteCourseAction = createAction(
  ActionTypes.DELETE_COURSE,
  props<{ id: number }>()
)

export const deleteCourseSuccessAction = createAction(
  ActionTypes.DELETE_COURSE_SUCCESS,
  props<{ id: number }>()
)

export const deleteCourseFailureAction = createAction(
  ActionTypes.DELETE_COURSE_FAILURE
)

