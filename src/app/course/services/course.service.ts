import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { environment } from 'src/environments/environment'
import { CourseInterface } from 'src/app/shared/types/course.interface'

@Injectable()
export class CourseService {
  constructor(private http: HttpClient) {}

  deleteCourse(id: number): Observable<{}> {
    const url = `${environment.apiUrl}/courses/${id}`

    return this.http.delete<{}>(url)
  }

  getCourse(id: number): Observable<CourseInterface> {
    const fullUrl = `${environment.apiUrl}/courses/${id}`
    return this.http.get<CourseInterface>(fullUrl).pipe(
      map((course: CourseInterface) => {
        return course
      })
    )
  }
}
