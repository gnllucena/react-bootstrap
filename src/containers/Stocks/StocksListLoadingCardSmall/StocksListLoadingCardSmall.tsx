import { Avatar, Card, Col, List, Row, Skeleton } from 'antd';
import React, { FunctionComponent } from 'react';

const StocksListLoadingCardSmall: FunctionComponent = () => {
  return (
    <Card hoverable className="stocks-card-big">
      <Skeleton loading={true} active avatar>
        <Row gutter={24}>
          <Col span={4}>
            <List.Item.Meta
              avatar={<Avatar src={""} />}
              title={<a href={""}>{"item.title"}</a>}
              description={"item.description"}
            />
            asdfasdf
          </Col>
        </Row>
      </Skeleton>
    </Card>
  );
};

export default StocksListLoadingCardSmall;
