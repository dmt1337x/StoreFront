import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SidebarPriceFilterComponent } from './sidebar-price-filter.component';

@NgModule({
  imports: [ReactiveFormsModule],
  declarations: [SidebarPriceFilterComponent],
  providers: [],
  exports: [SidebarPriceFilterComponent]
})
export class SidebarPriceFilterComponentModule {
}
