import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductQuery } from './product.query';

export const GET_PRODUCT_FROM_STORE_QUERY_PORT = new InjectionToken<GetProductFromStoreQueryPort>('GET_PRODUCT_FROM_STORE_QUERY_PORT');

export interface GetProductFromStoreQueryPort {
  getProductFromStore(storeIds: string): Observable<ProductQuery[]>;
}
