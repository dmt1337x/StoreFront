import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarCategoriesListComponentModule } from '../sidebar-categories-list/sidebar-categories-list.component-module';
import { CategoriesParentComponent } from './categories-parent.component';
import { CategoriesProductsComponentModule } from '../categories-products/categories-products.component-module';
import { SidebarPriceFilterComponentModule } from '../sidebar-price-filter/sidebar-price-filter.component-module';
import { SidebarStoresFilterComponentModule } from "../sidebar-stores-filter/sidebar-stores-filter.component-module";
import { SidebarRatingFilterComponentModule } from "../sidebar-rating-filter/sidebar-rating-filter.component-module";

@NgModule({
  imports: [
    SidebarCategoriesListComponentModule,
    CommonModule,
    CategoriesProductsComponentModule,
    SidebarPriceFilterComponentModule,
    SidebarStoresFilterComponentModule,
    SidebarRatingFilterComponentModule
  ],
  declarations: [CategoriesParentComponent],
  providers: [],
  exports: [CategoriesParentComponent],
})
export class CategoriesParentComponentModule {}
