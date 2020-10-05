class Pagination<T> {
  public constructor(params: Pagination<T> = {} as Pagination<T>) {
    this.Items = params.Items;
    this.Offset = params.Offset;
    this.Limit = params.Limit;
    this.Total = params.Total;
  }

  Items: Array<T>;
  Offset: number;
  Limit: number;
  Total: number;
}

export default Pagination;