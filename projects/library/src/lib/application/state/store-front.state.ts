import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { GetAllCategoriesQueryPort } from '../ports/primary/query/get-all-categories.query-port';
import { GetAllStoresQueryPort } from '../ports/primary/query/get-all-stores.query-port';
import { GetProductsFromSpecificCategoryQueryPort } from '../ports/primary/query/get-products-from-specific-category.query-port';
import { GetStoreDetailsQueryPort } from '../ports/primary/query/get-store-details.query-port';
import { GetProductFromStoreQueryPort } from '../ports/primary/query/get-product-from-store.query-port';
import { GetCategoryDetailsQueryPort } from '../ports/primary/query/get-category-details.query-port';
import { GetSortMethodQueryPort } from '../ports/primary/query/get-sort-method.query-port';
import {
  CATEGORIES_DTO_PORT,
  CategoriesDtoPort,
} from '../ports/secondary/dto/categories.dto-port';
import {
  PRODUCTS_DTO_PORT,
  ProductsDtoPort,
} from '../ports/secondary/dto/products.dto-port';
import {
  STORES_DTO_PORT,
  StoresDtoPort,
} from '../ports/secondary/dto/stores.dto-port';
import { CategoryQuery } from '../ports/primary/query/category.query';
import { StoreQuery } from '../ports/primary/query/store.query';
import { ProductQuery } from '../ports/primary/query/product.query';
import { SortMethodQuery } from '../ports/primary/query/sort-method.query';
import { CategoryType } from '../helpers/types';
import { SortMethodEnum } from '../helpers/sort-method.enum';

@Injectable()
export class StoreFrontState
  implements
    GetAllCategoriesQueryPort,
    GetAllStoresQueryPort,
    GetProductsFromSpecificCategoryQueryPort,
    GetStoreDetailsQueryPort,
    GetProductFromStoreQueryPort,
    GetCategoryDetailsQueryPort,
    GetSortMethodQueryPort
{
  constructor(
    @Inject(CATEGORIES_DTO_PORT) private _categoriesDtoPort: CategoriesDtoPort,
    @Inject(PRODUCTS_DTO_PORT) private _productsDtoPort: ProductsDtoPort,
    @Inject(STORES_DTO_PORT) private _storesDtoPort: StoresDtoPort
  ) {}

  getAllCategories(): Observable<CategoryQuery[]> {
    return this._categoriesDtoPort
      .getAll()
      .pipe(
        map((categories) =>
          categories.map(
            (category) =>
              new CategoryQuery(category.name, category.imageUrl, category.id)
          )
        )
      );
  }

  getAllStores(): Observable<StoreQuery[]> {
    return this._storesDtoPort
      .getAll()
      .pipe(
        map((stores) =>
          stores.map(
            (store) =>
              new StoreQuery(
                store.name,
                store.logoUrl,
                store.id,
                store.distanceInMeters,
                store.tagIds
              )
          )
        )
      );
  }

  getProductsFromSpecificCategory(
    category: CategoryType
  ): Observable<ProductQuery[]> {
    return this._productsDtoPort.getAll().pipe(
      map((products) =>
        products.filter((product) => product.categoryId === category)
      ),
      map((products) =>
        products.map(
          (product) =>
            new ProductQuery(
              product.name,
              product.imageUrl,
              product.id,
              product.categoryId,
              product.featureValue,
              product.price,
              product.ratingCount,
              product.ratingValue,
              product.storeIds,
              this._ratingMapper(product.ratingValue)
            )
        )
      )
    );
  }

  getStoreDetails(storeId: string): Observable<StoreQuery> {
    return this._storesDtoPort
      .getOne(storeId)
      .pipe(
        map(
          (store) =>
            new StoreQuery(
              store.name,
              store.logoUrl,
              store.id,
              store.distanceInMeters,
              store.tagIds
            )
        )
      );
  }

  getProductFromStore(storeIds: string): Observable<ProductQuery[]> {
    return this._productsDtoPort.getAll().pipe(
      map((products) =>
        products.filter((product) => product.storeIds.includes(storeIds))
      ),
      map((products) =>
        products.map(
          (product) =>
            new ProductQuery(
              product.name,
              product.imageUrl,
              product.id,
              product.categoryId,
              product.featureValue,
              product.price,
              product.ratingCount,
              product.ratingValue,
              product.storeIds,
              this._ratingMapper(product.ratingValue)
            )
        )
      )
    );
  }

  getCategoryDetails(categoryId: string): Observable<CategoryQuery> {
    return this._categoriesDtoPort
      .getOne(categoryId)
      .pipe(
        map(
          (category) =>
            new CategoryQuery(category.name, category.imageUrl, category.id)
        )
      );
  }

  private _ratingMapper(rating: number) {
    return new Array(5).fill(0).map((x, i) => {
      if (rating >= i + 1) {
        return 1;
      }
      if (i + 1 > rating && rating > i) {
        return 0.5;
      }
      return 0;
    });
  }

  getSortMethod(): Observable<SortMethodQuery[]> {
    return of([
      new SortMethodQuery('Featured', SortMethodEnum.FEATURED_DESC),
      new SortMethodQuery('Price: Low to High', SortMethodEnum.PRICE_ASC),
      new SortMethodQuery('Price: High to Low', SortMethodEnum.PROCE_DESC),
      new SortMethodQuery('Avg. Rating', SortMethodEnum.RATING_DESC),
    ]);
  }
}
