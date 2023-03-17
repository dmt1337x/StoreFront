import {
  CategoriesCardComponentModule,
  FooterComponentModule,
  HeaderComponentModule,
  HomePageProductsComponentModule,
  StoresCardComponentModule,
} from '@library';
import { HomePage } from './home.page';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    HeaderComponentModule,
    FooterComponentModule,
    CategoriesCardComponentModule,
    StoresCardComponentModule,
    HomePageProductsComponentModule,
  ],
  declarations: [HomePage],
  exports: [HomePage],
})
export class HomePageModule {}
