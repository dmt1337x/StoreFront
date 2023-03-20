import { Injectable } from '@angular/core';
import { FiltersContext } from '../../../application/ports/secondary/context/filters.context';
import { BehaviorSubject, Observable, take } from 'rxjs';
import { map } from 'rxjs/operators';
import { FiltersContextPort } from '../../../application/ports/secondary/context/filters.context-port';

@Injectable()
export class FiltersStorage implements FiltersContextPort {
  private _subject$: BehaviorSubject<FiltersContext> =
    new BehaviorSubject<FiltersContext>({
      price: { max: 0, min: 0 },
      storesIds: [],
      rating: 0,
    });

  select(): Observable<FiltersContext> {
    return this._subject$.asObservable();
  }

  patch(state: Partial<FiltersContext>): Observable<void> {
    return this._subject$.pipe(
      take(1),
      map((context: FiltersContext) =>
        this._subject$.next({ ...context, ...state })
      )
    );
  }
}
