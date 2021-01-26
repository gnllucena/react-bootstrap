import React, { FunctionComponent, useEffect, useRef } from 'react';
import { Content } from '../../../../components/ui/Content/Content';
import { Index } from '../../../../domain/Index';
import { Line } from '@ant-design/charts';

import './CompanyIndexHistoric.scss';
import { LineConfig } from '@ant-design/charts/es/line';

interface CompanyIndexHistoricProps {
  index: Index,
}

const CompanyIndexHistoric: FunctionComponent<CompanyIndexHistoricProps> = ({
  index
}) => {
  const config: LineConfig = {
    data: [
      { year: '1991', value: 3 },
      { year: '1992', value: 4 },
      { year: '1993', value: 3.5 },
      { year: '1994', value: 5 },
      { year: '1995', value: 4.9 },
      { year: '1996', value: 6 },
      { year: '1997', value: 7 },
      { year: '1998', value: 9 },
      { year: '1999', value: 153 },
    ],
    height: 350,
    autoFit: true,
    xField: 'year',
    yField: 'value',
    point: {
      size: 5,
      shape: 'diamond',
    },
    label: {
      style: {
        fill: '#D9D7D4',
      },
    },
  };

  const ref = useRef();

  return (
    <Content>
      <div className="company-index-description-wrapper">
        <h2>Historic of {index} of the last 10 years</h2>

        <Line {...config} chartRef={ref} />
      </div>
    </Content>
  );
};

export default CompanyIndexHistoric;
