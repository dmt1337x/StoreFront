import { NgModule } from '@angular/core';
import { CategoryPage } from './category.page';
import {
  CategoriesParentComponentModule,
  CategoriesServiceModule,
  FooterComponentModule,
  HeaderComponentModule,
  ProductsServiceModule,
  StoreFrontStateModule,
  StoresServiceModule,
} from '@library';

@NgModule({
  imports: [
    CategoriesParentComponentModule,
    FooterComponentModule,
    HeaderComponentModule,
    StoreFrontStateModule,
    CategoriesServiceModule,
    ProductsServiceModule,
    StoresServiceModule,
  ],
  declarations: [CategoryPage],
  exports: [CategoryPage],
})
export class CategoryPageModule {}
