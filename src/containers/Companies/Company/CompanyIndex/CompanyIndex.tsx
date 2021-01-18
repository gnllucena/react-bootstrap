import React, { FunctionComponent, useState } from 'react';
import { Card, Col, Statistic } from 'antd';
import { QuestionCircleOutlined, RiseOutlined, HistoryOutlined, FallOutlined } from '@ant-design/icons';
import { Situation } from '../../../../domain/Situation';
import { Link } from '@reach/router';
import { Index } from '../../../../domain/Index';

import './CompanyIndex.scss';
import Drawer from '../../../../components/ui/Drawer/Drawer';
import CompanyIndexDescription from '../CompanyIndexDescription/CompanyIndexDescription';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../../store/LoginPageState';
import { Plans } from '../../../../domain/Plans';

interface CompanyIndexProps {
  index: Index,
  value?: number,
  situation?: Situation
}

const CompanyIndex: FunctionComponent<CompanyIndexProps> = ({
  index,
  value,
  situation
}) => {
  const _user = useRecoilValue(UserState);
  const [openedDrawer, setOpenedDrawer] = useState<boolean>(false);

  const changeOpenedDrawer = () => {
    setOpenedDrawer(!openedDrawer);
  }

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

  const hasPlanIndexes = (): boolean => {
    const has = _user.Plans.find((plan: Plans) => {
      return plan == Plans.Indexes;
    });

    return has != undefined;
  }

  return (
    value != undefined && situation != undefined ? (
      <Col xs={2} sm={2} md={2} lg={4} xl={4} className="company-details-index-wrapper">
        <Card
          className="company-details-index-card-wrapper"
          actions={[
            <HistoryOutlined key="history" />,
            <QuestionCircleOutlined key="question" onClick={changeOpenedDrawer} />
          ]}>            
          <Statistic
            title={index}
            value={value}
            precision={2}
            className={color(situation)}
            valueStyle={{ float: 'right' }}
            prefix={arrow(situation)}
            suffix="%"
          />

          <Drawer
            width={600}
            placement="right"
            open={openedDrawer}
            onClose={() => {
              setOpenedDrawer(false);
            }}
          >
            <CompanyIndexDescription index={index} />
          </Drawer>
        </Card>
      </Col>
    ) : (
      hasPlanIndexes() == false ? (
        <Col xs={2} sm={2} md={2} lg={4} xl={4} className="company-details-index-wrapper">
          <Link to="/pricing-plans">
            <Card hoverable>
              <div className="company-details-index-paywall-wrapper">
                <div className="company-details-index-paywall-text-wrapper">
                  Get premium for information about <strong>{index}</strong>
                </div>
              </div>
            </Card>
          </Link>
        </Col>
      ) : (
        <div></div>
      )
    )
  );
};

export default CompanyIndex;
