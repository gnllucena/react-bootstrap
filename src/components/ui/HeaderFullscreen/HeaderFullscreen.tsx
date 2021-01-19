import React, { FunctionComponent } from 'react';
import { Link } from '@reach/router';
import MenuPages from '../MenuPages/MenuPages';
import MenuAuthenticated from '../MenuAuthenticated/MenuAuthenticated';

import './HeaderFullscreen.scss';
import { useRecoilValue } from 'recoil';
import { UserState } from '../../../store/LoginPageState';
import MenuUnauthenticated from '../MenuUnauthenticated/MenuUnauthenticated';

const HeaderFullscreen: FunctionComponent = () => {
  const user = useRecoilValue(UserState);
  const isAuthenticated = user.Id !== undefined;

  return (
    <div className="header-fullscreen">
      <Link className="logo-wrapper" to="/">
        <h3>zro17</h3>
      </Link>

      <div className="links-wrapper">
        <MenuPages align="horizontal" />
      </div>

      <div className="auth-wrapper">
        {
          isAuthenticated ? (
            <MenuAuthenticated />
          ) : (
            <MenuUnauthenticated />
          )
        }
      </div>
    </div>
  )
};

export default HeaderFullscreen;
