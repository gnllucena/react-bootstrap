import { List } from 'antd';
import React, { FunctionComponent } from 'react';
import useIsFullscreen from '../../../../components/hooks/UseIsFullscreen';
import { Content } from '../../../../components/ui/Content/Content';
import { CompaniesListLoadingCardBig } from '../CompaniesListLoadingCardBig/CompaniesListLoadingCardBig';
import { CompaniesListLoadingCardSmall } from '../CompaniesListLoadingCardSmall/CompaniesListLoadingCardSmall';

export const CompaniesListLoading: FunctionComponent = () => {
  const isFullscreen = useIsFullscreen();
  
  let items = [1, 2, 3, 4, 5, 6];
  
  return (
    <Content>
      <List
        itemLayout="horizontal"
        dataSource={items}
        split={false}
        renderItem={() => (
          <List.Item>
            {
              isFullscreen ? (
                <CompaniesListLoadingCardBig />
              ) : (
                <CompaniesListLoadingCardSmall />
              )
            }
          </List.Item>
        )}
      />
    </Content>
  );
};
