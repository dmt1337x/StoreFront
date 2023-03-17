import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SidebarCategoriesListComponent } from './sidebar-categories-list.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [SidebarCategoriesListComponent],
  providers: [],
  exports: [SidebarCategoriesListComponent]
})
export class SidebarCategoriesListComponentModule {
}
