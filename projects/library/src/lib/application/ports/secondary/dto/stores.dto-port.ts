import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { StoreDTO } from './store.dto';

export const STORES_DTO_PORT = new InjectionToken<StoresDtoPort>(
  'STORES_DTO_PORT'
);

export interface StoresDtoPort {
  getAll(): Observable<StoreDTO[]>;
  getOne(id: string): Observable<StoreDTO>;
}
