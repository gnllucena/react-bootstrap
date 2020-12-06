import { Avatar, Card, Col, List, Row, Skeleton, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';

import './StocksListLoadingCardSmall.scss';

const StocksListLoadingCardSmall: FunctionComponent = () => {
  return (
    <Card hoverable className="stocks-card-small stocks-card-loading-small">
      <Row gutter={24}>
        <Col span={24}>
          <Meta
            avatar={<Skeleton.Avatar active={true} size={'large'} shape={'square'} />}
            title={
              <Space>
                <Skeleton.Input style={{ width: 90 }} active={true} size={'default'} />
              </Space>
            }
            description={
              <Space>
                <Skeleton.Input style={{ width: 150 }} active={true} size={'small'} />
              </Space>
            }
          />
        </Col>
      </Row>

      <Row gutter={24} className="stocks-card-small-row">
        <Col span={12} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={12} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>

      <Row gutter={24} className="stocks-card-small-row">
        <Col span={12} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={12} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>

      <Row gutter={24} className="stocks-card-small-row">
        <Col span={12} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={12} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default StocksListLoadingCardSmall;
