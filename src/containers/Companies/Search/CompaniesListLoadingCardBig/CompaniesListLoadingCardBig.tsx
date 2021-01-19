import { Card, Col, Row, Skeleton, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';

import './CompaniesListLoadingCardBig.scss';

export const CompaniesListLoadingCardBig: FunctionComponent = () => {
  return (
    <Card hoverable className="companies-card-big companies-card-big-loading">
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
        <Col span={3} className="companies-card-big-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="companies-card-big-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="companies-card-big-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="companies-card-big-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="companies-card-big-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={3} className="companies-card-big-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 140, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>
    </Card>
  );
};