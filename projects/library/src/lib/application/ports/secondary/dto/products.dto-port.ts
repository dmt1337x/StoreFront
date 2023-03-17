import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductDTO } from './product.dto';

export const PRODUCTS_DTO_PORT = new InjectionToken<ProductsDtoPort>(
  'PRODUCTS_DTO_PORT'
);

export interface ProductsDtoPort {
  getAll(): Observable<ProductDTO[]>;
}
