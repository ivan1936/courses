import { NgModule } from '@angular/core'

import { DurationPipe } from 'src/app/shared/pipes/durationTrans.pipe'
import { SearchPipe } from 'src/app/shared/pipes/search.pipe'

@NgModule({
  declarations: [DurationPipe, SearchPipe],
  exports: [
    DurationPipe, SearchPipe
  ],
})
export class PipesModule {}