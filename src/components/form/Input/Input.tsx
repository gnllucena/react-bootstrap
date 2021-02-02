import React, { CSSProperties, FunctionComponent } from 'react';
import { Input as InputAntd } from 'formik-antd';
import { useField } from 'formik';

import './Input.scss';

export interface InputProps {
  name: string,
  label: string,
  placeholder?: string,
  value?: string | number,
  focus?: boolean,
  disabled?: boolean,
  autoComplete?: string,
  style?: CSSProperties,
  onChange?(value: string): void,
  onBlur?(value: string): void
}

export const Input: FunctionComponent<InputProps> = ({
  name,
  label,
  placeholder,
  value,
  focus,
  disabled,
  autoComplete,
  style,
  onChange,
  onBlur
}) => {
  const [field, meta, helpers] = useField(name);

  const triggered = () => meta.error && meta.touched;

  const changed = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event.target.defaultValue);
    }
  }

  const blurred = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(event.target.defaultValue);
    }
  }

  return (
    <div className={`input-wrapper ${triggered() ? 'has-error' : ''}`}>
      <div className="label-wrapper">{label}</div>

      <InputAntd
        size="large"
        autoFocus={focus ?? false}
        name={name}
        placeholder={placeholder}
        defaultValue={value}
        autoComplete={autoComplete}
        disabled={disabled}
        onChange={changed}
        onBlur={blurred}
        style={style}
      />

      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};