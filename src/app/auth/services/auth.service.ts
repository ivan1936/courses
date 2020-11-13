import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'

import { environment } from 'src/environments/environment'
import { UserInterface } from 'src/app/shared/types/user.interface'
import { PersistanceService } from 'src/app/shared/services/persistance.service'

@Injectable()
export class AuthService {
  url: string = environment.apiUrl + '/users'
  isLoggedInSelector$: Observable<boolean>
  isLoggedIn: boolean

  constructor(
    private http: HttpClient,
    private persistanceService: PersistanceService
  ) {}

  getUserById(id: number): Observable<UserInterface> {
    return this.http.get<UserInterface>(`${this.url}/${id}`)
  }

  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>(this.url)
  }

  isAuthenticated(): boolean {
    return this.persistanceService.get('userId')
  }

  logout() {
    this.persistanceService.set('userId', null)
  }
}
