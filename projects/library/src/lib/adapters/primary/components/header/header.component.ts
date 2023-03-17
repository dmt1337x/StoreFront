import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryQuery } from '../../../../application/ports/primary/query/category.query';
import {
  GET_ALL_CATEGORIES_QUERY_PORT,
  GetAllCategoriesQueryPort,
} from '../../../../application/ports/primary/query/get-all-categories.query-port';

@Component({
  selector: 'lib-header',
  templateUrl: './header.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public isMobileVisible: boolean = false;

  categories$: Observable<CategoryQuery[]> =
    this._getAllCategoriesQueryPort.getAllCategories();

  constructor(
    @Inject(GET_ALL_CATEGORIES_QUERY_PORT)
    private _getAllCategoriesQueryPort: GetAllCategoriesQueryPort
  ) {}

  onHamburgerClicked(): void {
    this.isMobileVisible = !this.isMobileVisible;
  }
}
