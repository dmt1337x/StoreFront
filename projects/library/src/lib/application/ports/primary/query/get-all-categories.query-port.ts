import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryQuery } from './category.query';

export const GET_ALL_CATEGORIES_QUERY_PORT =
  new InjectionToken<GetAllCategoriesQueryPort>(
    'GET_ALL_CATEGORIES_QUERY_PORT'
  );

export interface GetAllCategoriesQueryPort {
  getAllCategories(): Observable<CategoryQuery[]>;
}
