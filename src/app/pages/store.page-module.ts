import { NgModule } from '@angular/core';
import {
  CategoriesServiceModule,
  FooterComponentModule,
  HeaderComponentModule,
  ProductsServiceModule,
  StoreDetailsComponentModule,
  StoreFrontStateModule,
  StoreProductComponentModule,
  StoresServiceModule,
} from '@library';
import { StorePage } from './store.page';

@NgModule({
  imports: [
    StoreDetailsComponentModule,
    StoreFrontStateModule,
    CategoriesServiceModule,
    ProductsServiceModule,
    StoresServiceModule,
    HeaderComponentModule,
    FooterComponentModule,
    StoreProductComponentModule,
  ],
  declarations: [StorePage],
  exports: [StorePage],
})
export class StorePageModule {}
