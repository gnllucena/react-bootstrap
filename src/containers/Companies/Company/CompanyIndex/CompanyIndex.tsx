import React, { FunctionComponent, useState } from 'react';
import { Card, Col, Statistic } from 'antd';
import { QuestionCircleOutlined, RiseOutlined, HistoryOutlined, FallOutlined } from '@ant-design/icons';
import { Situation } from '../../../../domain/Situation';
import { Link } from '@reach/router';
import { Index } from '../../../../domain/Index';
import Drawer from '../../../../components/ui/Drawer/Drawer';
import CompanyIndexDescription from '../CompanyIndexDescription/CompanyIndexDescription';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../../store/LoginPageState';
import { Plans } from '../../../../domain/Plans';
import CompanyIndexHistoric from '../CompanyIndexHistoric/CompanyIndexHistoric';
import './CompanyIndex.scss';

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
  const [openedDescriptionDrawer, setOpenedDescriptionDrawer] = useState<boolean>(false);
  const [openedHistoricDrawer, setOpenedHistoricDrawer] = useState<boolean>(false);

  const changeOpenedDescriptionDrawer = () => {
    setOpenedDescriptionDrawer(!openedDescriptionDrawer);
  }

  const changeOpenedHistoricDrawer = () => {
    setOpenedHistoricDrawer(!openedDescriptionDrawer);
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
            <HistoryOutlined key="history" onClick={changeOpenedHistoricDrawer} />,
            <QuestionCircleOutlined key="question" onClick={changeOpenedDescriptionDrawer} />
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
            open={openedDescriptionDrawer}
            onClose={() => {
              setOpenedDescriptionDrawer(false);
            }}
          >
            <CompanyIndexDescription index={index} />
          </Drawer>

          <Drawer
            height={450}
            placement="bottom"
            open={openedHistoricDrawer}
            onClose={() => {
              setOpenedHistoricDrawer(false);
            }}
          >
            <CompanyIndexHistoric index={index} />
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
