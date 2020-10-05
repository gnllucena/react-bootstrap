import React, { FunctionComponent } from 'react';
import { useRecoilState } from 'recoil';
import FilterGroup from '../../../../components/models/FilterGroup';
import ToolbarFilter from '../../../../components/ui/FilterToolbar/FilterToolbar';
import FilterStockState from '../../../../store/atoms/filters/FilterStocksState';

const StocksFilter: FunctionComponent = () => {
  const [filterStockState, setFilterStockState] = useRecoilState(FilterStockState);

  return (
    <ToolbarFilter
      groups={filterStockState}
      onSearch={(groups: Array<FilterGroup>) => { 
        let newGroups = [...groups];

        setFilterStockState(newGroups);
      }}
      onReset={(groups: Array<FilterGroup>) => { 
        let newGroups = [...groups];

        setFilterStockState(newGroups);
      }}
    />
  );
};

export default StocksFilter;
