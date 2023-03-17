export class StoreQuery {
  constructor(
    public readonly name: string,
    public readonly logoUrl: string,
    public readonly id: string,
    public readonly distanceInMeters: number,
    public readonly tagIds: []
  ) {}
}
