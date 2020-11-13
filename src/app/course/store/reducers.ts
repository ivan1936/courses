import { createReducer, on, Action } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'

import { CourseStateInterface } from 'src/app/course/types/courseState.interface'
import {
  getCourseAction,
  getCourseSuccessAction,
  getCourseFailureAction,
} from 'src/app/course/store/actions/getCourse.action'
import {
  clearStateAction,  
} from 'src/app/course/store/actions/clearState.action'

const initialState: CourseStateInterface = {
  course: null,
  isLoading: false,
  error: null,
}

const courseReducer = createReducer(
  initialState,
  on(
    getCourseAction,
    (state): CourseStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCourseSuccessAction,
    (state, action): CourseStateInterface => ({
      ...state,
      isLoading: false,
      course: action.course,
    })
  ),
  on(
    getCourseFailureAction,
    (state): CourseStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    clearStateAction,
    (state): CourseStateInterface => ({
      ...state,
      ...initialState,
    })
  ),
  on(routerNavigationAction, (): CourseStateInterface => initialState)
)

export function reducers(state: CourseStateInterface, action: Action) {
  return courseReducer(state, action)
}
