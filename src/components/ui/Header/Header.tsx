import React, { FunctionComponent, useEffect } from 'react';
import Sticky from 'react-stickynode';
import { Location } from '@reach/router';
import { HeaderFullscreen } from '../HeaderFullscreen/HeaderFullscreen';
import { HeaderMobile } from '../HeaderMobile/HeaderMobile';

import './Header.scss';

export const Header: FunctionComponent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  
  return (
    <Location>
      {({ location }) => {
        let isLoginRoute = location.pathname.endsWith('login');
        let isRegisterRoute = location.pathname.endsWith('register');
        
        if (!isLoginRoute && !isRegisterRoute) {
          return (
            <div className="header-wrapper">
              <Sticky innerZ={10} activeClass="sticky-header">
                <HeaderFullscreen />
        
                <HeaderMobile />
              </Sticky>
            </div>
          )
        }
      }}
    </Location>
  );
};