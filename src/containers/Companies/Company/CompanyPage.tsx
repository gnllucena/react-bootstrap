import React, { FunctionComponent } from 'react';
import { RouteComponentProps, useParams } from '@reach/router';
import Header from '../../../components/ui/Header/Header';
import { Content } from '../../../components/ui/Content/Content';
import CompanyDetails from './CompanyDetails/CompanyDetails';
import { useRecoilValue } from 'recoil';
import { CompanyState } from '../../../store/CompanyDetailPageState';
import CompanyIndexes from './CompanyIndexes/CompanyIndexes';
import Title from '../../../components/ui/Title/Title';

const CompanyPage: FunctionComponent<RouteComponentProps> = () => {  
  const { companyId } = useParams();

  const company = useRecoilValue(CompanyState(companyId));

  return (
    <>
      <Header fixed={false} background="detail" />

      <Content>
        <CompanyDetails company={company} />

        <Title title="Indexes" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <CompanyIndexes company={company} />

        <Title title="Stocks" subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
      </Content>
    </>
  );
};

export default CompanyPage;
