import { createFeatureSelector, createSelector } from '@ngrx/store'

import { AppStateInterface } from 'src/app/shared/types/appState.interface'
import { CoursesStateInterface } from 'src/app/courses/types/coursesState.interface'

export const coursesFeatureSelector = createFeatureSelector<
  AppStateInterface,
  CoursesStateInterface
>('courses')

export const isLoadingSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.isLoading
)

export const errorSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.error
)

export const coursesSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.courses
)

export const offsetSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.offset
)

export const allCoursesLoadedSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.allCoursesLoaded
)

export const addCountSelector = createSelector(
  coursesFeatureSelector,
  (coursesState: CoursesStateInterface) => coursesState.addCount
)
