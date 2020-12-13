import React, { FunctionComponent } from 'react';
import Meta from 'antd/lib/card/Meta';
import { Card, Col, Row, Skeleton, Statistic } from 'antd';
import { RiseOutlined, FallOutlined, ArrowRightOutlined } from '@ant-design/icons';
import CompanyPartial from '../../../../domain/CompanyPartial';

import './CompaniesListCardBig.scss';

export interface CompaniesListCardBigProps {
  company: CompanyPartial
}

export const CompaniesListCardBig: FunctionComponent<CompaniesListCardBigProps> = ({
  company
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
    <Card hoverable className="companies-card-big">
      <Row gutter={24}>
        <Col span={6}>
          <Meta
            avatar={<Skeleton.Avatar active={true} size={'large'} shape={'square'} />}
            title={company.Name}
            description={company.Sector + " sector"}
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="PE"
            value={company.PE}
            precision={2}
            valueStyle={color(company.PESituation)}
            prefix={arrow(company.PESituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="PB"
            value={company.PB}
            precision={2}
            valueStyle={color(company.PBSituation)}
            prefix={arrow(company.PBSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="ROE"
            value={company.ROE}
            precision={2}
            valueStyle={color(company.ROESituation)}
            prefix={arrow(company.ROESituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="ROIC"
            value={company.ROIC}
            precision={2}
            valueStyle={color(company.ROICSituation)}
            prefix={arrow(company.ROICSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="NET Margin"
            value={company.NETMargin}
            precision={2}
            valueStyle={color(company.NETMarginSituation)}
            prefix={arrow(company.NETMarginSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="EV/EBITDA"
            value={company.EVEBITDA}
            precision={2}
            valueStyle={color(company.EVEBITDASituation)}
            prefix={arrow(company.EVEBITDASituation)}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};