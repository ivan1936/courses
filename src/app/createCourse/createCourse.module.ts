import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { AuthGuard } from 'src/app/auth/services/auth.guard'
import { CreateCourseComponent } from 'src/app/createCourse/components/createCorse/createCourse.component'
import { CourseFormModule } from 'src/app/shared/modules/courseForm/courseForm.module'
import { CreateCourseService } from 'src/app/createCourse/services/createCourse.service'
import { CreateCourseEffect } from './store/effects/createCourse.effect'
import { reducers } from 'src/app/createCourse/store/reducers'

const routes = [
  {
    path: 'courses/new',
    component: CreateCourseComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CourseFormModule,
    EffectsModule.forFeature([CreateCourseEffect]),
    StoreModule.forFeature('createCourse', reducers),
  ],
  declarations: [CreateCourseComponent],
  providers: [CreateCourseService],
})
export class CreateCourseModule {}
