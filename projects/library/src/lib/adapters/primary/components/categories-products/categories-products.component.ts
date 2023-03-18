import { ChangeDetectionStrategy, Component, Inject, Input, ViewEncapsulation } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject, combineLatestWith, Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { ProductQuery } from "../../../../application/ports/primary/query/product.query";
import { SortMethodQuery } from "../../../../application/ports/primary/query/sort-method.query";
import {
  GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT,
  GetProductsFromSpecificCategoryQueryPort
} from "../../../../application/ports/primary/query/get-products-from-specific-category.query-port";
import {
  GET_SORT_METHOD_QUERY_PORT,
  GetSortMethodQueryPort
} from "../../../../application/ports/primary/query/get-sort-method.query-port";
import {
  GET_PRICE_FILTER_QUERY_PORT,
  GetPriceFilterQueryPort
} from "../../../../application/ports/primary/query/get-price-filter.query-port";
import { SORT_PORT, SortPort } from "../../../../application/helpers/sort.port";
import {
  GET_BY_STORE_FILTER_QUERY_PORT,
  GetByStoreFilterQueryPort
} from "../../../../application/ports/primary/query/get-by-store-filter.query-port";
import { SortMethodEnum } from "../../../../application/helpers/sort-method.enum";
import { eventToEnumMapper } from "../../../../application/helpers/event-to-enum.mapper";

@Component({
  selector: 'lib-category-products',
  templateUrl: './categories-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesProductsComponent {
  @Input() categoryName: string = '';

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
    combineLatestWith(this._getByStoreFilterQueryPort.getByStoreFilter()),
    map(([products, byStoreFilter]) =>
      byStoreFilter.storesIds.length
        ? products.filter((product) =>
            product.storeIds.some((storeId) =>
              byStoreFilter.storesIds.includes(storeId)
            )
          )
        : products
    ),
    combineLatestWith(this._getPriceFilterQueryPort.getPriceFilter()),
    map(([products, priceFilter]) =>
      products
        .map((product) => {
          return {
            name: product.name,
            imageUrl: product.imageUrl,
            id: product.id,
            categoryId: product.categoryId,
            featureValue: product.featureValue,
            price: product.price,
            ratingCount: product.ratingCount,
            ratingValue: product.ratingValue,
            storeIds: product.storeIds,
            rating: product.rating,
          };
        })
        .filter(
          (product) =>
            product.price >= priceFilter.min && product.price <= priceFilter.max
        )
    )
  );

  sortMethod$: Observable<SortMethodQuery[]> =
    this._getSortMethodQueryPort.getSortMethod();

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT)
    private _getProductsFromSpecificCategoryQueryPort: GetProductsFromSpecificCategoryQueryPort,
    @Inject(GET_SORT_METHOD_QUERY_PORT)
    private _getSortMethodQueryPort: GetSortMethodQueryPort,
    @Inject(GET_PRICE_FILTER_QUERY_PORT)
    private _getPriceFilterQueryPort: GetPriceFilterQueryPort,
    @Inject(SORT_PORT) private _sortPort: SortPort,
    @Inject(GET_BY_STORE_FILTER_QUERY_PORT)
    private _getByStoreFilterQueryPort: GetByStoreFilterQueryPort
  ) {}

  onSortMethodChanged(event: Event) {
    return this._sortSubject.next(
      eventToEnumMapper[
        (event.target as HTMLInputElement).value as unknown as number
      ]
    );
  }
}
