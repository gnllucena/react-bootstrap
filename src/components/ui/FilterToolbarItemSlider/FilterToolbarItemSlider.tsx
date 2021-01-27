import React, { FunctionComponent, useState, useEffect } from 'react';
import { Slider } from '../../form/Slider/Slider';
import useDebounce from '../../hooks/UseDebounce';
import FilterSlider from '../../models/FilterSlider';

export interface FilterToolbarItemSliderProps {
  filter: FilterSlider
  onChange(filter: FilterSlider): void
}

const FilterToolbarItemSlider: FunctionComponent<FilterToolbarItemSliderProps> = ({
  filter,
  onChange
}) => {
  const initial = Number.MIN_VALUE;
  const [value, setValue] = useState<number | [number, number]>(Number.MIN_VALUE);
  const debounce = useDebounce<number | [number, number]>(value, 500);

  useEffect(() => {
    if (debounce === initial) {
      return;
    }

    filter.Value = debounce;

    onChange(filter);
  }, [debounce]);

  return (
    <Slider
      key={filter.Name}
      name={filter.Name}
      label={filter.Label}
      maxValue={filter.MaxValue}
      minValue={filter.MinValue}
      range={filter.Range}
      value={filter.Value}
      disabled={filter.Disabled}
      onChange={setValue}
    />
  );
};

export default FilterToolbarItemSlider;
