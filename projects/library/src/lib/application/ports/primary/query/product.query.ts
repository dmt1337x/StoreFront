export class ProductQuery {
  constructor(
    public readonly name: string,
    public readonly imageUrl: string,
    public readonly id: string,
    public readonly categoryId: string,
    public readonly featureValue: number,
    public readonly price: number,
    public readonly ratingCount: number,
    public readonly ratingValue: number,
    public readonly storeIds: string[],
    public readonly rating: number[]
  ) {}
}
