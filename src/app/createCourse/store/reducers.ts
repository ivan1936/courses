import { createReducer, on, Action } from '@ngrx/store'

import {
  createCourseAction,
  createCourseSuccessAction,
  createCourseFailureAction,
} from 'src/app/createCourse/store/actions/createCourse.action'
import { CreateCourseStateInterface } from 'src/app/createCourse/types/createCourseState.interface'

const initialState: CreateCourseStateInterface = {
  isSubmitting: false,
  validationErrors: null,
}

const createCourseReducer = createReducer(
  initialState,
  on(
    createCourseAction,
    (state): CreateCourseStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),

  on(
    createCourseSuccessAction,
    (state): CreateCourseStateInterface => ({
      ...state,
      isSubmitting: false,
    })
  ),

  on(
    createCourseFailureAction,
    (state, action): CreateCourseStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  )
)

export function reducers(state: CreateCourseStateInterface, action: Action) {
  return createCourseReducer(state, action)
}
