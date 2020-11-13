import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/editCourse/store/actionTypes'
import { CourseInterface } from 'src/app/shared/types/course.interface'

export const getCourseAction = createAction(
  ActionTypes.GET_COURSE,
  props<{ id: number }>()
)

export const getCourseSuccessAction = createAction(
  ActionTypes.GET_COURSE_SUCCESS,
  props<{ course: CourseInterface }>()
)

export const getCourseFailureAction = createAction(
  ActionTypes.GET_COURSE_FAILURE
)
