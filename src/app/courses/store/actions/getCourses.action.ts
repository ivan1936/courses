import { createAction, props } from '@ngrx/store'

import { ActionTypes } from 'src/app/courses/store/actionTypes'
import { CourseInterface } from 'src/app/shared/types/course.interface'

export const getCoursesAction = createAction(
  ActionTypes.GET_COURSES,
  props<{ url: string, offset: number, addCount: number }>()
)

export const getCoursesSuccessAction = createAction(
  ActionTypes.GET_COURSES_SUCCESS,
  props<{ courses: CourseInterface[], offset: number, allCoursesLoaded: boolean }>()
)

export const getCoursesFailureAction = createAction(
  ActionTypes.GET_COURSES_FAILURE
)
