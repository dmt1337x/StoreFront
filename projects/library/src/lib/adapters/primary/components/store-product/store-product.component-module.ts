import { NgModule } from '@angular/core';
import { StoreProductComponent } from './store-product.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StoreProductComponent],
  providers: [],
  exports: [StoreProductComponent],
})
export class StoreProductComponentModule {}
