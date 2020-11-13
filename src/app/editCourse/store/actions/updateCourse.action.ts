import { createAction, props } from '@ngrx/store'
import { ActionTypes } from 'src/app/editCourse/store/actionTypes'
import { CourseInterface } from 'src/app/shared/types/course.interface'
import { CourseInputInterface } from 'src/app/shared/types/courseInput.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export const updateCourseAction = createAction(
  ActionTypes.UPDATE_COURSE,
  props<{ id: number; courseInput: CourseInputInterface }>()
)

export const updateCourseSuccessAction = createAction(
  ActionTypes.UPDATE_COURSE_SUCCESS,
  props<{ course: CourseInterface }>()
)

export const updateCourseFailureAction = createAction(
  ActionTypes.UPDATE_COURSE_FAILURE,
  props<{ errors: BackendErrorsInterface }>()
)
