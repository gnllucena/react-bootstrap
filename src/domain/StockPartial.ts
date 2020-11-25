export default class StockPartial {
  public constructor(params: Partial<StockPartial>) {
    this.Id = params.Id ?? 0;
    this.Ticker = params.Ticker ?? "";
    this.Name = params.Name ?? "";
    this.Image = params.Image ?? "";
    this.Sector = params.Sector ?? "";
    this.Price = params.Price ?? 0;
    this.PE = params.PE ?? 0;
    this.PB = params.PB ?? 0;
    this.ROE = params.ROE ?? 0;
    this.ROIC = params.ROIC ?? 0;
  }

  Id: number;
  Ticker: string;
  Name: string;
  Image: string;
  Sector: string;
  Price: number;
  PE: number;
  PB: number;
  ROE: number;
  ROIC: number;
}