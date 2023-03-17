import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FiltersContext } from './filters.context';

export const FILTERS_CONTEXT_PORT = new InjectionToken<FiltersContextPort>(
  'FILTERS_CONTEXT_PORT'
);

export interface FiltersContextPort {
  select(): Observable<FiltersContext>;

  patch(state: Partial<FiltersContext>): Observable<void>;
}
