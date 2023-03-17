import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceFilterQuery } from './price-filter.query';

export const GET_PRICE_FILTER_QUERY_PORT = new InjectionToken<GetPriceFilterQueryPort>('GET_PRICE_FILTER_QUERY_PORT');

export interface GetPriceFilterQueryPort {
  getPriceFilter(): Observable<PriceFilterQuery>;
}
