import React, { FunctionComponent } from 'react';
import { useRecoilValue, useResetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import FilterGroup from '../../../components/models/FilterGroup';
import ToolbarFilter from '../../../components/ui/FilterToolbar/FilterToolbar';
import { StocksPageFilterState, StocksPagePaginationState } from '../../../store/StocksPageState';

const StocksFilter: FunctionComponent = () => {
  const resetPaginationState = useResetRecoilState(StocksPagePaginationState);
  const [stocksPageFilterState, setStocksPageFilterState] = useRecoilState(StocksPageFilterState);

  return (
    <ToolbarFilter
      groups={stocksPageFilterState}
      onSearch={(groups: Array<FilterGroup>) => { 
        let newGroups = [...groups];

        resetPaginationState();
        setStocksPageFilterState(newGroups);
      }}
      onReset={(groups: Array<FilterGroup>) => { 
        let newGroups = [...groups];

        resetPaginationState();
        setStocksPageFilterState(newGroups);
      }}
    />
  );
};

export default StocksFilter;
