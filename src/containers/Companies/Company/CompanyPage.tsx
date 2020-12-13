import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from '../../../components/ui/Header/Header';

const CompanyPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      
      <div>Stock</div>
    </>
  );
};

export default CompanyPage;
