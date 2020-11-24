import { Card, Col, Row } from 'antd';
import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';
import Pagination from '../../../../components/ui/Pagination/Pagination';
import Stock from '../../../../domain/Stock';
import FilteredStocksSelector from '../../../../store/selectors/filters/FilteredStocksSelector';

const StocksList: FunctionComponent = () => {
  const filteredStocks = useRecoilValue(FilteredStocksSelector);

  return (
    <Pagination>
      <Row gutter={24}>
        {filteredStocks.Items.map((stock: Stock) => (
          <Col xs={24} sm={24} md={8} lg={8} xl={6}>
            <Card 
              hoverable
              cover={<img alt="apple" src="http://localhost:3000/assets/images/apple-logo.png" />}
              bordered={true}
              style={{
                marginBottom: '10px'
              }}
            >
              {stock.Ticker}
            </Card>
          </Col>
        ))}
      </Row>
    </Pagination>
  );
};

export default StocksList;
