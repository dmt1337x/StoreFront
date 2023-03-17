import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable, of } from 'rxjs';
import {
  GET_ALL_CATEGORIES_QUERY_PORT,
  GetAllCategoriesQueryPort,
} from '../../../../application/ports/primary/query/get-all-categories.query-port';
import {
  GET_ALL_STORES_QUERY_PORT,
  GetAllStoresQueryPort,
} from '../../../../application/ports/primary/query/get-all-stores.query-port';
import { CategoryQuery } from '../../../../application/ports/primary/query/category.query';
import { StoreDTO } from '../../../../application/ports/secondary/dto/store.dto';

@Component({
  selector: 'lib-footer',
  templateUrl: './footer.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FooterComponent {
  constructor(
    @Inject(GET_ALL_CATEGORIES_QUERY_PORT)
    private _getAllCategoriesQueryPort: GetAllCategoriesQueryPort,
    @Inject(GET_ALL_STORES_QUERY_PORT)
    private _getAllStoresQueryPort: GetAllStoresQueryPort
  ) {}

  categories$: Observable<CategoryQuery[]> =
    this._getAllCategoriesQueryPort.getAllCategories();

  stores$: Observable<StoreDTO[]> = this._getAllStoresQueryPort.getAllStores();

  links$: Observable<string[]> = of([
    'Company',
    'About',
    'Blog',
    'Help Center',
    'Our Value',
  ]);
}
