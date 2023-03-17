import { Injectable } from '@angular/core';
import { SortPort } from './sort.port';
import { ProductQuery } from '../ports/primary/query/product.query';
import { SortMethodEnum } from './sort-method.enum';

@Injectable()
export class SortService implements SortPort {
  sortMethod(
    products: ProductQuery[],
    sortMethod: SortMethodEnum
  ): ProductQuery[] {
    switch (sortMethod) {
      case SortMethodEnum.FEATURED_DESC:
        return this._featuredDesc(products);
      case SortMethodEnum.PRICE_ASC:
        return this._priceAsc(products);
      case SortMethodEnum.PROCE_DESC:
        return this._priceDesc(products);
      case SortMethodEnum.RATING_DESC:
        return this._ratingDesc(products);
      default:
        return products;
    }
  }

  private _priceAsc(products: ProductQuery[]): ProductQuery[] {
    return products.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  }

  private _priceDesc(products: ProductQuery[]): ProductQuery[] {
    return products.sort((a, b) => {
      if (a.price > b.price) return -1;
      if (a.price < b.price) return 1;
      return 0;
    });
  }

  private _ratingDesc(products: ProductQuery[]): ProductQuery[] {
    return products.sort((a, b) => {
      if (a.ratingValue > b.ratingValue) return -1;
      if (a.ratingValue < b.ratingValue) return 1;
      return 0;
    });
  }

  private _featuredDesc(products: ProductQuery[]): ProductQuery[] {
    return products.sort((a, b) => {
      if (a.featureValue > b.featureValue) return -1;
      if (a.featureValue < b.featureValue) return 1;
      return 0;
    });
  }
}
