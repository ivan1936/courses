import { Component, OnDestroy, OnInit } from '@angular/core'
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { ActivatedRoute } from '@angular/router'
import { filter, map } from 'rxjs/operators'

import {
  isSubmittingSelector,
  validationErrorsSelector,
  isLoadingSelector,
  courseSelector,
} from 'src/app/editCourse/store/selectors'
import { getCourseAction } from 'src/app/editCourse/store/actions/getCourse.action'
import { CourseInputInterface } from 'src/app/shared/types/courseInput.interface'
import { updateCourseAction } from 'src/app/editCourse/store/actions/updateCourse.action'
import { clearStateAction } from 'src/app/editCourse/store/actions/clearState.action'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

@Component({
  selector: 'app-edit-course',
  templateUrl: './editCourse.component.html',
  styleUrls: ['./editCourse.component.scss'],
})
export class EditCourseComponent implements OnInit, OnDestroy {
  initialValues$: Observable<CourseInputInterface>
  isSubmitting$: Observable<boolean>
  isLoading$: Observable<boolean>
  backendErrors$: Observable<BackendErrorsInterface | null>
  id: number

  constructor(private store: Store, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.initialValues()
    this.fetchData()
  }

  ngOnDestroy():void {
    this.store.dispatch(clearStateAction())
  }

  initialValues(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.isSubmitting$ = this.store.pipe(select(isSubmittingSelector))
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.backendErrors$ = this.store.pipe(select(validationErrorsSelector))
    this.initialValues$ = this.store.pipe(
      select(courseSelector),
      filter(Boolean),
      map((course: CourseInputInterface) => {
        return {
          //id: this.id,
          title: course.title,
          description: course.description,
          date: course.date,
          duration: course.duration,
          authors: course.authors
        }
      })
    )
  }

  fetchData(): void {
    this.store.dispatch(getCourseAction({ id: this.id }))
  }
  
  onSubmit(courseInput: CourseInputInterface): void {
    this.store.dispatch(updateCourseAction({ id: this.id, courseInput }))
  }
}
