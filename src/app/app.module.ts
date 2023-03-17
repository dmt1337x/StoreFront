import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import {
  CategoriesServiceModule,
  FiltersStorageModule,
  ProductsServiceModule,
  SortServiceModule,
  StoreFrontStateModule,
  StoresServiceModule,
} from '@library';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CollapseModule,
    CommonModule,
    RouterModule,
    ProductsServiceModule,
    CategoriesServiceModule,
    StoresServiceModule,
    StoreFrontStateModule,
    SortServiceModule,
    FiltersStorageModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
