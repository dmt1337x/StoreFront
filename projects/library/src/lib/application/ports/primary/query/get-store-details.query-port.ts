import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreQuery } from './store.query';

export const GET_STORE_DETAILS_QUERY_PORT =
  new InjectionToken<GetStoreDetailsQueryPort>('GET_STORE_DETAILS_QUERY_PORT');

export interface GetStoreDetailsQueryPort {
  getStoreDetails(storeId: string): Observable<StoreQuery>;
}
