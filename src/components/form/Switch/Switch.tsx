import React, { useState, FunctionComponent } from 'react';
import { Switch as SwitchAntd } from 'formik-antd';
import { useField } from 'formik';

import './Switch.scss';

export interface SwitchProps {
  name: string,
  label: string,
  value: boolean,
  disabled?: boolean,
  onChange?(checked: boolean): void
}

const Switch: FunctionComponent<SwitchProps> = ({
  name,
  label,
  value,
  disabled,
  onChange
}) => {
  const [field, meta] = useField(name);
  const [checked, setChecked] = useState(value);

  const triggered = () => meta.error && meta.touched;

  const changed = (check: boolean): void => {
    value = check;

    setChecked(check);

    if (onChange) {
      onChange(check);
    }
  };

  return (
    <div className="switch-wrapper">
      <div className={triggered() ? 'switch-input-wrapper has-error' : 'switch-input-wrapper'}>
        <SwitchAntd
          name={field.name}
          defaultChecked={checked}
          checked={checked}
          disabled={disabled}
          onChange={changed}
        />

        <span className="label-wrapper">{label}</span>
      </div>

      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div>}
    </div>
  );
};

export default Switch;
