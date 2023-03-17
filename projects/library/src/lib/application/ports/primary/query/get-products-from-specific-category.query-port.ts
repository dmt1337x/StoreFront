import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductQuery } from './product.query';
import { CategoryType } from '../../../helpers/types';

export const GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT =
  new InjectionToken<GetProductsFromSpecificCategoryQueryPort>(
    'GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT'
  );

export interface GetProductsFromSpecificCategoryQueryPort {
  getProductsFromSpecificCategory(
    category: CategoryType
  ): Observable<ProductQuery[]>;
}
