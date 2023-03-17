import { NgModule } from '@angular/core';
import { StoresService } from './stores.service';
import { STORES_DTO_PORT } from '../../../../application/ports/secondary/dto/stores.dto-port';

@NgModule({
  providers: [
    StoresService,
    { provide: STORES_DTO_PORT, useExisting: StoresService },
  ],
})
export class StoresServiceModule {}
