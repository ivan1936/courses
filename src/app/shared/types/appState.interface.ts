import { AuthStateInterface } from 'src/app/auth/types/authState.interface'
import { CoursesStateInterface } from 'src/app/courses/types/coursesState.interface'
import { CourseStateInterface } from 'src/app/course/types/courseState.interface'
import { EditCourseStateInterface } from 'src/app/editCourse/types/editCourseState.interface'
import { CreateCourseStateInterface } from 'src/app/createCourse/types/createCourseState.interface'

export interface AppStateInterface {
  auth: AuthStateInterface
  courses: CoursesStateInterface
  course: CourseStateInterface
  editCourse: EditCourseStateInterface
  createCourse: CreateCourseStateInterface
}
