import React, { FunctionComponent } from 'react';
import { Card, Col, Statistic } from 'antd';
import { QuestionCircleOutlined, RiseOutlined, HistoryOutlined, FallOutlined } from '@ant-design/icons';

import './CompanyIndex.scss';
import { Situation } from '../../../../domain/Situation';
import { Link } from '@reach/router';

interface CompanyIndexProps {
  index: string,
  value?: number,
  situation?: Situation
}

const CompanyIndex: FunctionComponent<CompanyIndexProps> = ({
  index,
  value,
  situation
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
    <Col xs={2} sm={2} md={2} lg={4} xl={4} className="company-details-index-wrapper">
      {
        value != undefined && situation != undefined ? (
          <Card
            actions={[
              <HistoryOutlined key="history" />,
              <QuestionCircleOutlined key="question" />
            ]}>
              
            {
              value != undefined && situation != undefined &&
              <Statistic
                title={index}
                value={value}
                precision={2}
                className={color(situation)}
                valueStyle={{ float: 'right' }}
                prefix={arrow(situation)}
                suffix="%"
              />
            }
          </Card>
        ) : (
          <Link to="/pricing-plans">
            <Card hoverable>
              <div className="company-details-index-paywall-wrapper">
                <div className="company-details-index-paywall-text-wrapper">
                  Click for information about <strong>{index}</strong>
                </div>
              </div>
            </Card>
          </Link>
        )
      }
    </Col>
  );
};

export default CompanyIndex;
