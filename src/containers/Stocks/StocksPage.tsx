import React, { FunctionComponent, Suspense } from 'react';
import { RouteComponentProps } from '@reach/router';
import StocksFilter from './StocksFilter/StocksFilter';
import StocksList from './StocksList/StocksList';
import StocksListLoading from './StocksListLoading/StocksListLoading';

const StocksPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <StocksFilter />
      
      <Suspense fallback={<StocksListLoading />}>
        <StocksList />
      </Suspense>

      {/* <Suspense fallback={<StocksList />}>
        <StocksListLoading />
      </Suspense> */}
    </>
  );
};

export default StocksPage;
