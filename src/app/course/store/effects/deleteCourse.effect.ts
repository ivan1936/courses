import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router'

import { CourseService } from 'src/app/course/services/course.service'
import {
  deleteCourseAction,
  deleteCourseSuccessAction,
  deleteCourseFailureAction,
} from 'src/app/course/store/actions/deleteCourse.action'

@Injectable()
export class DeleteCourseEffect {
  idCourse: number                //по-хорошему этот id должен возвращать backend после удаления.
  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteCourseAction),
      switchMap(({ id }) => {
        this.idCourse = id
        return this.courseService.deleteCourse(id).pipe(
          map(() => {
            return deleteCourseSuccessAction({id: this.idCourse})
          }),

          catchError(() => {
            return of(deleteCourseFailureAction())
          })
        )
      })
    )
  )

  redirectAfterDelete$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(deleteCourseSuccessAction),
        tap(() => {
          this.router.navigate(['/courses'])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private courseService: CourseService,
    private router: Router
  ) {}
}
