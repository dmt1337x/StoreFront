import { InjectionToken } from '@angular/core';
import { ProductQuery } from '../ports/primary/query/product.query';
import { SortMethodEnum } from './sort-method.enum';

export const SORT_PORT = new InjectionToken<SortPort>('SORT_PORT');

export interface SortPort {
  sortMethod(
    products: ProductQuery[],
    sortMethod: SortMethodEnum
  ): ProductQuery[];
}
