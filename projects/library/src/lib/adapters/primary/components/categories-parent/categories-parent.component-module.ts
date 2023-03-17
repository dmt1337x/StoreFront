import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarCategoriesListComponentModule } from '../sidebar-categories-list/sidebar-categories-list.component-module';
import { CategoriesParentComponent } from './categories-parent.component';
import { CategoryProductsComponentModule } from '../category-products/category-products.component-module';

@NgModule({
  imports: [
    SidebarCategoriesListComponentModule,
    CommonModule,
    CategoryProductsComponentModule,
  ],
  declarations: [CategoriesParentComponent],
  providers: [],
  exports: [CategoriesParentComponent],
})
export class CategoriesParentComponentModule {}
