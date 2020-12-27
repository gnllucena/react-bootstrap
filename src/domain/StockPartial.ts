import { Situation } from "./Situation";

export default class StockPartial {
  public constructor(params: Partial<StockPartial>) {
    this.Id = params.Id ?? 0;
    this.Ticker = params.Ticker ?? "";
    this.Company = params.Company ?? "";
    this.Sector = params.Sector ?? "";
    this.PE = params.PE ?? 0;
    this.PB = params.PB ?? 0;
    this.EPS = params.EPS ?? 0;
    this.EVEBITDA = params.EVEBITDA ?? 0;
    this.EVEBIT = params.EVEBIT ?? 0;
    this.EVSales = params.EVSales ?? 0;
    this.PESituation = params.PESituation ?? Situation.Side;
    this.PBSituation = params.PBSituation ?? Situation.Side;
    this.EPSSituation = params.EPSSituation ?? Situation.Side;
    this.EVEBITDASituation = params.EVEBITDASituation ?? Situation.Side;
    this.EVEBITSituation = params.EVEBITSituation ?? Situation.Side;
    this.EVSalesSituation = params.EVSalesSituation ?? Situation.Side;
  }

  Id: number;
  Ticker: string;
  Company: string;
  Sector: string;
  PE: number;
  PB: number;
  EPS: number;
  EVEBITDA: number;
  EVEBIT: number;
  EVSales: number;
  PESituation: Situation;
  PBSituation: Situation;
  EPSSituation: Situation;
  EVEBITDASituation: Situation;
  EVEBITSituation: Situation;
  EVSalesSituation: Situation;
}