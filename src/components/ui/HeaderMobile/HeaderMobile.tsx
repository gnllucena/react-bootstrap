import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';

import './HeaderMobile.scss';
import logo from '../../../assets/images/logo-alt.svg';

export const HeaderMobile: FunctionComponent = () => {
  return (
    <div className="header-mobile-wrapper">
      <div className="logo-wrapper">
        <Link to="/">
          <img src={logo} alt="semnome017" />
          <h3>semnome017</h3>
        </Link>
      </div>

      {/* <Button
          className={`hamburg-btn ${state ? 'active' : ''}`}
          onClick={sidebarHandler}
        >
        <span />
        <span />
        <span />
      </Button> */}
    </div>
  );
};