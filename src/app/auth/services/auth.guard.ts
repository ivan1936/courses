import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
} from '@angular/router'
import { AuthService } from 'src/app/auth/services/auth.service'

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    if (this.auth.isAuthenticated()) {
      return true
    } else {
      this.auth.logout()
      this.router.navigate(['/login'], {
        queryParams: {
          loginAgain: true,
        },
      })
    }
  }
}
