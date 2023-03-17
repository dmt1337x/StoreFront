import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import {
  GET_ALL_CATEGORIES_QUERY_PORT,
  GetAllCategoriesQueryPort,
} from '../../../../application/ports/primary/query/get-all-categories.query-port';
import { CategoryQuery } from '../../../../application/ports/primary/query/category.query';

@Component({
  selector: 'lib-categories-card',
  templateUrl: './categories-card.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesCardComponent {
  categories$: Observable<CategoryQuery[]> =
    this._getAllCategoriesQueryPort.getAllCategories();

  constructor(
    @Inject(GET_ALL_CATEGORIES_QUERY_PORT)
    private _getAllCategoriesQueryPort: GetAllCategoriesQueryPort
  ) {}
}
