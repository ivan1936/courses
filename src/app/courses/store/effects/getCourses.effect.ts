import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap } from 'rxjs/operators'
import { of } from 'rxjs'

import { CoursesService } from 'src/app/courses/services/courses.service'
import {
  getCoursesAction,
  getCoursesSuccessAction,
  getCoursesFailureAction,
} from 'src/app/courses/store/actions/getCourses.action'
import { CoursesResponseInterface } from 'src/app/courses/types/coursesResponse.interface'

@Injectable()
export class GetCoursesEffect {
  getCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCoursesAction),
      switchMap(({ url, offset, addCount }) => {
        return this.coursesService.getCourses(url, offset, addCount).pipe(
          map((response: CoursesResponseInterface) => {
              return getCoursesSuccessAction({ 
                courses: response.courses, 
                offset: response.offset, 
                allCoursesLoaded:response.allCoursesLoaded
              })
          }),
          catchError(() => {
            return of(getCoursesFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private coursesService: CoursesService
  ){}
}
