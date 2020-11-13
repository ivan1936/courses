import { Component, OnInit, Input } from '@angular/core'
import { Store, select } from '@ngrx/store';

import { CourseInterface } from 'src/app/shared/types/course.interface'
import { deleteCourseAction } from 'src/app/course/store/actions/deleteCourse.action'
import { Router } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './itemList.component.html',
  styleUrls: ['./itemList.component.scss'],
})
export class ItemListComponent {
  @Input('course') course: CourseInterface
  
  constructor(private store: Store,private router:Router){}

  deleteCourse(id:number): void {
    this.store.dispatch(deleteCourseAction({ id }))
  }

  editCourse(id:number): void {
    this.router.navigateByUrl(`/courses/${id}/edit`)
  }
}
