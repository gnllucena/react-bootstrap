import { List, Pagination as PaginationAntd } from 'antd';
import React, { FunctionComponent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import StockPartial from '../../../domain/StockPartial';
import Pagination from '../../../domain/Pagination';
import { StocksPageFilteredSelector, StocksPagePaginationState } from '../../../store/StocksPageState';
import StocksListCardBig from '../StocksListCardBig/StocksListCardBig';
import useIsFullscreen from '../../../components/hooks/UseIsFullscreen';
import StocksListCardSmall from '../StocksListCardSmall/StocksListCardSmall';

import './StocksList.scss';

const StocksList: FunctionComponent = () => {
  const stocksFiltered = useRecoilValue(StocksPageFilteredSelector);
  const [stocksPagination, setStocksPagination] = useRecoilState(StocksPagePaginationState);
  const isFullscreen = useIsFullscreen();
  
  const onPaginationChange = (page: number) => {
    let goes = stocksPagination.Limit * (page - 1);
    
    let pagination = new Pagination<StockPartial>({
      Limit: stocksPagination.Limit,
      Offset: goes,
      Total: stocksPagination.Total
    });

    setStocksPagination(pagination);
  }

  return (
    <div className="page-content">
      <List
        itemLayout="horizontal"
        dataSource={stocksFiltered.Items}
        split={false}
        renderItem={item => (
          <List.Item>
            {
              isFullscreen ? (
                <StocksListCardBig stock={item} />
              ) : (
                <StocksListCardSmall stock={item} />
              )
            }
          </List.Item>
        )}
      />

      <PaginationAntd
        showLessItems
        onChange={onPaginationChange}
        hideOnSinglePage={true}
        defaultCurrent={0} 
        pageSize={stocksPagination.Limit}
        showSizeChanger={false}
        total={stocksPagination.Total}
        current={Math.ceil(stocksPagination.Offset / stocksPagination.Limit + 1)}
      />
    </div>
  );
};

export default StocksList;
