import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RatingFilterQuery } from './rating-filter.query';

export const GET_BY_RATING_FILTER_QUERY_PORT = new InjectionToken<GetByRatingFilterQueryPort>('GET_BY_RATING_FILTER_QUERY_PORT');

export interface GetByRatingFilterQueryPort {
  getByRatingFilter(): Observable<RatingFilterQuery>;
}
