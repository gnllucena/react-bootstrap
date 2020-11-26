import { Row } from 'antd';
import React, { FunctionComponent, Suspense } from 'react';
import { useRecoilValue } from 'recoil';
import Pagination from '../../../components/ui/Pagination/Pagination';
import StockPartial from '../../../domain/StockPartial';
import FilteredStocksSelector from '../../../store/selectors/filters/FilteredStocksSelector';
import StocksCardSmall from '../StocksCardSmall/StocksCardSmall';

const StocksList: FunctionComponent = () => {
  const filteredStocks = useRecoilValue(FilteredStocksSelector);

  return (
    <Pagination>
      <Row gutter={24}>
        {filteredStocks.Items.map((stock: StockPartial) => (
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
