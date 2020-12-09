import { Avatar, Card, Col, Row, Skeleton, Statistic } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';
import { RiseOutlined, FallOutlined, ArrowRightOutlined } from '@ant-design/icons';
import StockPartial from '../../../../domain/StockPartial';

export interface StocksListCardBigProps {
  stock: StockPartial
}

const StocksListCardBig: FunctionComponent<StocksListCardBigProps> = ({
  stock
}) => {
  const color = (situation: 'Up' | 'Side' | 'Down') => {
    let color = {};

    switch (situation) {
      case 'Up':
        color = { color: '#3f8600' };
        break;
      case 'Down':
        color = { color: '#cf1322' };
        break;
    }

    return color;
  }

  const arrow = (situation: 'Up' | 'Side' | 'Down') => {
    let arrow;

    switch (situation) {
      case 'Up':
        arrow = <RiseOutlined />;
        break;
      case 'Down':
        arrow = <FallOutlined />;
        break;
      case 'Side':
        arrow = <ArrowRightOutlined />
        break;
    }

    return arrow;
  }

  return (
    <Card hoverable className="stocks-card-big">
      <Row gutter={24}>
        <Col span={6}>
          <Meta
            avatar={<Avatar size={64} shape="square" icon={<Skeleton.Image />} />}
            title={stock.Name}
            description={stock.Sector + " sector"}
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="PE"
            value={stock.PE}
            precision={2}
            valueStyle={color(stock.PESituation)}
            prefix={arrow(stock.PESituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="PB"
            value={stock.PB}
            precision={2}
            valueStyle={color(stock.PBSituation)}
            prefix={arrow(stock.PBSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="ROE"
            value={stock.ROE}
            precision={2}
            valueStyle={color(stock.ROESituation)}
            prefix={arrow(stock.ROESituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="ROIC"
            value={stock.ROIC}
            precision={2}
            valueStyle={color(stock.ROICSituation)}
            prefix={arrow(stock.ROICSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="NET Margin"
            value={stock.NETMargin}
            precision={2}
            valueStyle={color(stock.NETMarginSituation)}
            prefix={arrow(stock.NETMarginSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="EV/EBITDA"
            value={stock.EVEBITDA}
            precision={2}
            valueStyle={color(stock.EVEBITDASituation)}
            prefix={arrow(stock.EVEBITDASituation)}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default StocksListCardBig;
