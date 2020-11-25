import { Card, Col } from 'antd';
import React, { FunctionComponent } from 'react';
import Stock from '../../../../domain/StockPartial';

export interface StocksCardSmallProps {
  stock: Stock
}

const StocksCardSmall: FunctionComponent = () => {
  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
      <Card 
        hoverable
        cover={<img alt="apple" src="http://localhost:3000/assets/images/apple-logo.png" />}
        bordered={true}
        style={{
          marginBottom: '10px'
        }}
      >
        ITSA4 
      </Card>
    </Col>
  );
};

export default StocksCardSmall;
