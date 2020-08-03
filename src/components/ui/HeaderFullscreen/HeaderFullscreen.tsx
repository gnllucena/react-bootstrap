import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import { Link } from '@reach/router';

import './HeaderFullscreen.scss';
import logo from '../../../assets/images/logo-alt.svg';

export const HeaderFullscreen: FunctionComponent = () => {
  return (
    <div className="header-fullscreen-wrapper">
      <div className="navbar-wrapper">
        <div className="logo-wrapper">
          <Link to="/">
            <img src={logo} alt="semnome017" />
            <h3>semnome017</h3>
          </Link>
        </div>
        <div className="menu-wrapper">
          <div className="links-wrapper">
            <Menu mode="horizontal">
              <Menu.Item key="0">
                <Link to="/" >Search</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/stocks">Stocks</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/sectors">Sectors</Link>
              </Menu.Item>
            </Menu>
          </div>
          <div className="auth-wrapper">
            <Menu>
              <Menu.Item key="0">
                <Link to="/login">Sign in</Link>
              </Menu.Item>
              <Menu.Item key="1">
                <Link to="/register">Sign up</Link>
              </Menu.Item>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  );
};