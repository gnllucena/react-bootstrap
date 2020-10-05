import React, { FunctionComponent } from 'react';
import { Checkbox as CheckboxAntd } from 'formik-antd';
import { useField } from 'formik';
import { CheckboxChangeEvent } from 'antd/lib/checkbox';

import './Checkbox.scss';

export interface CheckboxProps {
  name: string,
  label: string,
  value: boolean
  disabled?: boolean
  onChange?(value: boolean): void
}

const Checkbox: FunctionComponent<CheckboxProps> = ({
  name,
  label,
  value,
  disabled,
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
      >
        {label}
      </CheckboxAntd>

      { triggered() && <div className="checkbox-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};

export default Checkbox;
