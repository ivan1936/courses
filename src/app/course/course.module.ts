import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { FlexLayoutModule } from '@angular/flex-layout'

import { AuthGuard } from 'src/app/auth/services/auth.guard'
import { CourseComponent } from 'src/app/course/components/course/course.component'
import { reducers } from 'src/app/course/store/reducers'
import { GetCourseEffect } from 'src/app/course/store/effects/getCourse.effect'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module'
import { DeleteCourseEffect } from './store/effects/deleteCourse.effect'
import { CourseService } from 'src/app/course/services/course.service'
import { MaterialModule } from 'src/app/shared/modules/materialModule/material.module'
import { PipesModule } from '../shared/modules/pipesModule/pipes.module'

const routes = [
  {
    path: 'courses/:id',
    component: CourseComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    PipesModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('course', reducers),
    EffectsModule.forFeature([GetCourseEffect, DeleteCourseEffect]),
    LoadingModule,
    ErrorMessageModule,    
  ],
  declarations: [CourseComponent],
  providers: [CourseService],
})
export class CourseModule {}