import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { CourseInterface } from 'src/app/shared/types/course.interface'
import { CoursesResponseInterface } from 'src/app/courses/types/coursesResponse.interface'

@Injectable()
export class CoursesService {
  constructor(private http: HttpClient, private route: ActivatedRoute) {}

  getCourses(url: string, offset: number, addCount: number): Observable<CoursesResponseInterface> {

    return this.http.get<CourseInterface[]>(url).pipe(
      map((courses: CourseInterface[]) => {

        let allCoursesLoaded: boolean = false
        let limit: number = environment.limit

        if((offset + limit) >= courses.length){
          allCoursesLoaded = true
          limit = courses.length - offset - addCount
        } else allCoursesLoaded = false
            
        const coursesPart: CourseInterface[] = 
          courses.slice(offset, (offset + limit))

        return { 
          courses: coursesPart, 
          offset: offset + limit,
          allCoursesLoaded
        }
      })
    )    
  }
}
