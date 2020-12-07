export default class StockPartial {
  public constructor(params: Partial<StockPartial>) {
    this.Id = params.Id ?? 0;
    this.Ticker = params.Ticker ?? "";
    this.Name = params.Name ?? "";
    this.Image = params.Image ?? "";
    this.Sector = params.Sector ?? "";
    this.Price = params.Price ?? 0;
    this.Currency = params.Currency ?? "";
    this.PE = params.PE ?? 0;
    this.PB = params.PB ?? 0;
    this.ROE = params.ROE ?? 0;
    this.ROIC = params.ROIC ?? 0;
    this.NETMargin = params.NETMargin ?? 0;
    this.EVEBITDA = params.EVEBITDA ?? 0;
    this.PESituation = params.PESituation ?? 'Side';
    this.PBSituation = params.PBSituation ?? 'Side';
    this.ROESituation = params.ROESituation ?? 'Side';
    this.ROICSituation = params.ROICSituation ?? 'Side';
    this.NETMarginSituation = params.NETMarginSituation ?? 'Side';
    this.EVEBITDASituation = params.EVEBITDASituation ?? 'Side';
  }

  Id: number;
  Ticker: string;
  Name: string;
  Image: string;
  Sector: string;
  Price: number;
  Currency: string;
  PE: number;
  PB: number;
  ROE: number;
  ROIC: number;
  NETMargin: number;
  EVEBITDA: number;
  PESituation: 'Up' | 'Side' | 'Down';
  PBSituation: 'Up' | 'Side' | 'Down';
  ROESituation: 'Up' | 'Side' | 'Down';
  ROICSituation: 'Up' | 'Side' | 'Down';
  NETMarginSituation: 'Up' | 'Side' | 'Down';
  EVEBITDASituation: 'Up' | 'Side' | 'Down';
}