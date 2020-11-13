import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { CourseInterface } from 'src/app/shared/types/course.interface'

export interface EditCourseStateInterface {
  course: CourseInterface | null
  isLoading: boolean
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
