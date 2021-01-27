import React, { FunctionComponent } from 'react';
import { Col, Menu, Row } from 'antd';
import { Link, navigate } from '@reach/router';
import useIsFullscreen from '../../hooks/UseIsFullscreen';
import { Button } from '../../form/Button/Button';

import './MenuUnauthenticated.scss';

export interface MenuUnauthenticatedProps {
  onNavigate?(): void
}

const MenuUnauthenticated: FunctionComponent<MenuUnauthenticatedProps> = ({
  onNavigate
}) => {
  const isFullscreen = useIsFullscreen();

  return (
    isFullscreen ? (
      <Row>
        <Col span={12} className="sign-in">
          <Button text="Login" type="button" design="link" size="small" onClick={() => {
            navigate('/login');
          }} />
        </Col>
        <Col span={12}>
          <Button text="Register" type="button" design="primary" size="small" onClick={() => {
            navigate('/create-new-account');
          }} />
        </Col>
      </Row>
    ) : (
      <Menu className="menu-unauthenticated-wrapper">
        <Menu.Item key="0">
          <Link to="/login" onClick={onNavigate}>Login</Link>
        </Menu.Item>
        <Menu.Item key="1">
          <Link to="/create-new-account" onClick={onNavigate}>Register</Link>
        </Menu.Item>
      </Menu>
    )
  );
};

export default MenuUnauthenticated;
