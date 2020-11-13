import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core'
import { CourseInterface } from 'src/app/shared/types/course.interface'
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface'
import { FormGroup, FormBuilder, Validators } from '@angular/forms'
import { Router } from '@angular/router'

@Component({
  selector: 'app-course-form',
  templateUrl: './courseForm.component.html',
  styleUrls: ['./courseForm.component.scss'],
})
export class CourseFormComponent implements OnInit {
  @Input('initialValues') initialValuesProps: CourseInterface
  @Input('isSubmitting') isSubmittingProps: boolean
  @Input('errors') errorsProps: BackendErrorsInterface | null

  @Output('courseSubmit') courseSubmitEvent = new EventEmitter<
    CourseInterface
  >()

  form: FormGroup

  constructor(private fb: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.initializeForm()
  }

  initializeForm(): void {
    this.form = this.fb.group({
      title: [this.initialValuesProps.title, [Validators.required]],
      description: [this.initialValuesProps.description, [Validators.required]],
      duration: [this.initialValuesProps.duration, [Validators.required]],
      date: [this.initialValuesProps.date, [Validators.required]],
      authors: [this.initialValuesProps.authors, [Validators.required]],
    })
  }
  
  onSubmit(): void {
    this.courseSubmitEvent.emit(this.form.value)
  }
  onCancel(): void {
    this.router.navigateByUrl('/courses')
  }
}
