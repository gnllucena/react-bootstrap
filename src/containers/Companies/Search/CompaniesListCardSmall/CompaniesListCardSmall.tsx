import { Avatar, Card, Col, Row, Skeleton, Statistic } from 'antd';
import Meta from 'antd/lib/card/Meta';
import React, { FunctionComponent } from 'react';
import CompanyPartial from '../../../../domain/CompanyPartial';
import { Situation } from '../../../../domain/Situation';

import './CompaniesListCardSmall.scss';

export interface CompaniesListCardSmallProps {
  company: CompanyPartial
}

export const CompaniesListCardSmall: FunctionComponent<CompaniesListCardSmallProps> = ({
  company
}) => {
  const color = (situation: Situation) => {
    let color = '';

    switch (situation) {
      case Situation.Up:
        color = 'success';
        break;
      case Situation.Down:
        color = 'danger';
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
            title="ROE"
            value={company.ROE}
            precision={2}
            valueStyle={{ float: "right" }}
            className={color(company.ROESituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="ROIC"
            value={company.ROIC}
            precision={2}
            valueStyle={{ float: "right" }}
            className={color(company.ROICSituation)}
            suffix="%"
          />
        </Col>
      </Row>

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="ROA"
            value={company.ROA}
            precision={2}
            valueStyle={{ float: "right" }}
            className={color(company.ROASituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="NET Margin"
            value={company.NETMargin}
            precision={2}
            valueStyle={{ float: "right" }}
            className={color(company.NETMarginSituation)}
            suffix="%"
          />
        </Col>
      </Row>

      <Row gutter={24} className="companies-card-small-row">
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="NET Debt EBITDA"
            value={company.NETDebtEBITDA}
            precision={2}
            valueStyle={{ float: "right" }}
            className={color(company.NETDebtEBITDASituation)}
            suffix="%"
          />
        </Col>
        <Col span={12} className="companies-card-small-col">
          <Statistic
            title="CAGR Last Year"
            value={company.CompondAnnualGrowth1Years}
            precision={2}
            valueStyle={{ float: "right" }}
            className={color(company.CompondAnnualGrowth1YearsSituation)}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};