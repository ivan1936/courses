import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { EditCourseStateInterface } from 'src/app/editCourse/types/editCourseState.interface'

export const editCourseFeatureSelector = createFeatureSelector<
  AppStateInterface,
  EditCourseStateInterface
>('editCourse')

export const courseSelector = createSelector(
  editCourseFeatureSelector,
  (editCourseState: EditCourseStateInterface) => editCourseState.course
)

export const isLoadingSelector = createSelector(
  editCourseFeatureSelector,
  (editCourseState: EditCourseStateInterface) => editCourseState.isLoading
)

export const isSubmittingSelector = createSelector(
  editCourseFeatureSelector,
  (editCourseState: EditCourseStateInterface) => editCourseState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  editCourseFeatureSelector,
  (editCourseState: EditCourseStateInterface) =>
    editCourseState.validationErrors
)
