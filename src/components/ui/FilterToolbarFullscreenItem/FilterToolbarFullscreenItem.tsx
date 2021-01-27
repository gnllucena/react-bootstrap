import React, { FunctionComponent, useState, useEffect, useRef } from 'react';
import { Button } from '../../form/Button/Button';
import useOnClickOutside from '../../hooks/UseOnClickOutside';
import FilterGroup from '../../models/FilterGroup';
import Filter from '../../models/Filter';
import FilterToolbarItem from '../FilterToolbarItem/FilterToolbarItem';

import './FilterToolbarFullscreenItem.scss';

export interface FilterToolbarFullscreenItemProps {
  group: FilterGroup,
  hackDeepUseEffect: string,
  onChange(group: FilterGroup): void
}

const FilterToolbarFullscreenItem: FunctionComponent<FilterToolbarFullscreenItemProps> = ({
  group,
  hackDeepUseEffect,
  onChange
}) => {
  const [label, setLabel] = useState<string>('');
  const [showSelected, setShowSelected] = useState<boolean>(false);
  const [showFilter, setShowFilter] = useState<boolean>(false);
  const [filters, setFilters] = useState<Array<Filter>>([]);

  useEffect(() => {
    if (hackDeepUseEffect !== 'initial') {
      setFilters(new Array<Filter>());
    }
  }, [hackDeepUseEffect]);
  
  useEffect(() => {
    const newChangedFilters = new Array<Filter>();

    group.Filters.forEach((filter: Filter) => {
      const changed = filter.changed();

      if (changed) {
        newChangedFilters.push(filter);
      }
    });

    setFilters(newChangedFilters);
  }, [group]);

  useEffect(() => {
    const { length } = filters;

    switch (length) {
      case 0:
        setLabel('');
        setShowSelected(false);
        break;
      case 1:
        setLabel(': 1 filter');
        setShowSelected(true);
        break;
      default:
        setLabel(`: ${length} filters`);
        setShowSelected(true);
        break;
    }
  }, [filters.length]);

  const handleFilter = (): void => {
    setShowFilter(!showFilter);
  };

  const ref = useRef<HTMLDivElement>(null);

  useOnClickOutside(ref, () => handleFilter());

  return (
    <div className={`toolbar-filter-item-wrapper popup-wrapper ${showFilter ? 'active' : ''} ${showSelected ? 'selected' : ''}`}>
      <div className="popup-handler" onClick={handleFilter} onKeyUp={handleFilter} tabIndex={0} role="button" style={{zIndex: 11}}>
        <Button text={group.Name + label} type="button" design="default" size="small" />
      </div>

      {
        showFilter && (
          <div className="popup-container" ref={ref}>
            <FilterToolbarItem
              group={group}
              filters={filters}
              onChange={() => onChange(group)}
            />
          </div>
        )
      }
    </div>
  );
};

export default FilterToolbarFullscreenItem;
