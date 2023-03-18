import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ByStoreFilterQuery } from './by-store-filter.query';

export const GET_BY_STORE_FILTER_QUERY_PORT = new InjectionToken<GetByStoreFilterQueryPort>('GET_BY_STORE_FILTER_QUERY_PORT');

export interface GetByStoreFilterQueryPort {
  getByStoreFilter(): Observable<ByStoreFilterQuery>;
}
