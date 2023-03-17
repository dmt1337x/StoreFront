import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  ViewEncapsulation,
} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { startWith, switchMap } from 'rxjs';
import {
  SET_PRICE_FILTER_COMMAND_PORT,
  SetPriceFilterCommandPort,
} from '../../../../application/ports/primary/command/set-price-filter.command-port';
import { PriceFilterCommand } from '../../../../application/ports/primary/command/price-filter.command';

@Component({
  selector: 'lib-sidebar-price-filter',
  templateUrl: './sidebar-price-filter.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SidebarPriceFilterComponent {
  readonly priceFilter: FormGroup = new FormGroup({
    min: new FormControl(),
    max: new FormControl(),
  });
  constructor(
    @Inject(SET_PRICE_FILTER_COMMAND_PORT)
    private _setPriceFilterCommandPort: SetPriceFilterCommandPort
  ) {
    this.priceFilter.valueChanges
      .pipe(
        startWith({ min: 0, max: Infinity }),
        switchMap((price) =>
          this._setPriceFilterCommandPort.setPriceFilter(
            new PriceFilterCommand(price.min, price.max)
          )
        )
      )
      .subscribe();
  }
}
