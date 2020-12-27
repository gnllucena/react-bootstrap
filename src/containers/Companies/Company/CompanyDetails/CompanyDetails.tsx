import React, { FunctionComponent } from 'react';
import Company from '../../../../domain/Company';

interface CompanyDetailProps {
  company: Company
}

const CompanyDetails: FunctionComponent<CompanyDetailProps> = ({
  company
}) => {
  return (
    <div>
      <label>{company.Name}</label>
    </div>
  );
};

export default CompanyDetails;
