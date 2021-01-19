export default class Pagination<T> {
  public constructor(params: Partial<Pagination<T>>) {
    this.Items = params.Items ?? new Array<T>();
    this.Offset = params.Offset ?? 0;
    this.Limit = params.Limit ?? 0;
    this.Total = params.Total ?? 0;
  }

  Items: Array<T>;
  Offset: number;
  Limit: number;
  Total: number;
}