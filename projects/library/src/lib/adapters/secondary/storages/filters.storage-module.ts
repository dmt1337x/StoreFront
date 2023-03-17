import { NgModule } from '@angular/core';
import { FiltersStorage } from './filters.storage';
import { FILTERS_CONTEXT_PORT } from '../../../application/ports/secondary/context/filters.context-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    FiltersStorage,
    { provide: FILTERS_CONTEXT_PORT, useExisting: FiltersStorage },
  ],
  exports: [],
})
export class FiltersStorageModule {}
