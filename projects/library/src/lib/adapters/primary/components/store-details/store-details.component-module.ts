import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreDetailsComponent } from './store-details.component';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  declarations: [StoreDetailsComponent],
  providers: [],
  exports: [StoreDetailsComponent],
})
export class StoreDetailsComponentModule { }
