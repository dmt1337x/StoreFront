import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreQuery } from './store.query';

export const GET_ALL_STORES_QUERY_PORT =
  new InjectionToken<GetAllStoresQueryPort>('GET_ALL_STORES_QUERY_PORT');

export interface GetAllStoresQueryPort {
  getAllStores(): Observable<StoreQuery[]>;
}
