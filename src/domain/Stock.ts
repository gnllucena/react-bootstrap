import { Situation } from "./Situation";

export default class Stock {
  public constructor(params: Partial<Stock>) {
    this.Id = params.Id ?? 0;
    this.Ticker = params.Ticker ?? "";
    this.PE = params.PE ?? 0
    this.PB = params.PB ?? 0
    this.EPS = params.EPS ?? 0
    this.EVEBITDA = params.EVEBITDA ?? 0
    this.EVEBIT = params.EVEBIT ?? 0
    this.EVSales = params.EVSales ?? 0
    this.PC = params.PC 
    this.PS = params.PS 
    this.EVFCF = params.EVFCF 
    this.PriceNETWorkingCapital = params.PriceNETWorkingCapital 
    this.PriceFreeCashFlow = params.PriceFreeCashFlow 
    this.PESituation = params.PESituation ?? Situation.Side;
    this.PBSituation = params.PBSituation ?? Situation.Side;
    this.EPSSituation = params.EPSSituation ?? Situation.Side;
    this.EVEBITDASituation = params.EVEBITDASituation ?? Situation.Side;
    this.EVEBITSituation = params.EVEBITSituation ?? Situation.Side;
    this.EVSalesSituation = params.EVSalesSituation ?? Situation.Side;
    this.PCSituation = params.PCSituation 
    this.PSSituation = params.PSSituation 
    this.EVFCFSituation = params.EVFCFSituation 
    this.PriceNETWorkingCapitalSituation = params.PriceNETWorkingCapitalSituation 
    this.PriceFreeCashFlowSituation = params.PriceFreeCashFlowSituation 
  }

  Id: number;
  Ticker: string;
  PE: number;
  PB: number;
  EPS: number;
  EVEBITDA: number;
  EVEBIT: number;
  EVSales: number;
  PC: number | undefined;
  PS: number | undefined;
  EVFCF: number | undefined;
  PriceNETWorkingCapital: number | undefined;
  PriceFreeCashFlow: number | undefined;
  PESituation: Situation;
  PBSituation: Situation;
  EPSSituation: Situation;
  EVEBITDASituation: Situation;
  EVEBITSituation: Situation;
  EVSalesSituation: Situation;
  PCSituation: Situation | undefined;
  PSSituation: Situation | undefined;
  EVFCFSituation: Situation | undefined;
  PriceNETWorkingCapitalSituation: Situation | undefined;
  PriceFreeCashFlowSituation: Situation | undefined;
}
