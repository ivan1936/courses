import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'

import {
  isSubmittingSelector,
  validationErrorsSelector,
} from 'src/app/createCourse/store/selectors'
import { createCourseAction } from 'src/app/createCourse/store/actions/createCourse.action'
import { CourseInputInterface } from 'src/app/shared/types/courseInput.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'app-create-course',
  templateUrl: './createCourse.component.html',
  styleUrls: ['./createCourse.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  initialValues: CourseInputInterface = {
    title: '',
    description: '',
    duration: '',
    date: '',
    authors:''
  }
  isSubmitting$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
  }

  onSubmit(courseInput: CourseInputInterface): void {
    this.store.dispatch(createCourseAction({ courseInput }))
  }
}
