import { ChangeDetectionStrategy, Component, Inject, ViewEncapsulation } from "@angular/core";
import { Observable } from "rxjs";
import { RatingLabelQuery } from "../../../../application/ports/primary/query/rating-label.query";
import {
  SET_FILTER_BY_RATING_COMMAND_PORT,
  SetFilterByRatingCommandPort
} from "../../../../application/ports/primary/command/set-filter-by-rating.command-port";
import {
  GET_RATING_LABEL_QUERY_PORT,
  GetRatingLabelQueryPort
} from "../../../../application/ports/primary/query/get-rating-label.query-port";
import { FilterByRatingCommand } from "../../../../application/ports/primary/command/filter-by-rating.command";

@Component({
  selector: 'lib-sidebar-rating-filter',
  templateUrl: './sidebar-rating-filter.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarRatingFilterComponent {
  rating$: Observable<RatingLabelQuery[]> =
    this._getRatingLabelQueryPort.getRatingLabel();

  constructor(
    @Inject(SET_FILTER_BY_RATING_COMMAND_PORT)
    private _setFilterByRatingCommandPort: SetFilterByRatingCommandPort,
    @Inject(GET_RATING_LABEL_QUERY_PORT)
    private _getRatingLabelQueryPort: GetRatingLabelQueryPort
  ) {}

  onRatingSelected(rating: number) {
    return this._setFilterByRatingCommandPort
      .setFilterByRating(new FilterByRatingCommand(rating))
      .subscribe();
  }
}
