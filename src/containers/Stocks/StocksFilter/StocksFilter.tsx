import React, { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';
import FilterGroup from '../../../components/models/FilterGroup';
import ToolbarFilter from '../../../components/ui/FilterToolbar/FilterToolbar';
import { StocksPageFilterState } from '../../../store/StocksPageState';

const StocksFilter: FunctionComponent = () => {
  const [stocksPageFilterState, setStocksPageFilterState] = useRecoilState(StocksPageFilterState);

  return (
    <ToolbarFilter
      groups={stocksPageFilterState}
      onSearch={(groups: Array<FilterGroup>) => { 
        let newGroups = [...groups];

        setStocksPageFilterState(newGroups);
      }}
      onReset={(groups: Array<FilterGroup>) => { 
        let newGroups = [...groups];

        setStocksPageFilterState(newGroups);
      }}
    />
  );
};

export default StocksFilter;
