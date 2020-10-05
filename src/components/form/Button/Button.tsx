import React, { Component, FunctionComponent } from 'react';

import { Button as ButtonAntd } from 'antd';

import './Button.scss';

export interface ButtonProps {
  text: string,
  size: 'small' | 'big'
  type: 'submit' | 'button' | 'reset',
  design: 'primary' | 'default' | 'link' | 'ghost' | 'dashed' | 'text',
  icon?: Component
  disabled?: boolean,
  onClick?(): void
}

const Button: FunctionComponent<ButtonProps> = ({
  text,
  size,
  type,
  design,
  icon,
  disabled,
  onClick
}) => {
  return (
    <ButtonAntd
      className={`btn btn-${size} btn-${design}`}
      type={design}
      htmlType={type}
      icon={icon}
      loading={false}
      disabled={disabled}
      onClick={() => {
        if (onClick) {
          onClick();
        }
      }}
    >
      {text}
    </ButtonAntd>
  );
};

export default Button;
