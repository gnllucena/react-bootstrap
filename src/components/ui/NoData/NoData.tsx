import React, { FunctionComponent } from 'react';
import { Empty } from 'antd';

import './NoData.scss';

export interface NoDataProps {
  text: string
}

const NoData: FunctionComponent<NoDataProps> = ({ 
  text
}) => (
  <Empty 
    className="no-data"
    description={text}
  />
);

export default NoData;
