import { Component, OnInit, OnDestroy } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { ActivatedRoute, Router } from '@angular/router'
import { Subscription, Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import {
  courseSelector,
  isLoadingSelector,
  errorSelector,
} from 'src/app/course/store/selectors'
import { getCourseAction } from 'src/app/course/store/actions/getCourse.action'
import { deleteCourseAction } from 'src/app/course/store/actions/deleteCourse.action'
import { clearStateAction } from 'src/app/course/store/actions/clearState.action'
import { CourseInterface } from 'src/app/shared/types/course.interface'

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit, OnDestroy {
  id: number
  course: CourseInterface
  courseSubscription: Subscription
  isLoading$: Observable<boolean>
  error$: Observable<string | null>

  constructor(
    private store: Store, 
    private route: ActivatedRoute, 
    private router: Router) {}

  ngOnInit(): void {
    this.initializeValues()
    this.initializeListeners()
    this.fetchData()
  }

  ngOnDestroy(): void {
    this.courseSubscription.unsubscribe()
    this.store.dispatch(clearStateAction())
  }

  initializeValues(): void {
    this.id = +this.route.snapshot.paramMap.get('id')
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.store.pipe(select(courseSelector)).pipe(
      map((course: CourseInterface | null) => {
        return course
      })
    )
  }

  initializeListeners(): void {
    this.courseSubscription = this.store
      .pipe(select(courseSelector))
      .subscribe((course: CourseInterface | null) => {
        this.course = course
      })
  }

  fetchData(): void {
    this.store.dispatch(getCourseAction({ id: this.id }))
  }

  deleteCourse(): void {
    this.store.dispatch(deleteCourseAction({ id: this.id }))
  }

  onCancel(): void {
    this.router.navigateByUrl('/courses')
  }
}
