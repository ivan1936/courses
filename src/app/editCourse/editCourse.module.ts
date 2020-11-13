import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'

import { AuthGuard } from 'src/app/auth/services/auth.guard'
import { reducers } from 'src/app/editCourse/store/reducers'
import { CourseFormModule } from 'src/app/shared/modules/courseForm/courseForm.module'
import { EditCourseComponent } from 'src/app/editCourse/components/editCourse/editCourse.component'
import { UpdateCourseEffect } from 'src/app/editCourse/store/effects/updateCourse.effect'
import { GetCourseEffect } from 'src/app/editCourse/store/effects/getCourse.effect'
import { EditCourseService } from 'src/app/editCourse/services/editCourse.service'
import { CourseService } from 'src/app/course/services/course.service'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'

const routes = [
  {
    path: 'courses/:id/edit',
    component: EditCourseComponent,
    canActivate: [AuthGuard]
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    CourseFormModule,
    EffectsModule.forFeature([UpdateCourseEffect, GetCourseEffect]),
    StoreModule.forFeature('editCourse', reducers),
    LoadingModule,
  ],
  declarations: [EditCourseComponent],
  providers: [EditCourseService, CourseService],
})
export class EditCourseModule {}
