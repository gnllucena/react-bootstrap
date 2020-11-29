import { Row } from 'antd';
import React, { FunctionComponent, Suspense, useEffect, useState } from 'react';
import { Waypoint } from 'react-waypoint';
import { useRecoilState, useRecoilValue } from 'recoil';
import Pagination from '../../../domain/Pagination';
import StockPartial from '../../../domain/StockPartial';
import { StocksPageFilteredSelector, StocksPagePaginationState } from '../../../store/StocksPageState';
import StocksCardSmall from '../StocksCardSmall/StocksCardSmall';
import StocksListLoading from '../StocksListLoading/StocksListLoading';

const StocksList: FunctionComponent = () => {
  const stocksFiltered = useRecoilValue(StocksPageFilteredSelector);
  const [stocksPagination, setStocksPagination] = useRecoilState(StocksPagePaginationState);
  const [stocks, setStocks] = useState<Array<StockPartial>>([]);

  useEffect(() => {
    let newStocks = new Array<StockPartial>();

    if (stocksPagination.Offset !== 0) {
      newStocks = [...stocks];
    }

    newStocks.push(...stocksFiltered.Items);

    setStocks(newStocks);
  }, [stocksFiltered]);

  const onPageBottom = () => {
    let pagination = new Pagination<StockPartial>({
      Limit: stocksPagination.Limit,
      Offset: stocksPagination.Offset += stocksPagination.Limit,
      Total: stocksPagination.Total
    });

    setStocksPagination(pagination);
  }

  return (
    <div className="page-content">
      <Row gutter={24}>
        {stocks.map((stock: StockPartial) => (
          <StocksCardSmall
            key={stock.Id}
            stock={stock}
          />
        ))}

        <Waypoint onEnter={onPageBottom} />
      </Row>

      <Suspense fallback={<div>foi?</div>}>
        <div>foi sim!</div>
      </Suspense>
    </div>
  );
};

export default StocksList;
