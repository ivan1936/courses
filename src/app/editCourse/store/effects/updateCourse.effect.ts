import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { Router } from '@angular/router'
import { of } from 'rxjs'

import { CourseInterface } from 'src/app/shared/types/course.interface'
import { EditCourseService } from 'src/app/editCourse/services/editCourse.service'
import {
  updateCourseSuccessAction,
  updateCourseAction,
  updateCourseFailureAction,
} from 'src/app/editCourse/store/actions/updateCourse.action'

@Injectable()
export class UpdateCourseEffect {
  updatedCourse: CourseInterface

  updateCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(updateCourseAction),
      switchMap(({ id, courseInput }) => {
        //приходится так изворачиваться, т.к. backend не возвращает измененный объект (null)
        this.updatedCourse = {...courseInput, id}
        
        return this.editCourseService.updateCourse(id, courseInput).pipe(
          map((course) => {
            //API возвращает (course: null)
            return updateCourseSuccessAction({ course: this.updatedCourse })
          }),
          
          catchError((errorResponse: any) => {
            return of(
              updateCourseFailureAction({
                errors: { updateCourse: [errorResponse.body.error] },
              })
            )
          })
        )
      })
    )
  )

  redirectAfterUpdate$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(updateCourseSuccessAction),
        tap(() => {
          this.router.navigate(['/courses'])
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private editCourseService: EditCourseService,
    private router: Router
  ) {}
}
