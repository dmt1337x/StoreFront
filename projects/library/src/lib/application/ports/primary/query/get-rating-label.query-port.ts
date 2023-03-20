import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { RatingLabelQuery } from './rating-label.query';

export const GET_RATING_LABEL_QUERY_PORT = new InjectionToken<GetRatingLabelQueryPort>('GET_RATING_LABEL_QUERY_PORT');

export interface GetRatingLabelQueryPort {
  getRatingLabel(): Observable<RatingLabelQuery[]>;
}
