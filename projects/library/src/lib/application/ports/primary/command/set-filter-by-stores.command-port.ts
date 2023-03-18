import { InjectionToken } from '@angular/core';
import { Observable } from "rxjs";
import { FilterByStoresCommand } from "./filter-by-stores.command";

export const SET_FILTER_BY_STORES_COMMAND_PORT = new InjectionToken<SetFilterByStoresCommandPort>('SET_FILTER_BY_STORES_COMMAND_PORT');

export interface SetFilterByStoresCommandPort {
  setFilterByStores(command: FilterByStoresCommand): Observable<void>;
  
}
