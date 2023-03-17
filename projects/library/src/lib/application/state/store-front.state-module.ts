import { NgModule } from '@angular/core';
import { StoreFrontState } from './store-front.state';
import { GET_ALL_CATEGORIES_QUERY_PORT } from '../ports/primary/query/get-all-categories.query-port';
import { GET_ALL_STORES_QUERY_PORT } from '../ports/primary/query/get-all-stores.query-port';
import { GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT } from '../ports/primary/query/get-products-from-specific-category.query-port';
import { GET_STORE_DETAILS_QUERY_PORT } from '../ports/primary/query/get-store-details.query-port';
import { GET_PRODUCT_FROM_STORE_QUERY_PORT } from '../ports/primary/query/get-product-from-store.query-port';
import { GET_CATEGORY_DETAILS_QUERY_PORT } from '../ports/primary/query/get-category-details.query-port';
import { GET_SORT_METHOD_QUERY_PORT } from '../ports/primary/query/get-sort-method.query-port';

@NgModule({
  imports: [],
  declarations: [],
  providers: [
    StoreFrontState,
    { provide: GET_ALL_CATEGORIES_QUERY_PORT, useExisting: StoreFrontState },
    { provide: GET_ALL_STORES_QUERY_PORT, useExisting: StoreFrontState },
    { provide: GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT, useExisting: StoreFrontState },
    { provide: GET_STORE_DETAILS_QUERY_PORT, useExisting: StoreFrontState },
    { provide: GET_PRODUCT_FROM_STORE_QUERY_PORT, useExisting: StoreFrontState },
    { provide: GET_CATEGORY_DETAILS_QUERY_PORT, useExisting: StoreFrontState },
    { provide: GET_SORT_METHOD_QUERY_PORT, useExisting: StoreFrontState }
  ],
  exports: [],
})
export class StoreFrontStateModule { }
