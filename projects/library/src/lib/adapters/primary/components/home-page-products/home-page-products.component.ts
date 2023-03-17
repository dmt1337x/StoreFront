import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { ProductQuery } from '../../../../application/ports/primary/query/product.query';
import {
  GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT,
  GetProductsFromSpecificCategoryQueryPort,
} from '../../../../application/ports/primary/query/get-products-from-specific-category.query-port';
import { CategoriesEnum } from '../../../../application/helpers/categories.enum';
import { map } from 'rxjs/operators';
import { SORT_PORT, SortPort } from '../../../../application/helpers/sort.port';
import { SortMethodEnum } from '../../../../application/helpers/sort-method.enum';

@Component({
  selector: 'lib-home-page-products',
  styleUrls: ['./home-page-products.component.scss'],
  templateUrl: './home-page-products.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageProductsComponent {
  public maxItem: number = 5;

  fruitsVegetable$: Observable<ProductQuery[]> =
    this._getFruitsVegetablesQueryPort
      .getProductsFromSpecificCategory(CategoriesEnum.Fruits_Vegetables)
      .pipe(
        map((products) =>
          this._sortPort.sortMethod(products, SortMethodEnum.FEATURED_DESC)
        )
      );

  snackMunchies$: Observable<ProductQuery[]> =
    this._getFruitsVegetablesQueryPort
      .getProductsFromSpecificCategory(CategoriesEnum.Snack_Munchies)
      .pipe(
        map((products) =>
          this._sortPort.sortMethod(products, SortMethodEnum.FEATURED_DESC)
        )
      );

  constructor(
    @Inject(GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT)
    private _getFruitsVegetablesQueryPort: GetProductsFromSpecificCategoryQueryPort,
    @Inject(SORT_PORT) private _sortPort: SortPort
  ) {}
}
