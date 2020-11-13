import { Injectable } from '@angular/core'
import { createEffect, Actions, ofType } from '@ngrx/effects'
import { map, catchError, switchMap, tap } from 'rxjs/operators'
import { Router } from '@angular/router'
import { of } from 'rxjs'

import { AuthService } from 'src/app/auth/services/auth.service'
import { UserInterface } from 'src/app/shared/types/user.interface'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import {
  loginAction,
  loginSuccessAction,
  loginFailureAction,
} from 'src/app/auth/store/actions/login.action'
import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface'

@Injectable()
export class LoginEffect {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loginAction),
      switchMap(({ request }) => {
        return this.authService.getUsers().pipe(
          map((users: UserInterface[]) => {
            const candidatUser: UserInterface = users.find(
              (user) => request.user.email === user.email
            )
            if (candidatUser) {
              if (candidatUser.password === request.user.password) {
                this.persistanceService.set('userId', candidatUser.id)
                const user: AuthResponseInterface = {
                  id: candidatUser.id,
                  email: candidatUser.email,
                  userName: candidatUser.userName,
                }
                return loginSuccessAction({ user })
              } else {
                return loginFailureAction({
                  errors: { user: ['Пароли не совпали. Попробуйте ещё раз.'] },
                })
              }
            } else {
              return loginFailureAction({
                errors: { user: ['Not found user'] },
              })
            }
          }),
          catchError((errorResponse: any) => {
            return of(
              loginFailureAction({
                errors: { loginError: [errorResponse.body.error] },
              })
            )
          })
        )
      })
    )
  )

  redirectAfterSubmit$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(loginSuccessAction),
        tap(() => {
          this.router.navigateByUrl('/courses')
        })
      ),
    { dispatch: false }
  )

  constructor(
    private actions$: Actions,
    private authService: AuthService,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
