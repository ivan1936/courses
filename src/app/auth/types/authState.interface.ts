import { AuthResponseInterface } from 'src/app/auth/types/authResponse.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'

export interface AuthStateInterface {
  isSubmitting: boolean
  user: AuthResponseInterface | null
  isLoggedIn: boolean | null
  validationErrors: BackendErrorsInterface | null
  isLoading: boolean
}
