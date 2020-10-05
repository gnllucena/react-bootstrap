class Stock {
  public constructor(params: Stock = {} as Stock) {
    this.Id = params.Id;
    this.Ticker = params.Ticker;
  }

  Id: number | undefined;
  Ticker: string;
}

export default Stock;