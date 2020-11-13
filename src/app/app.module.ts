import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'
import { InMemoryDataService } from './data/in-memory-data.service'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'
import { FlexLayoutModule } from '@angular/flex-layout'
import { NoopAnimationsModule } from '@angular/platform-browser/animations'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

import { AppRoutingModule } from 'src/app/app-routing.module'
import { AppComponent } from 'src/app/app.component'
import { AuthModule } from 'src/app/auth/auth.module.'
import { environment } from 'src/environments/environment'
import { PersistanceService } from 'src/app/shared/services/persistance.service'
import { TopBarModule } from 'src/app/shared/modules/topBar/topBar.module'
import { CoursesModule } from 'src/app/courses/courses.module'
import { CourseModule } from 'src/app/course/course.module'
import { EditCourseModule } from 'src/app/editCourse/editCourse.module'
import { FooterComponent } from 'src/app/shared/components/footer/footer.component'
import { MainLayoutComponent } from 'src/app/shared/components/mainLayout/mainLayout.component'
import { MaterialModule } from 'src/app/shared/modules/materialModule/material.module'

@NgModule({
  declarations: [AppComponent, FooterComponent, MainLayoutComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    HttpClientModule,
    AppRoutingModule,
    AuthModule,
    CoursesModule,
    CourseModule,
    EditCourseModule,
    StoreModule.forRoot({}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    EffectsModule.forRoot([]),
    TopBarModule,
    NoopAnimationsModule,
  ],
  providers: [PersistanceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
