import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { of } from 'rxjs'
import { Router } from '@angular/router'

import { AuthService } from 'src/app/auth/services/auth.service'
import { UserInterface } from 'src/app/shared/types/user.interface'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import {
  getUserAction,
  getUserSuccessAction,
  getUserFailureAction,
} from 'src/app/auth/store/actions/getUser.action'

@Injectable()
export class GetUserEffect {
  getUser$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getUserAction),
      switchMap(() => {
        const userId = this.persistanceService.get('userId')
        if (!userId) {
          return of(getUserFailureAction())
        }

        return this.authService.getUserById(userId).pipe(
          map((user: UserInterface) => {
            return getUserSuccessAction({ user })
          }),

          catchError(() => {
            return of(getUserFailureAction())
          })
        )
      })
    )
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
