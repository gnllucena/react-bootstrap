import { Empty, List, Pagination as PaginationAntd } from 'antd';
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
  const [stocksPagination, setStocksPagination] = useRecoilState(StocksPagePaginationState);
  const stocksFiltered = useRecoilValue(StocksPageFilteredSelector);
  const isFullscreen = useIsFullscreen();
  
  const onPaginationChange = (page: number) => {
    let pagination = new Pagination<StockPartial>({
      Limit: stocksPagination.Limit,
      Offset: stocksPagination.Limit * (page - 1),
      Total: stocksPagination.Total
    });

    setStocksPagination(pagination);

    window.scrollTo(0, 0);
  }

  return (
    <div className="page-content">
      {
        stocksFiltered.Items[12313123].EVEBITDA > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={stocksFiltered.Items}
            split={false}
            renderItem={item => (
              <a href="">
                <List.Item>
                  {
                    isFullscreen ? (
                      <StocksListCardBig stock={item} />
                    ) : (
                      <StocksListCardSmall stock={item} />
                    )
                  }
                </List.Item>
              </a>
            )}
          />
        ) : (
          <Empty 
            className="no-data"
            description={"No data for the selected filters"}
          />
        )
      }
      
      <PaginationAntd
        showLessItems
        onChange={onPaginationChange}
        hideOnSinglePage={true}
        defaultCurrent={0} 
        pageSize={stocksFiltered.Limit}
        showSizeChanger={false}
        total={stocksFiltered.Total}
        current={Math.ceil(stocksFiltered.Offset / stocksFiltered.Limit + 1)}
      />
    </div>
  );
};

export default StocksList;
