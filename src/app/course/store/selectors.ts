import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { CourseStateInterface } from '../types/courseState.interface'

export const courseFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CourseStateInterface
>('course')

export const isLoadingSelector = createSelector(
  courseFeatureSelector,
  (courseState: CourseStateInterface) => courseState.isLoading
)

export const errorSelector = createSelector(
  courseFeatureSelector,
  (courseState: CourseStateInterface) => courseState.error
)

export const courseSelector = createSelector(
  courseFeatureSelector,
  (courseState: CourseStateInterface) => courseState.course
)
