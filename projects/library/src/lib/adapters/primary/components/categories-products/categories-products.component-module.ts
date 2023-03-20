import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoriesProductsComponent } from './categories-products.component';

@NgModule({
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  declarations: [CategoriesProductsComponent],
  providers: [],
  exports: [CategoriesProductsComponent],
})
export class CategoriesProductsComponentModule { }
