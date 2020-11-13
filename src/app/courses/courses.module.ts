import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { EffectsModule } from '@ngrx/effects'
import { Routes, RouterModule } from '@angular/router'
import { StoreModule } from '@ngrx/store'
import { FormsModule } from '@angular/forms'
import { FlexLayoutModule } from '@angular/flex-layout'

import { CoursesComponent } from 'src/app/courses/components/courses/courses.component'
import { CoursesService } from 'src/app/courses/services/courses.service'
import { GetCoursesEffect } from 'src/app/courses/store/effects/getCourses.effect'
import { reducers } from 'src/app/courses/store/reducers'
import { ErrorMessageModule } from 'src/app/shared/modules/errorMessage/errorMessage.module'
import { LoadingModule } from 'src/app/shared/modules/loading/loading.module'
import { CreateCourseModule } from 'src/app/createCourse/createCourse.module'
import { AuthGuard } from 'src/app/auth/services/auth.guard'
import { ItemListComponent } from 'src/app/shared/components/itemList/itemList.component'
import { MaterialModule } from 'src/app/shared/modules/materialModule/material.module'
import { PipesModule } from 'src/app/shared/modules/pipesModule/pipes.module'

const routes: Routes = [
  {
    path: 'courses',
    component: CoursesComponent,
    canActivate: [AuthGuard],
    pathMatch: 'full',
  },
]
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FlexLayoutModule,
    PipesModule,
    RouterModule.forChild(routes),
    EffectsModule.forFeature([GetCoursesEffect]),
    StoreModule.forFeature('courses', reducers),
    RouterModule,
    ErrorMessageModule,
    LoadingModule,
    CreateCourseModule,
  ],
  declarations: [CoursesComponent, ItemListComponent],
  providers: [CoursesService, AuthGuard],
})
export class CoursesModule {}
