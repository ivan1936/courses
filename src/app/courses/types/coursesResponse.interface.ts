import { CourseInterface } from 'src/app/shared/types/course.interface'

export interface CoursesResponseInterface {
  courses: CourseInterface[]
  offset: number
  allCoursesLoaded: boolean  
}
