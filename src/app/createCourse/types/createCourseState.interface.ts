import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export interface CreateCourseStateInterface {
  isSubmitting: boolean
  validationErrors: BackendErrorsInterface | null
}
