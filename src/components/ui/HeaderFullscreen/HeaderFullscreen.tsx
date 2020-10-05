import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import Menu from '../Menu/Menu';
import MenuAuthentication from '../MenuAuthentication/MenuAuthentication';

import './HeaderFullscreen.scss';

const logo = require('../../../assets/images/logo-alt.svg') as string;

const HeaderFullscreen: FunctionComponent = () => (
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

export default HeaderFullscreen;
