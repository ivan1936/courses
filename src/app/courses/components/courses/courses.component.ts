import { Component, OnInit } from '@angular/core'
import { Store, select } from '@ngrx/store'
import { Observable, Subscription } from 'rxjs'
import { Router } from '@angular/router'

import { getCoursesAction } from 'src/app/courses/store/actions/getCourses.action'
import { environment } from 'src/environments/environment'
import {
  isLoadingSelector,
  errorSelector,
  coursesSelector,
  offsetSelector,
  allCoursesLoadedSelector,
  addCountSelector
} from 'src/app/courses/store/selectors'
import { CourseInterface } from 'src/app/shared/types/course.interface'

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  isLoading$: Observable<boolean>
  error$: Observable<string | null>
  courses$: Observable<CourseInterface[] | null>
  //offset$: Observable<number | null>
  allCoursesLoaded$: Observable<boolean>
  addCountSelector$: Observable<number>

  offsetSubscription: Subscription
  addCountSubscription: Subscription
  
  searchStr = ''
  inputValue = ''
  currentPage = 1
  limit = environment.limit
  url: string = environment.apiUrl + '/courses' 
  
  offset: number
  addCount: number
  
  constructor(private store: Store,private router: Router ) {}

  ngOnInit() {
    this.initializeValues()
    this.initializeListeners()              
  }

  ngOnDestroy(): void {
    this.offsetSubscription.unsubscribe()
    this.addCountSubscription.unsubscribe()
  }

  initializeValues(): void {
    this.isLoading$ = this.store.pipe(select(isLoadingSelector))
    this.error$ = this.store.pipe(select(errorSelector))
    this.courses$ = this.store.pipe(select(coursesSelector))
    this.allCoursesLoaded$ = this.store.pipe(select(allCoursesLoadedSelector))
  }

  initializeListeners(): void {
    this.addCountSubscription = this.store
      .pipe(select(addCountSelector))
      .subscribe((addCount: number) => {
        this.addCount = addCount
      })
    
    this.offsetSubscription = this.store
      .pipe(select(offsetSelector))
      .subscribe((offset: number) => {
        this.offset = offset 
        if(offset === 0) {
          this.store.dispatch(getCoursesAction({url: this.url, offset, addCount: this.addCount}))
        }        
      })    
  }

  loadMoreCourses(){
    this.store.dispatch(getCoursesAction({url: this.url, offset: this.offset, addCount: this.addCount }))
  }

  onClick(){
    this.searchStr = this.inputValue
  }

  onKey(event: any): void {
    if(event.target.value === ''){this.searchStr = ''}
  }
  
}