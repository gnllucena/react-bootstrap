import React, { CSSProperties, FunctionComponent } from 'react';
import { Checkbox as CheckboxAntd } from 'formik-antd';
import { useField } from 'formik';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import './Checkbox.scss';

export interface CheckboxProps {
  name: string,
  label: string,
  value: boolean
  disabled?: boolean,
  style?: CSSProperties,
  onChange?(value: boolean): void
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({
  name,
  label,
  value,
  disabled,
  style,
  onChange
}) => {
  const [field, meta, helpers] = useField(name);

  const triggered = () => meta.error && meta.touched;

  const changed = (event: CheckboxChangeEvent) => {
    if (onChange) {
      onChange(event.target.checked);
    }
  }

  return (
    <div className={`checkbox-wrapper ${triggered() ? 'has-error' : ''}`}>
      <CheckboxAntd
        name={field.name}
        onChange={changed}
        defaultChecked={value}
        checked={value}
        disabled={disabled}
        style={style}
      >
        {label}
      </CheckboxAntd>

      { triggered() && <div className="checkbox-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};
