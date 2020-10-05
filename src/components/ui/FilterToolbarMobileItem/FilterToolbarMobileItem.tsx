import React, { FunctionComponent, useEffect, useState } from 'react';
import Filter from '../../models/Filter';
import FilterGroup from '../../models/FilterGroup';
import FilterToolbarItem from '../FilterToolbarItem/FilterToolbarItem';

import './FilterToolbarMobileItem.scss';

export interface FilterToolbarMobileItemProps {
  group: FilterGroup,
  filters: Array<Filter>,
  hackDeepUseEffect: string,
  onChange(group: FilterGroup): void
}

const FilterToolbarMobileItem: FunctionComponent<FilterToolbarMobileItemProps> = ({
  group,
  filters,
  hackDeepUseEffect,
  onChange
}) => {
  const [newFilters, setNewFilters] = useState<Array<Filter>>(filters);

  useEffect(() => {
    if (hackDeepUseEffect !== 'initial') {
      setNewFilters(new Array<Filter>());
    }
  }, [hackDeepUseEffect]);
  
  return (
    <div className="filter-toolbar-mobile-item-wrapper">
      <FilterToolbarItem
        group={group}
        filters={newFilters}
        onChange={() => onChange(group)}
      />
    </div>
  );
};

export default FilterToolbarMobileItem;
