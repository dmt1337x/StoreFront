import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { StoreQuery } from '../../../../application/ports/primary/query/store.query';
import {
  GET_STORE_DETAILS_QUERY_PORT,
  GetStoreDetailsQueryPort,
} from '../../../../application/ports/primary/query/get-store-details.query-port';

@Component({
  selector: 'lib-store-details',
  templateUrl: './store-details.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreDetailsComponent {
  store$: Observable<StoreQuery> = this._activatedRoute.params.pipe(
    switchMap((params) =>
      this._getStoreDetailsQueryPort.getStoreDetails(params['storeId'])
    )
  );
  readonly searchForm: FormGroup = new FormGroup({ search: new FormControl() });

  constructor(
    @Inject(GET_STORE_DETAILS_QUERY_PORT)
    private _getStoreDetailsQueryPort: GetStoreDetailsQueryPort,
    private _activatedRoute: ActivatedRoute
  ) {}

  onSearchFormSubmitted(searchForm: FormGroup): void {}
}
