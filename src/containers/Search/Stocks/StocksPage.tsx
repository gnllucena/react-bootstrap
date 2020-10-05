import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import StocksFilter from './StocksFilter/StocksFilter';
import StocksList from './StocksList/StocksList';

const StocksPage: FunctionComponent<RouteComponentProps> = () => {
  return (
    <>
      <StocksFilter />

      <StocksList />
    </>
  );
};

export default StocksPage;
