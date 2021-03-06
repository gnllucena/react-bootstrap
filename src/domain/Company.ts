import { Situation } from "./Situation";

export default class Company {
  public constructor(params: Partial<Company>) {
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
    this.EBITMargin = params.EBITMargin;
    this.EBITDAMargin = params.EBITDAMargin;
    this.GrossMargin = params.GrossMargin;
    this.ProfitMargin = params.ProfitMargin;
    this.OperatingProfitMargin = params.OperatingProfitMargin;
    this.NETDebtEBIT = params.NETDebtEBIT;
    this.DebtEquity = params.DebtEquity;
    this.ShareholderEquity = params.ShareholderEquity;
    this.CompondAnnualGrowth3Years = params.CompondAnnualGrowth3Years;
    this.CompondAnnualGrowth5Years = params.CompondAnnualGrowth5Years;
    this.AvarageAnnualGrowth5Years = params.AvarageAnnualGrowth5Years;
    this.ROESituation = params.ROESituation ?? Situation.Side;
    this.ROICSituation = params.ROICSituation ?? Situation.Side;
    this.ROASituation = params.ROASituation ?? Situation.Side;
    this.NETMarginSituation = params.NETMarginSituation ?? Situation.Side;
    this.NETDebtEBITDASituation = params.NETDebtEBITDASituation ?? Situation.Side;
    this.CompondAnnualGrowth1YearsSituation = params.CompondAnnualGrowth1YearsSituation ?? Situation.Side;
    this.NETDebtEBITSituation = params.NETDebtEBITSituation;
    this.EBITMarginSituation = params.EBITMarginSituation;
    this.EBITDAMarginSituation = params.EBITDAMarginSituation;
    this.GrossMarginSituation = params.GrossMarginSituation;
    this.ProfitMarginSituation = params.ProfitMarginSituation;
    this.OperatingProfitMarginSituation = params.OperatingProfitMarginSituation;
    this.DebtEquitySituation = params.DebtEquitySituation;
    this.ShareholderEquitySituation = params.ShareholderEquitySituation;
    this.CompondAnnualGrowth3YearsSituation = params.CompondAnnualGrowth3YearsSituation;
    this.CompondAnnualGrowth5YearsSituation = params.CompondAnnualGrowth5YearsSituation;
    this.AvarageAnnualGrowth5YearsSituation = params.AvarageAnnualGrowth5YearsSituation;
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
  EBITMargin: number | undefined;
  EBITDAMargin: number | undefined;
  GrossMargin: number | undefined;
  ProfitMargin: number | undefined;
  OperatingProfitMargin: number | undefined;
  NETDebtEBIT: number | undefined;
  DebtEquity: number | undefined;
  ShareholderEquity: number | undefined;
  CompondAnnualGrowth3Years: number | undefined;
  CompondAnnualGrowth5Years: number | undefined;
  AvarageAnnualGrowth5Years: number | undefined;
  ROESituation: Situation;
  ROICSituation: Situation;
  ROASituation: Situation;
  NETMarginSituation: Situation;
  NETDebtEBITDASituation: Situation;
  CompondAnnualGrowth1YearsSituation: Situation;
  NETDebtEBITSituation: Situation | undefined;
  EBITMarginSituation: Situation | undefined;
  EBITDAMarginSituation: Situation | undefined;
  GrossMarginSituation: Situation | undefined;
  ProfitMarginSituation: Situation | undefined;
  OperatingProfitMarginSituation: Situation | undefined;  
  DebtEquitySituation: Situation | undefined;
  ShareholderEquitySituation: Situation | undefined;
  CompondAnnualGrowth3YearsSituation: Situation | undefined;
  CompondAnnualGrowth5YearsSituation: Situation | undefined;
  AvarageAnnualGrowth5YearsSituation: Situation | undefined;
}