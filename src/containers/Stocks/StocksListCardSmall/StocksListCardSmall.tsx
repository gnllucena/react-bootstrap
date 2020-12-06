import { Avatar, Card, Col, Row, Skeleton, Statistic } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';
import StockPartial from '../../../domain/StockPartial';
import { ArrowUpOutlined, ArrowDownOutlined  } from '@ant-design/icons';

export interface StocksListCardSmallProps {
  stock: StockPartial
}

const StocksListCardSmall: FunctionComponent<StocksListCardSmallProps> = ({
  stock
}) => {
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
            valueStyle={{ color: '#3f8600', float: "right" }}
            suffix="%"
          />
        </Col>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="PB"
            value={stock.PB}
            precision={2}
            valueStyle={{ color: '#cf1322', float: "right" }}
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
            valueStyle={{ color: '#cf1322', float: "right" }}
            suffix="%"
          />
        </Col>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="ROIC"
            value={stock.ROIC}
            precision={2}
            valueStyle={{ color: '#cf1322', float: "right" }}
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
            valueStyle={{ color: '#3f8600', float: "right" }}
            suffix="%"
          />
        </Col>
        <Col span={12} className="stocks-card-small-row">
          <Statistic
            title="EV/EBITDA"
            value={stock.EVEBITDA}
            precision={2}
            valueStyle={{ color: '#3f8600', float: "right" }}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default StocksListCardSmall;
