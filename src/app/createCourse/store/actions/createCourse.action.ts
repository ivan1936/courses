import { createAction, props } from '@ngrx/store'

import { ActionTypes } from 'src/app/createCourse/store/actionTypes'
import { CourseInterface } from 'src/app/shared/types/course.interface'
import { CourseInputInterface } from 'src/app/shared/types/courseInput.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export const createCourseAction = createAction(
  ActionTypes.CREATE_COURSE,
  props<{ courseInput: CourseInputInterface }>()
)

export const createCourseSuccessAction = createAction(
  ActionTypes.CREATE_COURSE_SUCCESS,
  props<{ course: CourseInterface }>()
)

export const createCourseFailureAction = createAction(
  ActionTypes.CREATE_COURSE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
