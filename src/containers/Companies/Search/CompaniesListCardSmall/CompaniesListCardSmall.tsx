import { Avatar, Card, Col, Row, Skeleton, Statistic } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';
import CompanyPartial from '../../../../domain/CompanyPartial';

import './CompaniesListCardSmall.scss';

export interface CompaniesListCardSmallProps {
  company: CompanyPartial
}

export const CompaniesListCardSmall: FunctionComponent<CompaniesListCardSmallProps> = ({
  company
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
    <Card hoverable className="companies-card-small">
      <Row gutter={24}>
        <Col span={24}>
          <Meta
            avatar={<Avatar size={64} shape="square" icon={<Skeleton.Image />} />}
            title={company.Name}
            description={company.Sector + " sector"}
          />
        </Col>
      </Row>

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="PE"
            value={company.PE}
            precision={2}
            valueStyle={color(company.PESituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="PB"
            value={company.PB}
            precision={2}
            valueStyle={color(company.PBSituation)}
            suffix="%"
          />
        </Col>
      </Row>

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="ROE"
            value={company.ROE}
            precision={2}
            valueStyle={color(company.ROESituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="ROIC"
            value={company.ROIC}
            precision={2}
            valueStyle={color(company.ROICSituation)}
            suffix="%"
          />
        </Col>
      </Row>

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="NET Margin"
            value={company.NETMargin}
            precision={2}
            valueStyle={color(company.NETMarginSituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="EV/EBITDA"
            value={company.EVEBITDA}
            precision={2}
            valueStyle={color(company.EVEBITDASituation)}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};