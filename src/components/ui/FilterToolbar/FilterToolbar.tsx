import { Affix } from 'antd';
import React, { FunctionComponent, useEffect, useState } from 'react';
import Button from '../../form/Button/Button';
import useIsFullscreen from '../../hooks/UseIsFullscreen';
import Filter from '../../models/Filter';
import FilterGroup from '../../models/FilterGroup';
import FilterToolbarFullscreen from '../FilterToolbarFullscreen/FilterToolbarFullscreen';
import FilterToolbarMobile from '../FilterToolbarMobile/FilterToolbarMobile';

import './FilterToolbar.scss';

export interface FilterToolbarProps {
  groups: Array<FilterGroup>,
  onSearch(groups: Array<FilterGroup>): void,
  onReset(groups: Array<FilterGroup>): void
}

const FilterToolbar: FunctionComponent<FilterToolbarProps> = ({
  groups,
  onSearch,
  onReset
}) => {
  const [newGroups, setNewGroups] = useState<Array<FilterGroup>>([]);
  const [hackDeepUseEffect, setHackDeepUseEffect] = useState<string>('initial');
  const [hackFirstScreenLoad, setHackFirstScreenLoad] = useState<string>('initial');

  const isFullscreen = useIsFullscreen();

  useEffect(() => {
    const url = window.location.href.split('?');

    if (url.length > 1) {
      const params = url[1].split('&');

      for (let param of params) {
        const pair = param.split('=');
  
        const name = pair[0].toLowerCase();
        const value = pair[1].toLowerCase();
  
        let found = false;

        for (let group of groups) {
          for (let filter of group.Filters) {
            found = filter.match(name, value);

            if (found) {
              break;
            }
          }

          if (found) {
            break;
          }
        }
      }
    }

    if (hackFirstScreenLoad === 'initial') {
      onSearch(groups);

      setHackFirstScreenLoad('notinitial');
    } else {
      updateQueryString(groups);

      setNewGroups(groups);
    }
  }, [groups]);

  const updateQueryString = (groups: Array<FilterGroup>) => {
    let query = '?';

    groups.forEach((group: FilterGroup) => {
      group.Filters.forEach((filter: Filter) => {
        const changed = filter.changed();

        if (changed) {
          query = query + filter.query();
        }
      });
    });

    window.history.replaceState({}, '', `${window.location.pathname}${query.substring(0, query.length - 1)}`);
  }
  
  const beforeSearch = () => {    
    updateQueryString(newGroups);

    onSearch(newGroups);
  }

  const beforeReset = () => {
    window.history.replaceState({}, '', `${window.location.pathname}`);

    newGroups.map((group: FilterGroup) => {
      group.Filters.forEach((filter: Filter) => {
        filter.reset();
      });
    });

    let newNewGroups = [...newGroups];

    let newHackDeepUseEffect = hackDeepUseEffect + 'a';
    setHackDeepUseEffect(newHackDeepUseEffect);

    setNewGroups(newNewGroups);

    onReset(newNewGroups);
  }
  
  return (
    <Affix offsetTop={84}>
      <div className="toolbar-filter-wrapper">
          <div className="toolbar-wrapper toolbar">
            <div className="toolbar-container-wrapper">
              <div className="left-side">
                <div className="filter-items-wrapper">
                  {
                    isFullscreen ? (
                      <FilterToolbarFullscreen
                        groups={newGroups}
                        hackDeepUseEffect={hackDeepUseEffect}
                        onSearch={beforeSearch}
                      />
                    ) : (
                      <FilterToolbarMobile
                        groups={newGroups}
                        hackDeepUseEffect={hackDeepUseEffect}
                        onSearch={beforeSearch}
                      />
                    )
                  }
                </div>
              </div>
              <div className="right-side">
                <Button
                  text="Reset"
                  type="button"
                  design="default"
                  size="small"
                  onClick={beforeReset}
                />
              </div>
            </div>
          </div>
      </div>
    </Affix>
  );
};

export default FilterToolbar;
