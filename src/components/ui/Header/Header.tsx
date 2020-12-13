import React, { FunctionComponent } from 'react';
import { Affix } from 'antd';
import { Location } from '@reach/router';
import HeaderFullscreen from '../HeaderFullscreen/HeaderFullscreen';
import HeaderMobile from '../HeaderMobile/HeaderMobile';
import useIsFullscreen from '../../hooks/UseIsFullscreen';

import './Header.scss';

const Header: FunctionComponent = () => {
  const isFullscreen = useIsFullscreen();
  
  return (
    <Location>
      {({ location }): JSX.Element | undefined => (
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
      )}
    </Location>
  );
};

export default Header;
