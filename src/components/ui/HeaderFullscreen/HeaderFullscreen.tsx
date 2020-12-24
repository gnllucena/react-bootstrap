import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import Menu from '../Menu/Menu';
import MenuAuthentication from '../MenuAuthentication/MenuAuthentication';

import './HeaderFullscreen.scss';

const logo = require('../../../assets/images/logo-alt.svg') as string;

const HeaderFullscreen: FunctionComponent = () => (
  <div className="header-fullscreen">
    <Link className="logo-wrapper" to="/">
      <img src={logo} alt="zro17" />
      <h3>zro17</h3>
    </Link>

    <div className="links-wrapper">
      <Menu align="horizontal" />
    </div>

    <div className="auth-wrapper">
      <MenuAuthentication />
    </div>
  </div>
);

export default HeaderFullscreen;
