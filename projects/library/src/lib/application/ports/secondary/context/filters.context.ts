export interface FiltersContext {
  readonly price: PriceContext;
}

interface PriceContext {
  min: number;
  max: number;
}
