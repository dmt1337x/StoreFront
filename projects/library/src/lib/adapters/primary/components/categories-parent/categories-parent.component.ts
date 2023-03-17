import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CategoryQuery } from '../../../../application/ports/primary/query/category.query';
import {
  GET_CATEGORY_DETAILS_QUERY_PORT,
  GetCategoryDetailsQueryPort,
} from '../../../../application/ports/primary/query/get-category-details.query-port';

@Component({
  selector: 'lib-categories-parent',
  templateUrl: './categories-parent.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesParentComponent {
  readonly category$: Observable<CategoryQuery> =
    this._activatedRoute.params.pipe(
      switchMap((params) =>
        this._getCategoryDetailsQueryPort.getCategoryDetails(
          params['categoryId']
        )
      )
    );

  constructor(
    private _activatedRoute: ActivatedRoute,
    @Inject(GET_CATEGORY_DETAILS_QUERY_PORT)
    private _getCategoryDetailsQueryPort: GetCategoryDetailsQueryPort
  ) {}
}
