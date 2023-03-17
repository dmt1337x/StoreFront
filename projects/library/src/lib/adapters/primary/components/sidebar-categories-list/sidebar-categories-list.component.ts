import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import {
  GET_ALL_CATEGORIES_QUERY_PORT,
  GetAllCategoriesQueryPort,
} from '../../../../application/ports/primary/query/get-all-categories.query-port';
import { Observable } from 'rxjs';
import { CategoryQuery } from '../../../../application/ports/primary/query/category.query';

@Component({
  selector: 'lib-sidebar-categories-list',
  templateUrl: './sidebar-categories-list.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarCategoriesListComponent {
  categories$: Observable<CategoryQuery[]> =
    this._getAllCategoriesQueryPort.getAllCategories();

  constructor(
    @Inject(GET_ALL_CATEGORIES_QUERY_PORT)
    private _getAllCategoriesQueryPort: GetAllCategoriesQueryPort
  ) {}
}
