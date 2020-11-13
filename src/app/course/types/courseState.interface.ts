import { CourseInterface } from 'src/app/shared/types/course.interface'

export interface CourseStateInterface {
  isLoading: boolean
  error: string | null
  course: CourseInterface | null
}
