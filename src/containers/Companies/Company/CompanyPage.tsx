import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Header from '../../../components/ui/Header/Header';
import { Content } from '../../../components/ui/Content/Content';

const CompanyPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      
      <Content>
        <div>Stock</div>
      </Content>
    </>
  );
};

export default CompanyPage;
