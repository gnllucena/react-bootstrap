import { Card, Col } from 'antd';
import React, { FunctionComponent } from 'react';
import StockPartial from '../../../domain/StockPartial';

import './StocksCardSmall.scss';

export interface StocksCardSmallProps {
  stock: StockPartial
}

const StocksCardSmall: FunctionComponent<StocksCardSmallProps> = ({
  stock
}) => {
  return (
    <Col xs={24} sm={24} md={8} lg={8} xl={6}>
      <Card 
        hoverable
        cover={<img alt={stock.Name + " image"} src={"http://localhost:3000/assets/images/" + stock.Image} />}
        bordered={true}
        className="stocks-card"
      >
        <div className="stocks-card-subtext">
          <div className="stocks-align-left">{stock.Ticker}</div>
          {/* <div className="stocks-align-right">{`${stock.Currency} ${stock.Price.toLocaleString()}`}</div> */}
        </div>
        <div className="stocks-card-name">{stock.Name}</div>
        <div className="stocks-card-price">
          <div className="stocks-align-left">{stock.Sector} sector</div>
        </div>
      </Card>
    </Col>
  );
};

export default StocksCardSmall;
