import React, { FunctionComponent } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import Header from '../../../components/ui/Header/Header';
import { Content } from '../../../components/ui/Content/Content';
import CompanyDetails from './CompanyDetails/CompanyDetails';
import { useRecoilValue } from 'recoil';
import { CompanyState } from '../../../store/CompanyDetailPageState';

const CompanyPage: FunctionComponent<RouteComponentProps> = () => {  
  const { companyId } = useParams();

  const company = useRecoilValue(CompanyState(companyId));

  return (
    <>
      <Header fixed={false} background="detail" />
      
      <Content>
        <CompanyDetails company={company} />
      </Content>
    </>
  );
};

export default CompanyPage;
