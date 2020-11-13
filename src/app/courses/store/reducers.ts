import { createReducer, on, Action } from '@ngrx/store'
import { routerNavigationAction } from '@ngrx/router-store'

import { CoursesStateInterface } from 'src/app/courses/types/coursesState.interface'
import { CourseInterface } from 'src/app/shared/types/course.interface';
import {
  getCoursesAction,
  getCoursesSuccessAction,
  getCoursesFailureAction,
} from 'src/app/courses/store/actions/getCourses.action'
import {
  deleteCourseSuccessAction,
} from 'src/app/course/store/actions/deleteCourse.action'
import {
  updateCourseSuccessAction,
} from 'src/app/editCourse/store/actions/updateCourse.action'
import { createCourseSuccessAction } from 'src/app/createCourse/store/actions/createCourse.action';
import {
  clearStateAction,
} from 'src/app/courses/store/actions/clearState.action'


const initialState: CoursesStateInterface = {
  courses: [],
  isLoading: false,
  error: null,
  offset: 0,
  allCoursesLoaded: false,
  addCount: 0
}

const coursesReducer = createReducer(
  initialState,
  on(
    getCoursesAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: true,
    })
  ),
  on(
    getCoursesSuccessAction,
    (state, action): CoursesStateInterface => {
      return ({
        ...state,
        isLoading: false,
        courses: state.courses.concat(action.courses),
        offset: action.offset,
        allCoursesLoaded: action.allCoursesLoaded,
      })
    }
  ),
  on(
    getCoursesFailureAction,
    (state): CoursesStateInterface => ({
      ...state,
      isLoading: false,
    })
  ),
  on(
    deleteCourseSuccessAction,
    (state, action): CoursesStateInterface => {
      const updateCourses:CourseInterface[] = state.courses.filter(
        course => (course.id !== action.id)
      )
      return({
        ...state,
        courses: updateCourses,
        offset: state.offset - 1
      })
    }
  ),
  on(
    updateCourseSuccessAction,
    (state, action): CoursesStateInterface => {
      const updatedCourses: CourseInterface[] = state.courses.map(
        (course) => {
          if(course.id === action.course.id) { return action.course}
          else { return course }
        }
      )
      return ({
      ...state,
      courses: updatedCourses
    })}
  ),
  on(
    createCourseSuccessAction,
    (state, action): CoursesStateInterface => {             
      return({
        ...state,
        courses: [...state.courses, action.course],
        addCount: state.addCount + 1
      })
    }
  ),
  on(
    clearStateAction,
    (state): CoursesStateInterface => ({
      ...state,
      ...initialState,
    })
  ),    
  on(routerNavigationAction, (): CoursesStateInterface => initialState)
)

export function reducers(state: CoursesStateInterface, action: Action) {
  return coursesReducer(state, action)
}
