import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FlexLayoutModule } from '@angular/flex-layout'
import { ReactiveFormsModule } from '@angular/forms'

import { CourseFormComponent } from 'src/app/shared/modules/courseForm/components/courseForm/courseForm.component'
import { BackendErrorMessagesModule } from 'src/app/shared/modules/backendErrorMessages/backendErrorMessages.module'
import { MaterialModule } from 'src/app/shared/modules/materialModule/material.module'

@NgModule({
  imports: [
    CommonModule, 
    BackendErrorMessagesModule, 
    ReactiveFormsModule, 
    MaterialModule,
    FlexLayoutModule,
  ],
  declarations: [CourseFormComponent],
  exports: [CourseFormComponent],
})
export class CourseFormModule {}
