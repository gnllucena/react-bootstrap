import { List } from 'antd';
import React, { FunctionComponent } from 'react';
import useIsFullscreen from '../../../../components/hooks/UseIsFullscreen';
import StocksListLoadingCardBig from '../StocksListLoadingCardBig/StocksListLoadingCardBig';
import StocksListLoadingCardSmall from '../StocksListLoadingCardSmall/StocksListLoadingCardSmall';

const StocksListLoading: FunctionComponent = () => {
  const isFullscreen = useIsFullscreen();
  
  let items = [1, 2, 3, 4, 5, 6];
  
  return (
    <div className="page-content">
      <List
        itemLayout="horizontal"
        dataSource={items}
        split={false}
        renderItem={() => (
          <List.Item>
            {
              isFullscreen ? (
                <StocksListLoadingCardBig />
              ) : (
                <StocksListLoadingCardSmall />
              )
            }
          </List.Item>
        )}
      />
    </div>
  );
};

export default StocksListLoading;
