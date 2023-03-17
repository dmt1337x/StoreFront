import { NgModule } from '@angular/core';
import { HomePageProductsComponent } from './home-page-products.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [HomePageProductsComponent],
  exports: [HomePageProductsComponent],
})
export class HomePageProductsComponentModule {}
