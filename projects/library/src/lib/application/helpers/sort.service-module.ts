import { NgModule } from '@angular/core';
import { SortService } from './sort.service';
import { SORT_PORT } from './sort.port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [SortService, { provide: SORT_PORT, useExisting: SortService }],
  exports: [],
})
export class SortServiceModule {}
