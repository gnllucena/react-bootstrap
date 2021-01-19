import React, { FunctionComponent } from 'react';
import Company from '../../../../domain/Company';
import { CalendarOutlined, EnvironmentOutlined, DollarCircleOutlined, PieChartOutlined } from '@ant-design/icons';

import './CompanyDetails.scss';

interface CompanyDetailsProps {
  company: Company
}

const CompanyDetails: FunctionComponent<CompanyDetailsProps> = ({
  company
}) => (
  <div className="company-details-header-wrapper">
    <h1 className="company-details-header-title-wrapper">{company.Name}</h1>

    <ul className="company-details-header-information-wrapper">
      <li>
        <CalendarOutlined />
        <label>Founded on 2019</label>
      </li>
      <li>
        <EnvironmentOutlined />
        <label>Located in United States of America</label>
      </li>
      <li>
        <DollarCircleOutlined />
        <label>Over $ 1.000.000 in patrimony</label>
      </li>
      <li>
        <PieChartOutlined />
        <label>From the finance sector</label>
      </li>
    </ul>
  </div>
);

export default CompanyDetails;
