import { createFeatureSelector, createSelector } from '@ngrx/store'

import { CreateCourseStateInterface } from 'src/app/createCourse/types/createCourseState.interface'
import { AppStateInterface } from 'src/app/shared/types/appState.interface'

export const createCourseFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CreateCourseStateInterface
>('createCourse')

export const isSubmittingSelector = createSelector(
  createCourseFeatureSelector,
  (createCourseState: CreateCourseStateInterface) =>
    createCourseState.isSubmitting
)

export const validationErrorsSelector = createSelector(
  createCourseFeatureSelector,
  (createCourseState: CreateCourseStateInterface) =>
    createCourseState.validationErrors
)
