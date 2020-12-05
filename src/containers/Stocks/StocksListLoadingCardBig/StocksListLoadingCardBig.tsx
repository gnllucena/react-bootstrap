import { Card, Col, Row, Skeleton, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';

import './StocksListLoadingCardBig.scss';

const StocksListLoadingCardBig: FunctionComponent = () => {
  return (
    <Card hoverable className="stocks-card-big stocks-card-loading-big">
      <Row gutter={24}>
        <Col span={6}>
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
        <Col span={3} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="stocks-card-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>
    </Card>
  );
};

export default StocksListLoadingCardBig;
