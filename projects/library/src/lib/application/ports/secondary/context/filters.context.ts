export interface FiltersContext {
  readonly price: PriceContext;
  readonly storesIds: string[];
}

interface PriceContext {
  min: number;
  max: number;
}
