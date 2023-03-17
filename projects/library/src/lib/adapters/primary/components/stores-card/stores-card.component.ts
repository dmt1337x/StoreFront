import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { StoreDTO } from '../../../../application/ports/secondary/dto/store.dto';
import {
  GET_ALL_STORES_QUERY_PORT,
  GetAllStoresQueryPort,
} from '../../../../application/ports/primary/query/get-all-stores.query-port';

@Component({
  selector: 'lib-stores-card',
  templateUrl: './stores-card.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoresCardComponent {
  stores$: Observable<StoreDTO[]> = this._getAllStoresQueryPort.getAllStores();

  constructor(
    @Inject(GET_ALL_STORES_QUERY_PORT)
    private _getAllStoresQueryPort: GetAllStoresQueryPort
  ) {}
}
