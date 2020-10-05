import { Collapse, Drawer } from 'antd';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from '../../form/Button/Button';
import Filter from '../../models/Filter';
import FilterGroup from '../../models/FilterGroup';
import FilterToolbarMobileItem from '../FilterToolbarMobileItem/FilterToolbarMobileItem';

import './FilterToolbarMobile.scss';

export interface FilterToolbarMobileProps {
  groups: Array<FilterGroup>,
  hackDeepUseEffect: string,
  onSearch(groups: Array<FilterGroup>): void
}

const FilterToolbarMobile: FunctionComponent<FilterToolbarMobileProps> = ({
  groups,
  hackDeepUseEffect,
  onSearch
}) => {
  const [labelButton, setLabelButton] = useState<string>('');
  const [labelFilters, setLabelFilters] = useState<string>('');
  const [showFilters, setShowFilters] = useState<boolean>(false);
  const [filters, setFilters] = useState<Array<Filter>>([]);

  useEffect(() => {
    const newChangedFilters = new Array<Filter>();

    groups.forEach((group: FilterGroup) => {
      group.Filters.forEach((filter: Filter) => {
        const changed = filter.changed();
  
        if (changed) {
          newChangedFilters.push(filter);
        }
      });
    });

    setFilters(newChangedFilters);

    handleChanged(newChangedFilters);
  }, [groups]);

  useEffect(() => {
    if (showFilters) {
      setLabelButton('Close filters');
    } else {
      setLabelButton('Filters');
    }
  }, [showFilters]);

  useEffect(() => {
    if (hackDeepUseEffect !== 'initial') {
      setFilters(new Array<Filter>());
    }
  }, [hackDeepUseEffect]);

  const handleChanged = (changedFilter: Array<Filter>) => {
    const { length } = changedFilter;

    switch (length) {
      case 0:
        setLabelFilters('');
        break;
      case 1:
        setLabelFilters(': 1 filter');
        break;
      default:
        setLabelFilters(`: ${length} filters`);
        break;
    }
  }

  const handleFilters = (): void => {
    setShowFilters(!showFilters);
  };

  const beforeSearch = () => {
    handleChanged(filters);

    onSearch(groups);

    setShowFilters(false);
  }
  
  return (
    <div className="filter-toolbar-mobile-wrapper">
      <div className="popup-handler" onClick={handleFilters} onKeyUp={handleFilters} tabIndex={0} role="button" style={{zIndex: 11}}>
        <Button text={labelButton + labelFilters} type="button" design="default" size="small" />
      </div>

      <Drawer
        className="filter-toolbar-mobile-drawer-wrapper"
        height="100vh"
        placement="bottom"
        closable={false}
        maskClosable={false}
        onClose={handleFilters}
        visible={showFilters}
        maskStyle={{ backgroundColor: 'transparent' }}
      >
        <div className="filter-toolbar-mobile-drawer-collapse-wrapper">
          <Collapse
            expandIconPosition="right"
            ghost={true}
            accordion={true}
          >
            {
              groups.map((group: FilterGroup) => (
                <Collapse.Panel key={group.Name} header={group.Name}>
                  <FilterToolbarMobileItem
                    group={group}
                    filters={filters}
                    hackDeepUseEffect={hackDeepUseEffect}
                    onChange={() => { }}
                  />
                </Collapse.Panel>
              ))
            }

            <div className="filter-toolbar-mobile-drawer-collapse-actions-space-wrapper" />

            <div className="filter-toolbar-mobile-drawer-collapse-actions-wrapper">
              <div className="filter-toolbar-mobile-drawer-collapse-actions-buttons-wrapper">
                <Button 
                  text="Apply filter" 
                  type="button" 
                  design="primary" 
                  size="small" 
                  onClick={beforeSearch}
                />
              </div>
            </div>
          </Collapse>
        </div>
      </Drawer>
    </div>
  );
};

export default FilterToolbarMobile;
