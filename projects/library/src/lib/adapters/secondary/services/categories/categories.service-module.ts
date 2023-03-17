import { NgModule } from '@angular/core';
import { CategoriesService } from './categories.service';
import { CATEGORIES_DTO_PORT } from '../../../../application/ports/secondary/dto/categories.dto-port';

@NgModule({
  providers: [
    CategoriesService,
    { provide: CATEGORIES_DTO_PORT, useExisting: CategoriesService },
  ],
})
export class CategoriesServiceModule {}
