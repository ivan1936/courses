import { createReducer, on, Action } from '@ngrx/store'

import { EditCourseStateInterface } from 'src/app/editCourse/types/editCourseState.interface'
import {
  updateCourseAction,
  updateCourseSuccessAction,
  updateCourseFailureAction,
} from 'src/app/editCourse/store/actions/updateCourse.action'
import {
  getCourseAction,
  getCourseSuccessAction,
  getCourseFailureAction,
} from 'src/app/editCourse/store/actions/getCourse.action'
import {
  clearStateAction,  
} from 'src/app/editCourse/store/actions/clearState.action'

const initialState: EditCourseStateInterface = {
  isLoading: false,
  course: null,
  isSubmitting: false,
  validationErrors: null,
}

const editCourseReducer = createReducer(
  initialState,
  on(
    updateCourseAction,
    (state): EditCourseStateInterface => ({
      ...state,
      isSubmitting: true,
    })
  ),
  on(
    updateCourseSuccessAction,
    (state): EditCourseStateInterface => ({
      ...state,
      isSubmitting: false
    })
  ),
  on(
    updateCourseFailureAction,
    (state, action): EditCourseStateInterface => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })
  ),
  on(
    getCourseAction,
    (state): EditCourseStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCourseSuccessAction,
    (state, action): EditCourseStateInterface => ({
      ...state,
      isLoading: false,
      course: action.course,
    })
  ),
  on(
    getCourseFailureAction,
    (state): EditCourseStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    clearStateAction,
    (state): EditCourseStateInterface => ({
      ...state,
      ...initialState,
    })
  ),
)

export function reducers(state: EditCourseStateInterface, action: Action) {
  return editCourseReducer(state, action)
}
