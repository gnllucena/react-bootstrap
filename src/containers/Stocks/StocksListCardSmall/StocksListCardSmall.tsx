import { Card, Col } from 'antd';
import React, { FunctionComponent } from 'react';
import StockPartial from '../../../domain/StockPartial';

export interface StocksListCardSmallProps {
  stock: StockPartial
}

const StocksListCardSmall: FunctionComponent<StocksListCardSmallProps> = ({
  stock
}) => {
  return (
    <Col xs={24} sm={24} md={24} lg={24} xl={24}>
      <Card 
        hoverable
        cover={<img alt={stock.Name + " image"} src={"http://localhost:3000/assets/images/" + stock.Image} />}
        bordered={true}
        className="stocks-card"
      >
        <div className="stocks-card-subtext">
          <div className="stocks-align-left">{stock.Ticker}</div>
        </div>
        <div className="stocks-card-name">{stock.Name}</div>
        <div className="stocks-card-price">
          <div className="stocks-align-left">{stock.Sector} sector</div>
        </div>
      </Card>
    </Col>
  );
};

export default StocksListCardSmall;
