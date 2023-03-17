import { NgModule } from '@angular/core';
import { ProductsService } from './products.service';
import { PRODUCTS_DTO_PORT } from '../../../../application/ports/secondary/dto/products.dto-port';

@NgModule({
  providers: [
    ProductsService,
    { provide: PRODUCTS_DTO_PORT, useExisting: ProductsService },
  ],
})
export class ProductsServiceModule {}
