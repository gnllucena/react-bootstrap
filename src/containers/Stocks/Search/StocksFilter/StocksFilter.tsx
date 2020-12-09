import React, { FunctionComponent } from 'react';
import { useResetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import FilterGroup from '../../../../components/models/FilterGroup';
import ToolbarFilter from '../../../../components/ui/FilterToolbar/FilterToolbar';
import { StocksPageFilterState, StocksPagePaginationState } from '../../../../store/StocksPageState';

const StocksFilter: FunctionComponent = () => {
  const resetPaginationState = useResetRecoilState(StocksPagePaginationState);
  const [stocksPageFilterState, setStocksPageFilterState] = useRecoilState(StocksPageFilterState);

  const action = (groups: Array<FilterGroup>) => {
    let newGroups = [...groups];

    resetPaginationState();
    setStocksPageFilterState(newGroups);

    window.scrollTo(0, 0);
  }

  return (
    <ToolbarFilter
      groups={stocksPageFilterState}
      onSearch={action}
      onReset={action}
    />
  );
};

export default StocksFilter;
