import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'

import { CourseInterface } from 'src/app/shared/types/course.interface'
import { CourseInputInterface } from 'src/app/shared/types/courseInput.interface'
import { environment } from 'src/environments/environment'

@Injectable()
export class EditCourseService {
  constructor(private http: HttpClient) {}

  updateCourse(
    id: number,
    course: CourseInputInterface
  ): Observable<CourseInterface> {
    const fullUrl = `${environment.apiUrl}/courses/${id}`
    // insert id (! по-хорошему это дело Backend'a)
    //or use the patch method, but this api does not support it.

    return this.http.put<CourseInterface>(fullUrl, { ...course, id })
    .pipe(
      map((course: CourseInterface) => {
        //бекенд на put-запрос возвращает (null), а не измененный объект.
        return course
      })
    )
  }
}
