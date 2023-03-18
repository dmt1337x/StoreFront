import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, ReplaySubject } from 'rxjs';
import { map, take, tap } from 'rxjs/operators';
import { StoreQuery } from '../../../../application/ports/primary/query/store.query';
import {
  GET_ALL_STORES_QUERY_PORT,
  GetAllStoresQueryPort,
} from '../../../../application/ports/primary/query/get-all-stores.query-port';
import {
  SET_FILTER_BY_STORES_COMMAND_PORT,
  SetFilterByStoresCommandPort,
} from '../../../../application/ports/primary/command/set-filter-by-stores.command-port';
import { FilterByStoresCommand } from '../../../../application/ports/primary/command/filter-by-stores.command';

@Component({
  selector: 'lib-sidebar-stores-filter',
  templateUrl: './sidebar-stores-filter.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarStoresFilterComponent {
  private _storesFilterSubject: ReplaySubject<StoreQuery[]> = new ReplaySubject<
    StoreQuery[]
  >(1);

  public storesFilter$: Observable<StoreQuery[]> =
    this._storesFilterSubject.asObservable();

  constructor(
    @Inject(GET_ALL_STORES_QUERY_PORT)
    private _getAllStoresQueryPort: GetAllStoresQueryPort,
    @Inject(SET_FILTER_BY_STORES_COMMAND_PORT)
    private _setFilterByStoresCommandPort: SetFilterByStoresCommandPort
  ) {
    this._getAllStoresQueryPort
      .getAllStores()
      .pipe(
        take(1),
        tap((stores) => this._storesFilterSubject.next(stores))
      )
      .subscribe();
  }

  selectStore(selectedStore: StoreQuery): void {
    this.storesFilter$
      .pipe(
        take(1),
        map((stores) =>
          stores.map((store) =>
            store.id === selectedStore.id
              ? { ...selectedStore, isSelected: !selectedStore.isSelected }
              : store
          )
        ),
        tap((newSelectedStores) =>
          this._storesFilterSubject.next(newSelectedStores)
        ),
        tap((stores) => this.saveByStoreFilters(stores)

        )
      )
      .subscribe();
  }
  
  private saveByStoreFilters(stores:StoreQuery[]){
    this._setFilterByStoresCommandPort.setFilterByStores(
      new FilterByStoresCommand(
        stores.map((store) => (store.isSelected ? store.id : ""))
      )
    ).subscribe()
  }
}
