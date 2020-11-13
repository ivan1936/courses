import { Injectable } from '@angular/core'
import { Actions, createEffect, ofType } from '@ngrx/effects'
import { tap, map } from 'rxjs/operators'
import { Router } from '@angular/router'

import { logoutAction } from 'src/app/auth/store/actions/logout.action'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { clearStateAction } from 'src/app/courses/store/actions/clearState.action';

@Injectable()
export class LogoutEffect {
  logout$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(logoutAction),
        map(() => {
          return clearStateAction()
        }),
        tap(() => {
          this.persistanceService.set('userId', '')
          this.router.navigateByUrl('/')
        })
      ),
    //{ dispatch: false }
  )
  constructor(
    private actions$: Actions,
    private persistanceService: PersistanceService,
    private router: Router
  ) {}
}
