import React, { FunctionComponent, Suspense } from 'react';
import { RouteComponentProps } from '@reach/router';
import StocksFilter from './StocksFilter/StocksFilter';
import StocksList from './StocksList/StocksList';

const StocksPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <StocksFilter />

      <Suspense fallback={<div>asfasfadsf</div>}>
        <StocksList />
      </Suspense>
    </>
  );
};

export default StocksPage;
