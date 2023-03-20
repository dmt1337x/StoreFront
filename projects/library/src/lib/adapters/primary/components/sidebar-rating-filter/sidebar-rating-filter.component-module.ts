import { NgModule } from '@angular/core';
import { SidebarRatingFilterComponent } from './sidebar-rating-filter.component';
import { CommonModule } from "@angular/common";

@NgModule({
  imports: [CommonModule],
  declarations: [SidebarRatingFilterComponent],
  providers: [],
  exports: [SidebarRatingFilterComponent]
})
export class SidebarRatingFilterComponentModule {
}
