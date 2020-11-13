import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { AppComponent } from 'src/app/app.component'
import { MainLayoutComponent } from 'src/app/shared/components/mainLayout/mainLayout.component'

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', redirectTo: '/', pathMatch: 'full' },
      { path: '', component: AppComponent },
      
    ],
  },  
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule {}
