import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { FlexLayoutModule } from '@angular/flex-layout'

import { MaterialModule } from 'src/app/shared/modules/materialModule/material.module'
import { TopBarComponent } from 'src/app/shared/modules/topBar/components/topBar/topBar.component'

@NgModule({
  imports: [CommonModule, RouterModule, MaterialModule, FlexLayoutModule],

  declarations: [TopBarComponent],
  exports: [TopBarComponent],
})
export class TopBarModule {}
