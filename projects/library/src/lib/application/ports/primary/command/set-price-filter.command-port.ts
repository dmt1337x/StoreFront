import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { PriceFilterCommand } from './price-filter.command';

export const SET_PRICE_FILTER_COMMAND_PORT =
  new InjectionToken<SetPriceFilterCommandPort>(
    'SET_PRICE_FILTER_COMMAND_PORT'
  );

export interface SetPriceFilterCommandPort {
  setPriceFilter(command: PriceFilterCommand): Observable<void>;
}
