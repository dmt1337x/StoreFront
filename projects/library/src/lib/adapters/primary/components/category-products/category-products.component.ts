import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {
  BehaviorSubject,
  combineLatestWith,
  Observable,
  of,
  withLatestFrom,
} from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { ProductQuery } from '../../../../application/ports/primary/query/product.query';
import { SortMethodQuery } from '../../../../application/ports/primary/query/sort-method.query';
import {
  GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT,
  GetProductsFromSpecificCategoryQueryPort,
} from '../../../../application/ports/primary/query/get-products-from-specific-category.query-port';
import {
  GET_SORT_METHOD_QUERY_PORT,
  GetSortMethodQueryPort,
} from '../../../../application/ports/primary/query/get-sort-method.query-port';
import { SortMethodEnum } from '../../../../application/helpers/sort-method.enum';
import { SORT_PORT, SortPort } from '../../../../application/helpers/sort.port';
import { eventToEnumMapper } from '../../../../application/helpers/event-to-enum.mapper';

@Component({
  selector: 'lib-category-products',
  styleUrls: ['./category-products.component.scss'],
  templateUrl: './category-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryProductsComponent {
  @Input() categoryName: string = '';

  private _productQuantitySubject: BehaviorSubject<number> =
    new BehaviorSubject<number>(0);
  private _sortSubject: BehaviorSubject<SortMethodEnum> =
    new BehaviorSubject<SortMethodEnum>(SortMethodEnum.FEATURED_DESC);

  products$: Observable<ProductQuery[]> = this._activatedRoute.params.pipe(
    switchMap((params) =>
      this._getProductsFromSpecificCategoryQueryPort.getProductsFromSpecificCategory(
        params['categoryId']
      )
    ),
    combineLatestWith(this._sortSubject.asObservable()),
    map(([products, sortSubject]) =>
      this._sortPort.sortMethod(products, sortSubject)
    ),
    tap((products) => this._productQuantitySubject.next(products.length))
  );

  productQuantity$: Observable<number> =
    this._productQuantitySubject.asObservable();

  sortMethod$: Observable<SortMethodQuery[]> =
    this._getSortMethodQueryPort.getSortMethod();

  constructor(
    @Inject(GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT)
    private _getProductsFromSpecificCategoryQueryPort: GetProductsFromSpecificCategoryQueryPort,
    private _activatedRoute: ActivatedRoute,
    @Inject(GET_SORT_METHOD_QUERY_PORT)
    private _getSortMethodQueryPort: GetSortMethodQueryPort,
    @Inject(SORT_PORT) private _sortPort: SortPort
  ) {}

  onSortMethodChanged(event: Event) {
    return this._sortSubject.next(
      eventToEnumMapper[
        (event.target as HTMLInputElement).value as unknown as number
      ]
    );
  }
}
