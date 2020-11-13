import { CourseInterface } from 'src/app/shared/types/course.interface'

export interface CoursesStateInterface {
  isLoading: boolean
  error: string | null
  courses: CourseInterface[]
  offset: number
  allCoursesLoaded: | boolean
  addCount: number
}
