import { Situation } from "./Situation";

export default class Stock {
  public constructor(params: Partial<Stock>) {
    this.Id = params.Id ?? 0;
    this.Ticker = params.Ticker ?? "";
    this.PE = params.PE ?? 0;
    this.PB = params.PB ?? 0;
    this.PC = params.PC ?? 0;
    this.PS = params.PS ?? 0;
    this.EPS = params.EPS ?? 0;
    this.EVEBITDA = params.EVEBITDA ?? 0;
    this.EVEBIT = params.EVEBIT ?? 0;
    this.EVFCF = params.EVFCF ?? 0;
    this.EVSales = params.EVSales ?? 0;
    this.PriceNETWorkingCapital = params.PriceNETWorkingCapital ?? 0;
    this.PriceFreeCashFlow = params.PriceFreeCashFlow ?? 0;
    this.PESituation = params.PESituation ?? Situation.Side;
    this.PBSituation = params.PBSituation ?? Situation.Side;
    this.PCSituation = params.PCSituation ?? Situation.Side;
    this.PSSituation = params.PSSituation ?? Situation.Side;
    this.EPSSituation = params.EPSSituation ?? Situation.Side;
    this.EVEBITDASituation = params.EVEBITDASituation ?? Situation.Side;
    this.EVEBITSituation = params.EVEBITSituation ?? Situation.Side;
    this.EVFCFSituation = params.EVFCFSituation ?? Situation.Side;
    this.EVSalesSituation = params.EVSalesSituation ?? Situation.Side;
    this.PriceNETWorkingCapitalSituation = params.PriceNETWorkingCapitalSituation ?? Situation.Side;
    this.PriceFreeCashFlowSituation = params.PriceFreeCashFlowSituation ?? Situation.Side;
  }

  Id: number;
  Ticker: string;
  PE: number;
  PB: number;
  PC: number;
  PS: number;
  EPS: number;
  EVEBITDA: number;
  EVEBIT: number;
  EVFCF: number;
  EVSales: number;
  PriceNETWorkingCapital: number;
  PriceFreeCashFlow: number;
  PESituation: Situation;
  PBSituation: Situation;
  PCSituation: Situation;
  PSSituation: Situation;
  EPSSituation: Situation;
  EVEBITDASituation: Situation;
  EVEBITSituation: Situation;
  EVFCFSituation: Situation;
  EVSalesSituation: Situation;
  PriceNETWorkingCapitalSituation: Situation;
  PriceFreeCashFlowSituation: Situation;
}
