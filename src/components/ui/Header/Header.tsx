import React, { FunctionComponent, useState } from 'react';
import { Menu } from 'antd';
import { Link } from '@reach/router';
import Sticky from 'react-stickynode';

import './Header.scss';
import logo from '../../../assets/images/logo-alt.svg';
import { User } from '../../../domain/models/User';

export const Header: FunctionComponent = () => {
  const [user, setUser] = useState<User | undefined>();

  return (
    <div className="header-wrapper">
      <Sticky top={-1} innerZ={10001} activeClass="isHeaderSticky">
        <div className="navbar-wrapper">
          <div className="nav-wrapper">
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
      </Sticky>
    </div>
  );
};