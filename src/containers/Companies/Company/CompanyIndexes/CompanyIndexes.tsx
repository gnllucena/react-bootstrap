import React, { FunctionComponent } from 'react';
import Company from '../../../../domain/Company';
import { Row } from 'antd';
import CompanyIndex from '../CompanyIndex/CompanyIndex';

import './CompanyIndexes.scss';
import { Index } from '../../../../domain/Index';


interface CompanyIndexesProps {
  company: Company
}

const CompanyIndexes: FunctionComponent<CompanyIndexesProps> = ({
  company
}) => {
  return (
    <Row gutter={24} className="company-details-indexes-wrapper">
      <CompanyIndex index={Index.ROE} value={company.ROE} situation={company.ROESituation} />
      <CompanyIndex index={Index.ROIC} value={company.ROIC} situation={company.ROICSituation} />
      <CompanyIndex index={Index.ROA} value={company.ROA} situation={company.ROASituation} />
      <CompanyIndex index={Index.NETMargin} value={company.NETMargin} situation={company.NETMarginSituation} />
      <CompanyIndex index={Index.NETDebtEBITDA} value={company.NETDebtEBITDA} situation={company.NETDebtEBITDASituation} />
      <CompanyIndex index={Index.NETDebtEBIT} value={company.NETDebtEBIT} situation={company.NETDebtEBITSituation} />
      <CompanyIndex index={Index.DebtEquity} value={company.DebtEquity} situation={company.DebtEquitySituation} />
      <CompanyIndex index={Index.EBITMargin} value={company.EBITMargin} situation={company.EBITMarginSituation} />
      <CompanyIndex index={Index.EBITDAMargin} value={company.EBITDAMargin} situation={company.EBITDAMarginSituation} />
      <CompanyIndex index={Index.GrossMargin} value={company.GrossMargin} situation={company.GrossMarginSituation} />
      <CompanyIndex index={Index.ProfitMargin} value={company.ProfitMargin} situation={company.ProfitMarginSituation} />
      <CompanyIndex index={Index.OperatingProfitMargin} value={company.OperatingProfitMargin} situation={company.OperatingProfitMarginSituation} />
      <CompanyIndex index={Index.ShareholderEquity} value={company.ShareholderEquity} situation={company.ShareholderEquitySituation} />
      <CompanyIndex index={Index.CompondAnnualGrowth1Years} value={company.CompondAnnualGrowth1Years} situation={company.CompondAnnualGrowth1YearsSituation} />
      <CompanyIndex index={Index.CompondAnnualGrowth3Years} value={company.CompondAnnualGrowth3Years} situation={company.CompondAnnualGrowth3YearsSituation} />
      <CompanyIndex index={Index.CompondAnnualGrowth5Years} value={company.CompondAnnualGrowth5Years} situation={company.CompondAnnualGrowth5YearsSituation} />
      <CompanyIndex index={Index.AvarageAnnualGrowth5Years} value={company.AvarageAnnualGrowth5Years} situation={company.AvarageAnnualGrowth5YearsSituation} />
    </Row>
  );
};

export default CompanyIndexes;
