import { Row } from 'antd';
import React, { FunctionComponent, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import Pagination from '../../../components/ui/Pagination/Pagination';
import StockPartial from '../../../domain/StockPartial';
import { StocksPageFilteredSelector } from '../../../store/StocksPageState';
import StocksCardSmall from '../StocksCardSmall/StocksCardSmall';

const StocksList: FunctionComponent = () => {
  const stocksFiltered = useRecoilValue(StocksPageFilteredSelector);

  return (
    <Pagination>
      <Row gutter={24}>
        {stocksFiltered.Items.map((stock: StockPartial) => (
          <StocksCardSmall 
            key={stock.Id}
            stock={stock}
          />
        ))}
      </Row>
    </Pagination>
  );
};

export default StocksList;
