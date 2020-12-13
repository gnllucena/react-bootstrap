import { Card, Col, Row, Skeleton, Space } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';

import './CompaniesListLoadingCardSmall.scss';

export const CompaniesListLoadingCardSmall: FunctionComponent = () => {
  return (
    <Card hoverable className="companies-card-small companies-card-loading-small">
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

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={12} className="companies-card-small-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={12} className="companies-card-small-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
        <Col span={12} className="companies-card-small-loading-column">
          <Space>
            <Skeleton.Input style={{ width: 40 }} active={true} size={'small'} />
            <Skeleton.Input style={{ width: 120, marginTop: 8 }} active={true} size={'default'} />
          </Space>
        </Col>
      </Row>
    </Card>
  );
};