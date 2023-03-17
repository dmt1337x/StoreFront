import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { SortMethodQuery } from './sort-method.query';

export const GET_SORT_METHOD_QUERY_PORT =
  new InjectionToken<GetSortMethodQueryPort>('GET_SORT_METHOD_QUERY_PORT');

export interface GetSortMethodQueryPort {
  getSortMethod(): Observable<SortMethodQuery[]>;
}
