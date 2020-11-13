import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { HttpErrorResponse } from '@angular/common/http'
import { Router } from '@angular/router'
import { of } from 'rxjs'

import { CourseInterface } from 'src/app/shared/types/course.interface'
import { CourseService } from 'src/app/course/services/course.service'
import {
  getCourseAction,
  getCourseSuccessAction,
  getCourseFailureAction,
} from 'src/app/editCourse/store/actions/getCourse.action'

@Injectable()
export class GetCourseEffect {
  getCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getCourseAction),
      switchMap(({ id }) => {
        return this.courseService.getCourse(id).pipe(
          map((course: CourseInterface) => {
            return getCourseSuccessAction({ course })
          }),

          catchError(() => {
            return of(getCourseFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private router: Router
  ) {}
}
