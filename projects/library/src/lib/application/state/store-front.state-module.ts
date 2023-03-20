import { NgModule } from '@angular/core';
import { StoreFrontState } from './store-front.state';
import { GET_ALL_CATEGORIES_QUERY_PORT } from '../ports/primary/query/get-all-categories.query-port';
import { GET_ALL_STORES_QUERY_PORT } from '../ports/primary/query/get-all-stores.query-port';
import { GET_PRODUCT_FROM_SPECIFIC_CATEGORY_QUERY_PORT } from '../ports/primary/query/get-products-from-specific-category.query-port';
import { GET_STORE_DETAILS_QUERY_PORT } from '../ports/primary/query/get-store-details.query-port';
import { GET_PRODUCT_FROM_STORE_QUERY_PORT } from '../ports/primary/query/get-product-from-store.query-port';
import { GET_CATEGORY_DETAILS_QUERY_PORT } from '../ports/primary/query/get-category-details.query-port';
import { GET_SORT_METHOD_QUERY_PORT } from '../ports/primary/query/get-sort-method.query-port';
import { SET_PRICE_FILTER_COMMAND_PORT } from '../ports/primary/command/set-price-filter.command-port';
import { GET_PRICE_FILTER_QUERY_PORT } from '../ports/primary/query/get-price-filter.query-port';
import { SET_FILTER_BY_STORES_COMMAND_PORT } from '../ports/primary/command/set-filter-by-stores.command-port';
import { GET_BY_STORE_FILTER_QUERY_PORT } from '../ports/primary/query/get-by-store-filter.query-port';
import { SET_FILTER_BY_RATING_COMMAND_PORT } from '../ports/primary/command/set-filter-by-rating.command-port';
import { GET_BY_RATING_FILTER_QUERY_PORT } from '../ports/primary/query/get-by-rating-filter.query-port';
import { GET_RATING_LABEL_QUERY_PORT } from '../ports/primary/query/get-rating-label.query-port';

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
    { provide: GET_SORT_METHOD_QUERY_PORT, useExisting: StoreFrontState },
    { provide: SET_PRICE_FILTER_COMMAND_PORT, useExisting: StoreFrontState },
    { provide: GET_PRICE_FILTER_QUERY_PORT, useExisting: StoreFrontState },
    { provide: SET_FILTER_BY_STORES_COMMAND_PORT, useExisting: StoreFrontState },
    { provide: GET_BY_STORE_FILTER_QUERY_PORT, useExisting: StoreFrontState },
    { provide: SET_FILTER_BY_RATING_COMMAND_PORT, useExisting: StoreFrontState },
    { provide: GET_BY_RATING_FILTER_QUERY_PORT, useExisting: StoreFrontState },
    { provide: GET_RATING_LABEL_QUERY_PORT, useExisting: StoreFrontState }
  ],
  exports: [],
})
export class StoreFrontStateModule { }
