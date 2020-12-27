import { Situation } from "./Situation";

export default class CompanyPartial {
  public constructor(params: Partial<CompanyPartial>) {
    this.Id = params.Id ?? 0;
    this.Name = params.Name ?? "";
    this.Image = params.Image ?? "";
    this.Sector = params.Sector ?? "";
    this.ROE = params.ROE ?? 0;
    this.ROIC = params.ROIC ?? 0;
    this.ROA = params.ROA ?? 0;
    this.NETMargin = params.NETMargin ?? 0;
    this.NETDebtEBITDA = params.NETDebtEBITDA ?? 0;
    this.CompondAnnualGrowth1Years = params.CompondAnnualGrowth1Years ?? 0;
    this.ROESituation = params.ROESituation ?? Situation.Side;
    this.ROICSituation = params.ROICSituation ?? Situation.Side;
    this.ROASituation = params.ROASituation ?? Situation.Side;
    this.NETMarginSituation = params.NETMarginSituation ?? Situation.Side;
    this.NETDebtEBITDASituation = params.NETDebtEBITDASituation ?? Situation.Side;
    this.CompondAnnualGrowth1YearsSituation = params.CompondAnnualGrowth1YearsSituation ?? Situation.Side;
  }

  Id: number;
  Name: string;
  Image: string;
  Sector: string;
  ROE: number;
  ROIC: number;
  ROA: number;
  NETMargin: number;
  NETDebtEBITDA: number;
  CompondAnnualGrowth1Years: number;
  ROESituation: Situation;
  ROICSituation: Situation;
  ROASituation: Situation;
  NETMarginSituation: Situation;
  NETDebtEBITDASituation: Situation;
  CompondAnnualGrowth1YearsSituation: Situation;
}
