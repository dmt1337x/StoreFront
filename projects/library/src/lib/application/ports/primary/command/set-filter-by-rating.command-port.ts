import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterByRatingCommand } from "./filter-by-rating.command";

export const SET_FILTER_BY_RATING_COMMAND_PORT = new InjectionToken<SetFilterByRatingCommandPort>('SET_FILTER_BY_RATING_COMMAND_PORT');

export interface SetFilterByRatingCommandPort {
  setFilterByRating(command:FilterByRatingCommand): Observable<void>;
}
