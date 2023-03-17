import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryDTO } from './category.dto';

export const CATEGORIES_DTO_PORT = new InjectionToken<CategoriesDtoPort>(
  'CATEGORIES_DTO_PORT'
);

export interface CategoriesDtoPort {
  getAll(): Observable<CategoryDTO[]>;
  getOne(id: string): Observable<CategoryDTO>;
}
