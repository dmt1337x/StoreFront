import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarStoresFilterComponent } from './sidebar-stores-filter.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SidebarStoresFilterComponent],
  providers: [],
  exports: [SidebarStoresFilterComponent]
})
export class SidebarStoresFilterComponentModule {
}
