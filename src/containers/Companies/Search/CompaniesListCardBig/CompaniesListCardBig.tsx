import React, { FunctionComponent } from 'react';
import Meta from 'antd/lib/card/Meta';
import { Avatar, Card, Col, Row, Skeleton, Statistic } from 'antd';
import { RiseOutlined, FallOutlined } from '@ant-design/icons';
import CompanyPartial from '../../../../domain/CompanyPartial';

import './CompaniesListCardBig.scss';
import { Situation } from '../../../../domain/Situation';

export interface CompaniesListCardBigProps {
  company: CompanyPartial
}

export const CompaniesListCardBig: FunctionComponent<CompaniesListCardBigProps> = ({
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

  const arrow = (situation: Situation) => {
    let arrow;

    switch (situation) {
      case Situation.Up:
        arrow = <RiseOutlined />;
        break;
      case Situation.Down:
        arrow = <FallOutlined />;
        break;
    }

    return arrow;
  }

  return (
    <Card hoverable className="companies-card-big">
      <Row gutter={24}>
        <Col span={6}>
          <Meta
            avatar={<Avatar size={64} shape="square" icon={<Skeleton.Image />} />}
            title={company.Name}
            description={company.Sector + " sector"}
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="ROE"
            value={company.ROE}
            precision={2}
            className={color(company.ROESituation)}
            prefix={arrow(company.ROESituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="ROIC"
            value={company.ROIC}
            precision={2}
            className={color(company.ROICSituation)}
            prefix={arrow(company.ROICSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="ROA"
            value={company.ROA}
            precision={2}
            className={color(company.ROASituation)}
            prefix={arrow(company.ROASituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="NET Margin"
            value={company.NETMargin}
            precision={2}
            className={color(company.NETMarginSituation)}
            prefix={arrow(company.NETMarginSituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="NET Debt EBITDA"
            value={company.NETDebtEBITDA}
            precision={2}
            className={color(company.NETDebtEBITDASituation)}
            prefix={arrow(company.NETDebtEBITDASituation)}
            suffix="%"
          />
        </Col>
        <Col span={3}>
          <Statistic
            title="CAGR Last Year"
            value={company.CompondAnnualGrowth1Years}
            precision={2}
            className={color(company.CompondAnnualGrowth1YearsSituation)}
            prefix={arrow(company.CompondAnnualGrowth1YearsSituation)}
            suffix="%"
          />
        </Col>
      </Row>
    </Card>
  );
};