import React, { FunctionComponent } from 'react';
import { useResetRecoilState } from 'recoil';
import { useRecoilState } from 'recoil';
import FilterGroup from '../../../../components/models/FilterGroup';
import ToolbarFilter from '../../../../components/ui/FilterToolbar/FilterToolbar';
import { CompaniesFilterState, CompaniesPaginationState } from '../../../../store/CompanieState';

export const CompaniesFilter: FunctionComponent = () => {
  const resetPaginationState = useResetRecoilState(CompaniesPaginationState);
  const [companiesFilterState, setCompaniesSearchPageState] = useRecoilState(CompaniesFilterState);

  const action = (groups: Array<FilterGroup>) => {
    let newGroups = [...groups];

    resetPaginationState();
    setCompaniesSearchPageState(newGroups);

    window.scrollTo(0, 0);
  }

  return (
    <ToolbarFilter
      groups={companiesFilterState}
      onSearch={action}
      onReset={action}
    />
  );
};