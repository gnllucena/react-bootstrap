import React, { FunctionComponent } from 'react';

import './Title.scss';

interface TitleProps {
  title: string,
  subtitle: string
}

const Loading: FunctionComponent<TitleProps> = ({
  title,
  subtitle
}) => {
  return (
    <div className="title-wrapper">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
    </div>
  )
};

export default Loading;
