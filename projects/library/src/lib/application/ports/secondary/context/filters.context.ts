export interface FiltersContext {
  readonly price: PriceContext;
  readonly storesIds: string[];
  readonly rating: number;
}

interface PriceContext {
  min: number;
  max: number;
}
