import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import FilteredStocksSelector from '../../../../store/selectors/filters/FilteredStocksSelector';

const StocksList: FunctionComponent = () => {
  const filteredStocks = useRecoilValue(FilteredStocksSelector);

  return (
    <div>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
      <p>stocks</p>
    </div>
  );
};

export default StocksList;
