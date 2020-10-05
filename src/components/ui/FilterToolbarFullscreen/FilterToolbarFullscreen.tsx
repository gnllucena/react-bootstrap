import React, { FunctionComponent } from 'react';
import FilterGroup from '../../models/FilterGroup';
import FilterToolbarFullscreenItem from '../FilterToolbarFullscreenItem/FilterToolbarFullscreenItem';

export interface FilterToolbarFullscreenProps {
  groups: Array<FilterGroup>,
  hackDeepUseEffect: string,
  onSearch(groups: Array<FilterGroup>): void
}

const FilterToolbarFullscreen: FunctionComponent<FilterToolbarFullscreenProps> = ({
  groups,
  hackDeepUseEffect,
  onSearch
}) => {
  return (
    <>
      {
        groups.map((group: FilterGroup) => (
          <FilterToolbarFullscreenItem
            key={group.Name}
            hackDeepUseEffect={hackDeepUseEffect}
            group={group}
            onChange={() => onSearch(groups)}
          />
        ))
      }
    </>
  );
};

export default FilterToolbarFullscreen;
