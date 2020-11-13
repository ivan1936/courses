import { Pipe, PipeTransform } from '@angular/core'

import { CourseInterface } from 'src/app/shared/types/course.interface'

@Pipe({
  name: 'searchCourses',
})
export class SearchPipe implements PipeTransform {
  transform(courses: CourseInterface[], search = ''): CourseInterface[] {
    if (!search.trim()) {
      return courses
    }

    return courses.filter((course) => {
      return course.title.toLowerCase().includes(search.toLowerCase())
    })
  }
}
