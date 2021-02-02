import React, { FunctionComponent } from 'react';
import { Checkbox } from '../../form/Checkbox/Checkbox';
import FilterCheckbox from '../../models/FilterCheckbox';
export interface FilterToolbarItemCheckboxProps {
  filter: FilterCheckbox
  onChange(filter: FilterCheckbox): void
}

const FilterToolbarItemCheckbox: FunctionComponent<FilterToolbarItemCheckboxProps> = ({
  filter,
  onChange
}) => {
  const changed = (value: boolean) => {
    filter.Value = value;

    onChange(filter);
  }

  return (
    <Checkbox
      key={filter.Name}
      name={filter.Name}
      label={filter.Label}
      value={filter.Value}
      disabled={filter.Disabled}
      onChange={changed}
    />
  );
};

export default FilterToolbarItemCheckbox;
