import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoresCardComponent } from './stores-card.component';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [StoresCardComponent],
  providers: [],
  exports: [StoresCardComponent]
})
export class StoresCardComponentModule {
}
