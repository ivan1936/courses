import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { Router } from '@angular/router'
import { of } from 'rxjs'

import { CreateCourseService } from 'src/app/createCourse/services/createCourse.service'
import {
  createCourseSuccessAction,
  createCourseFailureAction,
  createCourseAction,
} from 'src/app/createCourse/store/actions/createCourse.action'
import { CourseInterface } from 'src/app/shared/types/course.interface'

@Injectable()
export class CreateCourseEffect {
  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createCourseAction),
      switchMap(({ courseInput }) => {
        return this.createCourseService.createCourse(courseInput).pipe(
          map((course: CourseInterface) => {
            return createCourseSuccessAction({ course })
          }),

          catchError((errorResponse: any) => {
            return of(
              createCourseFailureAction({
                errors: { createError: [errorResponse.body.error] },
              })
            )
          })
        )
      })
    )
  )

  redirectAfterCreate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(createCourseSuccessAction),
        tap(({ course }) => {
          this.router.navigate(['/courses'/*, course.id*/])  //можно перейти к редактированию
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private createCourseService: CreateCourseService,
    private router: Router
  ) {}
}
