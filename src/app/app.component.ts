import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Store, select } from '@ngrx/store'

import { getUserAction } from 'src/app/auth/store/actions/getUser.action'

@Component({
  selector: ' app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private store: Store, private router: Router) {}

  ngOnInit(): void {
    this.store.dispatch(getUserAction())
  }
}
