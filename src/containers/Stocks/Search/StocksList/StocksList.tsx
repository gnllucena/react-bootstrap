import { List, Pagination as PaginationAntd } from 'antd';
import React, { FunctionComponent } from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import StocksListCardBig from '../StocksListCardBig/StocksListCardBig';
import StocksListCardSmall from '../StocksListCardSmall/StocksListCardSmall';
import NoData from '../../../../components/ui/NoData/NoData';
import { StocksPageFilteredSelector, StocksPagePaginationState } from '../../../../store/StocksPageState';
import useIsFullscreen from '../../../../components/hooks/UseIsFullscreen';
import Pagination from '../../../../domain/Pagination';
import StockPartial from '../../../../domain/StockPartial';

import './StocksList.scss';
import { Link } from '@reach/router';

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

  // const selecionado(name: string) {
  //   let querystring = name.normalize('NFD').replace(/[\u0300-\u036f]/g, "");

  //   querystring = querystring.toLocaleLowerCase();

  //   querystring = querystring.replace(new RegExp(' ', 'g'), '-');

  //   return querystring;
  // }

  return (
    <div className="page-content">
      {
        stocksFiltered.Items.length > 0 ? (
          <List
            itemLayout="horizontal"
            dataSource={stocksFiltered.Items}
            split={false}
            renderItem={item => (
              <Link to={`${item.Id}`}>
                <List.Item>
                  {
                    isFullscreen ? (
                      <StocksListCardBig stock={item} />
                    ) : (
                      <StocksListCardSmall stock={item} />
                    )
                  }
                </List.Item>
              </Link>
            )}
          />
        ) : (
          <NoData text="No data for the selected filters" />
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
