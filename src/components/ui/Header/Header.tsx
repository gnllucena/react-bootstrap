import React, { FunctionComponent } from 'react';
import Sticky from 'react-stickynode';

import './Header.scss';
import { HeaderFullscreen } from '../HeaderFullscreen/HeaderFullscreen';
import { HeaderMobile } from '../HeaderMobile/HeaderMobile';

export const Header: FunctionComponent = () => {
  return (
    <div className="header-wrapper">
      <Sticky top={-1} innerZ={10001} activeClass="sticky-header">
        <HeaderFullscreen />

        <HeaderMobile />
      </Sticky>
    </div>
  );
};