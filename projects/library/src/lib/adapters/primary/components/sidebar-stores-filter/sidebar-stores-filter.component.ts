import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {
  BehaviorSubject,
  Observable,
  ReplaySubject,
  combineLatest,
} from 'rxjs';
import { filter, map, take, tap } from 'rxjs/operators';
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
  private _searchStoresSubject: BehaviorSubject<string> =
    new BehaviorSubject<string>('');
  readonly searchStores: FormGroup = new FormGroup({
    search: new FormControl(),
  });

  storesFilter$: Observable<StoreQuery[]> = combineLatest([
    this._storesFilterSubject.asObservable(),
    this._searchStoresSubject.asObservable(),
  ]).pipe(
    map(([stores, search]) =>
      search.length > 0
        ? stores.filter((store) =>
            store.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
          )
        : stores
    )
  );

  constructor(
    @Inject(GET_ALL_STORES_QUERY_PORT)
    private _getAllStoresQueryPort: GetAllStoresQueryPort,
    @Inject(SET_FILTER_BY_STORES_COMMAND_PORT)
    private _setFilterByStoresCommandPort: SetFilterByStoresCommandPort
  ) {
    this.initStores();
    
    this.searchStores.valueChanges.pipe().subscribe((searchStores) => {
      this._searchStoresSubject.next(searchStores.search);
    });
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
        tap((stores) => this.saveByStoreFilters(stores))
      )
      .subscribe();
  }

  private saveByStoreFilters(stores: StoreQuery[]) {
    this._setFilterByStoresCommandPort
      .setFilterByStores(
        new FilterByStoresCommand(
          stores.map((store) => (store.isSelected ? store.id : ''))
        )
      )
      .subscribe();
  }

  private initStores() {
    this._getAllStoresQueryPort
      .getAllStores()
      .pipe(
        take(1),
        tap((stores) => this._storesFilterSubject.next(stores))
      )
      .subscribe();
  }
}
