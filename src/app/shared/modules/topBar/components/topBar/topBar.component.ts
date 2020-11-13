import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import {
  isLoggedInSelector,
  isAnonymousSelector,
} from 'src/app/auth/store/selectors'
import { logoutAction } from 'src/app/auth/store/actions/logout.action'

@Component({
  selector: 'app-topbar',
  templateUrl: './topBar.component.html',
  styleUrls: ['./topBar.component.scss'],
})
export class TopBarComponent implements OnInit {
  isLoggedIn$: Observable<boolean>
  isAnonymous$: Observable<boolean>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector))
    this.isAnonymous$ = this.store.pipe(select(isAnonymousSelector))
  }

  logout(): void {
    this.store.dispatch(logoutAction())
  }
}
