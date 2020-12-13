import React, { FunctionComponent, Suspense } from 'react';
import { RouteComponentProps } from '@reach/router';
import { CompaniesFilter}  from './CompaniesFilter/CompaniesFilter';
import { CompaniesList } from './CompaniesList/CompaniesList';
import { CompaniesListLoading } from './CompaniesListLoading/CompaniesListLoading';
import Header from '../../../components/ui/Header/Header';

const CompaniesSearchPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <Header />
      
      <CompaniesFilter />
      
      <Suspense fallback={<CompaniesListLoading />}>
        <CompaniesList />
      </Suspense>
    </>
  );
};

export default CompaniesSearchPage;
