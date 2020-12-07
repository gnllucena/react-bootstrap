import { Avatar, Card, Col, Row, Skeleton, Statistic } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';
import StockPartial from '../../../domain/StockPartial';

export interface StocksListCardSmallProps {
  stock: StockPartial
}

const StocksListCardSmall: FunctionComponent<StocksListCardSmallProps> = ({
  stock
}) => {
  const color = (situation: 'Up' | 'Side' | 'Down') => {
    let color = {};

    switch (situation) {
      case 'Up':
        color = { color: '#3f8600', float: "right" };
        break;
      case 'Side':
        color = { float: "right" };
        break;
      case 'Down':
        color = { color: '#cf1322', float: "right" };
        break;
    }

    return color;
  }

  return (
    <Card hoverable className="stocks-card-small">
      <Row gutter={24}>
        <Col span={24}>
          <Meta
            avatar={<Avatar size={64} shape="square" icon={<Skeleton.Image />} />}
            title={stock.Name}
            description={stock.Sector + " sector"}
          />
        </Col>
      </Row>

      <Row gutter={24} className="stocks-card-small-row">
        <Col span={12}>
          <Statistic
            title="PE"
            value={stock.PE}
            precision={2}
            valueStyle={color(stock.PESituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="PB"
            value={stock.PB}
            precision={2}
            valueStyle={color(stock.PBSituation)}
            suffix="%"
          />
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="ROE"
            value={stock.ROE}
            precision={2}
            valueStyle={color(stock.ROESituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="ROIC"
            value={stock.ROIC}
            precision={2}
            valueStyle={color(stock.ROICSituation)}
            suffix="%"
          />
        </Col>
      </Row>

      <Row gutter={24}>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="NET Margin"
            value={stock.NETMargin}
            precision={2}
            valueStyle={color(stock.NETMarginSituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="EV/EBITDA"
            value={stock.EVEBITDA}
            precision={2}
            valueStyle={color(stock.EVEBITDASituation)}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default StocksListCardSmall;
