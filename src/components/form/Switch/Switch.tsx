import React, { useState } from 'react';
import { Switch as SwitchAntd } from 'formik-antd';
import { useField } from "formik";
import { FunctionComponent } from 'react';

import './Switch.scss';

export interface SwitchProps {
  name: string,
  label: string,
  value: boolean,
  disabled?: boolean
}

export const Switch: FunctionComponent<SwitchProps> = ({ 
  name, 
  label, 
  value,
  disabled
}) => {
  const [field, meta, helpers] = useField(name);
  const [checked, setChecked] = useState(value);

  function triggered() {
    return meta.error;
  }

  function onChange(check: boolean) {
    value = check;
    
    setChecked(check);
  }

  return (
    <div className="switch-wrapper">
      <div className={triggered() ? "switch-input-wrapper has-error" : "switch-input-wrapper" }>
        <SwitchAntd
          name={name} 
          defaultChecked={checked}
          checked={checked}
          disabled={disabled}
          onChange={onChange}
        />

        <span className="label-wrapper">{label}</span>
      </div>

      { triggered() && <div className="input-error-wrapper"><span>{meta.error}</span></div> }
    </div>
  );
};