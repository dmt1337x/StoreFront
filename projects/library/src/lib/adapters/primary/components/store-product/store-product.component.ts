import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { ProductQuery } from '../../../../application/ports/primary/query/product.query';
import {
  GET_PRODUCT_FROM_STORE_QUERY_PORT,
  GetProductFromStoreQueryPort,
} from '../../../../application/ports/primary/query/get-product-from-store.query-port';
import { StoreQuery } from '../../../../application/ports/primary/query/store.query';
import {
  GET_STORE_DETAILS_QUERY_PORT,
  GetStoreDetailsQueryPort,
} from '../../../../application/ports/primary/query/get-store-details.query-port';

@Component({
  selector: 'lib-store-product',
  styleUrls: ['./store-product.component.scss'],
  templateUrl: './store-product.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StoreProductComponent {
  products$: Observable<ProductQuery[]> = this._activatedRoute.params.pipe(
    switchMap((params) =>
      this._getProductFromStoreQueryPort.getProductFromStore(params['storeId'])
    )
  );

  store$: Observable<StoreQuery> = this._activatedRoute.params.pipe(
    switchMap((params) =>
      this._getStoreDetailsQueryPort.getStoreDetails(params['storeId'])
    )
  );

  constructor(
    @Inject(GET_PRODUCT_FROM_STORE_QUERY_PORT)
    private _getProductFromStoreQueryPort: GetProductFromStoreQueryPort,
    private _activatedRoute: ActivatedRoute,
    @Inject(GET_STORE_DETAILS_QUERY_PORT)
    private _getStoreDetailsQueryPort: GetStoreDetailsQueryPort
  ) {}
}
