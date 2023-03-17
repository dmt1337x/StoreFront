import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryQuery } from './category.query';

export const GET_CATEGORY_DETAILS_QUERY_PORT = new InjectionToken<GetCategoryDetailsQueryPort>('GET_CATEGORY_DETAILS_QUERY_PORT');

export interface GetCategoryDetailsQueryPort {
  getCategoryDetails(categoryId: string): Observable<CategoryQuery>;
}
