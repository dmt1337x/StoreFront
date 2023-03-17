import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CategoriesCardComponent } from './categories-card.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [CategoriesCardComponent],
  exports: [CategoriesCardComponent],
})
export class CategoriesCardComponentModule {}
