import React, { FunctionComponent, Suspense } from 'react';
import { RouteComponentProps } from '@reach/router';
import { CompaniesFilter}  from './CompaniesFilter/CompaniesFilter';
import { CompaniesList } from './CompaniesList/CompaniesList';
import { CompaniesListLoading } from './CompaniesListLoading/CompaniesListLoading';

const CompaniesSearchPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <CompaniesFilter />
      
      <Suspense fallback={<CompaniesListLoading />}>
        <CompaniesList />
      </Suspense>
    </>
  );
};

export default CompaniesSearchPage;
