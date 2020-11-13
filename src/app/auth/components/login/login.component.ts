import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Params, Router } from '@angular/router'
import { Store, select } from '@ngrx/store'
import { Observable } from 'rxjs'

import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { AuthRequestInterface } from 'src/app/auth/types/authRequest.interface'
import { loginAction } from 'src/app/auth/store/actions/login.action'
import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/auth/store/selectors'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  form: FormGroup
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  message: string
  constructor(
    private fb: FormBuilder,
    private store: Store,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.initializeForm()
    this.initializeValues()
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Пожалуйста, войдите в систему.'
      }
    })
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    })
  }

  initializeValues(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(): void {
    if (this.form.valid) {
      const request: AuthRequestInterface = {
        user: this.form.value,
      }
      this.store.dispatch(loginAction({ request }))
    }
  }
}
