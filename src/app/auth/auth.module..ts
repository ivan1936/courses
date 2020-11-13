import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { ReactiveFormsModule } from '@angular/forms'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AuthService } from 'src/app/auth/services/auth.service'
import { reducers } from 'src/app/auth/store/reducers'
import { LoginComponent } from 'src/app/auth/components/login/login.component'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'
import { LoginEffect } from 'src/app/auth/store/effects/login.effect'
import { LogoutEffect } from 'src/app/auth/store/effects/logout.effect'
import { GetUserEffect } from 'src/app/auth/store/effects/getUser.effect'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { MaterialModule } from 'src/app/shared/modules/materialModule/material.module'

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
]
@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    StoreModule.forFeature('auth', reducers),
    EffectsModule.forFeature([LoginEffect, GetUserEffect, LogoutEffect]),
    BackendErrorMessagesModule,
  ],
  declarations: [LoginComponent],
  providers: [AuthService, PersistanceService],
})
export class AuthModule {}
