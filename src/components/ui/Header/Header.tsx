import React, { FunctionComponent } from 'react';
import { Location } from '@reach/router';
import HeaderFullscreen from '../HeaderFullscreen/HeaderFullscreen';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import { Affix } from 'antd';
import useIsFullscreen from '../../hooks/UseIsFullscreen';

import './Header.scss';

const Header: FunctionComponent = () => {
  const isFullscreen = useIsFullscreen();
  
  return (
    <Location>
      {({ location }): JSX.Element | undefined => {
        const isLoginRoute = location.pathname.endsWith('login');
        const isCreateNewAccountRoute = location.pathname.endsWith('create-new-account');
        const isForgotPasswordRoute = location.pathname.endsWith('forgot-password');
        const isResetPasswordRoute = location.pathname.endsWith('reset-password');

        if (!isLoginRoute && !isCreateNewAccountRoute && !isForgotPasswordRoute && !isResetPasswordRoute) {
          return (
            <div className="header-wrapper" style={{zIndex: 11}}>
              <Affix offsetTop={1}>
                {
                  isFullscreen ? (
                    <HeaderFullscreen />
                  ) : (
                    <HeaderMobile />
                  )
                }
              </Affix>
            </div>
          );
        }

        return undefined;
      }}
    </Location>
  );
};

export default Header;
