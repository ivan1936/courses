import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { CourseInterface } from 'src/app/shared/types/course.interface'
import { CourseInputInterface } from 'src/app/shared/types/courseInput.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class CreateCourseService {
  constructor(private http: HttpClient) {}

  createCourse(courseInput: CourseInputInterface): Observable<CourseInterface> {
    const fullUrl = environment.apiUrl + '/courses'

    // create unique id (! по-хорошему это дело Backend'a)
    let id = new Date().getTime()
    id = id & 0xffff

    return (this.http
      .post<CourseInterface>(fullUrl, { ...courseInput, id })
      .pipe(
        map((course: CourseInterface) => {
          return course
        })
      )
    )
  }
}
