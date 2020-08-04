import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import { Menu } from '../Menu/Menu';
import { MenuAuthentication } from '../MenuAuthentication/MenuAuthentication';

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
            <Menu align="horizontal" />
          </div>
          <div className="auth-wrapper">
            <MenuAuthentication />
          </div>
        </div>
      </div>
    </div>
  );
};