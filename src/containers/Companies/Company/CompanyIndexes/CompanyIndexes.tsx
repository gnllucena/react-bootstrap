import React, { FunctionComponent } from 'react';
import Company from '../../../../domain/Company';
import { Row } from 'antd';
import CompanyIndex from '../CompanyIndex/CompanyIndex';

import './CompanyIndexes.scss';


interface CompanyIndexesProps {
  company: Company
}

const CompanyIndexes: FunctionComponent<CompanyIndexesProps> = ({
  company
}) => {
  return (
    <Row gutter={24} className="company-details-indexes-wrapper">
      <CompanyIndex index={"ROE"} value={company.ROE} situation={company.ROESituation} />
      <CompanyIndex index={"ROIC"} value={company.ROIC} situation={company.ROICSituation} />
      <CompanyIndex index={"ROA"} value={company.ROA} situation={company.ROASituation} />
      <CompanyIndex index={"NET Margin"} value={company.NETMargin} situation={company.NETMarginSituation} />
      <CompanyIndex index={"NET Debt EBITDA"} value={company.NETDebtEBITDA} situation={company.NETDebtEBITDASituation} />
      <CompanyIndex index={"NET Debt EBIT"} value={company.NETDebtEBIT} situation={company.NETDebtEBITSituation} />
      <CompanyIndex index={"Debt Equity"} value={company.DebtEquity} situation={company.DebtEquitySituation} />
      <CompanyIndex index={"EBIT Margin"} value={company.EBITMargin} situation={company.EBITMarginSituation} />
      <CompanyIndex index={"EBITDA Margin"} value={company.EBITDAMargin} situation={company.EBITDAMarginSituation} />
      <CompanyIndex index={"Gross Margin"} value={company.GrossMargin} situation={company.GrossMarginSituation} />
      <CompanyIndex index={"Profit Margin"} value={company.ProfitMargin} situation={company.ProfitMarginSituation} />
      <CompanyIndex index={"Operating Profit Margin"} value={company.OperatingProfitMargin} situation={company.OperatingProfitMarginSituation} />
      <CompanyIndex index={"Shareholder Equity"} value={company.ShareholderEquity} situation={company.ShareholderEquitySituation} />
      <CompanyIndex index={"CAGR 1 Year"} value={company.CompondAnnualGrowth1Years} situation={company.CompondAnnualGrowth1YearsSituation} />
      <CompanyIndex index={"CAGR 3 Years"} value={company.CompondAnnualGrowth3Years} situation={company.CompondAnnualGrowth3YearsSituation} />
      <CompanyIndex index={"CAGR 5 Years"} value={company.CompondAnnualGrowth5Years} situation={company.CompondAnnualGrowth5YearsSituation} />
      <CompanyIndex index={"Average CAGR 5 Years"} value={company.AvarageAnnualGrowth5Years} situation={company.AvarageAnnualGrowth5YearsSituation} />
    </Row>
  );
};

export default CompanyIndexes;
