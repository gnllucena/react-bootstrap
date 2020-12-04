import { Avatar, Card, Col, Row, Statistic } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';
import StockPartial from '../../../domain/StockPartial';
import { ArrowUpOutlined, ArrowDownOutlined, UserOutlined  } from '@ant-design/icons';

import './StocksCardBig.scss';

export interface StocksCardBigProps {
  stock: StockPartial
}

const StocksCardBig: FunctionComponent<StocksCardBigProps> = ({
  stock
}) => {
  return (
    <Card hoverable className="stocks-card-big">
      <Row gutter={24}>
        <Col span={4}>
          <Meta
            avatar={<Avatar size={64} shape="square" icon={<UserOutlined />} />}
            title={stock.Name}
            description={stock.Sector + " sector"}
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="PE"
            value={stock.PE}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="PB"
            value={stock.PB}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="ROE"
            value={stock.ROE}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="ROIC"
            value={stock.ROIC}
            precision={2}
            valueStyle={{ color: '#cf1322' }}
            prefix={<ArrowDownOutlined />}
            suffix="%"
          />
        </Col>
        <Col span={4}>
          <Statistic
            title="NET Margin"
            value={stock.NETMargin}
            precision={2}
            valueStyle={{ color: '#3f8600' }}
            prefix={<ArrowUpOutlined />}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};

export default StocksCardBig;
